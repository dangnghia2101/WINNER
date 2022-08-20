import React, { useState } from 'react';
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
	InputSearch,
} from './navbar-elements';
import { Link } from 'react-router-dom';
import { images } from '../../assets/images';
import { withContext } from '../../hooks';
import { ConnectButton, ConnectDialog, useConnect } from '@connect2ic/react';

function Navbar(props) {
	const { principal, disconnect } = useConnect();

	const { prinpId, setPrinpId, logout } = props;
	const [reload, setReload] = useState(false);

	const onConnectWallet = async () => {
		try {
			console.log(principal);
			// const publicKey = await window.ic.plug.requestConnect({
			// });
			// const NNSUiActor = await window.ic.plug.createActor({
			// 	canisterId: process.env.SUPERHEROES_CANISTER_ID,
			// 	interfaceFactory: idlFactory,
			// });

			// const princi = await window.ic.plug.agent.getPrincipal();

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

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const urlProfile = `/profile/${principal}`;

	return (
		<Container>
			{/* <div
				style={{ position: 'absolute', height: 300, backgroundColor: 'red' }}>
				<ConnectDialog dark={false} />
			</div> */}
			<LogoWrapper>
				<Link to='/' style={{ color: 'black' }}>
					<Logo src={images.olive} alt='' onClick={scrollToTop} />
				</Link>
				<Name>WINNER</Name>
			</LogoWrapper>
			<Right>
				<OptionWrapper>
					<Menu>
						<Link to='/' style={{ color: 'black' }} onClick={scrollToTop}>
							<MenuItem>Home</MenuItem>
						</Link>
						<Link to='/nft/create' style={{ color: 'black' }}>
							<MenuItem>Degree</MenuItem>
						</Link>
						<Link to='/create-user' style={{ color: 'black' }}>
							<MenuItem>User</MenuItem>
						</Link>
						<Link to='/manage-user' style={{ color: 'black' }}>
							<MenuItem>Manage</MenuItem>
						</Link>
						<Link to={urlProfile} style={{ color: 'black' }}>
							<MenuItem>Profile</MenuItem>
						</Link>
						<Link to='/nfts' style={{ color: 'black' }}>
							<MenuItem>NFTs</MenuItem>
						</Link>
						<Link to='/ranking' style={{ color: 'black' }}>
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
											? principal?.slice(0, 3) +
											  '...' +
											  principal?.slice(60, 63)
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
