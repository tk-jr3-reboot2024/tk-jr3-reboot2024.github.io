import React from 'react';
import { Box } from '@mui/material';

const BLayout = ({ children }) => {
	return (
		<Box sx={{
			backgroundColor: '#222222',
			height: 'auto', // 画面全体に背景色を適用
			padding: '48px', // 任意でパディングを追加
		}}
		>
			{children}
		</Box>
	);
};

export default BLayout;