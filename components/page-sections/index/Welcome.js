/* Common Imports */

import React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

/* Component Imports */

import {
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
  Link,
} from "@mui/material";

/* Icon Imports */

import { Close, DiamondOutlined } from "@mui/icons-material";

/* Styled Components */

const RootDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "90vh",
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  // gap: "15rem",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "0.5rem",
}));

const CustomImg = styled("img")(({ theme }) => ({
  width: "20rem",
  height: "7rem",
  margin: "0rem 0rem 4rem 0rem",
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

export default function Welcome() {
  const theme = useTheme();

  /* Modal States */

  const [modalOpen, setModalOpen] = React.useState(false);

  const Router = useRouter();

  const handleClickModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <RootDiv>
        {/* How it works Modal */}

        <Dialog
          onClose={handleModalClose}
          aria-labelledby="customized-dialog-title"
          open={modalOpen}
          disableScrollLock
          sx={{
            background: theme.palette.background.default,
          }}
        >
          <DialogTitle
            sx={{
              padding: "1rem 1.5rem 1rem 1.5rem",
              background: theme.palette.background.default,
              color: theme.palette.primary.main,
              fontWeight: "bold",
              fontFamily: "Albra",
            }}
            id="customized-dialog-title"
          >
            {"How it works ?"}
            <IconButton
              aria-label="close"
              onClick={handleModalClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <Close />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ background: theme.palette.background.default }}>
            <Typography variant="body1" fontWeight="bold">
              Looking for the diamond of your dreams? Look no further! Our
              diamond search is here to make your search a breeze. Start by
              picking your location, then decide between natural or lab-grown
              diamonds. Get creative and choose the shape, carat weight, color
              range, clarity level, cut style, and even fluorescence that suits
              your style. Want that extra peace of mind? Pick your preferred
              grading certificate! And hey, if you have any special requests,
              just drop them in the special request box. Mahala Almas is your
              go-to for finding that perfect sparkler, tailored just for you!
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{
                margin: "1rem 0rem 0rem 0rem",
              }}
            >
              Once all details are provided, our team will respond to you within
              12 hours with a curated list of diamonds that meet your
              specifications.
            </Typography>
          </DialogContent>

          <DialogActions
            sx={{
              padding: "0rem 1rem 1rem 0rem",
              background: theme.palette.background.default,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={(event) => {
                Router.push("/form");
              }}
            >
              Get Started
            </Button>
          </DialogActions>
        </Dialog>

        {/* Welcome Page */}

        <Container>
          <CustomImg src="/images/logo.png" alt="diamond" />
          <ButtonContainer>
            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              variant="contained"
              href="/form"
              endIcon={<DiamondOutlined />}
              sx={{
                "&.MuiButton-contained": {
                  background: "#282119",
                  border: "1px solid #282119",
                  "@media (pointer: fine)": {
                    "&:hover": {
                      background: "#515B60",
                      border: "1px solid #515B60",
                      boxShadow: "none",
                    },
                  },
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80%",
                },
              }}
            >
              Find Your Perfect Diamond
            </Button>

            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              variant="text"
              onClick={handleClickModalOpen}
              sx={{ color: "#C99964" }}
            >
              How It Works?
            </Button>

            <Link
              href="mailto:mahalaalmas@gmail.com"
              target="_blank"
              referrer="_self"
              sx={{
                position: "absolute",
                bottom: 20,
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "0.875rem",
                "@media (pointer: fine)": {
                  "&:hover": {
                    // color: "#C99964",
                    textDecoration: "underline",
                  },
                },
              }}
            >
              Work With Us
            </Link>
          </ButtonContainer>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
