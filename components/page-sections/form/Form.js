/* Common Imports */

import * as React from "react";
import { styled } from "@mui/system";

/* Component Imports */

import {
  useTheme,
  Box,
  Paper,
  Stepper,
  MobileStepper,
  Step,
  StepButton,
  Button,
  // Link,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  Fade,
  Slider,
  Snackbar,
  InputAdornment,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

/* Firebase Imports */

import { db } from "../../../firebase_config";
import { collection, addDoc } from "firebase/firestore";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  height: "45rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "2rem 2rem 0rem 2rem",
  padding: "2rem 2rem 2rem 2rem",
  width: "80%",
  height: "100%",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    margin: "2rem 0rem 2rem 0rem",
    padding: "2rem 0.5rem 2rem 0.5rem",
  },
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    gap: "1rem",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "400",
  textAlign: "center",
  fontSize: "3rem",
  margin: "0rem 0rem 2rem 0rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    gap: "0.5rem",
  },
}));

const CustomImg = styled("img")(({ theme }) => ({
  height: "100px",
  width: "100px",
  [theme.breakpoints.down("sm")]: {
    height: "70px",
    width: "70px",
  },
}));

const SelectedImg = styled("img")(({ theme }) => ({
  border: "4px solid #43A047",
  borderRadius: "50%",
  padding: "0.2rem",
  height: "100px",
  width: "100px",
  [theme.breakpoints.down("sm")]: {
    border: "3px solid #43A047",
    padding: "0.15rem",
    height: "70px",
    width: "70px",
  },
}));

const DiamondTypeButtonRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1.5em",
  },
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
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SliderTextfieldsRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "50%",
  margin: "0rem 0rem 2rem 0rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
    gap: "2rem",
    margin: "0rem 0rem 1rem 0rem",
  },
}));

const CaratTextField = styled(TextField)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const CustomRangeSlider = styled(Slider)(({ theme }) => ({
  "&.MuiSlider-markLabel": {
    background: "#ffffff",
    color: "#5B7BB6",
  },
  width: "30%",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
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

const CustomDiamondShapeImg = styled("img")(({ theme }) => ({
  height: "50px",
  width: "50px",
}));

const DiamondShapeLabel = styled(Typography)(({ theme }) => ({
  margin: "0.5rem 0rem 0rem 0rem",
  fontWeight: "400",
  textAlign: "center",
  fontSize: "1rem",
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

const ContactTextField = styled(TextField)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

/* Copyright */

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="#">
//         Mahala Almas
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

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

const phone_steps = [
  { label: "Location" },
  { label: "Diamond Type" },
  { label: "Shapes" },
  { label: "Carat" },
  { label: "Color" },
  { label: "Clarity" },
  { label: "Cut" },
  { label: "Certification" },
  { label: "Additional Notes" },
  { label: "Budget" },
  { label: "Contact Details" },
];

export default function Form() {
  /* Stepper States */

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  /* Input States */

  const [location, setLocation] = React.useState("");
  const [otherLocation, setOtherLocation] = React.useState("");
  const [diamondType, setDiamondType] = React.useState("");
  const [diamondShapes, setDiamondShapes] = React.useState([]);
  const [diamondMinCarat, setDiamondMinCarat] = React.useState(0.1);
  const [diamondMaxCarat, setDiamondMaxCarat] = React.useState(30);
  const [diamondMinColor, setDiamondMinColor] = React.useState(0);
  const [diamondMaxColor, setDiamondMaxColor] = React.useState(7);
  const [diamondMinClarity, setDiamondMinClarity] = React.useState(0);
  const [diamondMaxClarity, setDiamondMaxClarity] = React.useState(7);
  const [diamondMinCut, setDiamondMinCut] = React.useState(0);
  const [diamondMaxCut, setDiamondMaxCut] = React.useState(3);
  const [diamondCertifications, setDiamondCertification] = React.useState([]);
  const [additionalNotes, setAdditionalNotes] = React.useState("");
  const [diamondBudget, setDiamondBudget] = React.useState();
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
    return completedSteps() === steps.length - 1;
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

  /* Snackbar Functions  */

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  /* Function to handle the click event for the submit button  */

  const handleSubmit = async () => {
    /* Storing data in Firestore */

    try {
      const docRef = await addDoc(
        collection(db, "diamond-requirement-form-submissions"),
        {
          name: name,
          email: email,
          phone: phone,
          agree_to_terms: agree,
          location: location,
          other_location: otherLocation,
          diamond_type: diamondType,
          diamond_shapes: diamondShapes,
          diamond_carat: {
            min: diamondMinCarat,
            max: diamondMaxCarat,
          },
          diamond_color: {
            min: color_slider_marks[diamondMinColor].label,
            max: color_slider_marks[diamondMaxColor].label,
          },
          diamond_clarity: {
            min: clarity_slider_marks[diamondMinClarity].label,
            max: clarity_slider_marks[diamondMaxClarity].label,
          },
          diamond_cut: {
            min: cut_slider_marks[diamondMinCut].label,
            max: cut_slider_marks[diamondMaxCut].label,
          },
          diamondCertifications: diamondCertifications,
          additionalNotes: additionalNotes,
          diamond_budget: diamondBudget,
        }
      );
      setSubmitted(true);
      setSnackbarOpen(true);
      handleNext();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const theme = useTheme();

  return (
    <React.Fragment>
      {/* Snackbar */}

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Submitted successfully!
        </Alert>
      </Snackbar>
      <RootDiv>
        {/* <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            width: "100%",
            // bgcolor: "#000000",
          }}
        >
          <Typography>{phone_steps[activeStep].label}</Typography>
        </Paper> */}
        {/* Desktop Stepper */}

        <Stepper
          nonLinear
          activeStep={activeStep}
          orientation="vertical"
          sx={{
            padding: "2rem 0rem 0rem 0rem",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={index} completed={completed[index]}>
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
                disabled={submitted}
              >
                {step}
              </StepButton>
            </Step>
          ))}
        </Stepper>

        {/* Form Paper */}

        <CustomPaper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Container>
                <Title variant="h3">Thank You for your time</Title>
                <Typography variant="subtitle1">
                  Now just sit back and relax while we find your perfect
                  diamond.
                </Typography>
              </Container>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* Step 1: Enter Location */}

              {activeStep === 0 && (
                <Container>
                  <Title variant="h3">Select your location</Title>
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
                            <CustomImg
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
                            <CustomImg
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
                            <CustomImg
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
                          [theme.breakpoints.down("sm")]: {
                            width: "80%",
                          },
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
                    <Title variant="h3">
                      So, what type of diamond are you looking for?
                    </Title>
                    <DiamondTypeButtonRow>
                      <DiamondTypeButton
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        size="large"
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
                        disableFocusRipple
                        disableRipple
                        size="large"
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
                  <Title variant="h3">What shapes would you prefer?</Title>
                  <DiamondShapesContainer>
                    {diamond_shapes.map((diamond_shape, key) => (
                      <StyledDiamondShape
                        key={key}
                        onClick={() => onClickDiamondShape(diamond_shape.label)}
                        selected={diamondShapes.includes(diamond_shape.label)}
                      >
                        <CustomDiamondShapeImg
                          src={diamond_shape.img_url}
                          height={100}
                          width={100}
                          alt={diamond_shape.img_alt}
                        />
                        <DiamondShapeLabel variant="h6">
                          {diamond_shape.label}
                        </DiamondShapeLabel>
                      </StyledDiamondShape>
                    ))}
                  </DiamondShapesContainer>
                </Container>
              )}

              {/* Step 4: Carat */}

              {activeStep === 3 && (
                <Container>
                  <Title variant="h3">Diamond carat?</Title>

                  <SliderTextfieldsRow>
                    <CaratTextField
                      id="minCarat"
                      name="minCarat"
                      label="Min Carat"
                      variant="outlined"
                      type="number"
                      InputProps={{ inputProps: { min: 0.1, max: 30.0 } }}
                      value={diamondMinCarat}
                      onChange={(e) => setDiamondMinCarat(e.target.value)}
                    />
                    <CaratTextField
                      id="maxCarat"
                      name="maxCarat"
                      label="Max Carat"
                      variant="outlined"
                      type="number"
                      InputProps={{ inputProps: { min: 0.1, max: 30.0 } }}
                      value={diamondMaxCarat}
                      onChange={(e) => setDiamondMaxCarat(e.target.value)}
                    />
                  </SliderTextfieldsRow>
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
                  <Title variant="h3">Select a color range</Title>
                  <CustomRangeSlider
                    sx={{ width: "75%" }}
                    min={0}
                    max={7}
                    value={[diamondMinColor, diamondMaxColor]}
                    valueLabelDisplay="off"
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
                  <Title variant="h3">Select your diamond clarity range</Title>
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
                  <Title variant="h3">Select a range for the cut</Title>
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
                  <Title variant="h3">Preferred certifications?</Title>
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
                  <Title variant="h3">
                    Do you have any additional notes for us?
                  </Title>

                  <TextField
                    sx={{
                      width: "75%",
                      [theme.breakpoints.down("sm")]: {
                        width: "90%",
                      },
                    }}
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
                  <Title variant="h3">What is your budget?</Title>

                  <TextField
                    sx={{ width: "100%" }}
                    id="budget"
                    name="budget"
                    label="Budget"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      inputProps: { min: 1 },
                      startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                      ),
                    }}
                    value={diamondBudget}
                    onChange={(e) => setDiamondBudget(e.target.value)}
                  />
                </Container>
              )}

              {/* Step 11: Contact Details */}

              {activeStep === 10 && (
                <Container sx={{ gap: "2rem" }}>
                  <Title variant="h3">How can we reach you?</Title>
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
                    sx={{
                      width: "50%",
                      [theme.breakpoints.down("sm")]: {
                        width: "85%",
                      },
                    }}
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

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "0rem 0rem 2rem 0rem",
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                }}
              >
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={
                      name === "" ||
                      !agree ||
                      submitted ||
                      allStepsCompleted() === false
                    }
                  >
                    {"Submit"}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={
                      activeStep === 0
                        ? location === "" ||
                          (location === "other" && otherLocation === "")
                        : activeStep === 1
                        ? diamondType === ""
                        : false
                    }
                  >
                    {"Next"}
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}

          {/* Phone Stepper */}

          <MobileStepper
            variant="text"
            steps={phone_steps.length}
            sx={{
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            }}
            position="bottom"
            activeStep={activeStep}
            nextButton={
              activeStep === phone_steps.length - 1 ? (
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{ mr: 1 }}
                  disabled={
                    name === "" ||
                    !agree ||
                    submitted ||
                    allStepsCompleted() === false
                  }
                >
                  {"Submit"}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mr: 1 }}
                  disabled={
                    activeStep === 0
                      ? location === "" ||
                        (location === "other" && otherLocation === "")
                      : activeStep === 1
                      ? diamondType === ""
                      : false
                  }
                >
                  {"Next"}
                </Button>
              )
            }
            backButton={
              <Button
                variant="outlined"
                onClick={handleBack}
                sx={{
                  ml: 1,
                  visibility: activeStep !== 0 ? "visible" : "hidden",
                }}
              >
                Back
              </Button>
            }
          />
        </CustomPaper>
      </RootDiv>
      {/* <Copyright /> */}
    </React.Fragment>
  );
}
