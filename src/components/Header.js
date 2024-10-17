import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header({toggleDrawer}) {
	return (
	  <AppBar position="fixed">
		<Toolbar>
		  {/* Hamburger Menu Icon */}
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
	);
}

export default Header