import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import AlignHorizontalLeftOutlinedIcon from '@mui/icons-material/AlignHorizontalLeftOutlined';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import CommitOutlinedIcon from '@mui/icons-material/CommitOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import {
    Box, Drawer, List,
    ListItem, ListItemButton, ListItemIcon,
    ListItemText, Stack,
    Typography, useMediaQuery, useTheme
} from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpenOrClose: () => void;
};

const menu = [
    {
        name: 'Dashboard',
        href: '/',
        icon: <HomeOutlinedIcon color="inherit" />,
    },
    {
        name: 'Client Facing',
    },
    {
        name: 'Products',
        href: '/products',
        icon: <ShoppingCartOutlinedIcon />,
    },
    {
        name: 'Customers',
        href: '/customers',
        icon: <PeopleAltIcon />,
    },
    {
        name: 'Transactions',
        href: '/transactions',
        icon: <ReceiptLongOutlinedIcon />,
    },
    {
        name: 'Geography',
        href: '/geography',
        icon: <TerrainOutlinedIcon />,
    },
    {
        name: 'Sales',
    },
    {
        name: 'Overviews',
        href: '/overviews',
        icon: <AlignHorizontalLeftOutlinedIcon />,
    },
    {
        name: 'Daily',
        href: '/daily',
        icon: <EventNoteOutlinedIcon />,
    },
    {
        name: 'Monthly',
        href: '/monthly',
        icon: <EventOutlinedIcon />,
    },
    {
        name: 'Breakdown',
        href: '/breakdown',
        icon: <AutoAwesomeMosaicOutlinedIcon />,
    },
    {
        name: 'Management',
    },
    {
        name: 'Admin',
        href: '/admin',
        icon: <AdminPanelSettingsOutlinedIcon />,
    },
    {
        name: 'Performance',
        href: '/performance',
        icon: <CommitOutlinedIcon />,
    },
];

const Navbar = ({ open, setOpen, handleOpenOrClose }: Props) => {
    const theme = useTheme();
    const router = useRouter()
    const navigateRouter = (href: string) => {
        router.push(href)
    }

    const isMobile = useMediaQuery('(max-width:800px)')

    return (
        <Box component="nav">
            {open && (
                <Drawer
                    sx={{
                        width: 250,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 250,
                            boxSizing: 'border-box',
                            bgcolor: theme.palette.background.alt,
                            backgroundImage: 'unset'
                        },
                    }}
                    variant={isMobile ? 'temporary' : 'persistent'}
                    anchor="left"
                    open={open}
                    onClose={handleOpenOrClose}
                >
                    <Stack sx={{ color: theme.palette.secondary[200] }}>
                        <Typography
                            textTransform={'uppercase'}
                            fontSize={22}
                            fontWeight={'semibold'}
                            textAlign="center"
                            p="1rem 0.5rem"
                        >
                            ECOMVISION
                        </Typography>
                        <List>
                            {menu.map((item) => {
                                const isNotTitle = Boolean(item.href);
                                const isActive = item.href === router.asPath.split('?')[0];
                                if (isNotTitle) {
                                    return (
                                        <ListItemButton
                                            onClick={() => navigateRouter(item.href!)}
                                            key={item.name}
                                            sx={{
                                                px: '2rem',
                                                transition: 'all .2s ease',
                                                ...(isActive
                                                    ? {
                                                        bgcolor: theme.palette.secondary[300],
                                                        color: theme.palette.primary[600],
                                                    }
                                                    : { bgcolor: 'transparent' }),
                                                '&:hover': {
                                                    ...(isActive
                                                        ? {
                                                            bgcolor: theme.palette.secondary[300],
                                                            color: theme.palette.primary[600],
                                                            opacity: 0.8
                                                        }
                                                        : {}),
                                                }
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    '& .MuiSvgIcon-root': {
                                                        color: !isActive
                                                            ? theme.palette
                                                                .secondary[200]
                                                            : theme.palette
                                                                .primary[600],
                                                        fontSize: '24px',
                                                    },
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText>
                                                {item.name}
                                            </ListItemText>
                                            {isActive && (
                                                <KeyboardArrowRightOutlinedIcon />
                                            )}
                                        </ListItemButton>
                                    );
                                }
                                return (
                                    <ListItem
                                        key={item.name}
                                        sx={{ mt: '1rem', px: '2rem' }}
                                    >
                                        <ListItemText>
                                            <Typography fontWeight={'semibold'}>
                                                {item.name}
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Stack>
                </Drawer>
            )}
        </Box>
    );
};

export default Navbar;
