import React from 'react';
import { Typography, Box, CssBaseline, Card, CardActionArea, CardContent, Chip, Divider, ThemeProvider, CardActions, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import theme from "./theme";

function News() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box sx={{ padding: '2vw', box_width: '100%' }}>
					<Grid container spacing={2}>
						<Grid size={12}>
							<Card sx={{ minWidth: 275, borderRadius: '4px 4px 0 0' }}>
								<CardContent>
									<Typography variant="h5">新着お知らせ</Typography>
									<Typography sx={{ color: 'text.secondary' }}>
										<i>News</i>
									</Typography>
								</CardContent>
							</Card>
							<Card sx={{ minWidth: 275, background: grey[100], borderRadius: '0' }}>
								<CardActionArea href='/introduction/c/news/2'>
									<CardContent>
										10/29　<Chip label="お知らせ" variant="outlined" color='success' />　11/1(金)一般審査の実施について
									</CardContent>
									<Divider />
								</CardActionArea>
							</Card>
							<Card sx={{ minWidth: 275, background: grey[100], borderRadius: '0 0 4px 4px' }}>
								<CardActionArea href='/introduction/c/news/1'>
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
