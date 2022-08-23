import React from 'react';

import Model from '../../assets/model.jpg';
import Map from '../../assets/map.png';

import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const IndexContact = () => {
    return (
        <Box
            sx={{
                width: '100%',
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${Model})`,
                    backgroundSize: 'cover',
                    pt: '4.8%',
                    width: '100%',
                    height: '40vh',
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ textAlign: 'center', color: '#fff' }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '350%', mt: '60%' }}>About</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box  sx={{ display: 'flex',alignItems:'center' ,justifyContent: 'center' }}>
                <Box sx={{ width:'90%' }}>
                    
                        <Grid container columns={12}>
                            <Grid item xs={12} sm={6}>
                                <Item sx={{ p: '15% 0%', boxShadow: 'none' }}>
                                    <Box sx={{ border: '1px solid #CCCCCC', height: '90vh', width: '100%' }}>
                                        <Typography sx={{ fontSize: '200%', fontWeight: 500, mt: '10%' }}>
                                            Send Us A Message
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: "80%",
                                                    mt: '5%',
                                                    borderRadius: '0px',
                                                }}
                                            >
                                                <TextField fullWidth placeholder='Your Email Address' />
                                            </Box>
                                        </Box>
                                        <Box sx={{ mt: '5%' }}>
                                            <TextareaAutosize
                                               
                                                aria-label="minimum height"
                                                minRows={3}
                                                placeholder="How Can We Help?"
                                                style={{ width: '72%',height: '30vh',padding:'4%',resize:'vertical' }}
                                            />
                                        </Box>
                                        <Button variant="contained" disableElevation
                                            sx={{
                                                height: '8%',
                                                borderRadius: '50px',
                                                mt: '7%',
                                                width: '80%',
                                                color: '#fff',
                                                backgroundColor: '#000',
                                                fontWeight: 700,
                                                "&:hover": {
                                                    backgroundColor: 'blue',
                                                }
                                            }}
                                        >
                                            SUBMIT
                                        </Button>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Item sx={{ p: '15% 0%', boxShadow: 'none' }}>
                                    <Box sx={{ border: '1px solid #CCCCCC', height: '90vh', width: '100%' }}>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Grid container columns={12}>
                                                <Grid item xs={3}>
                                                    <Item sx={{ boxShadow: 'none' }}>
                                                        <Box sx={{ textAlign: 'right' }}>
                                                            <LocationOnOutlinedIcon sx={{ mt: '85%' }} />
                                                        </Box>
                                                        <Box sx={{ textAlign: 'right' }}>
                                                            <PhoneOutlinedIcon sx={{ mt: '85%' }} />
                                                        </Box>
                                                        <Box sx={{ textAlign: 'right' }}>
                                                            <LocalPostOfficeOutlinedIcon sx={{ mt: '85%' }} />
                                                        </Box>
                                                    </Item>
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Item sx={{ boxShadow: 'none' }}>
                                                        <Box sx={{ textAlign: 'left' }}>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '125%',
                                                                    fontWeight: 600,
                                                                    mt: '26%',
                                                                }}
                                                            >
                                                                Address
                                                            </Typography>
                                                            <Typography sx={{ mt: '5%' }}>
                                                                Coza Store Center 8th floor, 379
                                                            </Typography>
                                                            <Typography>
                                                                Hudson St, New York, NY 10018 US
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ textAlign: 'left' }}>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '125%',
                                                                    fontWeight: 600,
                                                                    mt: '10%',
                                                                }}
                                                            >
                                                                Lets Talk
                                                            </Typography>
                                                            <Typography sx={{ color: 'blue', mt: '5%' }}>
                                                                +1 800 1236879
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ textAlign: 'left' }}>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: '125%',
                                                                    fontWeight: 600,
                                                                    mt: '16%',
                                                                }}
                                                            >
                                                                Sale Support
                                                            </Typography>
                                                            <Typography sx={{ color: 'blue', mt: '5%' }}>
                                                                contact@example.com
                                                            </Typography>
                                                        </Box>
                                                    </Item>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                </Box>
                </Box>
            </Box>
            <Box>
                <img src={Map} style={{width:'100%'}} />
            </Box>
        </Box>
    );
};

export default IndexContact;