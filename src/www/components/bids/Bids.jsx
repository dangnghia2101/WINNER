import React from 'react';
import './bids.css';
import { images } from '../../assets/images';
import bids1 from '../../assets/images/bids1.png';
import bids2 from '../../assets/images/bids2.png';
import bids3 from '../../assets/images/bids3.png';
import bids4 from '../../assets/images/bids4.png';
import bids5 from '../../assets/images/bids5.png';
import bids6 from '../../assets/images/bids6.png';
import bids7 from '../../assets/images/bids7.png';
import bids8 from '../../assets/images/bids8.png';
import Certificate from '../../assets/images/Certificate.png';
import { Link } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Bids = ({ title }) => {
	return (
		<div className='bids section__padding'>
			<div className='bids-container'>
				<div className='bids-container-text'>
					<h2>{title}</h2>
				</div>
				<div className='bids-container-card'>
					<div className='card-column'>
						<Link
							to={`/nft/123`}
							style={{ justifiContent: 'center', alignItems: 'center' }}>
							<div className='bids-card'>
								<div className='bids-card-top'>
									<img src={Certificate} alt='' />
									<p
										className='bids-title'
										style={{ fontSize: 18, textAlign: 'center' }}>
										Top 100 student excelent
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
											GPA 3.6
										</p>
									</div>
								</div>
								<div className='bids-card-bottom'>
									<p>FPT POLYTECHNIC</p>
									<p>
										08/08/2022 <span> 08:00 AM</span>
									</p>
								</div>
							</div>
						</Link>
					</div>

					<div className='card-column'>
						<Link
							to={`/nft/123`}
							style={{ justifiContent: 'center', alignItems: 'center' }}>
							<div className='bids-card'>
								<div className='bids-card-top'>
									<img src={Certificate} alt='' />
									<p
										className='bids-title'
										style={{ fontSize: 18, textAlign: 'center' }}>
										Top 100 student excelent
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
											GPA 3.6
										</p>
									</div>
								</div>
								<div className='bids-card-bottom'>
									<p>FPT POLYTECHNIC</p>
									<p>
										08/08/2022 <span> 08:00 AM</span>
									</p>
								</div>
							</div>
						</Link>
					</div>
					<div className='card-column'>
						<Link
							to={`/nft/123`}
							style={{ justifiContent: 'center', alignItems: 'center' }}>
							<div className='bids-card'>
								<div className='bids-card-top'>
									<img src={Certificate} alt='' />
									<p
										className='bids-title'
										style={{ fontSize: 18, textAlign: 'center' }}>
										Top 100 student excelent
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
											GPA 3.6
										</p>
									</div>
								</div>
								<div className='bids-card-bottom'>
									<p>FPT POLYTECHNIC</p>
									<p>
										08/08/2022 <span> 08:00 AM</span>
									</p>
								</div>
							</div>
						</Link>
					</div>
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
