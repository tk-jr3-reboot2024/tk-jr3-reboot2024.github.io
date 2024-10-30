import React from 'react';
import { Typography, Box, CssBaseline, Card, CardActionArea, CardContent, Chip, Divider, ThemeProvider, CardActions, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import theme from "../theme";

function News1() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box sx={{ padding: '2vw', box_width: '100%', background: grey[50] }}>
					hello
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default News1
