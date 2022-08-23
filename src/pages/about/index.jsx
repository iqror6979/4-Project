import React from "react";

import Model from "../../assets/model.jpg";
import Flower from "../../assets/flower.jpg";
import Baby from "../../assets/baby.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const IndexAbout = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Model})`,
          backgroundSize: "cover",
          pt: "4.8%",
          width: "100%",
          height: "40vh",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ textAlign: "center", color: "#fff" }}>
            <Typography sx={{ fontWeight: 700, fontSize: "350%", mt: "60%" }}>
              About
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "90%" }}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12} sm={8}>
                <Item sx={{ boxShadow: "none" }}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{ fontSize: "200%", fontWeight: 700, mt: "7%" }}
                    >
                      Our Story
                    </Typography>
                    <Typography sx={{ color: "#888888", mt: "3%" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris consequat consequat enim, non auctor massa ultrices
                      non. Morbi sed odio massa. Quisque at vehicula tellus, sed
                      tincidunt augue. Orci varius natoque penatibus et magnis
                      dis parturient montes, nascetur ridiculus mus. Maecenas
                      varius egestas diam, eu sodales metus scelerisque congue.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Maecenas gravida justo
                      eu arcu egestas convallis. Nullam eu erat bibendum, tempus
                      ipsum eget, dictum enim. Donec non neque ut enim dapibus
                      tincidunt vitae nec augue. Suspendisse potenti. Proin ut
                      est diam. Donec condimentum euismod tortor, eget facilisis
                      diam faucibus et. Morbi a tempor elit.
                    </Typography>
                    <Typography sx={{ color: "#888888", mt: "3%" }}>
                      Donec gravida lorem elit, quis condimentum ex semper sit
                      amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
                      sodales. Ut fringilla turpis in vehicula vehicula.
                      Pellentesque congue ac orci ut gravida. Aliquam erat
                      volutpat. Donec iaculis lectus a arcu facilisis, eu
                      sodales lectus sagittis. Etiam pellentesque, magna vel
                      dictum rutrum, neque justo eleifend elit, vel tincidunt
                      erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur,
                      quam velit convallis ipsum, et maximus enim ligula ac
                      ligula.
                    </Typography>
                    <Typography sx={{ color: "#888888", mt: "3%" }}>
                      Any questions? Let us know in store at 8th floor, 379
                      Hudson St, New York, NY 10018 or call us on (+1) 96 716
                      6879
                    </Typography>
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Item sx={{ boxShadow: "none" }}>
                  <Box
                    sx={{
                      mt: "30%",
                      width: "80%",
                      height: "50vh",
                      border: "3px solid #CCCCCC",
                    }}
                  >
                    <img
                      src={Flower}
                      style={{
                        width: "115%",
                        marginTop: "-8%",
                        marginLeft: "8%",
                      }}
                    />
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb:'8%'
          }}
        >
          <Box sx={{ width: "84%" }}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12} sm={4}>
                <Item sx={{ boxShadow: "none" }}>
                  <Box
                    sx={{
                      mt: "30%",
                      width: "80%",
                      height: "50vh",
                      border: "3px solid #CCCCCC",
                    }}
                  >
                    <img
                      src={Baby}
                      style={{
                        width: "110%",
                        marginTop: "-5%",
                        marginLeft: "-25%",
                      }}
                    />
                  </Box>
                </Item>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Item sx={{ boxShadow: "none", p: "3% 0%" }}>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      sx={{ fontSize: "200%", fontWeight: 700, mt: "7%" }}
                    >
                      Our Mission
                    </Typography>
                    <Typography sx={{ color: "#888888", mt: "3%" }}>
                      Mauris non lacinia magna. Sed nec lobortis dolor.
                      Vestibulum rhoncus dignissim risus, sed consectetur erat.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Nullam maximus mauris
                      sit amet odio convallis, in pharetra magna gravida.
                      Praesent sed nunc fermentum mi molestie tempor. Morbi
                      vitae viverra odio. Pellentesque ac velit egestas, luctus
                      arcu non, laoreet mauris. Sed in ipsum tempor, consequat
                      odio in, porttitor ante. Ut mauris ligula, volutpat in
                      sodales in, porta non odio. Pellentesque tempor urna vitae
                      mi vestibulum, nec venenatis nulla lobortis. Proin at
                      gravida ante. Mauris auctor purus at lacus maximus
                      euismod. Pellentesque vulputate massa ut nisl hendrerit,
                      eget elementum libero iaculis.
                    </Typography>
                    <Box sx={{ borderLeft: "3px solid #CCCCCC" }}>
                      <Typography sx={{ color: "#888888", mt: "3%", ml: "3%" }}>
                        Creativity is just connecting things. When you ask
                        creative people how they did something, they feel a
                        little guilty because they didn't really do it, they
                        just saw something. It seemed obvious to them after a
                        while.
                      </Typography>
                      <Typography sx={{ color: "#888888", mt: "3%", ml: "3%" }}>
                        - Steve Job's
                      </Typography>
                    </Box>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IndexAbout;
