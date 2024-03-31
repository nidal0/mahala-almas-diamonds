/* React Imports */

import React from "react";
import { Helmet } from "react-helmet";
import { withRouter, useRouter } from "next/router";

/* Component Imports */

import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import Header from "./Header";
import Container from "./Container";

const Layout = ({
  keywords,
  description,
  canonicalUrl,
  //   ogImageParams,
  noContain,
  children,
  noLayoutHeader,
}) => {
  const theme = useTheme();
  const Router = useRouter();

  const [modalOpen, setModalOpen] = React.useState(false);
  // const [scrollY, setScrollY] = React.useState(0);
  // const [negativeScroll, setNegativeScroll] = React.useState(true);

  // React.useEffect(() => {
  //   /* First let's define an event listener */

  //   const handleScroll = () => {
  //     if (window.scrollY < scrollY) {
  //       setNegativeScroll(true);
  //     } else {
  //       setNegativeScroll(false);
  //     }
  //     setScrollY(window.scrollY);
  //   };
  //   /* Now we can add the event listener */

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollY]);

  return (
    <React.Fragment>
      {/* Go to home page modal */}

      <Dialog
        onClose={() => {
          setModalOpen(false);
        }}
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
          }}
          id="customized-dialog-title"
        >
          {"Are you sure you want to go to the home page ?"}
        </DialogTitle>

        <DialogActions
          sx={{
            padding: "0rem 1rem 1rem 0rem",
            background: theme.palette.background.default,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            No
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              Router.push("/");
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Main Component */}

      <div id="rootDiv">
        <Header
          keywords={keywords ? keywords : "almas, diamonds, mahala, uae, india"}
          description={
            description
              ? description
              : "Mahala Almas helps you find the diamond that ou want."
          }
          title={"Mahala Almas"}
          canonicalUrl={canonicalUrl ? canonicalUrl : "/"}
          //   ogImageParams={
          //     ogImageParams
          //       ? ogImageParams
          //       : {
          //           ogImageUrl:
          //             process.env.CDN_URL + "images/icons/logo/og_512.jpg",
          //           ogImageType: "image/jpeg",
          //           ogImageWidth: 512,
          //           ogImageHeight: 512,
          //         }
          //   }
        />
        <Helmet>
          <html />
        </Helmet>

        {noLayoutHeader ? null : (
          <AppBar
            position="fixed"
            sx={{
              background: theme.palette.background.default,
            }}
            elevation={1}
          >
            <Toolbar
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                // backdropFilter: scrollY !== 0 ? "blur(1rem)" : "",
                [theme.breakpoints.down("sm")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: theme.palette.primary.main, cursor: "pointer" }}
                onClick={(event) => {
                  setModalOpen(true);
                }}
              >
                Mahala Almas
              </Typography>
            </Toolbar>
          </AppBar>
        )}

        {children && noContain ? (
          React.Children.map(children, (child, key) =>
            noContain?.includes(key) ? (
              <React.Fragment>
                <Container key={key} noContain={noContain?.length > 0}>
                  {child}
                </Container>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Container key={key} noContain={false}>
                  {child}
                </Container>
              </React.Fragment>
            )
          )
        ) : (
          <React.Fragment>
            <Container noContain={false}>{children}</Container>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default withRouter(Layout);
