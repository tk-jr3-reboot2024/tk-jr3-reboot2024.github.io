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
                    <Typography variant="h5"><b>公演のご案内</b></Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        <i>About</i>
                    </Typography>
                    <Divider sx={{ margin: '8px' }} />
                    <Typography variant='h6'>【公演の形式と時間について】</Typography>
                    <Typography variant="p">
                        今年の3-CHRでは映画「翔んで筑駒」を上映しています。
                        <br />
                        公演は毎時05~25分、35~55分に行っています。各日の閉場前30分の回は公演がありません。
                        <br />
                        日程ごとの公演時間帯は次の通りです。
                        <br />
                        11/1(金)...初回9:35~、最終回15:35~
                        <br />
                        11/2(土)...初回9:35~、最終回<u>15:05~</u>
                        <br />
                        11/3(日)...初回9:35~、最終回15:35~
                        <br />
                        なお、全ての回で同じ内容の映画が上映されます。
                    </Typography>
                    <Divider sx={{ margin: '8px' }} />
                    <Typography variant='h6'>【お客様へのお願い】</Typography>
                    <Typography variant="p">
                        ・教室内での飲食はお控えください。
                        <br />
                        ・教室前方にある黒い暗幕がかかった壁には寄りかからないようにしてください。
                        <br />
                        ・他のお客様のご迷惑となりますので、上映中は大きな声での会話や通話などはお控えください。
                        <br />
                        ・その他、他のお客様のご迷惑となるような行為はお控えください。
                    </Typography>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default News1
