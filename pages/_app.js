/* Common Imports */

import React from "react";

/* Global CSS Imports */

import "@/styles/globals.css";

/* Theme Imports */

import { ThemeProvider } from "@mui/material/styles";
import { createTheme, CssBaseline } from "@mui/material";
import GetDesignTokens from "../components/layout-components/Theme";

export default function App({ Component, pageProps }) {
  const mode = "dark";

  const theme = React.useMemo(() => createTheme(GetDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} theme={theme} />
    </ThemeProvider>
  );
}
