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
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import image from '../assets/image.png';

const pages = ['Home', 'About'];
const settings = ['Profile', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

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

    const handleNavigate = (page) => {
        handleCloseNavMenu();

        if (page === 'Home') navigate('/');
        if (page === 'Logout') navigate('/login');
        if (page === 'About') navigate('/about');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#2563EB' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box
                        component="img"
                        src={logo}
                        alt="Recipe Logo"
                        sx={{ width: 80, height: 80, display: { xs: 'none', md: 'flex' } }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TasteCraft
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorElNav}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleNavigate(page)}>
                                    <Typography>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box
                        component="img"
                        src={logo}
                        alt="Recipe Logo"
                        sx={{ width: 50, height: 50, display: { xs: 'flex', md: 'none' } }}
                    />

                    <Typography
                        variant="h6"
                        sx={{
                            ml: 1,
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            fontWeight: 700,
                            letterSpacing: '0.5px',
                            color: '#fff',
                        }}
                    >
                        TasteCraft
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleNavigate(page)}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    textTransform: 'none',
                                    fontWeight: 500
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Button
                        onClick={() => handleNavigate('Logout')}
                        sx={{
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 500,
                            mr: 2,
                            display: { xs: 'none', md: 'block' }
                        }}
                    >
                        Logout
                    </Button>

                    {/* 👤 Profile */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}>
                                <Avatar src={image} />
                            </IconButton>
                        </Tooltip>

                        <Menu
                            anchorEl={anchorElUser}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={() => {
                                        handleCloseUserMenu();

                                        if (setting === 'Logout') {
                                            navigate('/login');
                                        }
                                    }}
                                >
                                    <Typography>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;