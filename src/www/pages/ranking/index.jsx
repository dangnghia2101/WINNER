import React, { useState, useEffect } from 'react';
import './index.css';
import profile_banner from '../../assets/images/profile_banner.png';
import NhutVy from '../../assets/images/founder/NhutVy.jpeg';
import Bids from '../../components/bids/Bids';
import { themes } from '../../assets/themes';
import { Link } from 'react-router-dom';
import { useCanister, useConnect } from '@connect2ic/react';
import { customAxios } from '../../utils/custom-axios';
import { Principal } from '@dfinity/principal';

const ItemRank = ({ item, index }) => {
	console.log('===> item ', item);
	const address = Principal.fromUint8Array(item.walletAddress._arr).toString();
	return (
		<Link to={`/profile`}>
			<div style={containerBottomRank}>
				<div className='boxTopBottom' style={boxTopBottom}>
					<div style={row}>
						<div
							style={{
								fontWeight: 'bold',
								fontSize: 12,
								color: 'white',
								marginRight: 30,
							}}>
							{index + 4}
						</div>
						<img src={item.image} />

						<div
							style={{
								fontWeight: 'bold',
								fontSize: 12,
								color: 'white',
								marginLeft: 10,
							}}>
							{item.username}
						</div>
					</div>
					<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
						{getSchool(Number(item.school))}
					</div>
					<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
						{item.sumDegree}
					</div>
					<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
						{address.slice(0, 20) +
							'...' +
							address.slice(address.length - 20, address.length - 1)}
					</div>
				</div>
			</div>
		</Link>
	);
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

const Ranking = () => {
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const [usersTop3, setUsersTop3] = useState([]);
	const [usersRemain, setUsersRemain] = useState([]);

	const {
		isConnected,
		disconnect,
		activeProvider,
		isIdle,
		connect,
		isConnecting,
		principal,
	} = useConnect();

	useEffect(async () => {
		if (superheroes) {
			getUsers();
		}
	}, [superheroes]);

	const EvaluateRank = (users) => {
		return Promise.all(
			users.map(async (item) => {
				const res = await superheroes.getUserTokens(item.walletAddress);
				return { ...item, sumDegree: res.length };
			})
		);
	};

	const getUsers = async () => {
		try {
			const res = await superheroes.getAllUser();
			const newRank = await EvaluateRank(res);
			newRank.sort((a, b) => b.sumDegree - a.sumDegree);
			if (newRank.length > 3) {
				setUsersRemain(newRank.splice(3, newRank.length - 3));
			}
			setUsersTop3(newRank.splice(0, 3));
			// console.log('user remain ', usersRemain);
		} catch (error) {
			console.log('[getUsers] error', error);
		}
	};

	var rows = [],
		i = 0,
		len = 10;
	while (++i <= len) rows.push(i);

	return (
		<div className='profile section__padding'>
			<div style={textTitle}>Top Rank Students</div>
			<div style={textDay}>15/08/2022</div>

			<div style={rowTop}>
				{usersTop3.map((item, index) => (
					<Link to={`/profile`}>
						<div className='boxTop' style={boxTop}>
							<img src={item?.image} />
							<div>{item?.username}</div>
							<p style={{ fontSize: 10, color: 'gray' }}>
								{getSchool(Number(item?.school))}
							</p>
							<p style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>
								<span style={{ fontWeight: 'normal' }}> Sum degree</span>{' '}
								{item?.sumDegree}
							</p>
							<p style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>
								<span style={{ fontWeight: 'normal' }}> Top ranking</span>{' '}
								{index + 1}
							</p>
						</div>
					</Link>
				))}
			</div>

			<div style={containerBottomRank}>
				<div
					className='boxTopBottom'
					style={{
						width: '100%',
						// justifyContent: 'space-between',
						display: 'flex',
						flexDirection: 'row',
					}}>
					<input
						type='text'
						placeholder='Search by address wallet, citizen identification'
					/>
					<div
						style={{
							fontWeight: 'bold',
							fontSize: 12,
							color: 'white',
							paddingLeft: 70,
						}}>
						{' '}
						School
					</div>
					<div
						style={{
							fontWeight: 'bold',
							fontSize: 12,
							color: 'white',
							paddingLeft: 270,
						}}>
						{' '}
						Sum degree
					</div>
					<div
						style={{
							fontWeight: 'bold',
							fontSize: 12,
							color: 'white',
							paddingLeft: 250,
						}}>
						{' '}
						Address wallet
					</div>
				</div>
			</div>

			{usersRemain.map((item, index) => {
				return <ItemRank item={item} index={index} />;
			})}
		</div>
	);
};

const textTitle = {
	textAlign: 'center',
	fontSize: 25,
	fontWeight: 'bold',
	color: 'white',
	paddingTop: 40,
};

const textDay = {
	textAlign: 'center',
	fontSize: 15,
	color: 'gray',
	marginBottom: 40,
};

const rowTop = {
	display: 'flex',
	flexDirection: 'row',
	margin: 'auto',
	width: '50%',
	justifyContent: 'space-between',
	marginBottom: 20,
};

const boxTop = {
	backgroundColor: themes.colors.background_box,
	borderRadius: 10,
	padding: 20,
	alignItems: 'center',
	justifyContent: 'center',
	marginHorizontal: 10,
	width: 200,
};

const boxTopBottom = {
	backgroundColor: themes.colors.background_box,
	borderRadius: 10,
	padding: 20,
	marginHorizontal: 10,
	width: '100%',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
};

const containerBottomRank = {
	width: '90%',
	margin: 'auto',
	marginTop: 20,
};

const row = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
};
export default Ranking;
