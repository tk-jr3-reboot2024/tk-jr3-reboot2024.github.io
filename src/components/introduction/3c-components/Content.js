import React from 'react';
import { Box, CssBaseline, ThemeProvider, Card, CardContent, Typography, CardActions, Button, CardMedia, CardActionArea, Divider, Chip } from '@mui/material';
import Grid from '@mui/material/Grid2';
import News from './News';
import mainlogo from './img/logodesign.jpg';
import theme from "./theme";
import { grey } from '@mui/material/colors';

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
							ある日、そんな筑駒に麻生麗という生徒が転入してきた。
							容姿端麗で学問・スポーツ共に優れた麗は、やがてこの学校の独特な雰囲気に疑問を覚えるようになり、
							生徒たちをそのカリスマでまとめ上げ、改革をしようとしていくが…?
						</p>
					</main>
					<Box display='grid' sx={{ flexGrow: '1', padding: '2vw', }}>
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
								<Card sx={{ minWidth: 275, background: grey[100], borderRadius: '0' }}>
									<CardActionArea href='/introduction/c/news/1'>
										<CardContent>
											10/26　<Chip label="サイト更新" variant="outlined" color='secondary' />　ホームページを開設しました!
										</CardContent>
									</CardActionArea>
								</Card>
								<Card sx={{ minWidth: 275, borderRadius: '0 0 4px 4px' }}>
									<CardActions>
										<Button size="small" href="/introduction/c/news">一覧はこちら</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid size={{ xs: 12, lg: 6 }}>
								<Card sx={{ minWidth: 275 }}>
									<CardContent>
										<Typography variant="h5" component="div">
											公演のご案内
										</Typography>
										<Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
											<i>About</i>
										</Typography>
										<Typography variant="body2" sx={{ minHeight: 48 }}>
											・公演の時間
											<br />
											・上演に際してお客様へのお願い
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" href="/introduction/c/about">詳細はこちら</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid size={{ xs: 12, sm: 6 }}>
								<Card sx={{ minWidth: 275 }}>
									<CardContent>
										<Typography variant="h5" component="div">
											ストーリーとキャスト
										</Typography>
										<Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
											<i>Story & Cast</i>
										</Typography>
										<Typography variant="body2" sx={{ minHeight: 48 }}>
											・「翔んで筑駒」とは
											<br />
											・キャスト紹介
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" href="/introduction/c/story">詳細はこちら</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid size={{ xs: 12, sm: 6, lg: 4 }}>
								<Card sx={{ minWidth: 275 }}>
									<CardContent>
										<Typography variant="h5" component="div">
											筑駒の学校紹介
										</Typography>
										<Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
											<i>Introduction to Tsukukoma</i>
										</Typography>
										<Typography variant="body2" sx={{ minHeight: 48 }}>
											映画の中でも出てくる「ありのままの筑駒」の様子を詳しくお伝えします！
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" href="/introduction/c/tsukukoma">詳細はこちら</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid size={{ xs: 12, sm: 6, lg: 4 }}>
								<Card sx={{ minWidth: 275 }}>
									<CardContent>
										<Typography variant="h5" component="div">
											映画制作の裏側
										</Typography>
										<Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
											<i>Behind the Scenes</i>
										</Typography>
										<Typography variant="body2" sx={{ minHeight: 48 }}>
											「翔んで筑駒」の制作風景や制作秘話を公開!
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" href="/introduction/c/making">詳細はこちら</Button>
									</CardActions>
								</Card>
							</Grid>
							<Grid size={{ xs: 12, sm: 6, lg: 4 }}>
								<Card sx={{ minWidth: 275 }}>
									<CardContent>
										<Typography variant="h5" component="div">
											アクセス
										</Typography>
										<Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
											<i>Access</i>
										</Typography>
										<Typography variant="body2" sx={{ minHeight: 48 }}>
											「翔んで筑駒」を上映している3-CHRへのアクセス
										</Typography>
									</CardContent>
									<CardActions>
										<Button size="small" href="/introduction/c/access">詳細はこちら</Button>
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
