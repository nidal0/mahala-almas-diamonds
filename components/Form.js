/* Common Imports */

import * as React from "react";

/* Component Imports */

import {
  CssBaseline,
  AppBar,
  Box,
  Container,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
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
  FormLabel,
} from "@mui/material";

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
  "Welcome",
  "Select your location",
  "Diamonds",
  "Criteria",
  "Additional Info",
];

export default function Form() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [location, setLocation] = React.useState("");
  const [diamondType, setDiamondType] = React.useState("");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Mahala Almas
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel />
              </Step>
            ))}
          </Stepper>

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
              {/* Step 1: Welcome */}

              {activeStep === 0 && (
                <Typography variant="h6" gutterBottom>
                  Welcome to Mahala Almas
                </Typography>
              )}

              {/* Step 2: Select Location */}

              {activeStep === 1 && (
                <FormControl>
                  <FormLabel id="select-location">
                    Select your location
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="select-location"
                    name="select-location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <FormControlLabel
                      value="india"
                      control={<Radio />}
                      label="India"
                    />
                    <FormControlLabel
                      value="uae"
                      control={<Radio />}
                      label="UAE"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                    {location === "other" && (
                      <TextField
                        required
                        id="location"
                        name="location"
                        label="Enter location"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    )}
                  </RadioGroup>
                </FormControl>
              )}

              {/* Step 3: Diamond Type */}

              {activeStep === 2 && (
                <FormControl>
                  <FormLabel id="select-diamond-type">
                    So, what type of diamond are you looking for?
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="select-diamond-type"
                    defaultValue="natural_grown"
                    name="select-diamond-type"
                    value={diamondType}
                    onChange={(e) => setDiamondType(e.target.value)}
                  >
                    <FormControlLabel
                      value="natural_grown"
                      control={<Radio />}
                      label="Natural Grown"
                    />
                    <FormControlLabel
                      value="lab_created"
                      control={<Radio />}
                      label="Lab Created"
                    />
                  </RadioGroup>
                </FormControl>
              )}

              {/* Step 4 */}

              {activeStep === 4 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="family-name"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address1"
                      name="address1"
                      label="Address line 1"
                      fullWidth
                      autoComplete="shipping address-line1"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="address2"
                      name="address2"
                      label="Address line zzzz"
                      fullWidth
                      autoComplete="shipping address-line2"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="shipping address-level2"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="state"
                      name="state"
                      label="State/Province/Region"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="Zip / Postal code"
                      fullWidth
                      autoComplete="shipping postal-code"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="country"
                      name="country"
                      label="Country"
                      fullWidth
                      autoComplete="shipping country"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="secondary"
                          name="saveAddress"
                          value="yes"
                        />
                      }
                      label="Use this address for payment details"
                    />
                  </Grid>
                </Grid>
              )}

              {/* Step 3 */}

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
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
