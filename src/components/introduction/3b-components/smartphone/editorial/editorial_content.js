import React from 'react'
import {CssBaseline} from '@mui/material';
import Themesmartphone from './theme';
import { ThemeProvider } from '@mui/material/styles';

function EditorialContent() {
	return (
		<div>
			<ThemeProvider theme={Themesmartphone}>
				<CssBaseline />
				<div>
					あ
				</div>
			</ThemeProvider>
		</div>
	);
}

export default EditorialContent
