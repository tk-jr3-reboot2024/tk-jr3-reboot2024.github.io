import React, { useState } from 'react';
import {Drawer, List, ListItem, ListItemText, Divider} from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import './Sitemap.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import TocIcon from '@mui/icons-material/Toc';

function Sitemap({toggleDrawer, isDrawerOpen}) {
	const [isIntroductionOpen, setIsIntroductionOpen] = useState(false);
	const [isIntroductionOpensub, setIsIntroductionOpensub] = useState(false);
	const location = useLocation();
	
	const handleIntroductionClick = () => {
		setIsIntroductionOpensub(true); // サブメニューを表示
	};

	const handleBackClick = () => {
		setIsIntroductionOpensub(false);
	};

	return (
		<Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} PaperProps={{sx: {width: 250}}}>
			<div
				role="presentation"
				onKeyDown={toggleDrawer(false)}
			>
				<List className="main-menu">
				<ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
					<ListItemText primary="Home" />
					{/*<TocIcon fontSize="medium" style={{ marginLeft: '8px' }} />*/}
					{location.pathname === '/' && <TocIcon style={{ marginLeft: '8px' }} />}

				</ListItem>
					<ListItem button onClick={handleIntroductionClick}>
						<ListItemText primary="デコ紹介" />
						<ChevronRightIcon fontSize="medium" style={{ marginLeft: '8px' }} />
					</ListItem>
					<Divider />
					<ListItem button component={Link} to="/time" onClick={toggleDrawer(false)}>
						<ListItemText primary="待ち時間(目安)" />
						{location.pathname === '/time' && <TocIcon style={{ marginLeft: '8px' }} />}
					</ListItem>
					<ListItem button component={Link} to="/pictures" onClick={toggleDrawer(false)}>
						<ListItemText primary="制作風景" />
						{location.pathname === '/pictures' && <TocIcon style={{ marginLeft: '8px' }} />}
					</ListItem>
				</List>

				{(
					<div className={`sub-menu ${isIntroductionOpensub ? 'slide-in' : 'slide-out'}`}>
						<ListItem button onClick={handleBackClick}>
							<ChevronLeftIcon fontSize="medium" style={{ marginLeft: '8px' }} />
							<ListItemText primary="Home" />
						</ListItem>
						<div className="sub-menu-list">
							<ListItem button component={Link} to="/introduction/a" onClick={toggleDrawer(false)}>
								<ListItemText primary="3A" />
								{location.pathname === '/introduction/a' && <TocIcon style={{ marginLeft: '8px' }} />}
							</ListItem>
							<ListItem button component={Link} to="/introduction/b" onClick={toggleDrawer(false)}>
								<ListItemText primary="3B" />
								{location.pathname === '/introduction/b' && <TocIcon style={{ marginLeft: '8px' }} />}
							</ListItem>
							<ListItem button component={Link} to="/introduction/c" onClick={toggleDrawer(false)}>
								<ListItemText primary="3C" />
								{location.pathname === '/introduction/c' && <TocIcon style={{ marginLeft: '8px' }} />}
							</ListItem>
						</div>
					</div>
				)}
			</div>
		</Drawer>
	);
}

export default Sitemap