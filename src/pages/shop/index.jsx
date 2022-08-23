import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IndexShop = () => {
    return (
        <Box sx={{display: 'flex',alignItems:'center',justifyContent: 'center'}}>
        <Box sx={{  width:'90%',}}>
            <Box
                sx={{
                    width:'90%',
                    pt:'8%'
                }}
            >

                    <Box >
                        <Box sx={{ display: 'flex'}}>
                            <Typography
                                sx={{
                                    color: '#888A88',
                                    '&:hover': {
                                        color: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                        borderBottom: '1px solid black',
                                    },
                                }}
                            >All Products</Typography>
                            <Typography
                                sx={{
                                    ml: '5%',
                                    color: '#888A88',
                                    '&:hover': {
                                        color: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                        borderBottom: '1px solid black',
                                    },
                                }}>Women</Typography>
                            <Typography
                                sx={{
                                    ml: '5%',
                                    color: '#888A88',
                                    '&:hover': {
                                        color: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                        borderBottom: '1px solid black',
                                    },
                                }}>Man</Typography>
                            <Typography
                                sx={{
                                    ml: '5%',
                                    color: '#888A88',
                                    '&:hover': {
                                        color: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                        borderBottom: '1px solid black',
                                    },
                                }}>Bag</Typography>
                            <Typography
                                sx={{
                                    ml: '5%',
                                    color: '#888A88',
                                    '&:hover': {
                                        color: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                        borderBottom: '1px solid black',
                                    },
                                }}>Shoes</Typography>
                            <Typography
                                sx={{
                                    ml: '5%',
                                    color: '#888A88',
                                    '&:hover': {
                                        color: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                        borderBottom: '1px solid black',
                                    },
                                }}>Watches
                            </Typography>
                            <Button variant="contained"
                                sx={{
                                    ml: '25%',
                                    color: '#E6E6E6',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #E6E6E6',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        backgroundColor: '#717FE0',
                                        color: '#fff',
                                    },
                                }}
                            >
                                <FilterListIcon />
                                Filter
                            </Button>
                            <Button variant="contained"
                                sx={{
                                    ml: '1%',
                                    color: '#E6E6E6',
                                    backgroundColor: 'transparent',
                                    border: '1px solid #E6E6E6',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                        backgroundColor: '#717FE0',
                                        color: '#fff',
                                    },
                                }}
                            >
                                <SearchIcon />
                                Search
                            </Button>
                        </Box>
                    </Box>
            </Box>
            <Box
                sx={{
                    mt: '5%'
                }}
            >
                    <Grid container  spacing={2.5} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' ,}}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-01.jpg.pagespeed.ic.6WHvZRJRuO.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Esprit Ruffle Shirt
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $16.64
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-02.jpg.pagespeed.ic._mIojWDfEX.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Herschel supply
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '54%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $35.31
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-03.jpg.pagespeed.ic.eOHs429Gtb.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Only Check Trouser
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $25.50
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-04.jpg.pagespeed.ic.1MaP4euDx9.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Classic Trench Coat
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $75.00
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-05.jpg.pagespeed.ic.GHcB3Nc9zp.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Esprit Ruffle Shirt
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $16.64
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-06.jpg.pagespeed.ic.mU9c3gp9yp.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Herschel supply
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $35.31
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-07.jpg.pagespeed.ic.wXz93SW1CF.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Only Check Trouser
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $25.50
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-08.jpg.pagespeed.ic.zcR_ZfXlFq.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Classic Trench Coat
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $75.00
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container  spacing={2} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-09.jpg.pagespeed.ic._ex9y9IVR9.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Esprit Ruffle Shirt
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $16.64
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-10.jpg.pagespeed.ic.JKjq4oUn3E.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Herschel supply
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $35.31
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-11.jpg.pagespeed.ic.fJxJBqHZzv.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Only Check Trouser
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $25.50
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-12.jpg.pagespeed.ic.Ft0-TDvq7W.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Classic Trench Coat
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $75.00
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-13.jpg.pagespeed.ic.jIjGx2QblE.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Esprit Ruffle Shirt
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $16.64
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-14.jpg.pagespeed.ic.rUWpWgkkYK.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Herschel supply
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $35.31
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-15.jpg.pagespeed.ic.LNG1pmoqOY.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ textAlign: 'left' }}>
                                            <Typography
                                                sx={{
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Only Check Trouser
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                textAlign: 'right',
                                                ml: '50%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $25.50
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={3} md={3} lg={3}>
                            <Item sx={{ boxShadow: 'none' }}>
                                <Box>
                                    <CardMedia
                                        component="img"
                                        height="380"
                                        image="https://preview.colorlib.com/theme/cozastore/images/xproduct-16.jpg.pagespeed.ic.AbLwZITYaU.webp"
                                        alt="green iguana"
                                    />
                                    <Box sx={{ display: 'flex' }}>
                                        <Box sx={{ }}>
                                            <Typography
                                                sx={{
                                                    width:'150px',
                                                    textAlign:'left',
                                                    mt: '2%',
                                                    color: '#A699A6',
                                                    '&:hover': {
                                                        color: 'primary.main',
                                                    },
                                                }}
                                            >
                                                Classic Trench Coat
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                // textAlign: 'right',
                                                ml: '45%',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <FavoriteBorderIcon />
                                        </Box>
                                    </Box>
                                    <Typography
                                        sx={{
                                            textAlign: 'left'
                                        }}
                                    >
                                        $75.00
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    p: '5%',
                }}
            >
                <Button variant="contained"
                    sx={{
                        p: '1.2%',
                        backgroundColor: '#E6E6E6',
                        color: '#000',
                        fontWeight: 700,
                        borderRadius: '50px',
                        width: '15%',
                        mb:'8%',
                        '&:hover': {
                            backgroundColor: '#000',
                            color: '#fff',
                        },
                    }}
                >
                    LOAD MORE
                </Button>
            </Box>

        </Box>
        </Box>
    );
};

export default IndexShop;