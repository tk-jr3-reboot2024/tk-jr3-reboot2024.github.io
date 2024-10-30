import React, { useState } from 'react';
import { TextField, Button, Box} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Themesmartphone from './theme';
function EditorialForm(){
	const [input,setInput]=useState('');
	const navigate=useNavigate();
	const handleCheckAndNavigate = () => {
		if(input=='841'){
			navigate('/introduction/b/editorial');
		}
		else{
			alert('指定の文字列ではありません。');
		}
	};
	return(
		<div>
			<ThemeProvider theme={Themesmartphone}>
			<CssBaseline />
			<Box sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '60vh'
			}}>
				<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				sx={{
					flexDirection: 'column', // フォームとボタンを縦に並べる
					gap: 2,
					width: '120px'
				}}
				>
					<TextField
					label="Type something"
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

export default EditorialForm;
