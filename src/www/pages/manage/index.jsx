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
		<div className='row'>
			<div className='container'>
				<div className='row'>
					<a href='/nft/create' className='btn btn-1 col-6'>
						<p>Create degree</p>
					</a>

					<a href='/create-user' className='btn btn-2 col-6'>
						<p>Create account</p>
					</a>
				</div>
			</div>

			<div className='container'>
				<div className='row'>
					<a href='/manage-degree' className='btn btn-3 col-6'>
						<p>Manage degrees</p>
					</a>
					{/* {Number(profile.current?.role) === 3 ? ( */}
						<a href='/manage-user' className='btn btn-4 col-6'>
							<p>Manage accounts</p>
						</a>
					{/* ) : null} */}
				</div>
			</div>
			
			<div className='container'>
				<div className='row'>
					{Number(profile.current?.role) === 3 ? (
						<a href='/manage-school' className='btn btn-4 col-6'>
							Manage school
						</a>
					) : null}
					{Number(profile.current?.role) === 3 ? (
						<a href='/create-school' className='btn btn-5 col-6'>
							Create school
						</a>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Index;
