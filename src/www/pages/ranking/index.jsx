import React from 'react';
import './index.css';
import profile_banner from '../../assets/images/profile_banner.png';
import NhutVy from '../../assets/images/founder/NhutVy.jpeg';
import Bids from '../../components/bids/Bids';
import { themes } from '../../assets/themes';

const ItemRank = () => {
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
						1
					</div>
					<img src={NhutVy} />

					<div
						style={{
							fontWeight: 'bold',
							fontSize: 12,
							color: 'white',
							marginLeft: 10,
						}}>
						Dang Tuan Nghia
					</div>
				</div>
				<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
					{' '}
					FPT POLYTECHNIC HCM
				</div>
				<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
					{' '}
					19
				</div>
				<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
					{' '}
					32pz5-7bxkd-zaqki-...i-o2gh7-ctkhg-dae
				</div>
			</div>
		</div>
	);
};

const Ranking = () => {
	var rows = [],
		i = 0,
		len = 10;
	while (++i <= len) rows.push(i);

	return (
		<div className='profile section__padding'>
			<div style={textTitle}>Top Rank Students</div>
			<div style={textDay}>15/08/2022</div>

			<div style={rowTop}>
				<div className='boxTop' style={boxTop}>
					<img src={NhutVy} />
					<div>Hoang Cong Nhut Vy</div>
					<p style={{ fontSize: 10, color: 'gray' }}>FPT POLYTECHNIC</p>
					<p style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>
						<span style={{ fontWeight: 'normal' }}> Sum degree</span> 26
					</p>
					<p style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>
						<span style={{ fontWeight: 'normal' }}> Top ranking</span> 2
					</p>
				</div>

				<div className='boxTop' style={boxTop}>
					<img src={NhutVy} />
					<div>Hoang Cong Nhut Vy</div>
					<p style={{ fontSize: 10, color: 'gray' }}>FPT POLYTECHNIC</p>
					<p style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>
						<span style={{ fontWeight: 'normal' }}> Sum degree</span> 36
					</p>
					<p style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>
						<span style={{ fontWeight: 'normal' }}> Top ranking</span> 1
					</p>
				</div>

				<div className='boxTop' style={boxTop}>
					<img src={NhutVy} />
					<div>Hoang Cong Nhut Vy</div>
					<p style={{ fontSize: 10, color: 'gray' }}>FPT POLYTECHNIC</p>
					<p style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>
						<span style={{ fontWeight: 'normal' }}> Sum degree</span> 16
					</p>
					<p style={{ fontSize: 12, color: 'white', fontWeight: 'bold' }}>
						<span style={{ fontWeight: 'normal' }}> Top ranking</span> 3
					</p>
				</div>
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

			{rows.map((index) => {
				return <ItemRank />;
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
