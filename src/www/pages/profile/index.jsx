import React from 'react';
import './index.css';
import profile_banner from '../../assets/images/profile_banner.png';
import NhutVy from '../../assets/images/founder/NhutVy.jpeg';
import Bids from '../../components/bids/Bids';

const Profile = () => {
	return (
		<div className='profile section__padding'>
			<div className='profile-top'>
				<div className='profile-banner'>
					<img src={profile_banner} alt='banner' />
				</div>
				<div className='profile-pic'>
					<img src={NhutVy} alt='profile' />
					<h3>James Bond</h3>
					<div style={{ color: 'white' }}>Account id</div>
					<div style={{ color: 'white' }} className='box-account-id'>
						32pz5-7bxkd-zaqki-5xgb4-lhny7-pdqav-ywrl3-z5gti-o2gh7-ctkhg-dae
					</div>
				</div>
			</div>
			<div className='profile-bottom'>
				<div className='profile-bottom-input'>
					<input
						type='text'
						placeholder='Search by address wallet, can cuoc cong dan'
					/>
					<select>
						<option>Recently Listed</option>
						<option>Popular</option>
						<option>Low to High</option>
						<option>High to Low</option>
					</select>
				</div>
				<Bids title='Diploma' />
				<Bids title='Certificate' />
				<Bids title='Other' />
			</div>
		</div>
	);
};

export default Profile;
