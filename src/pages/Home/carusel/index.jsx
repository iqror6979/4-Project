import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import R1 from "../../../assets/carusel1.jpg";
import R2 from "../../../assets/carusel2.jpg";
import R3 from "../../../assets/carusel3.jpg";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: R1,
    title:  <Typography
        variant="h4"
        sx={{
          lineHeight: "8vh",
          color: "black",
          fontWeight: 500,
          padding: "35px 30px",
          textAlign: "left",
          position: "absolute",
          top: "30%",
          left: "4%",
        }}
      >
        Women Collection 2018
      </Typography>,

    title1: 
      <Typography
        variant="h2"
        sx={{
          lineHeight: "8vh",
          color: "black",
          fontWeight: 700,
          padding: "35px 30px",
          textAlign: "left",
          position: "absolute",
          top: "40%",
          left: "4%",
        }}
      >
        NEW SEASON
      </Typography>,
    button: 
      <Button
        variant="contained"
        sx={{
          padding: "10px 40px",
          position: "absolute",
          border: "1px solid blue",
          borderRadius: "25px",
          fontWeight: "bold",
          color: "white",
          top: '60%',
          left: "6%",
          bgcolor: "blue",
        }}
      >
        shop now
      </Button>
    
  },
  {
    label: 'Bird',
    imgPath: R2,
    title: 
      <Typography
        variant="h4"
        sx={{
          lineHeight: "8vh",
          color: "black",
          fontWeight: 500,
          padding: "35px 30px",
          textAlign: "left",
          position: "absolute",
          top: "30%",
          left: "4%",
        }}
      >
        Women Collection 2018
      </Typography>,

    title1: 
      <Typography
        variant="h2"
        sx={{
          lineHeight: "8vh",
          color: "black",
          fontWeight: 700,
          padding: "35px 30px",
          textAlign: "left",
          position: "absolute",
          top: "40%",
          left: "4%",
        }}
      >
        NEW SEASON
      </Typography>,

    button: 
      <Button
        variant="contained"
        sx={{
          padding: "10px 40px",
          position: "absolute",
          border: "1px solid blue",
          borderRadius: "25px",
          fontWeight: "bold",
          color: "white",
          top: '60%',
          left: "6%",
          bgcolor: "blue",
        }}
      >
        shop now
      </Button>
  },
  {
    label: "Birdss",
    imgPath: R3,
    title: 
      <Typography
        variant="h4"
        sx={{
          lineHeight: "8vh",
          color: "black",
          fontWeight: 500,
          padding: "35px 30px",
          textAlign: "left",
          position: "absolute",
          top: "30%",
          left: "4%",
        }}
      >
        Women Collection 2018
      </Typography>,

    title1: 
      <Typography
        variant="h2"
        sx={{
          lineHeight: "8vh",
          color: "black",
          fontWeight: 700,
          padding: "35px 30px",
          textAlign: "left",
          position: "absolute",
          top: "40%",
          left: "4%",
        }}
      >
        NEW SEASON
      </Typography>,
    button: 
      <Button
        variant="contained"
        sx={{
          padding: "10px 40px",
          position: "absolute",
          border: "1px solid blue",
          borderRadius: "25px",
          fontWeight: "bold",
          color: "white",
          top: '60%',
          left: "6%",
          bgcolor: "blue",
        }}
      >
        shop now
      </Button>
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={step.label}>
            {Math.abs(activeStep - index) <= 3 ? (
              <Box>
                <Box
                  component="img"
                  sx={{
                    height: { lg: 750, md: 700, sm: 400, xs: 300 },
                    display: "block",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {step.title}
                  {step.title1}
                  {step.button}
                </Box>
              </Box>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
