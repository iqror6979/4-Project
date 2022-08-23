import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';

import Paypal from '../../assets/paypal.png';
import Visa from '../../assets/visa.png';
import Master from '../../assets/master.png';
import Zoloto from '../../assets/zoloto.png';
import Discover from '../../assets/discover.png';

import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IndexFooter = () => {
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#222222',
                mt: '1.2%',
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item
                                sx={{
                                    textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' },
                                    color: '#000',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            >
                                <Typography sx={{ color: '#fff', mt: '10%' }}>
                                    CATEGORIES
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%' }}>
                                    Women
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%' }}>
                                    Men
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%' }}>
                                    Shoes
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%' }}>
                                    Watches
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item
                                sx={{
                                    textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' },
                                    color: '#000',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            >
                                <Typography sx={{ color: '#fff', mt: '10%' }}>
                                    HELP
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%' }}>
                                    Track Order
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%' }}>
                                    Returns
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%' }}>
                                    Shipping
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%' }}>
                                    FAQs
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item
                                sx={{
                                    textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' },
                                    color: '#000',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            >
                                <Typography sx={{ color: '#fff', mt: '10%' }}>
                                    GET IN TOUCH
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', mt: '5%', fontSize: '90%' }}>
                                    Any questions? Let us know in store at 8th
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', fontSize: '90%' }}>
                                    floor, 379 Hudson St, New York, NY 10018 or
                                </Typography>
                                <Typography sx={{ color: '#A9ABB2', fontSize: '90%' }}>
                                    call us on (+1) 96 716 6879
                                </Typography>
                                <Box sx={{ color: '#A9ABB2', mt: '22%' }}>
                                    <FaFacebookF />
                                    <FaInstagram />
                                    <FaPinterestP />
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item
                                sx={{
                                    textAlign: { xs: 'center', sm: 'left', md: 'left', lg: 'left' },
                                    color: '#000',
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                }}
                            >
                                <Typography sx={{ color: '#fff', mt: '10%' }}>
                                    NEWSLETTER
                                </Typography>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1 },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Input placeholder="email@example.com" inputProps={ariaLabel} sx={{ color: '#fff' }} />
                                </Box>
                                <Button variant="contained"
                                    sx={{
                                        backgroundColor: '#717FE0',
                                        "&:hover": {
                                            backgroundColor: '#fff',
                                            color: '#717FE0',
                                        },
                                        borderRadius: '50px',
                                        width: '75%',
                                        mt: '5%',
                                    }}
                                >
                                    SUBSCRIBE
                                </Button>
                            </Item>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Box sx={{ textAlign: 'center', mt: '5%' }}>
                    <img src={Paypal} />
                    <img src={Visa} />
                    <img src={Master} />
                    <img src={Zoloto} />
                    <img src={Discover} />
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ color: '#A9ABB2', p: '3%' }}>
                        Copyright ©2022 All rights reserved | This template is made with  by Colorlib
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default IndexFooter;