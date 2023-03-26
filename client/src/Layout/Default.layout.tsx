import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Navbar from '@/components/globals/Navbar';
import Header from '@/components/globals/Header';
import Footer from '@/components/globals/Footer';

type Props = {
    children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) => {
    const isMobile = useMediaQuery('(max-width:800px)');
    const [open, setOpen] = useState(() => {
        if (isMobile) return false;
        return true;
    });
    const handleOpenOrClose = () => {
        setOpen(!open);
    };
    return (
        <Box width={'100%'} display={'flex'} sx={{ minHeight: '100vh' }}>
            <Navbar
                open={open}
                setOpen={setOpen}
                handleOpenOrClose={handleOpenOrClose}
            />
            <Box
                flex={1}
                display="flex"
                flexDirection={'column'}
                sx={{ overflowX: 'hidden' }}
            >
                <Header open={open} handleOpenOrClose={handleOpenOrClose} />
                <Box
                    p="1rem 1.5rem"
                    width={'100%'}
                    display="flex"
                    flexDirection={'column'}
                    flex={1}
                >
                    {children}
                </Box>
                {/* <Footer /> */}
            </Box>
        </Box>
    );
};

export default DefaultLayout;
