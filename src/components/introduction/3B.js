import React from 'react';
import {Box} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Content from './3b-components/Content';
import Contentsmartphone from './3b-components/smartphone/Content';
import Themesmartphone from './3b-components/smartphone/theme';

function B() {
	return (
		<div>
		{/*<Content />*/}
		<ThemeProvider theme={Themesmartphone}>
		<Contentsmartphone />
		</ThemeProvider>
		</div>
	);
}

export default B