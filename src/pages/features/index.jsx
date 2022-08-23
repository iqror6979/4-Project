import React from 'react';

import Jacket from '../../assets/jacket.png';
import Booy from '../../assets/booy.png';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(<img src={Jacket} />, 'Fresh Strawberries', '$ 36.00', 6.0, '$ 36.00'),
    createData(<img src={Booy} />, 'Lightweight Jacket', '$ 16.00', 9.0, '$ 16.00'),
    createData(
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" placeholder='state/country' variant="outlined" />
        </Box>,
        <Button variant="contained"
            sx={{
                color: '#909190',
                backgroundColor: '#F3F3F3',
                boxShadow: 'none',
                borderRadius: '50px',
                fontWeight: 600,
                width: '125%',
                mt: '2%',
                "&:hover": {
                    backgroundColor: '#717FE0',
                    color: '#fff',
                    boxShadow: 'none',
                }
            }}
        >
            APPLY COUPON
        </Button>,
        <Button variant="contained"
            sx={{
                ml: '15%',
                color: '#909190',
                backgroundColor: '#F3F3F3',
                boxShadow: 'none',
                borderRadius: '50px',
                fontWeight: 600,
                width: '125%',
                mt: '2%',
                "&:hover": {
                    backgroundColor: '#717FE0',
                    color: '#fff',
                    boxShadow: 'none',
                }
            }}
        >
            UPDATE CART
        </Button>),
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const IndexFeatures = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <Box
            sx={{
                pt: '6.8%',
                width: '90%',
                height: 800,
            }}
        >
                <Box>
                    <Grid container spacing={2} columns={12}>
                        <Grid item xs={12} sm={8} md={8} lg={8}>
                            <Item sx={{ pt: '6%', boxShadow: 'none', backgroundColor: 'transparent' }}>
                                <TableContainer component={Paper}>
                                    <Table sx={{ boxShadow: 'none', border: '1px solid #E0E0E0', borderRadius: '0px', minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left" sx={{ fontWeight: 700 }}>PRODUCT</TableCell>
                                                <TableCell align="left"></TableCell>
                                                <TableCell align="left" sx={{ fontWeight: 700 }}>PRICE</TableCell>
                                                <TableCell align="left" sx={{ fontWeight: 700 }}>QUANTITY</TableCell>
                                                <TableCell align="left" sx={{ fontWeight: 700 }}>TOTAL</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="left">{row.calories}</TableCell>
                                                    <TableCell align="left">{row.fat}</TableCell>
                                                    <TableCell align="left">{row.carbs}</TableCell>
                                                    <TableCell align="left">{row.protein}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <Item sx={{ mt: '5%', backgroundColor: 'transparent', boxShadow: 'none' }}>
                                <Box sx={{ textAlign: 'left', border: '1px solid #DDDDDD', mt: '5%' }}>
                                    <Container>
                                        <Typography sx={{ mt: '8%', fontWeight: 700, fontSize: '150%' }}>
                                            CART TOTALS
                                        </Typography>
                                        <Typography sx={{ fontWeight: 700, mt: '2%' }}>
                                            Subtotal: $79.65
                                        </Typography>
                                        <Typography>
                                            -------------------------------------------------
                                        </Typography>
                                        <Box>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Grid container spacing={2} columns={12}>
                                                    <Grid item xs={12} sm={4.5} md={4.5} lg={4.5}>
                                                        <Item sx={{ boxShadow: 'none' }}>
                                                            <Typography sx={{ textAlign: 'left', fontWeight: 700 }}>
                                                                Shipping:
                                                            </Typography>
                                                        </Item>
                                                    </Grid>
                                                    <Grid item xs={12} sm={7.5} md={7.5} lg={7.5}>
                                                        <Item sx={{ boxShadow: 'none' }}>
                                                            <Typography sx={{ textAlign: 'left', color: '#888A8C' }}>
                                                                There are no shipping methods available. Please double check your address, or contact us if you need any help.
                                                            </Typography>
                                                            <Typography sx={{ textAlign: 'left', fontWeight: 700, mt: '5%' }}>
                                                                CALCULATE SHIPPING
                                                            </Typography>
                                                            <Box sx={{ minWidth: 120 }}>
                                                                <FormControl fullWidth>
                                                                    <InputLabel id="demo-simple-select-label">Select a country</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-label"
                                                                        id="demo-simple-select"
                                                                        value={age}
                                                                        label="Select a country"
                                                                        onChange={handleChange}
                                                                    >
                                                                        <MenuItem value={10}>UZB</MenuItem>
                                                                        <MenuItem value={20}>UK</MenuItem>
                                                                        <MenuItem value={30}>FRA</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Box>
                                                            <Box
                                                                component="form"
                                                                sx={{
                                                                    '& > :not(style)': { m: 1 },
                                                                }}
                                                                noValidate
                                                                autoComplete="off"
                                                            >
                                                                <TextField id="outlined-basic" placeholder='state/country' variant="outlined" />
                                                            </Box>
                                                            <Box
                                                                component="form"
                                                                sx={{
                                                                    '& > :not(style)': { m: 1 },
                                                                }}
                                                                noValidate
                                                                autoComplete="off"
                                                            >
                                                                <TextField id="outlined-basic" placeholder='Postcode/Zip' variant="outlined" />
                                                            </Box>
                                                            <Button variant="contained"
                                                                sx={{
                                                                    color: '#909190',
                                                                    backgroundColor: '#F3F3F3',
                                                                    boxShadow: 'none',
                                                                    borderRadius: '50px',
                                                                    fontWeight: 600,
                                                                    width: '100%',
                                                                    mt: '2%',
                                                                    "&:hover": {
                                                                        backgroundColor: '#717FE0',
                                                                        color: '#fff',
                                                                        boxShadow: 'none',
                                                                    }
                                                                }}
                                                            >
                                                                UPDATE TOTALS
                                                            </Button>
                                                        </Item>
                                                    </Grid>
                                                    <Container>
                                                        <Typography sx={{ mt: '2%' }}>
                                                            ------------------------------------------------
                                                        </Typography>
                                                        <Typography sx={{ fontWeight: 700, mt: '2%' }}>
                                                            Total: $79.65
                                                        </Typography>
                                                        <Box sx={{ p: '5%' }}>
                                                            <Button variant="contained"
                                                                sx={{
                                                                    width: '100%',
                                                                    borderRadius: '50px',
                                                                    padding: '15px 20px',
                                                                    color: '#fff',
                                                                    backgroundColor: '#000',
                                                                    "&:hover": {
                                                                        backgroundColor: '#1976D2'
                                                                    },
                                                                }}
                                                            >
                                                                PROCEED TO CHECKOUT
                                                            </Button>
                                                        </Box>
                                                    </Container>
                                                </Grid>
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
    );
};

export default IndexFeatures;