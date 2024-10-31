import React from 'react';
import { Typography, Box, CssBaseline, Card, CardActionArea, CardContent, Link, Chip, Divider, ThemeProvider, CardActions, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import theme from "./theme";

function News1() {
    return (
        <div >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ padding: '2vw', box_width: '100%', background: grey[50], borderRadius: '4px' }}>
                    <Typography variant="h5" component="div">
                        <b>ストーリーとキャスト</b>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        <i>Story & Cast</i>
                    </Typography>
                    <Divider sx={{ margin: '8px' }} />
                    <Typography variant='h6'>【ストーリー】</Typography>
                    <Typography variant="p">
                        国内でも唯一の国立男子校、筑波大学附属駒場中高、通称・筑駒。
                        <br />
                        ある日、そんな筑駒に麻生麗という生徒が転入してきた。
                        <br />
                        容姿端麗で学問・スポーツ共に優れた麗は、やがてこの学校の独特な雰囲気に疑問を覚えるようになり、
                        <br />
                        生徒たちをそのカリスマでまとめ上げ、改革をしようとしていくが…?
                        <br />生徒会軍と麻生軍の対立や、「ありのままの筑駒」の描写をぜひお楽しみください。
                    </Typography>
                    <Divider sx={{ margin: '8px' }} />
                    <Typography variant='h6'>【キャスト】</Typography>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography variant="p">
                                ＜「筑駒モダン化計画」軍＞
                                <br />
                                麻生 麗
                                <br />
                                伊藤 尚子
                                <br />
                                永会 和太郎
                                <br />
                                カワウソ
                                <br />
                                蓮見 翔
                                <br />
                                醍醐
                                <br />
                                その他
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Typography variant="p">＜「ありのままの筑駒」側＞
                                <br />
                                仁井 三太郎
                                <br />
                                一色 緑
                                <br />
                                金 政宗
                                <br />
                                古佐 太郎
                                <br />
                                野比 のぎ太
                                <br />
                                井瀬果 伊月
                                <br />
                                その他</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </ThemeProvider>
        </div >
    );
}

export default News1
