import React, { useState } from 'react';
//import './Header.css'; // CSSを適用するファイルをインポート
import { AppBar, Toolbar, Typography, IconButton} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';

const Header = () => {
	const location = useLocation();
	const [hoveredItem, setHoveredItem] = useState(null);
	const menuItems = ['Home', 'Web謎', 'News', 'Photos'];
	const currentPath = location.pathname;
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
			<AppBar position="static" sx={{ backgroundColor: '#222222', color: '#fff', padding: '0px'}}>
				<Toolbar sx={{ padding: '0px' }}>
					<IconButton component={Link} to="/" sx={{ color: 'inherit', padding: '0', minWidth: 'auto', width:'5vw',mr: '0px',ml: '0px' , display: 'flex', justifyContent: 'center','&:hover': {color: '#ffbe00'}}}>
						<HomeIcon sx={{ fontSize: 'min(40px,max(20px,3vw))' }} />
					</IconButton>
					<Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', ml: 0}}>
						{menuItems.map((item, index) => {
							const isActive = getLink(item) === currentPath;
							const isHovered = hoveredItem === item;
							return (
								<Box
								key={index}
								component={Link}
								to={getLink(item)}
								onMouseEnter={() => setHoveredItem(item)}
								onMouseLeave={() => setHoveredItem(null)}
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexGrow: 1,
									position: 'relative',
									textDecoration: 'none',
									color: 'inherit',
									paddingBottom: '5px',
									'&:hover': {
										color: '#ffbe00'
									}
								}}
								>
								<Typography variant="h5" component="div"
								sx={{
									textDecoration: 'none',
									color: 'inherit',
									position: 'relative',
									fontFamily: 'serif',
									fontSize: 'max(2vw,20px)'
								}}
								>
									{item}
								</Typography>
								<Box
								sx={{
									height: '2px',
									width: isActive || isHovered ? '80%' : '0%',
									backgroundColor: '#ffbe00',
									position: 'absolute',
									bottom: 0,
									left: '10%',
									transition: 'width 0.3s ease'
								}}
								/>
							</Box>
							);
						})}
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
