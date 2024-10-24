import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    component={Link}
                    to="/"
                >
                    <HomeIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/introduction/a"
                    sx={{
                        flexGrow: 1,
                        textDecoration: "none",
                        color: "inherit",
                    }}
                >
                    School Life
                </Typography>
                <Button
                    color="inherit"
                    component={Link}
                    to="/introduction/a/access"
                >
                    アクセス
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
