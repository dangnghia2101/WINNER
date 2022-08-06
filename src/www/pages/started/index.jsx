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
				height: '100%',
				backgroundColor: '#000000',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}>
			<h1>A Degree for NFT</h1>
			<div
				style={{
					color: 'white',
					textAlign: 'center',
					fontSize: 35,
					marginTop: -50,
				}}>
				A Degree for NFT
			</div>
			<div
				style={{
					color: 'white',
					textAlign: 'center',
					fontSize: 16,
					paddingTop: 30,
					width: 600,
					fontStretch: 100,
					margin: 'auto',
				}}>
				Our technology performing fast blockchain (120K TPS) and it has
				guaranteed AI-based data security. Proof of Stake, its consensus
				algorithm enables unlimited speeds.
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
				style={{ marginTop: -50, zIndex: -100 }}
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
		</div>
	);
}

export default Started;
