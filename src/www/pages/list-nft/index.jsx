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
	const [listDiploma, setListDiploma] = useState([]);
	const [listCertificate, setListCertificate] = useState([]);
	const [listOther, setListOther] = useState([]);

	const [superheroes, { loading, error }] = useCanister('superheroes');
	useEffect(async () => {
		if (superheroes) {
			getListAll();
		}
	}, [superheroes]);

	const getListAll = async () => {
		const res = await superheroes.getAllTokens();
		// console.log(await superheroes.getPrint());
		const promise4all = Promise.all(
			res.map(function (el) {
				return customAxios(el.metadata[0]?.tokenUri);
			})
		);
		const resu = await promise4all;
		const newlist = res.map((el, index) => {
			return { ...el, ...resu[index] };
		});

		setListDiploma(newlist.filter((el) => el.category === '1'));
		setListCertificate(newlist.filter((el) => el.category === '2'));
		setListOther(newlist.filter((el) => el.category === '3'));
	};

	return (
		<Container className='container'>
			<div style={textTitle}>See All NFT On The World</div>
			<div style={textDay}>15/08/2022</div>

			<input
				type='text'
				placeholder='Search by address wallet, citizen identification
				'
			/>
			{listDiploma.length > 0 ? (
				<Bids title='Diploma' data={listDiploma} />
			) : null}
			{listCertificate.length > 0 ? (
				<Bids title='Certificate' data={listCertificate} />
			) : null}
			{listOther.length > 0 ? <Bids title='Other' data={listOther} /> : null}
		</Container>
	);
}

const textTitle = {
	textAlign: 'center',
	fontSize: 25,
	fontWeight: 'bold',
	color: 'white',
	paddingTop: 60,
};

const textDay = {
	textAlign: 'center',
	fontSize: 15,
	color: 'gray',
	marginBottom: 60,
};

export default ListNft;
