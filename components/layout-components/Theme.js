/*

Our theme is going to use a custom color palette but we have not defined any new types yet, so there is no need for module augmentation. However, Before beginning frontend development it might be wise to define some custom colors in our palette.

*/
const Styles = {
  light: {
    // palette values for light mode
    primary: {
      main: "#5B7BB6",
      light: "#CCDCF3",
      dark: "#be3b03",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#CCCCCC",
    },
    error: {
      main: "#F44336",
      light: "#FF7961",
      dark: "#BA000d",
    },
    background: {
      default: "#F5F6FB",
    },
    text: {
      primary: "#000000",
    },
  },
  dark: {
    // palette values for dark mode
    primary: {
      main: "#f76c35",
      light: "#ff9d62",
      dark: "#be3b03",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#CCCCCC",
    },
    error: {
      main: "#F44336",
      light: "#FF7961",
      dark: "#BA000D",
    },
    background: {
      default: "#161C24",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
};

const GetDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" ? Styles.dark : Styles.light),
  },
  typography: {
    fontFamily: ', "Roboto", "Helvetica", "Arial", sans-serif',
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 280.05,
      xsPlus: 540,
      sm: 600,
      smPlus: 768,
      sm822: 822,
      sm860: 860,
      sm910: 910,
      md: 960,
      md1190: 1190,
      md1220: 1220,
      lg: 1280,
      lgPlus: 1366,
      xl: 1920,
      xxl: 2560,
      xxxl: 3840,
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          display: "none",
        },
      },
    },
  },
});

export default GetDesignTokens;
