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
                        <b>アクセス</b>
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        <i>Access</i>
                    </Typography>
                    <Divider sx={{ margin: '8px' }} />
                    <Typography variant='h6'>【WIP】</Typography>
                    <Typography variant="p">
                        WIP
                    </Typography>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default News1
