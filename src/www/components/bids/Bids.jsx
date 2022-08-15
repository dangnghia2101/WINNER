import React from 'react';
import './bids.css';
import { images } from '../../assets/images';

import { Link } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const getSchool = (_value) => {
	switch (_value) {
		case '1':
			return 'FPT POLYTECHNIC';
		case '2':
			return 'FPT UNIVERSITY';
		case '3':
			return 'UNI OF GREENWICH';
		default:
			return 'FPT POLYTECHNIC';
	}
};

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

const Bids = ({ title, data }) => {
	return (
		<div className='bids section__padding'>
			<div className='bids-container'>
				<div className='bids-container-text'>
					<h2>{title}</h2>
				</div>
				<div className='bids-container-card'>
					{data.map((item) => (
						<div className='card-column'>
							<Link
								to={'/nft/123'}
								style={{ justifiContent: 'center', alignItems: 'center' }}>
								<div className='bids-card'>
									<div className='bids-card-top'>
										<img src={item.image} alt='' />
										<p
											className='bids-title'
											style={{ fontSize: 18, textAlign: 'center' }}>
											{item.name}
										</p>

										<div
											className='row1'
											style={{ justifyContent: 'space-between' }}>
											<div className='row1'>
												<img className='imgAvatar' src={images.NhutVy} alt='' />

												<p style={{ marginLeft: 10 }} className='bids-title'>
													Dang Tuan Nghia
												</p>
											</div>

											<p className='bids-title' style={{ fontSize: 12 }}>
												GPA {item.gpa}
											</p>
										</div>
									</div>
									<div className='bids-card-bottom'>
										<p>{getSchool(item.school)}</p>
										<p>{formatDate(item.timeCreate)}</p>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className='load-more'>
				<div className='boxNumPage'>
					<ArrowBack
						color='white'
						htmlColor='white'
						sx={{ fontSize: 16 }}
						style={{ marginTop: 10, marginLeft: 5 }}
					/>
				</div>
				<div className='boxNumPage'>
					<div className='textBoxPage'>1</div>
				</div>
				<div className='boxNumPage'>
					<div className='textBoxPage'>2</div>
				</div>
				<div className='boxNumPage'>
					<div className='textBoxPage'>3</div>
				</div>
				<div className='boxNumPage'>
					<ArrowForward
						color='white'
						htmlColor='white'
						sx={{ fontSize: 16 }}
						style={{ marginTop: 8, marginLeft: 5 }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Bids;
