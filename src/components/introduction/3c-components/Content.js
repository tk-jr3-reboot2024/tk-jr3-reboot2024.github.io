import React from 'react';
import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import News from './News';
import mainlogo from './img/tatekan.jpg';
import theme from "./theme";

function Content() {
	return (
		<div>
			<ThemeProvider theme={theme}>
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
			国内でも唯一の国立男子校、筑波大学附属駒場中高、通称・筑駒。
			ある日、そんな筑駒に麻布麗という生徒が転入してきた。
			容姿端麗で学問・スポーツ共に優れた麗は、やがてこの学校の独特な雰囲気に疑問を覚えるようになり、
			生徒たちをそのカリスマでまとめ上げ、改革をしようとしていくが…？
			</p>
		</main>
		<Box sx={{padding: '2vw'}}>
			<News box_width='70%' />
		</Box>
		</ThemeProvider>
		</div>
	);
};

export default Content;
