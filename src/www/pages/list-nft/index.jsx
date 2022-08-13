import React, { useEffect, useState } from 'react';
import NftItem from '../../components/nft-item';
import {
	Container,
	ListNftWrapper,
	Title,
	TopWrapper,
} from './list-nft.elements';
import { customAxios } from '../../utils/custom-axios';
import { useCanister, useConnect } from '@connect2ic/react';
import { Principal } from '@dfinity/principal';
import './index.css';
import Bids from '../../components/bids/Bids';

function ListNft() {
	const {
		isConnected,
		disconnect,
		activeProvider,
		isIdle,
		connect,
		isConnecting,
		principal,
	} = useConnect();
	const [listNFt, setListNFt] = useState([]);
	const [listAllNFt, setListAllNFt] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	useEffect(async () => {
		if (superheroes) {
			getListAll();
			getLIst();
		}
	}, [superheroes]);

	const getListAll = async () => {
		const res = await superheroes.getAllTokens();
		console.log(await superheroes.getPrint());
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		const newlist = res.map((el, index) => {
			return { ...el, ...resu[index] };
		});
		setListAllNFt(newlist);
	};

	const getLIst = async () => {
		const res = await superheroes.getUserTokens(Principal.fromText(principal));
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		const newlist = res.map((el, index) => {
			return { ...el, ...resu[index] };
		});
		setListNFt(newlist);
	};

	return (
		<Container className='container'>
			<div style={textTitle}>See All NFT On The World</div>
			<div style={textDay}>15/08/2022</div>

			{/* <TopWrapper>
				<Title
					className='fontLucidaNormal'
					style={{ fontWeight: 'bold', color: 'white' }}>
					Explore
				</Title>
			</TopWrapper>

			<ListNftWrapper>
				{listAllNFt.map((item, index) => (
					<NftItem item={item} key={index} />
				))}
			</ListNftWrapper>

			<TopWrapper>
				<Title
					className='fontLucidaNormal'
					style={{ fontWeight: 'bold', color: 'white' }}>
					Certificate
				</Title>
			</TopWrapper>

			<ListNftWrapper>
				{listNFt.map((item, index) => (
					<NftItem item={item} key={index} />
				))}
			</ListNftWrapper> */}

			<input
				type='text'
				placeholder='Search by address wallet, citizen identification
				'
			/>

			<Bids title='Diploma' />
			<Bids title='Certificate' />
			<Bids title='Other' />
		</Container>
	);
}

const textTitle = {
	textAlign: 'center',
	fontSize: 25,
	fontWeight: 'bold',
	color: 'white',
	paddingTop: 60,
	paddingBottom: 40,
};

const textDay = {
	textAlign: 'center',
	fontSize: 15,
	color: 'gray',
	marginBottom: 40,
};

export default ListNft;
