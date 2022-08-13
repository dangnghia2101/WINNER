import React from 'react';
import { Container, Title } from './footer';
import { images } from '../../assets/images';
import { Facebook, Instagram, Twitter, GitHub } from '@mui/icons-material';
import './index.css';
import {
	BottomWrapper,
	BottomWrapperCenter,
	BottomWrapperLeft,
	BottomWrapperRight,
	Container,
	Icon,
	Logo,
	Name,
	TopWrapper,
	TopWrapperLeft,
	TopWrapperRight,
	Text,
	LineFooter,
	BottomWrapperRightTop,
	ContainerImage,
} from './footer';

function Footer() {
	return (
		<>
			<LineFooter />
			<Container style={{ paddingBottom: 20 }}>
				<TopWrapper>
					<TopWrapperLeft style={{ marginBottom: 20 }}>
						<ContainerImage>
							<div style={{ alignItems: 'center' }}>
								<Logo src={images.MauPhi} alt='' />
								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'white',
										fontSize: 12,
										fontWeight: 'bold',
										marginTop: -10,
									}}>
									Tran Mau Phi
								</div>
								<div
									style={{
										textAlign: 'center',
										color: 'gray',
										fontSize: 10,
										fontWeight: 'bold',
										fontStretch: 400,
									}}>
									FontEnd Developer
								</div>
								<div
									className='row'
									style={{
										display: 'flex',
										flexFlow: 'row wrap',
										justifyContent: 'space-between',
										marginRight: 20,
										marginLeft: 20,
										marginTop: 5,
									}}>
									<GitHub
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Facebook
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Instagram
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
								</div>
							</div>
							<div style={{ alignItems: 'center' }}>
								<Logo src={images.DangTruong} alt='' />
								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'white',
										fontSize: 12,
										fontWeight: 'bold',
										marginTop: -10,
									}}>
									PN.Dang Truong
								</div>
								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'gray',
										fontSize: 10,
									}}>
									BackEnd Developer
								</div>
								<div
									className='row'
									style={{
										display: 'flex',
										flexFlow: 'row wrap',
										justifyContent: 'space-between',
										marginRight: 20,
										marginLeft: 20,
										marginTop: 5,
									}}>
									<GitHub
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Facebook
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Instagram
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
								</div>
							</div>
							<div style={{ alignItems: 'center' }}>
								<Logo
									src='https://firebasestorage.googleapis.com/v0/b/duantotnghiep-e8aff.appspot.com/o/MY%20CV.png?alt=media&token=76d6d00e-c16c-449d-9bb9-05dc913df7d4'
									alt=''
								/>{' '}
								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'white',
										fontSize: 12,
										fontWeight: 'bold',
										marginTop: -10,
									}}>
									Dang Tuan Nghia
								</div>
								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'gray',
										fontSize: 10,
										fontStretch: 400,
									}}>
									Project Manager
								</div>
								<div
									className='row'
									style={{
										display: 'flex',
										flexFlow: 'row wrap',
										justifyContent: 'space-between',
										marginRight: 20,
										marginLeft: 20,
										marginTop: 5,
									}}>
									<GitHub
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Facebook
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Instagram
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
								</div>
							</div>

							<div style={{ alignItems: 'center' }}>
								<Logo src={images.NhutVy} alt='' />

								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'white',
										fontSize: 12,
										fontWeight: 'bold',
										marginTop: -10,
									}}>
									HC.Nhut Vy
								</div>
								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'gray',
										fontSize: 10,
										fontStretch: 400,
									}}>
									BackEnd Developer
								</div>
								<div
									className='row'
									style={{
										display: 'flex',
										flexFlow: 'row wrap',
										justifyContent: 'space-between',
										marginRight: 20,
										marginLeft: 20,
										marginTop: 5,
									}}>
									<GitHub
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Facebook
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Instagram
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
								</div>
							</div>

							<div style={{ alignItems: 'center' }}>
								<Logo src={images.Thang} alt='' />

								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'white',
										fontSize: 12,
										fontWeight: 'bold',
										marginTop: -10,
									}}>
									NN.Cao Thang
								</div>
								<div
									className='fontLucidaNormal'
									style={{
										textAlign: 'center',
										color: 'gray',
										fontSize: 10,
										fontStretch: 400,
									}}>
									Database Developer
								</div>
								<div
									className='row'
									style={{
										display: 'flex',
										flexFlow: 'row wrap',
										justifyContent: 'space-between',
										marginRight: 20,
										marginLeft: 20,
										marginTop: 5,
									}}>
									<GitHub
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Facebook
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
									<Instagram
										color={'white'}
										htmlColor='white'
										sx={{ fontSize: 20 }}
									/>
								</div>
							</div>
						</ContainerImage>
						<Name className='fontLucidaNormal' style={{ marginTop: 30 }}>
							BLOCKCHAIN OF DEGREE
						</Name>
						<Text className='fontLucida'>
							We hope all degrees in the world apply NFT to anti-counterfeiting,
							you will be the only owner
						</Text>
						<Text className='fontLucida'>
							Team WINNER are guys who love technology and are passionate about
							discovering new technologies
						</Text>
					</TopWrapperLeft>
				</TopWrapper>
			</Container>
			<LineFooter></LineFooter>
		</>
	);
}

export default Footer;
