import React from 'react';
import {Box, CssBaseline} from '@mui/material';
import News from './News';
import mainlogo from './img/tatekan.jpg';

function Content() {
	return (
		<div>
		<CssBaseline /> {/* ブラウザのデフォルトスタイルをリセット */}
		{/* 画像 */}
		<main style={{ padding: '0px', marginTop: '0px' }}>
		<Box
			component="img"
			src={mainlogo}
			alt="mainlogo"
			sx={{
			width: '100%', // 画像を左右いっぱいに広げる（ビューポート幅）
			height: '100%', // Headerの高さを反映した高さ
			objectFit: 'cover', // アスペクト比を維持しつつ、幅いっぱいに
			margin: 0, // 余白をなくす
			padding: 0, // パディングをなくす
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
