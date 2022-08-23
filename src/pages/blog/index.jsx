import React from 'react';

import Phone from '../../assets/phone.png';
import Street from '../../assets/street.jpg';
import Canvas from '../../assets/canvas.png';
import Leather from '../../assets/leather.png';
import Heat from '../../assets/heat.png';
import Business from '../../assets/business.jpg';
import Girl from '../../assets/girl.jpg';

import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Fab from '@mui/material/Fab';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IndexBlog = () => {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${Phone})`,
                    backgroundSize: 'cover',
                    pt: '4.8%',
                    width: '100%',
                    height: '50vh',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ textAlign: 'center', color: '#fff' }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '350%', mt: '85%' }}>Blog</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent: 'center'}}>
                <Box sx={{ width:'90%' }}>
                        <Grid container spacing={2} columns={12}>
                            <Grid item xs={12} sm={8} md={8} lg={8}>
                                <Item sx={{ boxShadow: 'none' }}>
                                    <Box
                                        sx={{
                                            backgroundImage: `url(${Street})`,
                                            backgroundSize: 'cover',
                                            height: '70vh',
                                            mt: '7%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                ml: '5%',
                                                width: '12%',
                                                height: '12%',
                                                backgroundColor: '#fff',
                                                opacity: [0.9, 0.8, 0.7],
                                            }}
                                        >
                                            <Typography variant="h4" sx={{color: 'black',fontWeight:'bold'}}>
                                                22
                                            </Typography>
                                            <Typography>
                                                Jan 2018
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', mt: '5%' }}>
                                        <Typography sx={{ fontSize: '200%', fontWeight: 700 }}>
                                            8 Inspiring Ways to Wear Dresses in the Winter
                                        </Typography>
                                        <Typography sx={{ color: '#888888', fontSize: '110%', mt: '3%' }}>
                                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                                        </Typography>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography sx={{ mt: '3%', color: '#222222' }}>
                                                By Admin |
                                                StreetStyle, Fashion, Couple |
                                                8 Comments
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    ml: '18%',
                                                    mt: '3%',
                                                    color: '#222222',
                                                    fontWeight: 700,
                                                    "&:hover": {
                                                        color: 'blue'
                                                    }
                                                }}
                                            >
                                                CONTINUE READING
                                            </Typography>
                                            <ArrowRightAltIcon
                                                sx={{
                                                    ml: '2%',
                                                    mt: '2.8%',
                                                    "&:hover": {
                                                        color: 'blue'
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            backgroundImage: `url(${Business})`,
                                            backgroundSize: 'cover',
                                            height: '70vh',
                                            mt: '7%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                ml: '5%',
                                                width: '12%',
                                                height: '12%',
                                                backgroundColor: '#fff',
                                                opacity: [0.9, 0.8, 0.7],
                                            }}
                                        >
                                            <Typography>
                                                18
                                            </Typography>
                                            <Typography>
                                                Jan 2018
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', mt: '5%' }}>
                                        <Typography sx={{ fontSize: '200%', fontWeight: 700 }}>
                                            The Great Big List of Men's Gifts for the Holidays
                                        </Typography>
                                        <Typography sx={{ color: '#888888', fontSize: '110%', mt: '3%' }}>
                                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                                        </Typography>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography sx={{ mt: '3%', color: '#222222' }}>
                                                By Admin |
                                                StreetStyle, Fashion, Couple |
                                                8 Comments
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    ml: '18%',
                                                    mt: '3%',
                                                    color: '#222222',
                                                    fontWeight: 700,
                                                    "&:hover": {
                                                        color: 'blue'
                                                    }
                                                }}
                                            >
                                                CONTINUE READING
                                            </Typography>
                                            <ArrowRightAltIcon
                                                sx={{
                                                    ml: '2%',
                                                    mt: '2.8%',
                                                    "&:hover": {
                                                        color: 'blue'
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            backgroundImage: `url(${Girl})`,
                                            backgroundSize: 'cover',
                                            height: '70vh',
                                            mt: '7%',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                ml: '5%',
                                                width: '12%',
                                                height: '12%',
                                                backgroundColor: '#fff',
                                                opacity: [0.9, 0.8, 0.7],
                                            }}
                                        >
                                            <Typography>
                                                16
                                            </Typography>
                                            <Typography>
                                                Jan 2018
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ textAlign: 'left', mt: '5%' }}>
                                        <Typography sx={{ fontSize: '200%', fontWeight: 700 }}>
                                            5 Winter-to-Spring Fashion Trends to Try Now
                                        </Typography>
                                        <Typography sx={{ color: '#888888', fontSize: '110%', mt: '3%' }}>
                                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum vitae sapien eu varius
                                        </Typography>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography sx={{ mt: '3%', color: '#222222' }}>
                                                By Admin |
                                                StreetStyle, Fashion, Couple |
                                                8 Comments
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    ml: '18%',
                                                    mt: '3%',
                                                    color: '#222222',
                                                    fontWeight: 700,
                                                    "&:hover": {
                                                        color: 'blue'
                                                    }
                                                }}
                                            >
                                                CONTINUE READING
                                            </Typography>
                                            <ArrowRightAltIcon
                                                sx={{
                                                    ml: '2%',
                                                    mt: '2.8%',
                                                    "&:hover": {
                                                        color: 'blue'
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box sx={{ p: '5%', textAlign: 'left' }}>
                                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                            <Fab disabled aria-label="add" >
                                                1
                                            </Fab>
                                            <Fab disabled aria-label="add" >
                                                2
                                            </Fab>
                                        </Box>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4} lg={4}>
                                <Item sx={{ boxShadow: 'none' }}>
                                    <Box sx={{ mt: '15%' }}>
                                        <TextField id="outlined-basic" placeholder='Search' variant="outlined" >
                                            <SearchIcon />
                                        </TextField>
                                        <Container>
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: '150%',
                                                    textAlign: 'left',
                                                    borderBottom: '1px solid #DDDDDD',
                                                    mt: '10%',
                                                    p: '5% 0%',
                                                }}
                                            >
                                                Categories
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mt: '8%',
                                                    fontSize: '125%',
                                                    textAlign: 'left',
                                                    borderBottom: '1px solid #DDDDDD',
                                                }}
                                            >
                                                Fashion
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mt: '5%',
                                                    fontSize: '125%',
                                                    textAlign: 'left',
                                                    borderBottom: '1px solid #DDDDDD',
                                                }}
                                            >
                                                Beauty
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mt: '5%',
                                                    fontSize: '125%',
                                                    textAlign: 'left',
                                                    borderBottom: '1px solid #DDDDDD',
                                                }}
                                            >
                                                Street Style
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mt: '5%',
                                                    fontSize: '125%',
                                                    textAlign: 'left',
                                                    borderBottom: '1px solid #DDDDDD',
                                                }}
                                            >
                                                Life Style
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    mt: '5%',
                                                    fontSize: '125%',
                                                    textAlign: 'left',
                                                    borderBottom: '1px solid #DDDDDD',
                                                }}
                                            >
                                                DIY & Crafts
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: '150%',
                                                    textAlign: 'left',
                                                    mt: '30%',
                                                    p: '5% 0%',
                                                }}
                                            >
                                                Featured Products
                                            </Typography>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2} columns={12}>
                                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                                        <Item sx={{ boxShadow: 'none' }}>
                                                            <img src={Heat} />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} sm={8} md={8} lg={8}>
                                                        <Item sx={{ boxShadow: 'none' }}>
                                                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                                                <Typography>
                                                                    White Shirt With Pleat Detail Back
                                                                </Typography>
                                                                <Typography sx={{ mt: '7%' }}>$19.00</Typography>
                                                            </Box>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                                        <Item sx={{ boxShadow: 'none' }}>
                                                            <img src={Canvas} />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} sm={8} md={8} lg={8}>
                                                        <Item sx={{ boxShadow: 'none' }}>
                                                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                                                <Typography>
                                                                    White Shirt With Pleat Detail Back
                                                                </Typography>
                                                                <Typography sx={{ mt: '7%' }}>$19.00</Typography>
                                                            </Box>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} sm={4} md={4} lg={4}>
                                                        <Item sx={{ boxShadow: 'none' }}>
                                                            <img src={Leather} />
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} sm={8} md={8} lg={8}>
                                                        <Item sx={{ boxShadow: 'none' }}>
                                                            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                                                                <Typography>
                                                                    White Shirt With Pleat Detail Back
                                                                </Typography>
                                                                <Typography sx={{ mt: '7%' }}>$19.00</Typography>
                                                            </Box>
                                                        </Item>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 800,
                                                        fontSize: '150%',
                                                        textAlign: 'left',
                                                        mt: '20%',
                                                        p: '5% 0%',
                                                    }}
                                                >
                                                    Archive
                                                </Typography>
                                                <Box sx={{ flexGrow: 1 }}>
                                                    <Grid container spacing={2} columns={12}>
                                                        <Grid item xs={8}>
                                                            <Item sx={{ boxShadow: 'none', color: '#978897', textAlign: "left" }}>
                                                                <Typography>July 2018</Typography>
                                                                <Typography sx={{ mt: '5%' }}>June 2018</Typography>
                                                                <Typography sx={{ mt: '5%' }}>May 2018</Typography>
                                                                <Typography sx={{ mt: '5%' }}>April 2018</Typography>
                                                                <Typography sx={{ mt: '5%' }}>March 2018</Typography>
                                                                <Typography sx={{ mt: '5%' }}>Februry 2018</Typography>
                                                                <Typography sx={{ mt: '5%' }}>January 2018</Typography>
                                                                <Typography sx={{ mt: '5%' }}>December 2018</Typography>
                                                            </Item>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <Item sx={{ boxShadow: 'none', color: '#978897', textAlign: "right" }}>
                                                                <Typography>(9)</Typography>
                                                                <Typography sx={{ mt: '12%' }}>(39)</Typography>
                                                                <Typography sx={{ mt: '12%' }}>(29)</Typography>
                                                                <Typography sx={{ mt: '12%' }}>(35)</Typography>
                                                                <Typography sx={{ mt: '12%' }}>(22)</Typography>
                                                                <Typography sx={{ mt: '12%' }}>(32)</Typography>
                                                                <Typography sx={{ mt: '12%' }}>(21)</Typography>
                                                                <Typography sx={{ mt: '12%' }}>(26)</Typography>
                                                            </Item>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 800,
                                                        fontSize: '150%',
                                                        textAlign: 'left',
                                                        mt: '20%',
                                                        p: '5% 0%',
                                                    }}
                                                >
                                                    Tags
                                                </Typography>
                                                <Box sx={{ width: '100%', display: 'flex' }}>
                                                    <Stack spacing={2} direction="row">
                                                        <Button variant="outlined"
                                                            sx={{
                                                                borderRadius: '50px',
                                                                backgroundColor: 'transparent',
                                                                boxShadow: 'none',
                                                                color: '#888888',
                                                                borderColor: '#888888',
                                                                "&:hover": {
                                                                    boxShadow: 'none',
                                                                    backgroundColor: 'transparent',
                                                                    color: 'blue',
                                                                },
                                                            }}
                                                        >Fashion</Button>
                                                    </Stack>
                                                    <Stack spacing={2} direction="row">
                                                        <Button variant="outlined"
                                                            sx={{
                                                                borderRadius: '50px',
                                                                backgroundColor: 'transparent',
                                                                boxShadow: 'none',
                                                                color: '#888888',
                                                                borderColor: '#888888',
                                                                ml: '5%',
                                                                "&:hover": {
                                                                    boxShadow: 'none',
                                                                    backgroundColor: 'transparent',
                                                                    color: 'blue',
                                                                },
                                                            }}
                                                        >Lifestyle</Button>
                                                    </Stack>
                                                    <Stack spacing={2} direction="row">
                                                        <Button variant="outlined"
                                                            sx={{
                                                                ml: '5%',
                                                                borderRadius: '50px',
                                                                backgroundColor: 'transparent',
                                                                boxShadow: 'none',
                                                                color: '#888888',
                                                                borderColor: '#888888',
                                                                "&:hover": {
                                                                    boxShadow: 'none',
                                                                    backgroundColor: 'transparent',
                                                                    color: 'blue',
                                                                },
                                                            }}
                                                        >Denim</Button>
                                                    </Stack>
                                                </Box>
                                                <Box sx={{ width: '100%', display: 'flex', mt: '5%' }}>
                                                    <Stack spacing={2} direction="row">
                                                        <Button variant="outlined"
                                                            sx={{
                                                                borderRadius: '50px',
                                                                backgroundColor: 'transparent',
                                                                boxShadow: 'none',
                                                                color: '#888888',
                                                                borderColor: '#888888',
                                                                "&:hover": {
                                                                    boxShadow: 'none',
                                                                    backgroundColor: 'transparent',
                                                                    color: 'blue',
                                                                },
                                                            }}
                                                        >Streetstyle</Button>
                                                    </Stack>
                                                    <Stack spacing={2} direction="row">
                                                        <Button variant="outlined"
                                                            sx={{
                                                                borderRadius: '50px',
                                                                backgroundColor: 'transparent',
                                                                boxShadow: 'none',
                                                                color: '#888888',
                                                                borderColor: '#888888',
                                                                ml: '5%',
                                                                "&:hover": {
                                                                    boxShadow: 'none',
                                                                    backgroundColor: 'transparent',
                                                                    color: 'blue',
                                                                },
                                                            }}
                                                        >Crafts</Button>
                                                    </Stack>
                                                </Box>
                                            </Box>
                                        </Container>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default IndexBlog;