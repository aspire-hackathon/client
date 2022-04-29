import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useSelector} from 'react-redux';

import Button from '../UI/Button/Button';

import { useNavigate } from 'react-router-dom';

import classes from './ResponsiveAppBar.module.css';
import logo from '../../assets/images/HH3.png';

// const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Logout'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(localStorage.getItem('ACCESS_TOKEN') ? true : false);
    const userDetail = useSelector(state => state.users.userDetail);

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

    const viewProfileHandler = () => {

    }
    
    const navigate = useNavigate();
    const logOutHandler = () => {
        setIsUserLoggedIn(false);
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('user');
        navigate("/login", { replace: true });
    }
    return (
        <AppBar position="sticky" sx={{ bgcolor: "#a8dadc" }} className={classes.appBar}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{  flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <a href="#" className={classes.logo} title="Go to homepage"><img className={classes.img} src={logo} /></a>
                    </Typography>
                    
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <a href="#" className={classes.logo} title="Go to homepage"><img className={classes.img} src={logo} /></a>
                    </Typography>

                    <Box sx={{ flexGrow: 0 }}>
                        {!isUserLoggedIn && (
                        <>
                        <Button variant="outlined" type="link" path='login' className={classes.login}>Login</Button>
                        <Button variant="outlined" type="link" path='register' className={classes.login}>Register</Button>
                        </>
                        )
                    }

                        {isUserLoggedIn && <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={userDetail.username} src="" />
                            </IconButton>
                        </Tooltip>}

                        {isUserLoggedIn && <Menu
                            sx={{ mt: '45px' }}
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
                            <MenuItem key="profile" onClick={viewProfileHandler}>
                                <Typography textAlign="center">Profile</Typography>
                            </MenuItem>
                            <MenuItem key="logOut" onClick={logOutHandler}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
