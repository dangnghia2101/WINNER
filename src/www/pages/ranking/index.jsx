import React from 'react';
import './index.css';
import profile_banner from '../../assets/images/profile_banner.png';
import NhutVy from '../../assets/images/founder/NhutVy.jpeg';
import Bids from '../../components/bids/Bids';
import { themes } from '../../assets/themes';

const Ranking = () => {
	return (
		<div className='profile section__padding'>
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

			{/* List bottom ranking */}
			<div style={containerBottomRank}>
				<div className='boxTopBottom' style={boxTopBottom}>
					<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
						1
					</div>
					<img src={NhutVy} />

					<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
						Dang Tuan Nghia
					</div>
					<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
						{' '}
						21/01/2002
					</div>
					<div style={{ fontWeight: 'bold', fontSize: 12, color: 'white' }}>
						{' '}
						19
					</div>
				</div>
			</div>
		</div>
	);
};

const rowTop = {
	display: 'flex',
	flexDirection: 'row',
	margin: 'auto',
	width: '50%',
	justifyContent: 'space-between',
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

export default Ranking;
