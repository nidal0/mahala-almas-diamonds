/*

Our theme is going to use a custom color palette but we have not defined any new types yet, so there is no need for module augmentation. However, Before beginning frontend development it might be wise to define some custom colors in our palette.

*/
const Styles = {
  light: {
    // palette values for light mode
    primary: {
      main: "#282119",
      light: "#E9D6C1",
      dark: "#DDDCE3",
    },
    secondary: {
      main: "#D4AD82",
      light: "#E9D6C1",
      dark: "#FFEAAC",
    },
    error: {
      main: "#FBF7F5",
      light: "#FBF7F5",
      dark: "#FBF7F5",
    },
    background: {
      default: "#FFFFFF",
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
    fontFamily: "Montserrat",
    // fontFamily:
    //   '."Montserrat", "Roboto", "Albra", "Helvetica", "Arial", sans-serif',
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
            background: "#D4AD82",
            border: "1px solid #D4AD82",
            color: "#FFFFFF",
            boxShadow: "none",
            "&.Mui-disabled": {
              background: "#DDDCE3",
              border: "1px solid #DDDCE3",
              color: "#9E9E9E",
            },
            "@media (pointer: fine)": {
              "&:hover": {
                background: "#B97F43",
                border: "1px solid #B97F43",
                boxShadow: "none",
              },
            },
          },
          "&.MuiButton-outlined": {
            background: "transparent",
            border: "1px solid #282119",
            color: "#282119",
            boxShadow: "none",
            "&.Mui-disabled": {
              background: "#DDDCE3",
              border: "1px solid #DDDCE3",
              color: "#9E9E9E",
            },
            "@media (pointer: fine)": {
              "&:hover": {
                background: "#E9D6C1",
                boxShadow: "none",
              },
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#E9D6C1",
          borderRadius: "0.5rem",
          "& .MuiFilledInput-root": {
            background: "#E9D6C1",
            borderRadius: "0.5rem",
            // "& .Mui-error": {
            //   color: "red",
            // },
            // "& .MuiFormHelperText-root": {
            //   color: "red",
            // },
            "& fieldset": {
              background: "#E9D6C1",
            },
            "&:hover": {
              background: "#E9D6C1",
            },
            "&.Mui-focused": {
              background: "#E9D6C1",
            },
          },
        },
      },
    },
  },
});

export default GetDesignTokens;
