import React from 'react';
import { Typography, Box, CssBaseline, Card, CardActionArea, CardContent, Chip, Divider, ThemeProvider, CardActions, Button, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import theme from "./theme";

function News() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box sx={{box_width: '100%', background: grey[50], borderRadius: '4px' }}>
					<Grid container spacing={2}>
						<Grid size={12}>
							<Card sx={{borderRadius: '4px 4px 0 0', paddingTop: '2vw' }}>
								<CardContent>
									<Typography variant="h5"><b>新着お知らせ</b></Typography>
									<Typography sx={{ color: 'text.secondary' }}>
										<i>News</i>
									</Typography>
								</CardContent>
							</Card>
							<Card sx={{background: grey[100], borderRadius: '0' }}>
								<CardActionArea href='/introduction/c/news/2'>
									<CardContent>
										10/29　<Chip label="お知らせ" variant="outlined" color='success' />　11/1(金)審査の実施について
									</CardContent>
									<Divider />
								</CardActionArea>
							</Card>
							<Card sx={{background: grey[100], borderRadius: '0 0 4px 4px' }}>
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
