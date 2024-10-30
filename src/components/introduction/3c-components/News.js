import React from 'react';
import { Typography, Box, CssBaseline, Card, CardActionArea, CardContent, Chip, Divider, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import theme from "./theme";

function News() {
	return (
		<div>
			<ThemeProvider theme={theme}>
			<CssBaseline />
				<Box sx={{ padding: '2vw', box_width: '100%' }}>
					<Grid container spacing={0}>
						<Box sx={{ padding: '0.5vw', box_width: '100%', background: grey[50], flexGrow: '1' }} ><Typography variant='h6'>お知らせ一覧</Typography></Box>
						<Grid size={12}>
							<Card sx={{ minWidth: 275, background: grey[200], borderRadius: '0' }}>
								<CardActionArea href='/introduction/c/news'>
									<CardContent>
										10/29　<Chip label="お知らせ" variant="outlined" color='success' />　一般審査による1日目一部公演制限について
									</CardContent>
									<Divider />
								</CardActionArea>
							</Card>
						</Grid>
						<Grid size={12}>
							<Card sx={{ minWidth: 275, background: grey[200], borderRadius: '0' }}>
								<CardActionArea href='/introduction/c/news'>
									<CardContent>
										10/26　<Chip label="サイト更新" variant="outlined" color='secondary' />　ホームページを開設しました!
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default News
