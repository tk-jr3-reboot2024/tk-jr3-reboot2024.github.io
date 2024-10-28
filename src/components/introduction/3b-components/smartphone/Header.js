import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
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
	const menuItems = ['Home', 'Web謎', 'News', 'Photos'];
	const getLink = (item) => {
		switch (item) {
		case 'Home':
			return '/introduction/b';
		case 'Web謎':
			return '/introduction/b/nazotoki';
		case 'News':
			return '/introduction/b/news';
		case 'Photos':
			return '/introduction/b/photo';
		default:
			return '/introduction/b';
		}
	};
	return (
		<div>
			<AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'transparent', color: 'white', padding: '0px'}}>
				<Toolbar>
					<Box sx={{ ml: 'auto' }}>
						<IconButton 
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={() => toggleDrawer()}
						>
							<MenuIcon sx={{ fontSize: '48px', transform: 'scaleX(1.5)'}} />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			<AnimatePresence>
				{isDrawerOpen && (
					<motion.div
					initial={{ y: '100%', opacity: 0 }}
					animate={{ y: '0%', opacity: 1 }}
					exit={{
						y: '-100%',
						opacity: 0 ,
						transition: {
							duration: 1.0,
							ease: [0.80, 0, 0.20, 1]
						}
					}}
					transition={{
						duration: 1.0,
						ease: [0.80, 0, 0.20, 1]
					}}
					onAnimationStart={() => setIsAnimating(true)}
					onAnimationComplete={() => setIsAnimating(false)}
					style={{
						position: 'fixed',
						bottom: 0,
						left: 0,
						right: 0,
						height: '100%', // 高さを調整
						background: '#fff', // 背景色
						boxShadow: '0 -2px 10px rgba(0,0,0,0.3)', // 上部のシャドウ
						padding: '20px',
						zIndex: 1000, // ほかの要素より上に表示
					}}
					>
						<h2>Drawer Content</h2>
						<p>This is the content of the drawer.</p>
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
