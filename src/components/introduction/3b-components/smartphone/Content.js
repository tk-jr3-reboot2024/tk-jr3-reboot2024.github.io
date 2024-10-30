import React, { useState, useEffect } from 'react';
import {Box, Typography, CssBaseline, ThemeProvider, TextField} from '@mui/material';
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
			<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 3,
				position: 'relative'
			}}
			>
				<Typography
				variant="body1"
				sx={{
					mb: 1,
					color: '#fff',
					fontFamily: 'serif',
					fontSize: '15px'
				}}
				>
					SCROLL
				</Typography>
				<Box
				sx={{
					width: '60px',
					height: '60px',
					borderRadius: '50%',
					border: '1px solid #fff',
					position: 'relative',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
				/>
				<Box
				sx={{
					position: 'absolute',
					bottom: 'calc(100% - 30px + 120px)',
					top: 'calc(100% - 30px)',
					height: '120px',
					width: '1px',
					overflow: 'hidden'
				}}
				>
				<motion.div
				initial={{top: '-120px' }}
				animate={{top: '120px' }}
				transition={{
					duration: 2.0,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'loop',
					repeatDelay: 0.8
				}}
				style={{
					width: '1px',
					backgroundColor: '#fff',
					position: 'absolute',
					bottom: '0',
					height: '120px'
				}}
				/>
				</Box>
		</Box>
		<Box
		sx={{
			marginLeft: '20px',marginTop: '150px', color: '#fff'
		}}
		>
			<h1 style={{fontFamily: 'serif', fontSize: '40px'}}>Story</h1>
			<p>
				ほげほげ
			</p>
			<br />
		</Box>
		

		</motion.div>
		)}
		</Box>
		</div>
	);
};

export default Content;
