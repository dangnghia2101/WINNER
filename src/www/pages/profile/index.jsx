import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import danang from '../../assets/images/danang.jpeg';
import Bids from '../../components/bids/Bids';
import { useCanister, useConnect } from '@connect2ic/react';
import { customAxios } from '../../utils/custom-axios';
import { Principal } from '@dfinity/principal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';

const Profile = () => {
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const [profile, setProfile] = useState();
	const listAll = useRef([]);
	const [listDiploma, setListDiploma] = useState([]);
	const [listCertificate, setListCertificate] = useState([]);
	const [listOther, setListOther] = useState([]);
	const [degreesSearch, setDegreesSearch] = useState([]);
	const [search, setSearch] = useState('');

	const address = location.pathname.split('/')[2];
	if (address.length === 0) address = principal;

	const { principal } = useConnect();

	useEffect(async () => {
		if (superheroes) {
			getMyInfor();
			getTokensUser();
		}
	}, [superheroes]);

	const copyClipboard = () => {};

	const findSearch = (e) => {
		const keyword = e.target.value;
		const test = listAll.current;
		if (keyword.length > 0) {
			const listSearch = test.filter((item) => item.name.includes(keyword));

			setDegreesSearch(listSearch);
		} else {
			setDegreesSearch(listAll.current);
		}
		setSearch(keyword);
	};

	const getMyInfor = async () => {
		const res = await superheroes.findUserById(Principal.fromText(address));
		setProfile(res[0]);
	};

	const getTokensUser = async () => {
		const res = await superheroes.getUserTokens(Principal.fromText(address));
		// console.log(await superheroes.getPrint());
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		const newlist = res.map((el, index) => {
			return { ...el, ...resu[index] };
		});

		listAll.current = newlist;
		setListDiploma(newlist.filter((el) => el.category === '1'));
		setListCertificate(newlist.filter((el) => el.category === '2'));
		setListOther(newlist.filter((el) => el.category === '3'));
	};

	const renderList = (list, title) => {
		return list.length > 0 ? <Bids title={title} data={list} /> : null;
	};

	return (
		<div className='profile section__padding'>
			<div className='profile-top'>
				<div className='profile-banner'>
					<img src={danang} alt='banner' />
				</div>

				<div className='profile-pic'>
					<img src={profile?.image} alt='profile' />
					<h3>{profile?.username}</h3>
					<div style={{ color: 'white' }}>Address wallet</div>
					<div className='row1'>
						<div style={{ color: 'white' }} className='box-account-id'>
							{principal
								? address?.slice(0, 15) + '...' + address?.slice(49, 63)
								: ''}
						</div>
						<CopyToClipboard
							text={address}
							onCopy={() => toast('Copied to clipboard!')}>
							<button style={btnCopy}>Coppy</button>
						</CopyToClipboard>
					</div>
				</div>
			</div>
			<div className='profile-bottom'>
				<div className='profile-bottom-input'>
					<input
						value={search}
						onChange={findSearch}
						type='text'
						placeholder='Search by name degree'
					/>
					<select>
						<option>Recently Listed</option>
						<option>Popular</option>
						<option>Low to High</option>
						<option>High to Low</option>
					</select>
				</div>

				{search.length > 0
					? renderList(degreesSearch, 'Search')
					: [
							renderList(listDiploma, 'Diploma'),
							renderList(listCertificate, 'Certificate'),
							renderList(listOther, 'Other'),
					  ]}
			</div>
		</div>
	);
};

const btnCopy = {
	borderRadius: 10,
	borderWith: 1,
	borderColor: 'white',
	paddingLeft: 10,
	paddingRight: 10,
	paddingTop: 5,
	paddingBottom: 5,
	color: 'black',
	borderStyle: 'solid',
};

export default Profile;
