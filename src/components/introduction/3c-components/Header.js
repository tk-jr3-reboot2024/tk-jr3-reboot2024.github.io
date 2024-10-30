import React from 'react';
//import './Header.css'; // CSSを適用するファイルをインポート
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
//import HomeIcon from '@mui/icons-material/Home';
//import Box from '@mui/material/Box';
import { green, grey } from '@mui/material/colors'

function BasicMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						id="basic-button"
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
						size="large"
						sx={{ color: grey[1000] }}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						<MenuItem onClick={handleClose}><Link href="/" underline="none" sx={{ color: grey[900] }} >中3HPトップ</Link></MenuItem>
						<MenuItem onClick={handleClose}><Link href="/introduction/c" underline="none" sx={{ color: grey[900] }} >3-CHRトップ</Link></MenuItem>
						<MenuItem onClick={handleClose}><Link href="/introduction/c/about" underline="none" sx={{ color: grey[900] }} >公演について</Link></MenuItem>
					</Menu>
					<Typography variant="h6" noWrap>
						翔んで筑駒
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default BasicMenu;
