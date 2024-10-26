import React from 'react';
import { Grid, Typography, Box, CssBaseline } from '@mui/material';

function News({ box_width }) {
	const NewsItems = [
		{
			date: '2024/10/20',
			title: 'サイトを公開しました',
			description: '3BデコRe:createのHPを公開しました！'
		}
	];
	return (
		<div>
			<CssBaseline />
			<Box sx={{ backgroundColor: '#f0f4fa', padding: '2vw', width: box_width }}>
				<Grid container alignItems="center" sx={{ borderBottom: '1px dotted #000', padding: '4px' }}>
					<Typography variant="h4" sx={{ fontFamily: 'serif' }}>News</Typography>
				</Grid>
				{NewsItems.map((item, index) => (
					<Grid container alignItems="center" sx={{ borderBottom: '1px dotted #000', padding: '4px' }}>
						<Grid item xs={12}>
							<Typography variant="subtitle2">
								{item.date}
							</Typography>
							<Typography variant="h5">
								{item.title}
							</Typography>
							<Typography variant="body1">
								{item.description}
							</Typography>
						</Grid>
					</Grid>
				))}
			</Box>
		</div>
	);
}

export default News
