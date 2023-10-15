/* Common Imports */

import * as React from "react";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

/* Component Imports */

import {
  Button,
  Typography,
  Fade,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useTheme,
} from "@mui/material";

/* Icon Imports */

import { Close } from "@mui/icons-material";

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
  gap: "3rem",
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "1.5rem",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
    padding: "0rem 0.5rem 0rem 0.5rem",
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
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Modal title
          </DialogTitle>
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
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              onClick={(event) => {
                Router.push("/form");
              }}
            >
              Get started
            </Button>
          </DialogActions>
        </Dialog>

        {/* Welcome Page */}

        <Container>
          <Title variant="h1" align="center">
            Welcome to Mahala Almas
          </Title>
          <ButtonContainer>
            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              variant="outlined"
              color="primary"
              onClick={handleClickModalOpen}
              sx={{
                [theme.breakpoints.down("sm")]: {
                  width: "80%",
                },
              }}
            >
              How it works?
            </Button>
            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              variant="outlined"
              color="primary"
              onClick={(event) => {
                Router.push("/form");
              }}
              sx={{
                [theme.breakpoints.down("sm")]: {
                  width: "80%",
                },
              }}
            >
              Enter to find your perfect diamond
            </Button>
          </ButtonContainer>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
