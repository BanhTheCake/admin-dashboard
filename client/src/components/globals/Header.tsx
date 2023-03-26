import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Stack,
    InputBase,
    useTheme,
    Avatar,
    Typography,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useAppDispatch, useAppSelector } from '@/store/store';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { setMode } from '@/store/State/theme.state';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

type Props = {
    handleOpenOrClose: () => void,
    open: boolean
};

const menuLaptop = [
    { name: 'Logout', icon: <LogoutIcon sx={{ fontSize: '18px' }} />, onClick: () => { } }
]

const generatorMenuMobile = (arrFunc: any[]) => {
    const menu = [
        { name: 'Mode', icon: <DarkModeOutlinedIcon sx={{ fontSize: '18px' }} /> },
        { name: 'Setting', icon: <SettingsOutlinedIcon sx={{ fontSize: '18px' }} /> },
        { name: 'Logout', icon: <LogoutIcon sx={{ fontSize: '18px' }} /> },
    ]
    return menu.map((item, index) => ({
        ...item,
        onClick: arrFunc[index]
    }))
}

const Header = ({ handleOpenOrClose, open }: Props) => {
    const mode = useAppSelector((state) => state.mode.mode);
    const dispatch = useAppDispatch();
    const isMobile = useMediaQuery('(max-width:650px)')

    const [search, setSearch] = useState('');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleCloseMenu = () => {
        setAnchorEl(null);
    }

    const toggleMode = () => {
        dispatch(setMode());
    };

    const menuMobile = generatorMenuMobile([toggleMode, () => { }, () => { }])

    const theme = useTheme();
    return (
        <AppBar
            position="static"
            sx={{
                width: '100%',
                bgcolor: 'transparent',
                boxShadow: 'none',
                backgroundImage: 'none',
            }}
        >
            <Toolbar
                variant="dense"
                disableGutters
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: '0.8rem 1rem',
                }}
            >
                <Stack direction="row" spacing={1}>
                    <IconButton onClick={handleOpenOrClose}>
                        <MenuIcon />
                    </IconButton>
                    <InputBase
                        placeholder="Search..."
                        sx={{
                            borderRadius: '4px',
                            bgcolor: theme.palette.background.alt,
                            px: 2,
                            '& input': {
                                pr: 1,
                                textOverflow: 'ellipsis',
                                fontFamily: 'inherit',
                            },
                            maxWidth: '100%',
                        }}
                        endAdornment={<SearchIcon />}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Stack>
                {isMobile ? <Stack ml={1} direction={'row'} spacing={1.5} alignItems={'center'}>
                    <IconButton onClick={handleOpenMenu}>
                        <Avatar sx={{ width: '36px', height: '36px', bgcolor: theme.palette.primary[100] }}>
                            A
                        </Avatar>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={openMenu}
                        onClose={handleCloseMenu}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        sx={{ mt: 1 }}
                        disableScrollLock={true}
                    >
                        {menuMobile.map(item => {
                            const handleClick = () => {
                                handleCloseMenu()
                                item.onClick()
                            }
                            return <MenuItem key={item.name} onClick={handleClick}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography width={'80px'}>
                                        {item.name}
                                    </Typography>
                                </ListItemText>
                            </MenuItem>
                        })}
                    </Menu>
                </Stack> :
                    <Stack direction={'row'} spacing={1.5} alignItems={'center'}>
                        <IconButton onClick={toggleMode}>
                            {mode === 'dark' ? (
                                <DarkModeOutlinedIcon />
                            ) : (
                                <LightModeOutlinedIcon />
                            )}
                        </IconButton>
                        <IconButton>
                            <SettingsOutlinedIcon />
                        </IconButton>
                        <Stack direction="row" alignItems={'center'} spacing={1.5}>
                            <Avatar sx={{ width: '36px', height: '36px', bgcolor: theme.palette.primary[100] }}>
                                A
                            </Avatar>
                            <Stack>
                                <Typography fontWeight={600} textTransform={'capitalize'}>
                                    banhTheCake
                                </Typography>
                                <Typography fontSize={14} sx={{ opacity: 0.7 }}>
                                    admin
                                </Typography>
                            </Stack>
                            <IconButton onClick={handleOpenMenu}>
                                <ArrowDropDownOutlinedIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={handleCloseMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                sx={{ mt: 1 }}
                                disableScrollLock={true}
                            >
                                {menuLaptop.map(item => {
                                    return <MenuItem key={item.name}>
                                        <ListItemIcon>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography>
                                                {item.name}
                                            </Typography>
                                        </ListItemText>
                                    </MenuItem>
                                })}
                            </Menu>
                        </Stack>
                    </Stack>
                }
            </Toolbar>
        </AppBar>
    );
};

export default Header;
