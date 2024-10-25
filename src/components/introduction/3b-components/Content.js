import React from 'react';
import {Box, CssBaseline} from '@mui/material';
import News from './News';
import mainlogo from './img/tatekan.jpg';

function Content() {
	return (
		<div>
		<CssBaseline />
		<main style={{ padding: '0px', marginTop: '0px' }}>
		<Box
			component="img"
			src={mainlogo}
			alt="mainlogo"
			sx={{
			width: '100%',
			height: '100%',
			objectFit: 'cover',
			margin: 0,
			padding: 0
			}}
		/>
		</main>
		<main style={{ padding: '2vw', marginLeft: '2vw', color: 'white'}}>
			<h1 style={{fontFamily: 'serif', fontSize: '40px'}}>Story</h1>
			<p>
				ほげほげ
			</p>
		</main>
		<Box sx={{padding: '2vw'}}>
			<News box_width='70%' />
		</Box>
		</div>
	);
};

export default Content;
