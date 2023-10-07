/* Common Imports */

import * as React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import {
  Box,
  Paper,
  Stepper,
  Step,
  StepButton,
  Button,
  Link,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  Fade,
  Slider,
} from "@mui/material";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6U-tKGo2Ei8XdfKZU8pHe37TJsu6surc",
  authDomain: "mahala-almas.firebaseapp.com",
  projectId: "mahala-almas",
  storageBucket: "mahala-almas.appspot.com",
  messagingSenderId: "739340258369",
  appId: "1:739340258369:web:9898bb8b9b5e65420e0ac0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

const Column = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Row = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  // minHeight: "90vh",
  height: "90vh",
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
}));

const SelectedImg = styled("img")(({ theme }) => ({
  border: "4px solid #43A047",
  borderRadius: "50%",
  padding: "0.2rem",
}));

const DiamondTypeButtonRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
}));

const DiamondTypeButton = styled(Button)(({ theme }) => ({
  "&.MuiButton-outlined": {
    background: "#FFFFFF",
    color: "#5B7BB6",
    border: "2px solid #5B7BB6",
  },
  "&.MuiButton-contained": {
    background: "#5B7BB6",
    color: "#FFFFFF",
    border: "2px solid #5B7BB6",
  },
}));

const CustomRangeSlider = styled(Slider)(({ theme }) => ({
  "&.MuiSlider-markLabel": {
    background: "#ffffff",
    color: "#5B7BB6",
  },
}));

const ContactTextField = styled(TextField)(({ theme }) => ({
  width: "40%",
}));

const DiamondShapesContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "85%",
  rowGap: "1.5rem",
  columnGap: "2rem",
  flexWrap: "wrap",
}));

const StyledDiamondShape = styled("div", {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  border: selected ? "2px solid #5B7BB6" : "2px solid #CCDCF3",
  borderRadius: "0.25rem",
  padding: "0.5rem",
}));

const CertificationsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "85%",
  rowGap: "1.5rem",
  columnGap: "2rem",
  flexWrap: "wrap",
}));

const StyledCertification = styled("div", {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: selected ? "2px solid #5B7BB6" : "2px solid #CCDCF3",
  borderRadius: "0.25rem",
  padding: "0.5rem 1rem",
  cursor: "pointer",
}));

/* Copyright */

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Mahala Almas
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

/* Stepper step labels */

const steps = [
  "Location",
  "Diamond Type",
  "Shapes",
  "Carat",
  "Color",
  "Clarity",
  "Cut",
  "Certification",
  "Additional Notes",
  "Budget",
  "Contact Details",
];

export default function Form() {
  /* Stepper States */

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  /* Input States */

  const [location, setLocation] = React.useState("");
  const [otherLocation, setOtherLocation] = React.useState("");
  const [diamondType, setDiamondType] = React.useState("");
  const [diamondShapes, setDiamondShapes] = React.useState([]);
  const [diamondMinCarat, setDiamondMinCarat] = React.useState(0.1);
  const [diamondMaxCarat, setDiamondMaxCarat] = React.useState(30);
  const [diamondMinColor, setDiamondMinColor] = React.useState(0);
  const [diamondMaxColor, setDiamondMaxColor] = React.useState(8);
  const [diamondMinClarity, setDiamondMinClarity] = React.useState(0);
  const [diamondMaxClarity, setDiamondMaxClarity] = React.useState(8);
  const [diamondMinCut, setDiamondMinCut] = React.useState(0);
  const [diamondMaxCut, setDiamondMaxCut] = React.useState(4);
  const [diamondCertifications, setDiamondCertification] = React.useState([]);
  const [additionalNotes, setAdditionalNotes] = React.useState("");
  const [diamondMinBudget, setDiamondMinBudget] = React.useState(1);
  const [diamondMaxBudget, setDiamondMaxBudget] = React.useState(999999999);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [agree, setAgree] = React.useState(false);

  /* Shapes Data */

  const diamond_shapes = [
    {
      img_url: "/images/diamond-shapes/round.png",
      img_alt: "Round",
      label: "Round",
    },
    {
      img_url: "/images/diamond-shapes/princess.png",
      img_alt: "Princess",
      label: "Princess",
    },
    {
      img_url: "/images/diamond-shapes/emerald.png",
      img_alt: "Emerald",
      label: "Emerald",
    },
    {
      img_url: "/images/diamond-shapes/asscher.png",
      img_alt: "Asscher",
      label: "Asscher",
    },
    {
      img_url: "/images/diamond-shapes/radiant.png",
      img_alt: "Radiant",
      label: "Radiant",
    },
    {
      img_url: "/images/diamond-shapes/oval.png",
      img_alt: "Oval",
      label: "Oval",
    },
    {
      img_url: "/images/diamond-shapes/pear.png",
      img_alt: "Pear",
      label: "Pear",
    },
    {
      img_url: "/images/diamond-shapes/marquise.png",
      img_alt: "Marquise",
      label: "Marquise",
    },
    {
      img_url: "/images/diamond-shapes/cushion.png",
      img_alt: "Cushion",
      label: "Cushion",
    },
    {
      img_url: "/images/diamond-shapes/heart.png",
      img_alt: "Heart",
      label: "Heart",
    },
    {
      img_url: "/images/diamond-shapes/fancy.png",
      img_alt: "Fancy",
      label: "Fancy",
    },
  ];

  /* Certification Data */

  const diamond_certifications = [
    {
      label: "GIA",
    },
    {
      label: "AGS",
    },
    {
      label: "EGL",
    },
    {
      label: "IGI",
    },
    {
      label: "HRD",
    },
    {
      label: "Other Labs",
    },
    {
      label: "Non Certified",
    },
  ];

  /* Carat Slider Marks */

  const carat_slider_marks = [
    {
      value: 0.1,
      label: "0.1",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 30,
      label: "30",
    },
  ];

  /* Color Slider Marks */

  const color_slider_marks = [
    {
      value: 0,
      label: "K",
    },
    {
      value: 1,
      label: "J",
    },
    {
      value: 2,
      label: "I",
    },
    {
      value: 3,
      label: "H",
    },
    {
      value: 4,
      label: "G",
    },
    {
      value: 5,
      label: "F",
    },
    {
      value: 6,
      label: "E",
    },
    {
      value: 7,
      label: "D",
    },
  ];

  /* Clarity Slider Marks */

  const clarity_slider_marks = [
    {
      value: 0,
      label: "SI2",
    },
    {
      value: 1,
      label: "SI1",
    },
    {
      value: 2,
      label: "VS2",
    },
    {
      value: 3,
      label: "VS1",
    },
    {
      value: 4,
      label: "VVS2",
    },
    {
      value: 5,
      label: "VVS1",
    },
    {
      value: 6,
      label: "IF",
    },
    {
      value: 7,
      label: "FL",
    },
  ];

  /* Cut Slider Marks */

  const cut_slider_marks = [
    {
      value: 0,
      label: "Good",
    },
    {
      value: 1,
      label: "Very good",
    },
    {
      value: 2,
      label: "Ideal",
    },
    {
      value: 3,
      label: "Astor ideal",
    },
  ];

  /* Budget Slider Marks */

  const budget_slider_marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 999999999,
      label: "999999999",
    },
  ];

  /* Stepper Functions */

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    // handleNext();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    handleComplete();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  /* Function to handle the click event for the diamond shape  */

  const onClickDiamondShape = (diamond_shape) => {
    /* Extract the latest list of selected diamond shape from the event object. */

    const selectedDiamondShapesClean = diamondShapes.includes(diamond_shape)
      ? diamondShapes.filter((_ds) => _ds !== diamond_shape)
      : [...diamondShapes, diamond_shape];

    /* Update the local state to hold the selected diamond shapes. */

    setDiamondShapes(selectedDiamondShapesClean);
  };

  /* Function to handle the click event for the certification  */

  const onClickCertification = (certification) => {
    /* Extract the latest list of selected certification from the event object. */

    const selectedCertificationsClean = diamondCertifications.includes(
      certification
    )
      ? diamondCertifications.filter((_crt) => _crt !== certification)
      : [...diamondCertifications, certification];

    /* Update the local state to hold the selected certifications. */

    setDiamondCertification(selectedCertificationsClean);
  };

  const handleSubmit = () => {
    setSubmitted(true);
    handleNext();
  };

  return (
    <React.Fragment>
      <RootDiv>
        {/* Stepper */}

        <Stepper
          nonLinear
          activeStep={activeStep}
          sx={{ pt: 3, pb: 5 }}
          orientation="vertical"
        >
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
                disabled={submitted}
              >
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>

        {/* Form Paper */}

        <CustomPaper
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 3 } }}
        >
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* Step 1: Enter Location */}

              {activeStep === 0 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    Select your location
                  </Typography>
                  <CustomFormControl>
                    <RadioGroup
                      row
                      aria-labelledby="select-location"
                      name="select-location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <FormControlLabel
                        value="india"
                        labelPlacement="top"
                        control={<Radio sx={{ display: "none" }} />}
                        label={
                          location === "india" ? (
                            <SelectedImg
                              src="/images/location/india.png"
                              height={100}
                              width={100}
                              alt="India"
                            />
                          ) : (
                            <img
                              src="/images/location/india.png"
                              height={100}
                              width={100}
                              alt="India"
                            />
                          )
                        }
                      />
                      <FormControlLabel
                        value="uae"
                        labelPlacement="top"
                        control={<Radio sx={{ display: "none" }} />}
                        label={
                          location === "uae" ? (
                            <SelectedImg
                              src="/images/location/uae.png"
                              height={100}
                              width={100}
                              alt="UAE"
                            />
                          ) : (
                            <img
                              src="/images/location/uae.png"
                              height={100}
                              width={100}
                              alt="UAE"
                            />
                          )
                        }
                      />
                      <FormControlLabel
                        value="other"
                        labelPlacement="top"
                        control={<Radio sx={{ display: "none" }} />}
                        label={
                          location === "other" ? (
                            <SelectedImg
                              src="/images/location/world.png"
                              height={100}
                              width={100}
                              alt="Other"
                            />
                          ) : (
                            <img
                              src="/images/location/world.png"
                              height={100}
                              width={100}
                              alt="Other"
                            />
                          )
                        }
                      />
                    </RadioGroup>

                    <Fade in={location === "other"}>
                      <TextField
                        sx={{
                          width: "30%",
                          margin: "1rem 0rem 0rem 0rem",
                          visibility:
                            location === "other" ? "visible" : "hidden",
                        }}
                        required
                        id="location"
                        name="location"
                        label="Enter location"
                        variant="standard"
                        value={otherLocation}
                        onChange={(e) => setOtherLocation(e.target.value)}
                      />
                    </Fade>
                  </CustomFormControl>
                </Container>
              )}

              {/* Step 2: Diamond Type */}

              {activeStep === 1 && (
                <Fade in={activeStep === 1} out={diamondType !== ""}>
                  <Container>
                    <Typography
                      variant="h3"
                      gutterBottom
                      sx={{ margin: "0rem 0rem 3rem 0rem" }}
                    >
                      So, what type of diamond are you looking for?
                    </Typography>
                    <DiamondTypeButtonRow>
                      <DiamondTypeButton
                        disableElevation
                        variant={
                          diamondType === "natural_grown"
                            ? "contained"
                            : "outlined"
                        }
                        onClick={() => {
                          setDiamondType("natural_grown");
                          // handleNext();
                        }}
                      >
                        Natural Grown
                      </DiamondTypeButton>

                      <DiamondTypeButton
                        disableElevation
                        variant={
                          diamondType === "lab_created"
                            ? "contained"
                            : "outlined"
                        }
                        onClick={() => {
                          setDiamondType("lab_created");
                          // handleNext();
                        }}
                      >
                        Lab Created
                      </DiamondTypeButton>
                    </DiamondTypeButtonRow>
                  </Container>
                </Fade>
              )}

              {/* Step 3: Diamond Shapes */}

              {activeStep === 2 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    What shapes would you prefer?
                  </Typography>
                  <DiamondShapesContainer>
                    {diamond_shapes.map((diamond_shape, key) => (
                      <StyledDiamondShape
                        key={key}
                        onClick={() => onClickDiamondShape(diamond_shape.label)}
                        selected={diamondShapes.includes(diamond_shape.label)}
                      >
                        <img
                          src={diamond_shape.img_url}
                          height={100}
                          width={100}
                          alt={diamond_shape.img_alt}
                        />
                        <Typography
                          variant="h6"
                          sx={{ margin: "1rem 0rem 0rem 0rem" }}
                        >
                          {diamond_shape.label}
                        </Typography>
                      </StyledDiamondShape>
                    ))}
                  </DiamondShapesContainer>
                </Container>
              )}

              {/* Step 4: Carat */}

              {activeStep === 3 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    Diamond carat?
                  </Typography>

                  <Row sx={{ width: "50%", margin: "0rem 0rem 2rem 0rem" }}>
                    <TextField
                      sx={{ width: "30%" }}
                      id="minCarat"
                      name="minCarat"
                      label="Min Carat"
                      variant="outlined"
                      type="number"
                      InputProps={{ inputProps: { min: 0.1, max: 30.0 } }}
                      value={diamondMinCarat}
                      onChange={(e) => setDiamondMinCarat(e.target.value)}
                    />
                    <TextField
                      sx={{ width: "30%" }}
                      id="maxCarat"
                      name="maxCarat"
                      label="Max Carat"
                      variant="outlined"
                      type="number"
                      InputProps={{ inputProps: { min: 0.1, max: 30.0 } }}
                      value={diamondMaxCarat}
                      onChange={(e) => setDiamondMaxCarat(e.target.value)}
                    />
                  </Row>
                  <CustomRangeSlider
                    sx={{ width: "50%" }}
                    min={0.1}
                    max={30.0}
                    precision={0.1}
                    value={[diamondMinCarat, diamondMaxCarat]}
                    valueLabelDisplay="auto"
                    step={0.1}
                    marks={carat_slider_marks}
                    onChange={(event, newValue) => {
                      setDiamondMinCarat(newValue[0]);
                      setDiamondMaxCarat(newValue[1]);
                    }}
                  />
                </Container>
              )}

              {/* Step 5: Color */}

              {activeStep === 4 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    Select a color range
                  </Typography>
                  <CustomRangeSlider
                    sx={{ width: "75%" }}
                    min={0}
                    max={7}
                    value={[diamondMinColor, diamondMaxColor]}
                    valueLabelDisplay="off"
                    // valueLabelFormat={(value) => {
                    //   switch (value) {
                    //     case 0:
                    //       return "K";
                    //     case 1:
                    //       return "J";
                    //     case 2:
                    //       return "I";
                    //     case 3:
                    //       return "H";
                    //     case 4:
                    //       return "G";
                    //     case 5:
                    //       return "F";
                    //     case 6:
                    //       return "E";
                    //     case 7:
                    //       return "D";
                    //     case 8:
                    //       return "D";
                    //     default:
                    //       return "";
                    //   }
                    // }}
                    step={1}
                    marks={color_slider_marks}
                    onChange={(event, newValue) => {
                      setDiamondMinColor(newValue[0]);
                      setDiamondMaxColor(newValue[1]);
                    }}
                  />
                </Container>
              )}

              {/* Step 6: Clarity */}

              {activeStep === 5 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    Select your diamond clarity range
                  </Typography>
                  <CustomRangeSlider
                    sx={{ width: "75%" }}
                    min={0}
                    max={7}
                    value={[diamondMinClarity, diamondMaxClarity]}
                    valueLabelDisplay="off"
                    step={1}
                    marks={clarity_slider_marks}
                    onChange={(event, newValue) => {
                      setDiamondMinClarity(newValue[0]);
                      setDiamondMaxClarity(newValue[1]);
                    }}
                  />
                </Container>
              )}

              {/* Step 7: Cut */}

              {activeStep === 6 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    Select a range for the cut
                  </Typography>
                  <CustomRangeSlider
                    sx={{ width: "50%" }}
                    min={0}
                    max={3}
                    value={[diamondMinCut, diamondMaxCut]}
                    valueLabelDisplay="off"
                    step={1}
                    marks={cut_slider_marks}
                    onChange={(event, newValue) => {
                      setDiamondMinCut(newValue[0]);
                      setDiamondMaxCut(newValue[1]);
                    }}
                  />
                </Container>
              )}

              {/* Step 8: Certification */}

              {activeStep === 7 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    Preferred certifications?
                  </Typography>
                  <CertificationsContainer>
                    {diamond_certifications.map((certification, key) => (
                      <StyledCertification
                        key={key}
                        onClick={() =>
                          onClickCertification(certification.label)
                        }
                        selected={diamondCertifications.includes(
                          certification.label
                        )}
                      >
                        <Typography variant="h6" sx={{ cursor: "pointer" }}>
                          {certification.label}
                        </Typography>
                      </StyledCertification>
                    ))}
                  </CertificationsContainer>
                </Container>
              )}

              {/* Step 9: Additional Notes */}

              {activeStep === 8 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    Do you have any additional notes for us?
                  </Typography>

                  <TextField
                    sx={{ width: "75%" }}
                    id="notes"
                    name="notes"
                    label="Additional Notes"
                    variant="outlined"
                    multiline
                    rows={6}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                  />
                </Container>
              )}

              {/* Step 10: Budget */}

              {activeStep === 9 && (
                <Container>
                  <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ margin: "0rem 0rem 3rem 0rem" }}
                  >
                    What is your budget?
                  </Typography>

                  <Row sx={{ width: "50%", margin: "0rem 0rem 2rem 0rem" }}>
                    <TextField
                      sx={{ width: "30%" }}
                      id="minBudget"
                      name="minBudget"
                      label="Min Budget"
                      variant="outlined"
                      type="number"
                      InputProps={{ inputProps: { min: 1 } }}
                      value={diamondMinBudget}
                      onChange={(e) => setDiamondMinBudget(e.target.value)}
                    />
                    <TextField
                      sx={{ width: "30%" }}
                      id="maxBudget"
                      name="maxBudget"
                      label="Max Budget"
                      variant="outlined"
                      type="number"
                      InputProps={{ inputProps: { min: 1 } }}
                      value={diamondMaxBudget}
                      onChange={(e) => setDiamondMaxBudget(e.target.value)}
                    />
                  </Row>
                  <CustomRangeSlider
                    sx={{ width: "50%" }}
                    min={1}
                    max={999999999}
                    precision={1}
                    value={[diamondMinBudget, diamondMaxBudget]}
                    valueLabelDisplay="auto"
                    step={1}
                    marks={budget_slider_marks}
                    onChange={(event, newValue) => {
                      setDiamondMinBudget(newValue[0]);
                      setDiamondMaxBudget(newValue[1]);
                    }}
                  />
                </Container>
              )}

              {/* Step 11: Contact Details */}

              {activeStep === 10 && (
                <Container sx={{ gap: "2rem" }}>
                  <Typography variant="h3" gutterBottom>
                    How can we reach you?
                  </Typography>
                  <ContactTextField
                    required
                    id="name"
                    name="name"
                    label="Name*"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <ContactTextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <ContactTextField
                    id="phone"
                    name="phone"
                    label="Phone"
                    variant="standard"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <FormControlLabel
                    sx={{ width: "40%" }}
                    control={
                      <Checkbox
                        name="agree"
                        checked={agree}
                        onChange={() => {
                          setAgree(!agree);
                        }}
                      />
                    }
                    label="I agree to share my details with Mahala Almas."
                  />
                </Container>
              )}

              {/* Buttons */}

              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  // onClick={handleNext}
                  onClick={
                    activeStep === steps.length - 1 ? handleSubmit : handleNext
                  }
                  sx={{ mt: 3, ml: 1 }}
                  disabled={
                    activeStep === 0
                      ? location === "" ||
                        (location === "other" && otherLocation === "")
                      : activeStep === 1
                      ? diamondType === ""
                      : activeStep === 10
                      ? name === "" || !agree
                      : false
                  }
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </CustomPaper>
      </RootDiv>
      <Copyright />
    </React.Fragment>
  );
}
