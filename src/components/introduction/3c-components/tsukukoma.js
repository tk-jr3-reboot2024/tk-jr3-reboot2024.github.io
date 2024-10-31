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
                        <b>「ありのままの筑駒」学校紹介</b>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        <i>Introduction to Tsukukoma</i>
                    </Typography>
                    <Divider sx={{ margin: '8px' }} />
                    <Typography variant='h6'>【はじめに】</Typography>
                    <Typography variant="p">
                        「翔んで筑駒」はすべて筑駒にて撮影されており、筑駒の学校生活を映し出す場面を数多く含めています。
                        <br />
                        そこで、このページでは普段聞くことができない「ありのままの筑駒」の学校生活について、紹介していきたいと思います。
                    </Typography>
                    <Divider sx={{ margin: '8px' }} />
                    <Typography variant='h6'>【授業の様子】</Typography>
                    <Typography variant="p">
                        　日本で唯一の国立男子校である筑駒では、学習指導要領に沿っていながらも特色のある授業が行われています。
                        <br />
                        そこで、このページでは普段聞くことができない「ありのままの筑駒」の学校生活について、紹介していきたいと思います。
                    </Typography>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default News1
