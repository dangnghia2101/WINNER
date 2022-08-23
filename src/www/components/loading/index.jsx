import React from 'react';
import { themes } from '../../assets/themes';
import './index.css';

function Loading() {
	return (
		<div
			style={{
				flex: 1,
				backgroundColor: themes.colors.background_box,
				height: 1000,
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}></div>
	);
}

export default Loading;
