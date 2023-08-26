import React, {useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from '../styles/Navigation.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {useDispatch, useSelector} from 'react-redux';
import {login, refresh} from '../async/UserService';

// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import Link from "@mui/material/Link";
// import {Typography} from "@mui/material";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {FormControl, InputLabel, Select} from "@mui/material";

const Layout = () => {
    const isUser = useSelector(state => state.user.isUser)
    const dispatch = useDispatch()

    // const pages = {
    //     "Man`s": ["Clothes", "Shoes", "Hats"],
    //     "Women`s": ["Clothes", "Shoes", "Hats"]
    // }

    const pages = [
        {Name: "Mans", Settings: ["Clothes", "Shoes", "Hats"]},
        {Name: "Womens", Settings: ["Clothes", "Shoes", "Hats"]}
    ]


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return <>
        <AppBar position="static" sx={{backgroundColor: "#026A6B"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SportsYou
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'}
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.Name}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: "#226A6B", display: 'block'}}
                                >
                                    {page.Name}
                                </Button>))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        SportsYou
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <>
                                 <Button
                                     key={page.Name}
                                     onClick={handleCloseNavMenu}
                                     sx={{ my: 2, color: 'white', display: 'block' }}
                                 >
                                     {page.Name}
                                </Button>
                            </>))}
                    </Box>

                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {/*{settings.map((setting) => (*/}
                            {/*    <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                            {/*        <Typography textAlign="center">{setting}</Typography>*/}
                            {/*    </MenuItem>*/}
                            {/*))}*/}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Outlet/>
    </>
};

export default Layout;