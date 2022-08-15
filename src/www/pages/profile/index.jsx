import React, { useEffect, useState } from 'react';
import './index.css';
import profile_banner from '../../assets/images/profile_banner.png';
import danang from '../../assets/images/danang.jpeg';
import NhutVy from '../../assets/images/founder/NhutVy.jpeg';
import Bids from '../../components/bids/Bids';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useCanister, useConnect } from '@connect2ic/react';
import { customAxios } from '../../utils/custom-axios';
import { Principal } from '@dfinity/principal';

const Profile = () => {
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const [profile, setProfile] = useState();
	const [listDiploma, setListDiploma] = useState([]);
	const [listCertificate, setListCertificate] = useState([]);
	const [listOther, setListOther] = useState([]);

	const { principal } = useConnect();

	useEffect(async () => {
		if (superheroes) {
			getMyInfor();
			getTokensUser();
		}
	}, [superheroes]);

	const getMyInfor = async () => {
		const res = await superheroes.findUserById(Principal.fromText(principal));
		setProfile(res[0]);
	};

	const getTokensUser = async () => {
		const res = await superheroes.getUserTokens(Principal.fromText(principal));
		console.log('====> getListUserToken motoko 	', res);
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

		setListDiploma(newlist.filter((el) => el.category === '1'));
		setListCertificate(newlist.filter((el) => el.category === '2'));
		setListOther(newlist.filter((el) => el.category === '3'));
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
								? principal?.slice(0, 15) + '...' + principal?.slice(49, 63)
								: ''}
						</div>
						<div style={btnCopy}>Coppy</div>
					</div>
				</div>
			</div>
			<div className='profile-bottom'>
				<div className='profile-bottom-input'>
					<input
						type='text'
						placeholder='Search by address wallet, citizen identification'
					/>
					<select>
						<option>Recently Listed</option>
						<option>Popular</option>
						<option>Low to High</option>
						<option>High to Low</option>
					</select>
				</div>
				{listDiploma.length > 0 ? (
					<Bids title='Diploma' data={listDiploma} />
				) : null}
				{listCertificate.length > 0 ? (
					<Bids title='Certificate' data={listCertificate} />
				) : null}
				{listOther.length > 0 ? <Bids title='Other' data={listOther} /> : null}
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
	color: 'white',
	borderStyle: 'solid',
};

export default Profile;
