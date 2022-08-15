import React from 'react';
import Navbar from '../../navbar';
import Footer from '../../footer';
import { ConnectDialog } from '@connect2ic/react';

function MarketLayout({ children }) {
	return (
		<div style={{ backgroundColor: '#1b1a21' }}>
			<Navbar />
			<ConnectDialog dark={false} />

			{children}
			<Footer />
		</div>
	);
}

export default MarketLayout;
