import React, { useEffect, useState } from 'react';
import NftItem from '../../components/nft-item';
import { images } from '../../assets/images';
import './index.css';
import fonts from '../../assets/fonts';

function Started() {
	return (
		<div
			style={{
				flex: 1,
				width: '100%',
				backgroundColor: '#000000',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}>
			<div
				className='fontArial'
				style={{
					fontWeight: 'bold',
					fontSize: 45,
					color: 'white',
					textAlign: 'center',
					paddingTop: 40,
				}}>
				Degrees for NFT
			</div>

			<div
				className='fontArial'
				style={{
					color: 'white',
					textAlign: 'center',
					fontSize: 16,
					paddingTop: 30,
					width: 600,
					fontStretch: 100,
					margin: 'auto',
				}}>
				You can see your Degree NFTs in the wallet at here, we help you store,
				transfer your degree with the cost cheapest, faster with technolygy's
				Difinity.
			</div>

			<div
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					width: '100%',
					justifyItems: 'center',
					display: 'flex',
					margin: 24,
				}}>
				<button style={{ borderRadius: 20, alignSelf: 'center' }}>
					Get started
				</button>
			</div>

			<img
				src={images.bg_stared}
				width='100%'
				height='100%'
				style={{ marginTop: -50, zIndex: -100, zIndex: -100 }}
			/>

			<div style={{ position: 'absolute', top: 10 }}>
				<img
					style={{ position: 'absolute' }}
					src={images.Ellipse1}
					width='700px'
					height='700px'
				/>
			</div>
			<div style={{ position: 'absolute', top: 10, right: 10 }}>
				<img src={images.Ellipse6} width='500px' height='500px' />
			</div>

			<div
				className='fontArial'
				style={{
					fontSize: 25,
					color: 'white',
					fontWeight: 'bold',
					color: 'white',
					textAlign: 'center',
					alignSelf: 'center',
					marginTop: 100,
				}}>
				Read more
			</div>

			<div
				style={{
					marginTop: 100,
					flexDirection: 'row',
					width: '100%',
					justifyItems: 'center',
					display: 'flex',
				}}
				className='row'>
				<div style={{ width: '60%' }}>
					<img src={images.MyTeam} width='100%' height='100%' />
				</div>
				<div>
					<div
						className='fontArial'
						style={{
							fontSize: 30,
							color: 'white',
							marginTop: 10,
							marginLeft: 50,
							fontWeight: 'bold',
							color: 'white',
						}}>
						WE GO FROM CODER POLY CLUB
					</div>
					<div
						className='fontArial'
						style={{
							fontSize: 15,
							color: 'white',
							marginLeft: 50,
							width: 300,
							color: 'white',
						}}>
						My team stydying at FPT POLYTECHNCI Ho Chi Minh city, this project
						will change people have a degee
					</div>
				</div>
			</div>
		</div>
	);
}

export default Started;
