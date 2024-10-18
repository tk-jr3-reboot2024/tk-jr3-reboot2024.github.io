import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';


function TabPanel(props) {
	const { children, value, index, ...other }=props;
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
			<Box sx={{ p: 3 }}>
				<Typography>{children}</Typography>
			</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
  
function Time() {
	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<Box sx={{ width: '100%' }}>
			<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
				<Tab label="3A" {...a11yProps(0)} />
				<Tab label="3B" {...a11yProps(1)} />
				<Tab label="3C" {...a11yProps(2)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				次回の講演：1分後
			</TabPanel>
			<TabPanel value={value} index={1}>
				次回の講演：2分後
			</TabPanel>
			<TabPanel value={value} index={2}>
				次回の講演：3分後
			</TabPanel>
		</Box>
	);
}

export default Time