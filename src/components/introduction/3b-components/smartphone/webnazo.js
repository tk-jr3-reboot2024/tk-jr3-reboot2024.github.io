import {Box, CssBaseline, Typography} from '@mui/material';
import React, { useState } from 'react';
import Themesmartphone from './theme';
import { ThemeProvider } from '@mui/material/styles';

function nazotoki() {
	return (
		<div>
			
			<ThemeProvider theme={Themesmartphone}>
				<CssBaseline />
				<Box
				sx={{
					display: 'flex',
					color: '#fff',
					flexDirection: 'column',
					gap: 2,
					width: 'auto',
					padding: '10px',
					alignItems: 'center'
				}}
				>
					<Typography variant="h4" sx={{fontSize: '100px'}}>
						正解！
					</Typography>
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default nazotoki
