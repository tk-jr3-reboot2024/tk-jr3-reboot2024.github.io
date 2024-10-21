import React from 'react';
import { Box } from '@mui/material';

const Layoutdefault = ({ children }) => {
	return (
		<Box
			sx={{
				padding: '24px'
			}}
		>
			{children}
		</Box>
	);
};

export default Layoutdefault;