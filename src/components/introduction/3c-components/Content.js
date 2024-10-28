import React from 'react';
import { Box, CssBaseline, ThemeProvider, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import News from './News';
import mainlogo from './img/logodesign.jpg';
import theme from "./theme";

function Content() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<main style={{ padding: '0px', marginTop: '0px' }}>
					<Box
						component="img"
						src={mainlogo}
						alt="mainlogo"
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
							margin: 0,
							padding: 0
						}}
					/>
				</main>
				<main style={{ padding: '2vw', marginLeft: '2vw', color: 'white' }}>
					<p>
						国内でも唯一の国立男子校、筑波大学附属駒場中高、通称・筑駒。
						ある日、そんな筑駒に麻布麗という生徒が転入してきた。
						容姿端麗で学問・スポーツ共に優れた麗は、やがてこの学校の独特な雰囲気に疑問を覚えるようになり、
						生徒たちをそのカリスマでまとめ上げ、改革をしようとしていくが…?
					</p>
				</main>
				<Box sx={{ padding: '2vw' }}>
					<News box_width='70%' />
				</Box>
				<Box display='grid' sx={{ flexGrow: '1', padding: '2vw' }}>
					<Grid container spacing={2}>
						<Grid size={{ xs: 12, md: 6 }}>
							<Card sx={{ minWidth: 275 }}>
								<CardContent>
									<Typography variant="h5" component="div">
										公演のご案内
									</Typography>
									<Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
										<i>About</i>
									</Typography>
									<Typography variant="body2">
										・「翔んで筑駒」とは
										<br />
										・公演の時間
										<br />
										・お客様へのお願い
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small">詳細はこちら</Button>
								</CardActions>
							</Card>
						</Grid>
						<Grid size={{ xs: 12, md: 6 }}>
							<Card sx={{ minWidth: 275 }}>
								<CardContent>
									<Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
										Word of the Day
									</Typography>
									<Typography variant="h5" component="div">
										oh
									</Typography>
									<Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
									<Typography variant="body2">
										well meanding and kindly.
										<br />
										{'"a benevolent smile"'}
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small">Learn More</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</ThemeProvider>
		</div>
	);
};

export default Content;
