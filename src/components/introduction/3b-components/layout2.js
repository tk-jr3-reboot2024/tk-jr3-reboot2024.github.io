import React from 'react';
import { Box } from '@mui/material';

const BLayout2 = ({ children }) => {
	return (
		<Box sx={{
			backgroundColor: '#222222',
			height: 'auto', // 画面全体に背景色を適用
			padding: 0, // 任意でパディングを追加
		}}
		>
			{children}
		</Box>
	);
};

export default BLayout2;