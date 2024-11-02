import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Recreate_logo from './img/Recreate_logo_negate.png';

const Header = () => {
	const location=useLocation();
	const shouldDisplayImage = location.pathname !== '/introduction/b';
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const toggleDrawer = (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return ;
		}
		if(isAnimating){
			return ;
		}
		setIsDrawerOpen((prev) => !prev);
	};
	const menuItems = ['Home', 'Editorial', 'News', 'Web謎', '中3合同HP'];
	const getLink = (item) => {
		switch (item) {
		case 'Home':
			return '/introduction/b';
		case 'Editorial':
			return '/introduction/b/editorial_form';
		case 'News':
			return '/introduction/b/news';
		case 'Web謎':
			return '/introduction/b/webnazo'
		case '中3合同HP':
			return '';
		default:
			return '/introduction/b';
		}
	};
	const containerVariants = {
		visible: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};
	const itemVariants = {
		hidden: { y: -1, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};
	return (
		<div>
			<AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'transparent', color: 'white', padding: '0px'}}>
				<Toolbar>
					{(shouldDisplayImage && !isDrawerOpen) && (
						<Box
						sx={{
							flexGros: 1,
							display: 'flex',
							alignItems: 'center'
						}}
						>
							<img
							src={Recreate_logo}
							alt="mainlogo"
							style={{
								height: '40px',
								objectFit: 'contain'
							}}
							/>
						</Box>
					)}
					<Box sx={{ ml: 'auto' }}>
						<IconButton 
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={() => toggleDrawer()}
						>
							<MenuIcon sx={{ fontSize: '48px', transform: 'scaleX(1.5)', color: 'inherit'}} />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<Toolbar />
			<AnimatePresence>
				{isDrawerOpen && (
					<motion.div
					initial={{ y: '100%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1 }}
					exit={{
						y: '-100%',
						opacity: 0 ,
						transition: {
							duration: 0.6,
							ease: [0.80, 0, 0.20, 1]
						}
					}}
					transition={{
						duration: 0.8,
						ease: [0.80, 0, 0.20, 1]
					}}
					onAnimationStart={() => setIsAnimating(true)}
					onAnimationComplete={() => setIsAnimating(false)}
					style={{
						position: 'fixed',
						bottom: 0,
						left: 0,
						right: 0,
						height: '100%',
						background: '#222222',
						boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
						zIndex: 1000,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						transform: 'translateX(-200px)'
					}}
					>
						<AnimatePresence>
							{(isDrawerOpen && !isAnimating) && (
								<motion.div
								initial="hidden"
								animate="visible"
								variants={containerVariants}
								style={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									justifyContent: 'center'
								}}
								>
									<motion.div
									key={0}
									variants={itemVariants}
									transition={{
										duration: 0.4,
										ease: [0.25, 0.1, 0.25, 1]
									}}
									style={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center'
									}}
									>
										<Box
										component="img"
										src={Recreate_logo}
										alt="mainlogo"
										sx={{
											width: "40%",
											height: "auto",
											borderRadius: "10px",
											mt: "80px"
										}}
										/>
									</motion.div>
									{menuItems.map((item, index) => (
										<motion.div
										key={index+1}
										variants={itemVariants}
										transition={{
											duration: 0.4,
											ease: [0.25, 0.1, 0.25, 1]
										}}
										>
											<Box component={Link} to={getLink(item)} sx={{ borderBottom: '1px solid #333', paddingBottom: '15px', ml:'100px' , width: '500px', textDecoration: 'none' }}>
												<Typography
												variant="h5"
												onClick={() => toggleDrawer()}
												sx={{
													color: '#fff',
													display: 'block',
													margin: '10px 0',
													fontFamily: 'serif',
												}}
												>
													{item}
												</Typography>
											</Box>
										</motion.div>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
					)}
				</AnimatePresence>
			{isDrawerOpen && (
				<motion.div
				initial={{ opacity: 0 }} // 背景を隠す初期状態
				animate={{ opacity: 0.5 }} // 背景を表示
				exit={{ opacity: 0 }} // 背景を隠す
				transition={{ duration: 0.3 }} // トランジションの時間
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					background: 'black',
					zIndex: 999, // Drawerの下に表示
				}}
				/>
			)}
		</div>
	);
};

export default Header;
