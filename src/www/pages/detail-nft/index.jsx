import React from 'react';
import './item.css';
import creator from '../../assets/images/seller2.png';
import item from '../../assets/images/item1.png';
import Certificate from '../../assets/images/Certificate.png';

const Index = () => {
	return (
		<div className='item section__padding'>
			<div className='item-image'>
				<img src={Certificate} alt='item' />
			</div>
			<div className='item-content'>
				<div className='item-content-title'>
					<h1>Top 100 studens excellent</h1>
					<p>
						<span>Summer september</span> ‧ 13/08/2022
					</p>
				</div>
				<div
					className='row1'
					style={{ justifyContent: 'space-between', width: '100%' }}>
					<div className='item-content-creator'>
						<div>
							<p>Owner</p>
						</div>
						<div>
							<img src={creator} alt='creator' />
							<p>Dang Tuan Nghia </p>
						</div>
					</div>

					<div className='item-content-certification'>
						<div>
							<p>Certification by</p>
						</div>
						<img
							src={
								'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/FPT_Polytechnic.png/1200px-FPT_Polytechnic.png'
							}
							alt='creator'
						/>
						<p>FPT POLYTECHNIC </p>
					</div>
				</div>
				<div className='item-content-detail'>
					<p>Description</p>

					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book
					</p>
				</div>
				<div
					className='item-content-detail'
					style={{ flexDirection: 'row', display: 'flex' }}>
					<div className='box-more'>
						<div style={{ margin: 10 }}>GPA 3.8</div>
					</div>
					<div className='box-more'>
						<div style={{ margin: 10 }}>TOP 25</div>
					</div>
				</div>
				<div
					className='item-content-detail'
					style={{ flexDirection: 'row', display: 'flex' }}>
					<div
						style={{
							padding: 5,
							backgroundColor: 'white',
							borderRadius: 10,
							width: 170,
							alignSelf: 'center',
							justifySelf: 'center',
							paddingTop: 10,
							paddingBottom: 10,
						}}>
						{' '}
						Transfer nft
					</div>
					<input
						type='text'
						placeholder='Paste address you want tranfer this nft'
					/>
				</div>
			</div>
		</div>
	);
};

export default Index;
