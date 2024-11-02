import React, { useState } from 'react';
import {CssBaseline, Box, TextField, Button, Typography} from '@mui/material';
import Themesmartphone from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Webnazo from './img/Webnazo.png';
import { useNavigate } from 'react-router-dom';

function Webnazo_content(){
	const [input,setInput]=useState('');
	const navigate=useNavigate();
	const handleCheckAndNavigate = () => {
		if(input=='ツイート'){
			navigate('/introduction/b/webnazo_clear');
		}
		else{
			alert('残念、不正解');
		}
	};
	return(
		<div>
			<ThemeProvider theme={Themesmartphone}>
				<CssBaseline />
				<Box
				sx={{
					display: 'flex',
					color: '#fff',
					flexDirection: 'column',
					gap: 2,
					width: 'auto',
					padding: '10px'
				}}
				>
					<Box sx={{
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						paddingBottom: '60px',
					}}>
						<img src={Webnazo} alt="webnazo" style={{width: '70%', height: 'auto'}} />
					</Box>
					<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				sx={{
					flexDirection: 'column', // フォームとボタンを縦に並べる
					gap: 2,
					width: '100vw',
					color: '#fff'
				}}
				>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '30px'}}>
						カタカナで答えてください。
					</Typography>
					<TextField
					label="回答を入力してください．"
		  			variant="outlined"
		  			value={input}
		  			onChange={(e) => setInput(e.target.value)}
		  			InputProps={{
		  				style: { color: '#ffffff' }, // テキストを白に
		  			}}
		  			InputLabelProps={{
		  				style: { color: '#aaaaaa' }, // ラベルを灰色に
		  			}}
		  			sx={{
		  				'& .MuiOutlinedInput-root': {
		  					'& fieldset': {
		  						borderColor: '#ffffff', // 枠線の色を白に
		  					},
		  				},
		  				backgroundColor: '#333333', // フィールド背景を暗く
						display: 'flex'
					}}
					/>
					<Button variant="contained" color="primary" onClick={handleCheckAndNavigate} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Submit</Button>
					</Box>
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default Webnazo_content;
