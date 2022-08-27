import React, { useState } from 'react';
import './index.css';
import { themes } from '../../assets/themes';
import { Link } from 'react-router-dom';
import { Principal } from '@dfinity/principal';
import { Switch } from 'antd';
import { useCanister } from '@connect2ic/react';

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

const ItemSchool = ({ item, index }) => {
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const [isSwitch, setIsSwitch] = useState(Number(item.role) === 2);

	const onChange = async (checked) => {
		setIsSwitch(!isSwitch);
		const res = await superheroes.updateUser(
			item?.walletAddress,
			item.username,
			item.cccd,
			Number(item.school),
			item.birthday,
			item.image,
			item.description,
			checked === true ? 2 : 1
		);
	};
	return (
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
						{index + 1}
					</div>
					<img src={item.image} />

					<div
						style={{
							fontWeight: 'bold',
							fontSize: 12,
							color: 'white',
							marginLeft: 100,
						}}>
						{item.name}
					</div>
				</div>
				<div
					style={{
						fontWeight: 'bold',
						fontSize: 12,
						color: 'white',
						flex: 2,
						alignSelf: 'center',
					}}>
					{item.schoolCode}
				</div>
				<div
					style={{
						fontWeight: 'bold',
						fontSize: 12,
						color: 'white',
						flex: 3,
						alignSelf: 'center',
					}}>
					{item.chairman}
				</div>
			</div>
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
	// justifyContent: 'space-between',
	flex: 1,
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
	justifyContent: 'flex-start',
	flex: 2,
};
export default ItemSchool;
