import React, { useEffect, useState, useRef } from 'react';
import NftItem from '../../components/nft-item';
import { Container } from './list-nft.elements';
import { customAxios } from '../../utils/custom-axios';
import { useCanister, useConnect } from '@connect2ic/react';
import './index.css';
import Bids from '../../components/bids/Bids';
import { Principal } from '@dfinity/principal';
import NotPermistion from '../../components/not-permistion';
import { toast } from 'react-toastify';

const formatDate = (_timestamp) => {
	var date = new Date(_timestamp);

	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();

	month = (month < 10 ? '0' : '') + month;
	day = (day < 10 ? '0' : '') + day;
	hour = (hour < 10 ? '0' : '') + hour;
	min = (min < 10 ? '0' : '') + min;

	var str =
		date.getFullYear() + '/' + month + '/' + day + ' ' + hour + ':' + min;

	return str;
};

const getSchool = (_value) => {
	switch (_value) {
		case 1:
			return 'FPT POLYTECHNIC';
		case 2:
			return 'FPT UNIVERSITY';
		case 3:
			return 'UNI OF GREENWICH';
		default:
			return 'FPT POLYTECHNIC';
	}
};

const getLogoSchool = (_value) => {
	switch (_value) {
		case 1:
			return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png';
		case 2:
			return 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Dai-hoc-FPT.png';
		case 3:
			return 'https://d201g1c8t1ay3d.cloudfront.net/wp-content/uploads/2019/10/University-of-Greenwich-logo.jpg';
		default:
			return 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png';
	}
};

function ManageDegree() {
	const {
		isConnected,
		disconnect,
		activeProvider,
		isIdle,
		connect,
		isConnecting,
		principal,
	} = useConnect();
	const [listDiploma, setListDiploma] = useState([]);
	const [listCertificate, setListCertificate] = useState([]);
	const [listOther, setListOther] = useState([]);
	const [search, setSearch] = useState('');
	const [searchNfts, setNftsSearch] = useState('');
	const listAll = useRef([]);
	const profile = useRef({ role: 1 });

	const [superheroes, { loading, error }] = useCanister('superheroes');
	useEffect(async () => {
		if (superheroes && isConnected) {
			await getMyInfor();
			await getListAll();
		}
	}, [superheroes]);

	const getMyInfor = async () => {
		try {
			const res = await superheroes.findUserById(Principal.fromText(principal));
			profile.current = res[0];
		} catch (e) {
			toast('Please connect with your wallet');
		}
	};

	const findSearch = (e) => {
		const keyword = e.target.value;
		const test = listAll.current;
		if (keyword.length > 0) {
			let listSearch = test.filter((item) => item.name.includes(keyword));

			if (listSearch.length === 0) {
				listSearch = test.filter(
					(item) =>
						Principal.fromUint8Array(item.owner._arr).toString() ==
						keyword.toString()
				);
			}

			setNftsSearch(listSearch);
		} else {
			setNftsSearch(listAll.current);
		}
		setSearch(keyword);
	};

	const getListAll = async () => {
		const res = await superheroes.getAllTokens();
		console.log(res);
		const promise4all = Promise.all(
			res.map(function (el) {
				try {
					return customAxios(el.metadata[0]?.tokenUri);
				} catch (e) {
					return null;
				}
			})
		);
		const resu = await promise4all;
		const newlist = res.map((el, index) => {
			return { ...el, ...resu[index] };
		});

		const newList2 = newlist.filter(
			(item) => Number(item.school) === Number(profile.current?.school)
		);

		listAll.current = newList2;
		setListDiploma(newList2.filter((el) => el.category === '1'));
		setListCertificate(newList2.filter((el) => el.category === '2'));
		setListOther(newList2.filter((el) => el.category === '3'));
	};

	const renderList = (list, title) => {
		return list.length > 0 ? <Bids title={title} data={list} /> : null;
	};

	return Number(profile.current?.role) === 2 ? (
		<Container className='container'>
			<div style={textTitle}>
				<img
					src={getLogoSchool(Number(profile.current?.school))}
					width={100}
					height={'auto'}
				/>
			</div>
			<div style={textTitle}>
				See All NFT Off {getSchool(Number(profile.current?.school))}
			</div>
			<div style={textDay}>{formatDate(new Date())}</div>

			<input
				value={search}
				onChange={findSearch}
				type='text'
				placeholder='Search by address wallet and name degress'
			/>
			{search.length > 0
				? renderList(searchNfts, 'Other')
				: [
						renderList(listDiploma, 'Diploma'),
						renderList(listCertificate, 'Certificate'),
						renderList(listOther, 'Other'),
				  ]}
		</Container>
	) : (
		<NotPermistion />
	);
}

const textTitle = {
	textAlign: 'center',
	fontSize: 25,
	fontWeight: 'bold',
	color: 'white',
	paddingTop: 60,
};

const textDay = {
	textAlign: 'center',
	fontSize: 15,
	color: 'gray',
	marginBottom: 60,
};

export default ManageDegree;
