import React from 'react';
import Navbar from '../../navbar';
import Footer from '../../footer';

function MarketLayout({ children }) {
	return (
		<div style={{ backgroundColor: '#1b1a21' }}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
}

export default MarketLayout;
