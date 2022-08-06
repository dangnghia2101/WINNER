import React from 'react';
import { Container, Title } from './footer';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
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
					<TopWrapperLeft>
						<ContainerImage>
							<Logo
								src='https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/272106685_1362467230891018_538785999013099351_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tIPuLJ7fwTEAX9kGN4U&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT9XIBhgvoLWAUHyDIdu7fBbw7YqlOFcknylNSsoKyi_2g&oe=62E7ECEF'
								alt=''
							/>
							<Logo
								src='https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/241311615_563414378240868_5289178787104317431_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fKJMzrgHFi0AX8JJNnw&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT_vIRBIjepuMFN2iMUin2OgfBMaOYMvGWrXK6ej5Oc5hQ&oe=62E6D1BB'
								alt=''
							/>
							<Logo
								src='https://firebasestorage.googleapis.com/v0/b/duantotnghiep-e8aff.appspot.com/o/MY%20CV.png?alt=media&token=76d6d00e-c16c-449d-9bb9-05dc913df7d4'
								alt=''
							/>
							<Logo
								src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/290620056_1386520018496593_1893378846193798937_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=tC9woy2bdHoAX8Ek0Hl&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9d_SXXytgakQvByT24IIcE6JR_e0pYzhJmjSpo2kBsCw&oe=62E6C817'
								alt=''
							/>
							<Logo
								src='https://scontent.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/279197693_1150643219004012_1877333844229920885_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=DA1uTaGhVhYAX9i8fER&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT8AGMEEC7ScJXtIni7WDz4VgF99KD7wnV6munfCZP1-FQ&oe=62EAA872'
								alt=''
							/>
						</ContainerImage>
						<Name>BLOCKCHAIN OF DEGREE</Name>
						<Text>
							We hope all degrees in the world apply NFT to anti-counterfeiting,
							you will be the only owner
						</Text>
						<Text>
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
