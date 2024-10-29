import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';
import AHeader from './introduction/3a-components/Header'
import BHeader from './introduction/3b-components/Header';
import BHeadersmartphone from './introduction/3b-components/smartphone/Header';
import CHeader from './introduction/3c-components/Header';

function Header({toggleDrawer}) {
	const location=useLocation();
	if(location.pathname.startsWith('/introduction/c')){
		return <CHeader />;
	}
	if(location.pathname.startsWith('/introduction/b')){
		//return <BHeader />;
		return <BHeadersmartphone />
	}
	if(location.pathname.startsWith('/introduction/a')){
		return <AHeader />;
	}
	if(location.pathname.startsWith('/introduction')){
		return null;
	}
	return (
		<div>
		<AppBar position="fixed">
			<Toolbar>
				<IconButton
				edge="start"
				color="inherit"
				aria-label="menu"
				onClick={toggleDrawer(true)}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					中3HRデコ
				</Typography>
			</Toolbar>
		</AppBar>
		<Toolbar />
		</div>
	);
}

export default Header