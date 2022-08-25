import React, { useState, useEffect } from 'react';
import {
	Container,
	Logo,
	LogoWrapper,
	Menu,
	MenuItem,
	Name,
	Option,
	OptionItem,
	OptionWrapper,
	Right,
	WalletAddress,
	ConnectBtnSt,
} from './navbar-elements';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import { withContext } from '../../hooks';
import { ConnectButton, useConnect, useCanister } from '@connect2ic/react';
import { Principal } from '@dfinity/principal';

var admins = {
	tuannghia: '32pz5-7bxkd-zaqki-5xgb4-lhny7-pdqav-ywrl3-z5gti-o2gh7-ctkhg-dae',
	tuannghia2: 'jcwhs-j4bkq-2xz7o-u6fvx-g53cs-an4t6-fhyna-3ots3-ecnn5-gflap-fqe',
	dangtruong: 'f4bkg-aa6oj-rq3m3-zkirc-ibqed-r7lzd-26vim-wq2hv-4tarp-dpmp4-jae',
};

function Navbar(props) {
	const { principal, disconnect, isConnected } = useConnect();

	const { prinpId, setPrinpId, logout } = props;
	const [reload, setReload] = useState(false);
	const [profile, setProfile] = useState();
	const [superheroes, { loading, error }] = useCanister('superheroes');

	useEffect(() => {}, [disconnect]);

	useEffect(() => {
		if (isConnected) {
			setReload(true);
		}
	}, [principal]);

	const getMyInfor = async () => {
		if (principal) {
			if (
				principal == admins.dangtruong ||
				principal == admins.tuannghia ||
				principal == admins.tuannghia2
			) {
				await superheroes.isAdmin(Principal.fromText(principal));
			}
			const res = await superheroes.findUserById(Principal.fromText(principal));

			setProfile(res[0]);
		}
	};

	useEffect(async () => {
		await getMyInfor();
	}, [superheroes]);

	const onConnectWallet = async () => {
		try {
			setPrinpId(principal);
		} catch (e) {
			console.log(e);
		}
	};

	const onDisconnect = () => {
		disconnect();
		logout();
		setReload(!reload);
	};

	const selectTab = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const urlProfile = `/profile/${principal}`;

	return (
		<Container style={
			 {
				position: '-webkit-sticky',
				position: 'sticky',
				top: 0,
				zIndex: 999
			}
		}>
			<LogoWrapper>
				<Link to='/' style={{ color: 'black' }}>
					<Logo src={images.olive} alt='' onClick={selectTab} />
				</Link>
				<Name>WINNER</Name>
			</LogoWrapper>
			<Right>
				<OptionWrapper>
					<Menu>
						<Link to='/' style={{ color: 'black' }} onClick={selectTab}>
							<MenuItem>Home</MenuItem>
						</Link>
						{profile?.role >= 2 && (
							<Link to='/manage' style={{ color: 'black' }} onClick={selectTab}>
								<MenuItem>Manage</MenuItem>
							</Link>
						)}
						<Link to={urlProfile} style={{ color: 'black' }} onClick={selectTab}> 
							<MenuItem>Profile</MenuItem>
						</Link>
						<Link to='/nfts' style={{ color: 'black' }} onClick={selectTab}>
							<MenuItem>NFTs</MenuItem>
						</Link>
						<Link to='/ranking' style={{ color: 'black' }} onClick={selectTab}>
							<MenuItem>Ranking</MenuItem>
						</Link>
					</Menu>

					<Option>
						{!prinpId ? (
							<>
								<OptionItem>
									<ConnectButton
										onConnect={onConnectWallet}
										onDisconnect={onDisconnect}
										className={ConnectBtnSt}
									/>
								</OptionItem>
							</>
						) : (
							<>
								<OptionItem onClick={onDisconnect}>
									<WalletAddress>
										{principal
											? principal?.slice(0, 3) + '...' + principal?.slice(60, 63)
											: 'Connect'}
									</WalletAddress>
								</OptionItem>
							</>
						)}
					</Option>
				</OptionWrapper>
			</Right>
		</Container>
	);
}

export default withContext(Navbar);
