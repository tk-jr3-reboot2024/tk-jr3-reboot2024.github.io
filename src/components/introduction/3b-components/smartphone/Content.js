import React, { useState, useEffect } from 'react';
import {Box, Typography, CssBaseline, ThemeProvider} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Recreate_logo from './img/Recreate_logo_negate.png';
import Recreate_subtitle from './img/Recreate_subtitle_negate.png';
import theme from "./theme";

function Content() {
	const [isImageVisible, setIsImageVisible] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => setIsImageVisible(false), 2000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div>
		<CssBaseline />
		<Box sx={{height: '100vh', overflow: isImageVisible ? 'hidden' : '', position: 'relative'}}>
		<AnimatePresence>
			{isImageVisible && (
				<motion.div
				initial={{y: '100%' }}
				animate={{y: '-100%'}}
				exit={{opacity: 0}}
				transition={{
					duration: 2,
					ease: [.14,.73,.9,.05]
				}}
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
				>
					<img src={Recreate_logo} alt="mainlogo" style={{width: '70%', height: 'auto'}} />
					<img src={Recreate_subtitle} alt="mainlogo" style={{width: '40%', height: 'auto'}} />
				</motion.div>
			)}
		</AnimatePresence>

		{!isImageVisible && (
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			>


		<Box display="flex" justifyContent="center" alignItems="center" height="auto" padding="20px">
			<img
			src={Recreate_logo} // 画像のパスを指定
			alt="mainlogo"
			style={{ width: "80%", height: "auto", borderRadius: "10px" }}
			/>
		</Box>
		<Box display="flex" justifyContent="center" alignItems="center" height="auto">
			<img
			src={Recreate_subtitle} // 画像のパスを指定
			alt="mainlogo"
			style={{ width: "50%", height: "auto", borderRadius: "10px" }}
			/>
		</Box>
		<main style={{ marginLeft: '4vw', marginTop: '20vw' , color: 'white'}}>
			<h1 style={{fontFamily: 'serif', fontSize: '40px'}}>Story</h1>
			<p>
				ほげほげ
			</p>
			<br />
		</main>
		</motion.div>
		)}
		</Box>
		</div>
	);
};

export default Content;
