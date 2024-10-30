import React from 'react';
import { Box } from '@mui/material';

const CLayout = ({ children }) => {
	return (
		<Box sx={{
			height: 'auto', // 画面全体に背景色を適用
			padding: '48px', // 任意でパディングを追加
		}}
		>
			{children}
		</Box>
	);
};

export default CLayout;