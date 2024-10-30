import React from 'react';
import { Typography, Box, CssBaseline, Card, CardActionArea, CardContent, Link, Chip, Divider, ThemeProvider, CardActions, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import theme from "../theme";

function News1() {
	return (
		<div>
			<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box sx={{ padding: '2vw', margin: '0', box_width: '100%', background: grey[50], borderRadius: '4px' }}>
						<Box align='right'><Typography variant="p" align='right'><Link href="/introduction/c/news" color="inherit" >←ニュース一覧へ戻る</Link></Typography></Box>
						<Typography variant='h5'><b>11/1(金)一般審査の実施について</b></Typography>
						<Typography variant=""><Chip label="お知らせ" variant="outlined" color='success' /> 10/26</Typography>
						<Divider />
						<br />
						<Typography variant="p">
                            　筑駒文化祭では、例年審査委員会により各デコの審査が行われています。
							<br />
                            　今年の3-CHRは文化祭1日目、11/1(金)の<u>10:05~10:25</u>の回に審査が行われます。
                            <br />
                            　審査委員が9人程度来訪し映画を観るため、一般のお客様に提供できる席数が減ることになります。お客様にはご迷惑をおかけいたしますが、ご理解とご協力をお願いします。
						</Typography>
					</Box>
				</ThemeProvider>
		</div>
	);
}

export default News1
