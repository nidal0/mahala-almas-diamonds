/*

Our theme is going to use a custom color palette but we have not defined any new types yet, so there is no need for module augmentation. However, Before beginning frontend development it might be wise to define some custom colors in our palette.

*/
const Styles = {
  light: {
    // palette values for light mode
    primary: {
      main: "#2E3180",
      light: "#D0DDFF",
      dark: "#DDDCE3",
    },
    secondary: {
      main: "#FFDD67",
      light: "#FFF0BD",
      dark: "#FFEAAC",
    },
    error: {
      main: "#FBF7F5",
      light: "#FBF7F5",
      dark: "#FBF7F5",
    },
    background: {
      default: "#FFFDF7",
      textfield: "#FFF0BB",
    },
    text: {
      primary: "#000000",
      disabled: "#C1C1D3",
    },
  },
  dark: {
    // palette values for dark mode
    primary: {
      main: "#18FFFF",
      light: "#FFFFFF",
      dark: "#be3b03",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#CCCCCC",
    },
    error: {
      main: "#283593",
      light: "#CCDCF3",
      dark: "#5B7BB6",
    },
    background: {
      default: "#121212",
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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
          "&.MuiButton-contained": {
            background: "#FFDD67",
            border: "1px solid #FFDD67",
            color: "#2E3180",
            boxShadow: "none",
            "&.Mui-disabled": {
              background: "#DDDCE3",
              border: "1px solid #DDDCE3",
              color: "#9E9E9E",
            },
            "&:hover": {
              background: "#FFE483",
              boxShadow: "none",
            },
          },
          "&.MuiButton-outlined": {
            background: "transparent",
            border: "1px solid #2E3180",
            color: "#2E3180",
            boxShadow: "none",
            "&.Mui-disabled": {
              background: "#DDDCE3",
              border: "1px solid #DDDCE3",
              color: "#9E9E9E",
            },
            "&:hover": {
              background: "#FFFAEB",
              boxShadow: "none",
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FFF0BB",
          borderRadius: "0.5rem",
          "& .MuiFilledInput-root": {
            background: "#FFF0BB",
            borderRadius: "0.5rem",
            "& fieldset": {
              background: "#FFF0BB",
            },
            "&:hover": {
              background: "#FFF0BB",
            },
            "&.Mui-focused": {
              background: "#FFF0BB",
            },
          },
        },
      },
    },
  },
});

export default GetDesignTokens;
