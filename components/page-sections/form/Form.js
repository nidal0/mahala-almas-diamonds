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
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  Fade,
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

const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  width: "80%",
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

const ContactTextField = styled(TextField)(({ theme }) => ({
  width: "40%",
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

const steps = [
  "Location",
  "Diamond Type",
  "Shape",
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

  /* Input States */

  const [location, setLocation] = React.useState("");
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
  const [diamondCertification, setDiamondCertification] = React.useState([]);
  const [additionalNotes, setAdditionalNotes] = React.useState("");
  const [diamondMinBudget, setDiamondMinBudget] = React.useState(0);
  const [diamondMaxBudget, setDiamondMaxBudget] = React.useState(1000000);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [agree, setAgree] = React.useState(false);

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

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  /* Diamond Type useEffect */

  React.useEffect(() => {
    if (diamondType === "natural_grown" || diamondType === "lab_created") {
      handleNext();
    }
  }, [diamondType]);

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
              <StepButton color="inherit" onClick={handleStep(index)}>
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
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </Fade>
                  </CustomFormControl>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {"Next"}
                  </Button>
                </Container>
              )}

              {/* Step 2: Diamond Type */}

              {activeStep === 1 && (
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
                        handleNext();
                      }}
                    >
                      Natural Grown
                    </DiamondTypeButton>

                    <DiamondTypeButton
                      disableElevation
                      variant={
                        diamondType === "lab_created" ? "contained" : "outlined"
                      }
                      onClick={() => {
                        setDiamondType("lab_created");
                        handleNext();
                      }}
                    >
                      Lab Created
                    </DiamondTypeButton>
                  </DiamondTypeButtonRow>
                </Container>
              )}

              {/* Step 9: Additional Notes */}

              {activeStep === 8 && (
                <Container>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="notes"
                        name="notes"
                        label="Additional Notes"
                        variant="outlined"
                        multiline
                        rows={6}
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </Container>
              )}

              {/* Step 11: Contact Details */}

              {activeStep === 10 && (
                <Container sx={{ gap: "2rem" }}>
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
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
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
