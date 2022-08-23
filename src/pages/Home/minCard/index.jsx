import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

import min1 from "../../../assets/minCard1.jpg";
import min2 from "../../../assets/minCard2.jpg";
import min3 from "../../../assets/minCard3.jpg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default () => {
  return (
    <Box  sx={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
    }}>
      <Box sx={{ width: "90%" ,mt:'10%'}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  sx={{}}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Item sx={{backgroundImage:`url(${min1})`,width:'100%',height:'200px',backgroundSize:'cover',backgroundPosition:'center' ,backgroundRepeat:'no-repeat',border:'1px solid lightgray',padding:'34px 38px' }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "30px",color:'#333' }}>
                Women
              </Typography>
              <Typography sx={{ }}>Spring 2018</Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
           <Item sx={{backgroundImage:`url(${min2})`,width:'100%',height:'200px',backgroundSize:'cover',backgroundPosition:'center' ,backgroundRepeat:'no-repeat',border:'1px solid lightgray',padding:'34px 38px' }}>
              <Typography sx={{ fontWeight: "bold", fontSize: "30px",color:'#333' }}>
                Men
              </Typography>
              <Typography sx={{ }}>Spring 2018</Typography>
            </Item>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Item sx={{backgroundImage:`url(${min3})`,width:'100%',height:'200px',backgroundSize:'cover',backgroundPosition:'center' ,backgroundRepeat:'no-repeat',padding:'34px 68px 34px 38px',border:'1px solid lightgray'}}>
              <Typography sx={{ fontWeight: "bold", fontSize: "30px",color:'#333' }}>
                Accossories
              </Typography>
              <Typography sx={{ }}>New Trend</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
      </Box>
  );
};
