import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";

import { datas } from "./data";

import { Button, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "left",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function RowAndColumnSpacing() {
  const [data] = useState(datas);

  return (
    <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'center',mt:'7%'}}>
      <Box sx={{ width: "90%" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          <Grid item xs={12}>
            <Item>
              <Typography
                sx={{ fontSize: "36px", color: "#222", fontWeight: "bold",pb:'5%' }}
              >
                PRODUCT OVERVIEW
              </Typography>
            </Item>
          </Grid>
          {data.map((val, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Item>
                  <CardMedia
                    component="img"
                    image={val.img}
                    alt="Live from space album cover"
                    sx={{ width: "100%" }}
                  />
                  <Typography>{val.title}</Typography>
                  <Typography>{val.narx}</Typography>
                </Item>
              </Grid>
            );
          })}
           <Grid item xs={12}>
               <Item sx={{display: 'flex',alignItems: 'center',justifyContent: 'center',mt:'5%',mb:'10%'}}>
          <Button sx={{bgcolor:'#e6e6e6',color:'#333',padding:'10px 40px',borderRadius:'23px',color:'#222',fontSize:'15px',fontWeight:'bold'}}>load more</Button>
          </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
