import React from 'react';
import { Box } from '@mui/material';

const ALayout2 = ({ children }) => {
    return (
        <Box sx={{
            padding: 0, // 任意でパディングを追加
        }}
        >
            {children}
        </Box>
    );
};

export default ALayout2;