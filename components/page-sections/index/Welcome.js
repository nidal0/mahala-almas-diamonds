/* Common Imports */

import * as React from "react";
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
  justifyContent: "space-around",
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
          disableScrollLock
          sx={{
            background: theme.palette.primary.background,
          }}
        >
          <DialogTitle
            sx={{
              padding: "1rem 1.5rem 1rem 1.5rem",
              background: theme.palette.background.default,
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
            <Typography>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
          </DialogContent>

          <DialogActions
            sx={{
              padding: "0rem 1rem 1rem 0rem",
              background: theme.palette.background.default,
            }}
          >
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
            Mahala Almas
          </Title>
          <ButtonContainer>
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
              Find your perfect diamond
            </Button>

            <Button
              disableElevation
              disableFocusRipple
              disableRipple
              variant="text"
              color="primary"
              onClick={handleClickModalOpen}
            >
              How it works?
            </Button>
          </ButtonContainer>
        </Container>
      </RootDiv>
    </React.Fragment>
  );
}
