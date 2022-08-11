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
} from './navbar-elements';
import { Link } from 'react-router-dom';
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

	return (
		<Container>
			<ConnectDialog dark={false} />
			<LogoWrapper>
				<Link to='/' style={{ color: 'black' }}>
					<Logo
						src='https://motoko-lsp-client.gallerycdn.vsassets.io/extensions/motoko-lsp-client/motoko-lsp-client/2.2.0/1583876431744/Microsoft.VisualStudio.Services.Icons.Default'
						alt=''
						onClick={scrollToTop}
					/>
				</Link>
				<Name>NFPTU</Name>
			</LogoWrapper>
			<Right>
				<OptionWrapper>
					<Menu>
						<Link to='/' style={{ color: 'black' }} onClick={scrollToTop}>
							<MenuItem>Home</MenuItem>
						</Link>
						<Link to='nft/create' style={{ color: 'black' }}>
							<MenuItem>Create</MenuItem>
						</Link>
						<Link to='/profile' style={{ color: 'black' }}>
							<MenuItem>Profile</MenuItem>
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
