import React from 'react';
import './index.css';
import profile_banner from '../../assets/images/profile_banner.png';
import danang from '../../assets/images/danang.jpeg';
import NhutVy from '../../assets/images/founder/NhutVy.jpeg';
import Bids from '../../components/bids/Bids';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Profile = () => {
	return (
		<div className='profile section__padding'>
			<div className='profile-top'>
				<div className='profile-banner'>
					<img src={danang} alt='banner' />
				</div>
				<div className='profile-pic'>
					<img src={NhutVy} alt='profile' />
					<h3>Hoang Cong Nhut Vy</h3>
					<div style={{ color: 'white' }}>Address wallet</div>
					<div className='row1'>
						<div style={{ color: 'white' }} className='box-account-id'>
							32pz5-7bxkd-zaqki...z5gti-o2gh7-ctkhg-dae
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
				<Bids title='Diploma' />
				<Bids title='Certificate' />
				<Bids title='Other' />
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
