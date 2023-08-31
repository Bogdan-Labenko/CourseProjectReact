import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import {login, refresh} from '../async/UserService';

import Link from "@mui/material/Link";
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { color1, color2, color3, color4, color5 } from '../styles/colorScheme';
import {deepOrange} from "@mui/material/colors";

const Layout = () => {
    const isUser = useSelector(state => state.user.isUser)
    const dispatch = useDispatch()

    const pages = [
        {
            Name: "Man`s",
            Settings: [
                {Name: "Clothes", path: "/mans/clothes"},
                {Name: "Shoes", path: "/mans/shoes"},
                {Name: "Hats", path: "/mans/hats"}
            ]
        },
        {
            Name: "Women`s",
            Settings: [
                {Name: "Clothes", path: "/womens/clothes"},
                {Name: "Shoes", path: "/womens/shoes"},
                {Name: "Hats", path: "/womens/hats"}
            ]
        }
    ]

    const userSettings = ['Profile', 'Logout'];


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

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedPage, setSelectedPage] = useState(null);

    const handleOpenMenu = (event, page) => {
        setAnchorEl(event.currentTarget);
        setSelectedPage(page);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        setSelectedPage(null);
    };

    return <>
        <AppBar position="static" sx={{backgroundColor: `${color1}`}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*Full size Logo*/}
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

                    {/*Small size menu*/}
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
                                <div key={page.Name}>
                                    <Button
                                        onClick={(event) => handleOpenMenu(event, page)}
                                        sx={{my: 2, color: `${color1}`, display: 'block'}}
                                    >
                                        {page.Name}
                                    </Button>
                                </div>
                            ))}
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                            >
                                {selectedPage &&
                                    selectedPage.Settings.map((setting) => (
                                        <MenuItem
                                            key={setting.Name}
                                            onClick={() => {
                                                handleCloseMenu();
                                            }}
                                        >
                                            <Link
                                                href={setting.path}
                                                underline="none"
                                                color={color1}
                                            >
                                                {setting.Name}
                                            </Link>
                                        </MenuItem>
                                    ))}
                            </Menu>
                        </Menu>
                    </Box>

                    {/*Compact size Logo*/}
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

                    {/*Full size menu*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <div key={page.Name}>
                                <Button
                                    onClick={(event) => handleOpenMenu(event, page)}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page.Name}
                                    <KeyboardArrowDownIcon />
                                </Button>
                            </div>
                        ))}
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}
                        >
                            {selectedPage &&
                                selectedPage.Settings.map((setting) => (
                                    <MenuItem
                                        key={setting.Name}
                                        onClick={() => {
                                            handleCloseMenu();
                                        }}
                                    >
                                        <Link
                                            href={setting.path}
                                            underline="none"
                                            color={color1}
                                        >
                                            {setting.Name}
                                        </Link>
                                    </MenuItem>
                                ))}
                        </Menu>
                    </Box>
                    {/*User icon and menu*/}
                    <Box sx={{flexGrow: 0}}>
                        {isUser
                            ? <>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt="Remy Sharp">KD</Avatar>
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
                                    {userSettings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </> :
                            <>
                            <Button
                                sx={{
                                    bgcolor: 'white',
                                    color: `${color1}`,
                                    '&:hover': {
                                        backgroundColor: `${color5}`, // Изменение цвета при наведении
                                    }
                                }}
                            >
                                login
                            </Button>
                            </>
                        }


                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <Outlet/>
    </>
};

export default Layout;