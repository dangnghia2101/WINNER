import React, { useState, useEffect } from 'react';
import './index.css';
import profile_banner from '../../assets/images/profile_banner.png';
import NhutVy from '../../assets/images/founder/NhutVy.jpeg';
import Bids from '../../components/bids/Bids';
import { themes } from '../../assets/themes';
import { useCanister, useConnect } from '@connect2ic/react';

import ItemRank from './ItemUser';

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

const ManageUser = () => {
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const [users, setUsers] = useState([]);
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

	const getUsers = async () => {
		try {
			const res = await superheroes.getAllUser();

			setUsers(res);
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
			<div style={textTitle}>Manage all users</div>
			<div style={textDay}>{formatDate(new Date())}</div>

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
							paddingLeft: 100,
						}}>
						{' '}
						School
					</div>
					<div
						style={{
							fontWeight: 'bold',
							fontSize: 12,
							color: 'white',
							paddingLeft: 400,
						}}>
						{' '}
						Information
					</div>
					<div
						style={{
							fontWeight: 'bold',
							fontSize: 12,
							color: 'white',
							paddingLeft: 150,
						}}>
						{' '}
						Manager
					</div>
				</div>
			</div>

			{users.map((item, index) => {
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
export default ManageUser;
