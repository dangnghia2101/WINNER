import React, { useEffect, useRef, useState } from 'react';
import './item.css';
import { useCanister, useConnect } from '@connect2ic/react';
import { Principal } from '@dfinity/principal';
import NotPermistion from '../../components/not-permistion';

const Index = () => {
	const [superheroes, { loading, error }] = useCanister('superheroes');
	const { principal, isConnected } = useConnect();
	const [reload, setReload] = useState(false);
	const profile = useRef({ role: 1 });

	useEffect(async () => {
		if (superheroes && isConnected) {
			await getMyInfor();
		}
	}, [superheroes]);

	const getMyInfor = async () => {
		const res = await superheroes.findUserById(Principal.fromText(principal));
		profile.current = res[0];
		setReload(!reload);
	};

	return Number(profile.current?.role) === 1 ? (
		NotPermistion()
	) : (
		<div className='container'>
			<div className='container'>
				<a href='/nft/create' className='btn btn-1'>
					Create degree
				</a>
				<a href='/create-user' className='btn btn-2'>
					Create account
				</a>
			</div>
			<div className='container'>
				<a href='/manage-degree' className='btn btn-3'>
					Manage degrees
				</a>
				{Number(profile.current?.role) === 3 ? (
					<a href='/manage-user' className='btn btn-4'>
						Manage accounts
					</a>
				) : null}
			</div>
		</div>
	);
};

export default Index;
