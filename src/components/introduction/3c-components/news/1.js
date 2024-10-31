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
						<Typography variant='h5'><b>ホームページを開設しました!</b></Typography>
						<Typography variant=""><Chip label="サイト更新" variant="outlined" color='secondary' margin='4px' /> 10/26</Typography>
						<Divider sx={{margin: '8px'}}/>
						<Typography variant="p">
							　2024年筑駒文化祭、中学3-CHRデコ「翔んで筑駒」公式ホームページを開設しました!
							<br />
							　様々な情報を掲載していきますので、どうぞご覧ください。
						</Typography>
					</Box>
				</ThemeProvider>
		</div>
	);
}

export default News1
