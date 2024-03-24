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
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  Fade,
  Slide,
  Slider,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";

/* Icon Imports */

import { Done, LocationOn } from "@mui/icons-material";

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
  height: "auto",
  margin: "4rem 0rem 0rem 0rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  // /* XXS breakpoint */
  // [theme.breakpoints.up("xxs")]: {},
  // /* iphone 5 */
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 39)]: {},
  // /*galaxy S8+ - 360*/
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 78)]: {},
  // /*iphone se - 375*/
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 94)]: {},
  // /* iphone 12 pro and pixel - 390 */
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 108.95)]: {},
  // /*iphone XR - 414*/
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 130)]: {},
  // [theme.breakpoints.up("xsPlus")]: {},
  // [theme.breakpoints.up("sm")]: {},
  // /*ipad Mini */
  // [theme.breakpoints.up(theme.breakpoints.values.sm + 167)]: {},
  // /* ipad Air*/
  // [theme.breakpoints.up(theme.breakpoints.values.sm + 219)]: {},
  // [theme.breakpoints.up("md")]: {},
  // /* MDLG Breakpoint iPadPro*/
  // [theme.breakpoints.up(theme.breakpoints.values.md + 64)]: {},
  // /*720p and 768p breakpoint */
  // [theme.breakpoints.up("lg")]: {},
  // /* 1080p 125% breakpoint*/
  // [theme.breakpoints.up(theme.breakpoints.values.lg + 150)]: {},
  // /* 1080p breakpoint*/
  // [theme.breakpoints.up("xl")]: {},
  // /* XXL breakpoint  2560p*/
  // [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {},
  // /*4k breakpoint 3840p*/
  // [theme.breakpoints.up(theme.breakpoints.values.xl + 1920)]: {},
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem 2rem 2rem 2rem",
  padding: "2rem 2rem 2rem 2rem",
  width: "80%",
  minHeight: "93vh",
  gap: "4rem",
  background: theme.palette.background.default,
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    minHeight: "91vh",
    margin: "0rem 0rem 0rem 0rem",
    padding: "1rem 1.1rem 4rem 1.1rem",
  },
  // /* XXS breakpoint */
  // [theme.breakpoints.up("xxs")]: { width: "100%" },
  // /* iphone 5 */
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 39)]: {
  //   minHeight: "10rem",
  // },
  // /*galaxy S8+ - 360*/
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 78)]: {
  //   minHeight: "65rem",
  // },
  // /*iphone se - 375*/
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 94)]: {
  //   minHeight: "10rem",
  // },
  // /* iphone 12 pro and pixel - 390 */
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 108.95)]: {
  //   minHeight: "5rem",
  // },
  // /*iphone XR - 414*/
  // [theme.breakpoints.up(theme.breakpoints.values.xs + 130)]: {
  //   minHeight: "65rem",
  // },
  // [theme.breakpoints.up("xsPlus")]: { minHeight: "65rem" },
  // [theme.breakpoints.up("sm")]: { minHeight: "65rem" },
  /*ipad Mini */
  [theme.breakpoints.up(theme.breakpoints.values.sm + 167)]: {
    width: "100%",
    minHeight: "93vh",
    margin: "1rem 0rem 2rem 0rem",
  },
  // /* ipad Air*/
  [theme.breakpoints.up(theme.breakpoints.values.sm + 219)]: {
    minHeight: "93vh",
  },
  [theme.breakpoints.up("md")]: { width: "100%", minHeight: "93vh" },
  /* MDLG Breakpoint iPadPro*/
  [theme.breakpoints.up(theme.breakpoints.values.md + 64)]: {
    width: "70%",
    minHeight: "93vh",
  },
  /*720p and 768p breakpoint */
  [theme.breakpoints.up("lg")]: { width: "80%", margin: "1rem 2rem 2rem 2rem" },
  /* 1080p 125% breakpoint*/
  [theme.breakpoints.up(theme.breakpoints.values.lg + 150)]: {
    minHeight: "93vh",
  },
  /* 1080p breakpoint*/
  [theme.breakpoints.up("xl")]: { minHeight: "93vh" },
  /* XXL breakpoint  2560p*/
  [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {
    minHeight: "85rem",
  },
  /*4k breakpoint 3840p*/
  [theme.breakpoints.up(theme.breakpoints.values.xl + 1920)]: {
    minHeight: "50vh",
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
  fontWeight: "600",
  textAlign: "center",
  fontSize: "2.5rem",
  margin: "0rem 0rem 2rem 0rem",
  [theme.breakpoints.down("sm")]: {
    margin: "0rem 0rem 1rem 0rem",
    fontWeight: "600",
    fontSize: "1.625rem",
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

const RadioGroupContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  rowGap: "1.5rem",
  columnGap: "2rem",
  flexWrap: "wrap",
  [theme.breakpoints.only("xxs")]: {
    width: "100%",
    rowGap: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    columnGap: "1.5rem",
  },
}));

const CustomFormControlLabel = styled(FormControlLabel, {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  width: "48%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.75rem 1rem",
  margin: "0rem 0rem 0rem 0rem",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  borderRadius: "0.5rem",
  background: selected
    ? theme.palette.secondary.main
    : theme.palette.secondary.light,
  "@media (pointer: fine)": {
    "&:hover": {
      background: "#FFE483",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const StyledLocation = styled("div", {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "0.5rem",
}));

// const StyledLocationContainer = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "space-between",
//   alignItems: "center",
//   gap: "1rem",
//   [theme.breakpoints.down("sm")]: {
//     flexDirection: "row",
//     width: "100%",
//   },
// }));

// const LocationLabel = styled(Typography)(({ theme }) => ({
//   // textAlign: "center",
//   lineHeight: "1.2rem",
//   color: theme.palette.primary.main,
//   fontSize: "1rem",
// }));

// const CustomImg = styled("img")(({ theme }) => ({
//   height: "70px",
//   width: "100px",
//   [theme.breakpoints.down("sm")]: {
//     height: "60px",
//     width: "85px",
//   },
// }));

// const SelectedImg = styled("img")(({ theme }) => ({
//   border: "2px solid",
//   borderColor: theme.palette.primary.main,
//   borderRadius: "15px",
//   padding: "0.1rem",
//   height: "70px",
//   width: "100px",
//   [theme.breakpoints.down("sm")]: {
//     height: "60px",
//     width: "85px",
//   },
// }));

const DiamondTypeButtonRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "1.5em",
  },
}));

const StyledDiamondType = styled("div", {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  WebkitTapHighlightColor: "transparent",
  border: selected ? "2px solid" : "none",
  borderColor: selected
    ? theme.palette.primary.light
    : theme.palette.primary.light,
  borderRadius: "1rem",
  padding: "1rem",
  height: "15rem",
  width: "25rem",
  cursor: "pointer",
  [theme.breakpoints.up("lg")]: {
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.4s",
    },
  },
  [theme.breakpoints.down("sm")]: { height: "12rem", width: "18rem" },
}));

const DiamondTypeLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  fontWeight: "600",
  fontSize: "1.5rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const CustomDiamondTypeImg = styled("img")(({ theme }) => ({
  height: "13rem",
  width: "9rem",
  margin: "0rem 3rem 0rem 0rem",
  [theme.breakpoints.down("sm")]: {
    height: "10rem",
    width: "6.5rem",
    margin: "0rem 2rem 0rem 0rem",
  },
}));

const DiamondShapesContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "95%",
  rowGap: "1.5rem",
  columnGap: "1rem",
  flexWrap: "wrap",
  /* XXS breakpoint */
  [theme.breakpoints.up("xxs")]: { width: "100%", columnGap: "0.5rem" },
  /* iphone 5 */
  [theme.breakpoints.up(theme.breakpoints.values.xs + 39)]: {
    columnGap: "2rem",
  },
  /*galaxy S8+ - 360*/
  [theme.breakpoints.up(theme.breakpoints.values.xs + 78)]: {
    columnGap: "2rem",
  },
  /*iphone se - 375*/
  [theme.breakpoints.up(theme.breakpoints.values.xs + 94)]: {
    columnGap: "2.5rem",
  },
  /* iphone 12 pro and pixel - 390 */
  [theme.breakpoints.up(theme.breakpoints.values.xs + 108.95)]: {
    columnGap: "3rem",
  },
  /*iphone XR - 414*/
  [theme.breakpoints.up(theme.breakpoints.values.xs + 130)]: {
    width: "90%",
    columnGap: "4rem",
  },
  [theme.breakpoints.up("xsPlus")]: { columnGap: "4rem" },
  [theme.breakpoints.up("sm")]: { columnGap: "4rem" },
  /*ipad Mini */
  [theme.breakpoints.up(theme.breakpoints.values.sm + 167)]: {
    width: "100%",
    columnGap: "5.5rem",
    rowGap: "2.5rem",
  },
  /* ipad Air*/
  [theme.breakpoints.up(theme.breakpoints.values.sm + 219)]: {
    columnGap: "2rem",
    rowGap: "2.5rem",
  },
  [theme.breakpoints.up("md")]: { columnGap: "2rem" },
  /* MDLG Breakpoint iPadPro*/
  [theme.breakpoints.up(theme.breakpoints.values.md + 64)]: {
    columnGap: "4.3rem",
  },
  /*720p and 768p breakpoint */
  [theme.breakpoints.up("lg")]: {
    width: "80%",
    columnGap: "2rem",
  },
  /* 1080p 125% breakpoint*/
  [theme.breakpoints.up(theme.breakpoints.values.lg + 150)]: {
    columnGap: "4.5rem",
  },
  /* 1080p breakpoint*/
  [theme.breakpoints.up("xl")]: { columnGap: "2.5rem" },
  /* XXL breakpoint  2560p*/
  [theme.breakpoints.up(theme.breakpoints.values.xl + 640)]: {
    columnGap: "2rem",
  },
  /*4k breakpoint 3840p*/
  [theme.breakpoints.up(theme.breakpoints.values.xl + 1920)]: {
    columnGap: "3rem",
  },
}));

const StyledDiamondShape = styled("div", {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "1rem",
  padding: "1rem",
  height: "8rem",
  width: "8rem",
  WebkitTapHighlightColor: "transparent",
  background: selected
    ? theme.palette.secondary.main
    : theme.palette.secondary.light,
  cursor: "pointer",
  "@media (pointer: fine)": {
    "&:hover": {
      background: "#FFE483",
    },
  },
}));

const CustomDiamondShapeImg = styled("img")(({ theme }) => ({
  height: "4rem",
  width: "4rem",
}));

const DiamondShapeLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  margin: "0.5rem 0rem 0rem 0rem",
  fontWeight: selected ? 600 : 400,
  textAlign: "center",
  fontSize: "1rem",
}));

const SliderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  gap: "2.5rem",
  width: "45%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
    gap: "2.5rem",
    width: "100%",
  },
}));

const SliderTextfieldsRow = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
}));

const CaratTextField = styled(TextField)(({ theme }) => ({
  width: "8rem",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const CustomRangeSlider = styled(Slider)(({ theme }) => ({
  width: "0.5rem",
  height: "22rem",
  "& .MuiSlider-markLabel": {
    background: theme.palette.background.default,
    color: theme.palette.text.disabled,
    fontWeight: "400",
    margin: "0rem 0rem 0rem 1rem",
    "&.MuiSlider-markLabelActive": {
      fontWeight: "600",
      color: theme.palette.primary.main,
    },
  },
  "& .MuiSlider-thumb": {
    width: "2rem",
    height: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    height: "22rem",
  },
}));

const ClarityContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  rowGap: "1.5rem",
  columnGap: "2rem",
  flexWrap: "wrap",
  [theme.breakpoints.only("xxs")]: { width: "100%", rowGap: "1rem" },
  [theme.breakpoints.down("sm")]: { width: "100%", columnGap: "1.5rem" },
}));

const StyledClarity = styled("div", {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  width: "48%",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  background: selected
    ? theme.palette.secondary.main
    : theme.palette.secondary.light,
  "@media (pointer: fine)": {
    "&:hover": {
      background: "#FFE483",
    },
  },
  [theme.breakpoints.down("sm")]: { width: "100%" },
}));

const CertificationsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  rowGap: "1.5rem",
  columnGap: "2rem",
  flexWrap: "wrap",
  [theme.breakpoints.only("xxs")]: { width: "100%", rowGap: "1rem" },
  [theme.breakpoints.down("sm")]: { width: "100%", columnGap: "1.5rem" },
}));

const StyledCertification = styled("div", {
  shouldForwardProp: (prop) => prop !== "selected",
})(({ theme, selected }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "0.5rem",
  padding: "0.75rem 1rem",
  width: "48%",
  cursor: "pointer",
  WebkitTapHighlightColor: "transparent",
  background: selected
    ? theme.palette.secondary.main
    : theme.palette.secondary.light,
  "@media (pointer: fine)": {
    "&:hover": {
      background: "#FFE483",
    },
  },
  [theme.breakpoints.down("sm")]: { width: "100%" },
}));

const ContactTextField = styled(TextField)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
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
  "Fluorescence",
  "Certification",
  "Any more requests?",
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
  { label: "Fluorescence" },
  { label: "Certification" },
  { label: "Any more requests?" },
  { label: "Contact Details" },
];

export default function Form() {
  /* Stepper States */

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);
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
  const [diamondClarities, setDiamondClarities] = React.useState([]);
  const [diamondMinCut, setDiamondMinCut] = React.useState(0);
  const [diamondMaxCut, setDiamondMaxCut] = React.useState(3);
  const [diamondMinFluorescence, setDiamondMinFluorescence] = React.useState(0);
  const [diamondMaxFluorescence, setDiamondMaxFluorescence] = React.useState(4);
  const [diamondCertifications, setDiamondCertification] = React.useState([]);
  const [additionalNotes, setAdditionalNotes] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [agree, setAgree] = React.useState(true);

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

  /* Clarity*/

  const clarity_types = [
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

  /* Fluorescence Slider Marks */

  const fluorescence_slider_marks = [
    {
      value: 0,
      label: "None",
    },
    {
      value: 1,
      label: "Faint",
    },
    {
      value: 2,
      label: "Medium",
    },
    {
      value: 3,
      label: "Strong",
    },
    {
      value: 4,
      label: "Very Strong",
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

  /* Function to handle the click event for the clarity  */

  const onClickClarity = (clarity) => {
    /* Extract the latest list of selected clarity from the event object. */

    const selectedClaritiesClean = diamondClarities.includes(clarity)
      ? diamondClarities.filter((_clr) => _clr !== clarity)
      : [...diamondClarities, clarity];

    /* Update the local state to hold the selected certifications. */

    setDiamondClarities(selectedClaritiesClean);
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
    setSubmitting(true);

    /* Sending ntification email */

    await fetch("/api/send-email", {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        agree_to_terms: agree,
        location: location === "other" ? otherLocation : location,
        diamond_type: diamondType,
        diamond_shapes: diamondShapes,
        diamond_carat_min: diamondMinCarat,
        diamond_carat_max: diamondMaxCarat,
        diamond_color_min: color_slider_marks[diamondMinColor].label,
        diamond_color_max: color_slider_marks[diamondMaxColor].label,
        diamond_clarity: diamondClarities,
        diamond_cut_min: cut_slider_marks[diamondMinCut].label,
        diamond_cut_max: cut_slider_marks[diamondMaxCut].label,
        diamond_fluorescence_min:
          fluorescence_slider_marks[diamondMinFluorescence].label,
        diamond_fluorescence_max:
          fluorescence_slider_marks[diamondMaxFluorescence].label,
        diamondCertifications: diamondCertifications,
        additionalNotes: additionalNotes,
      }),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to send message");
      return res.json();
    });

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
          diamond_clarity: diamondClarities,
          diamond_cut: {
            min: cut_slider_marks[diamondMinCut].label,
            max: cut_slider_marks[diamondMaxCut].label,
          },
          diamond_fluorescence: {
            min: fluorescence_slider_marks[diamondMinFluorescence].label,
            max: fluorescence_slider_marks[diamondMaxFluorescence].label,
          },
          diamondCertifications: diamondCertifications,
          additionalNotes: additionalNotes,
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

  const containerRef = React.useRef(null);

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

      {/* Main Component */}

      <RootDiv>
        {/* Desktop Stepper */}

        <Stepper
          nonLinear
          activeStep={activeStep}
          orientation="vertical"
          sx={{
            padding: "1rem 0rem 0rem 0rem",
            minHeight: "95vh",
            [theme.breakpoints.up(theme.breakpoints.values.xl + 1920)]: {
              minHeight: "50vh",
            },
            [theme.breakpoints.down("md")]: {
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

        <CustomPaper ref={containerRef}>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Container ref={containerRef}>
                <Slide
                  direction="up"
                  in={activeStep === steps.length}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Title variant="h3">Thank you for your time</Title>
                  <Typography variant="subtitle1" align="center">
                    Now just sit back and relax while we find your perfect
                    diamond.
                  </Typography>{" "}
                </Slide>
              </Container>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* Step 1: Enter Location */}

              {activeStep === 0 && (
                <Slide
                  direction="up"
                  in={activeStep === 0}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 0}
                      {...(activeStep === 0 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">Please specify your location</Title>
                    </Fade>

                    <CustomFormControl>
                      <RadioGroup
                        row
                        aria-labelledby="select-location"
                        name="select-location"
                        value={location}
                        sx={{
                          width: "100%",
                        }}
                        onChange={(e) => {
                          setLocation(e.target.value);
                          setTimeout(() => {
                            handleNext();
                          }, 200);
                        }}
                      >
                        <RadioGroupContainer>
                          <CustomFormControlLabel
                            value="abu_dhabi"
                            labelPlacement="top"
                            selected={location === "abu_dhabi"}
                            control={<Radio sx={{ display: "none" }} />}
                            label={
                              <StyledLocation
                                selected={location === "abu_dhabi"}
                              >
                                {location === "abu_dhabi" && (
                                  <LocationOn color="primary" />
                                )}
                                <Typography
                                  variant="body1"
                                  fontWeight={
                                    location === "abu_dhabi" ? 600 : 400
                                  }
                                  sx={{ textAlign: "center" }}
                                >
                                  Abu Dhabi
                                </Typography>
                              </StyledLocation>
                            }
                          />

                          <CustomFormControlLabel
                            value="dubai"
                            labelPlacement="top"
                            selected={location === "dubai"}
                            control={<Radio sx={{ display: "none" }} />}
                            label={
                              <StyledLocation selected={location === "dubai"}>
                                {location === "dubai" && (
                                  <LocationOn color="primary" />
                                )}
                                <Typography
                                  variant="body1"
                                  fontWeight={location === "dubai" ? 600 : 400}
                                  sx={{ textAlign: "center" }}
                                >
                                  Dubai
                                </Typography>
                              </StyledLocation>
                            }
                          />

                          <CustomFormControlLabel
                            value="sharjah"
                            labelPlacement="top"
                            selected={location === "sharjah"}
                            control={<Radio sx={{ display: "none" }} />}
                            label={
                              <StyledLocation selected={location === "sharjah"}>
                                {location === "sharjah" && (
                                  <LocationOn color="primary" />
                                )}{" "}
                                <Typography
                                  variant="body1"
                                  fontWeight={
                                    location === "sharjah" ? 600 : 400
                                  }
                                  sx={{ textAlign: "center" }}
                                >
                                  Sharjah
                                </Typography>
                              </StyledLocation>
                            }
                          />

                          <CustomFormControlLabel
                            value="ajman"
                            labelPlacement="top"
                            selected={location === "ajman"}
                            control={<Radio sx={{ display: "none" }} />}
                            label={
                              <StyledLocation selected={location === "ajman"}>
                                {location === "ajman" && (
                                  <LocationOn color="primary" />
                                )}
                                <Typography
                                  variant="body1"
                                  fontWeight={location === "ajman" ? 600 : 400}
                                  sx={{ textAlign: "center" }}
                                >
                                  Ajman
                                </Typography>
                              </StyledLocation>
                            }
                          />

                          <CustomFormControlLabel
                            value="umm_al_quwain"
                            labelPlacement="top"
                            control={<Radio sx={{ display: "none" }} />}
                            label={
                              <StyledLocation
                                selected={location === "umm_al_quwain"}
                              >
                                <Typography
                                  variant="body1"
                                  sx={{ textAlign: "center" }}
                                >
                                  Umm Al Quwain
                                </Typography>
                              </StyledLocation>
                            }
                          />

                          <CustomFormControlLabel
                            value="ras_al_khaimah"
                            labelPlacement="top"
                            selected={location === "ras_al_khaimah"}
                            control={<Radio sx={{ display: "none" }} />}
                            label={
                              <StyledLocation
                                selected={location === "ras_al_khaimah"}
                              >
                                {location === "ras_al_khaimah" && (
                                  <LocationOn color="primary" />
                                )}
                                <Typography
                                  variant="body1"
                                  fontWeight={
                                    location === "ras_al_khaimah" ? 600 : 400
                                  }
                                  sx={{ textAlign: "center" }}
                                >
                                  Ras Al Khaimah
                                </Typography>
                              </StyledLocation>
                            }
                          />

                          <CustomFormControlLabel
                            value="fujairah"
                            labelPlacement="top"
                            selected={location === "fujairah"}
                            control={<Radio sx={{ display: "none" }} />}
                            label={
                              <StyledLocation
                                selected={location === "fujairah"}
                              >
                                {location === "fujairah" && (
                                  <LocationOn color="primary" />
                                )}
                                <Typography
                                  variant="body1"
                                  fontWeight={
                                    location === "fujairah" ? 600 : 400
                                  }
                                  sx={{ textAlign: "center" }}
                                >
                                  Fujairah
                                </Typography>
                              </StyledLocation>
                            }
                          />
                        </RadioGroupContainer>

                        {/* <Grow
                        in={activeStep === 0}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(activeStep === 0 ? { timeout: 300 } : {})}
                      >
                        <FormControlLabel
                          value="india"
                          labelPlacement="top"
                          control={<Radio sx={{ display: "none" }} />}
                          label={
                            location === "india" ? (
                              <StyledLocationContainer>
                                <SelectedImg
                                  src="/images/location/india.png"
                                  height={100}
                                  width={100}
                                  alt="India"
                                />
                                <LocationLabel variant="body1">
                                  India
                                </LocationLabel>
                              </StyledLocationContainer>
                            ) : (
                              <StyledLocationContainer>
                                <CustomImg
                                  src="/images/location/india.png"
                                  height={100}
                                  width={100}
                                  alt="India"
                                />
                                <LocationLabel variant="body1">
                                  India
                                </LocationLabel>
                              </StyledLocationContainer>
                            )
                          }
                        />
                      </Grow>
                      <Grow
                        in={activeStep === 0}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(activeStep === 0 ? { timeout: 600 } : {})}
                      >
                        <FormControlLabel
                          value="uae"
                          labelPlacement="top"
                          control={<Radio sx={{ display: "none" }} />}
                          label={
                            location === "uae" ? (
                              <StyledLocationContainer>
                                <SelectedImg
                                  src="/images/location/uae.png"
                                  height={100}
                                  width={100}
                                  alt="UAE"
                                />
                                <LocationLabel variant="body1">
                                  United Arab Emirates
                                </LocationLabel>
                              </StyledLocationContainer>
                            ) : (
                              <StyledLocationContainer>
                                <CustomImg
                                  src="/images/location/uae.png"
                                  height={100}
                                  width={100}
                                  alt="UAE"
                                />
                                <LocationLabel variant="body1">
                                  United Arab Emirates
                                </LocationLabel>
                              </StyledLocationContainer>
                            )
                          }
                        />
                      </Grow>
                      <Grow
                        in={activeStep === 0}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(activeStep === 0 ? { timeout: 900 } : {})}
                      >
                        <FormControlLabel
                          value="other"
                          labelPlacement="top"
                          control={<Radio sx={{ display: "none" }} />}
                          label={
                            location === "other" ? (
                              <StyledLocationContainer>
                                <SelectedImg
                                  src="/images/location/world.png"
                                  height={100}
                                  width={100}
                                  alt="Other"
                                  sx={{ height: "65px", borderRadius: "15px" }}
                                />
                                <LocationLabel variant="body1">
                                  Rest of the World
                                </LocationLabel>
                              </StyledLocationContainer>
                            ) : (
                              <StyledLocationContainer>
                                <CustomImg
                                  src="/images/location/world.png"
                                  height={100}
                                  width={100}
                                  alt="Other"
                                  sx={{
                                    height: "68px",
                                    borderRadius: "15px",
                                    [theme.breakpoints.down("sm")]: {
                                      height: "58px",
                                    },
                                  }}
                                />
                                <LocationLabel variant="body1">
                                  Rest of the World
                                </LocationLabel>
                              </StyledLocationContainer>
                            )
                          }
                        />
                      </Grow> */}
                      </RadioGroup>

                      {/* <Fade in={location === "other"}>
                        <TextField
                          sx={{
                            width: "45%",
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
                      </Fade> */}
                    </CustomFormControl>
                  </Container>
                </Slide>
              )}

              {/* Step 2: Diamond Type */}

              {activeStep === 1 && (
                <Slide
                  direction="up"
                  in={activeStep === 1}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 1}
                      {...(activeStep === 1 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">
                        What type of diamond are you looking for?
                      </Title>
                    </Fade>

                    <DiamondTypeButtonRow>
                      {/* Natural */}

                      <StyledDiamondType
                        onClick={() => {
                          setDiamondType("natural");
                          setTimeout(() => {
                            handleNext();
                          }, 200);
                        }}
                        sx={{ background: theme.palette.secondary.main }}
                        selected={diamondType === "natural"}
                      >
                        <DiamondTypeLabel
                          variant="body1"
                          selected={diamondType === "natural"}
                        >
                          Natural
                        </DiamondTypeLabel>
                        <CustomDiamondTypeImg
                          src="/images/diamond-types/natural.png"
                          height={100}
                          width={100}
                          alt="Natural"
                          sx={{
                            height: "12rem",
                            width: "14rem",
                            margin: "1rem 0rem 0rem 0rem",
                            [theme.breakpoints.down("sm")]: {
                              height: "9rem",
                              width: "11rem",
                              margin: "1rem 0rem 0rem 0rem",
                            },
                          }}
                        />
                      </StyledDiamondType>

                      {/* Lab Grown */}

                      <StyledDiamondType
                        onClick={() => {
                          setDiamondType("lab_grown");
                          setTimeout(() => {
                            handleNext();
                          }, 200);
                        }}
                        sx={{ background: theme.palette.primary.main }}
                        selected={diamondType === "lab_grown"}
                      >
                        <DiamondTypeLabel
                          color="white"
                          variant="body1"
                          selected={diamondType === "lab_grown"}
                        >
                          Lab Grown
                        </DiamondTypeLabel>

                        <CustomDiamondTypeImg
                          src="/images/diamond-types/lab_grown.png"
                          height={100}
                          width={100}
                          alt="Lab Grown"
                        />
                      </StyledDiamondType>
                    </DiamondTypeButtonRow>
                  </Container>
                </Slide>
              )}

              {/* Step 3: Diamond Shapes */}

              {activeStep === 2 && (
                <Slide
                  direction="up"
                  in={activeStep === 2}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 2}
                      {...(activeStep === 2 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">What shapes would you prefer?</Title>
                    </Fade>
                    <DiamondShapesContainer>
                      {diamond_shapes.map((diamond_shape, index) => (
                        <StyledDiamondShape
                          key={index}
                          onClick={() =>
                            onClickDiamondShape(diamond_shape.label)
                          }
                          selected={diamondShapes.includes(diamond_shape.label)}
                        >
                          <CustomDiamondShapeImg
                            src={diamond_shape.img_url}
                            height={100}
                            width={100}
                            alt={diamond_shape.img_alt}
                          />
                          <DiamondShapeLabel
                            variant="h6"
                            selected={diamondShapes.includes(
                              diamond_shape.label
                            )}
                          >
                            {diamond_shape.label}
                          </DiamondShapeLabel>
                        </StyledDiamondShape>
                      ))}
                    </DiamondShapesContainer>
                  </Container>
                </Slide>
              )}

              {/* Step 4: Carat */}

              {activeStep === 3 && (
                <Slide
                  direction="up"
                  in={activeStep === 3}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 3}
                      {...(activeStep === 3 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">Please select a range of carat</Title>
                    </Fade>

                    <SliderContainer>
                      <CustomRangeSlider
                        min={0.1}
                        max={30.0}
                        precision={0.1}
                        sx={{
                          "& .MuiSlider-rail": {
                            color: theme.palette.primary.dark,
                          },
                          color: theme.palette.secondary.dark,
                          [theme.breakpoints.down("sm")]: {
                            margin: "0rem 0rem 0rem 0rem",
                          },
                        }}
                        orientation="vertical"
                        value={[diamondMinCarat, diamondMaxCarat]}
                        valueLabelDisplay="auto"
                        step={0.1}
                        marks={carat_slider_marks}
                        onChange={(event, newValue) => {
                          setDiamondMinCarat(newValue[0]);
                          setDiamondMaxCarat(newValue[1]);
                        }}
                      />

                      <SliderTextfieldsRow>
                        <CaratTextField
                          id="minCarat"
                          name="minCarat"
                          label="Minimum"
                          variant="outlined"
                          type="number"
                          InputProps={{ inputProps: { min: 0.1, max: 30.0 } }}
                          value={diamondMinCarat}
                          onChange={(e) => setDiamondMinCarat(e.target.value)}
                        />

                        <Typography variant="h6" fontWeight={600}>
                          To
                        </Typography>
                        <CaratTextField
                          id="maxCarat"
                          name="maxCarat"
                          label="Maximum"
                          variant="outlined"
                          type="number"
                          InputProps={{ inputProps: { min: 0.1, max: 30.0 } }}
                          value={diamondMaxCarat}
                          onChange={(e) => setDiamondMaxCarat(e.target.value)}
                        />
                      </SliderTextfieldsRow>
                    </SliderContainer>
                  </Container>
                </Slide>
              )}

              {/* Step 5: Color */}

              {activeStep === 4 && (
                <Slide
                  direction="up"
                  in={activeStep === 4}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 4}
                      {...(activeStep === 4 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">Please select a range of color</Title>
                    </Fade>

                    <CustomRangeSlider
                      min={0}
                      max={7}
                      sx={{
                        "& .MuiSlider-rail": {
                          color: theme.palette.primary.dark,
                        },
                        color: theme.palette.secondary.dark,
                      }}
                      orientation="vertical"
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
                </Slide>
              )}

              {/* Step 6: Clarity */}

              {activeStep === 5 && (
                <Slide
                  direction="up"
                  in={activeStep === 5}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 5}
                      {...(activeStep === 5 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">Select your diamond clarity</Title>
                    </Fade>

                    <ClarityContainer>
                      {clarity_types.map((clarity, index) => (
                        <StyledClarity
                          key={index}
                          onClick={() => onClickClarity(clarity.label)}
                          selected={diamondClarities.includes(clarity.label)}
                        >
                          <Typography
                            variant="body1"
                            fontWeight={
                              diamondClarities.includes(clarity.label)
                                ? 600
                                : 400
                            }
                          >
                            {clarity.label}
                          </Typography>
                          {diamondClarities.includes(clarity.label) && <Done />}
                        </StyledClarity>
                      ))}
                    </ClarityContainer>
                  </Container>
                </Slide>
              )}

              {/* Step 7: Cut */}

              {activeStep === 6 && (
                <Slide
                  direction="up"
                  in={activeStep === 6}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 6}
                      {...(activeStep === 6 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">Please select a range of cut</Title>
                    </Fade>

                    <CustomRangeSlider
                      min={0}
                      max={3}
                      sx={{
                        "& .MuiSlider-rail": {
                          color: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.main,
                      }}
                      orientation="vertical"
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
                </Slide>
              )}

              {/* Step 8: Fluorescence */}

              {activeStep === 7 && (
                <Slide
                  direction="up"
                  in={activeStep === 7}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 7}
                      {...(activeStep === 7 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">
                        Please select a range of fluorescence
                      </Title>
                    </Fade>

                    <CustomRangeSlider
                      min={0}
                      max={4}
                      sx={{
                        "& .MuiSlider-rail": {
                          color: theme.palette.primary.dark,
                        },
                        color: theme.palette.primary.light,
                      }}
                      orientation="vertical"
                      value={[diamondMinFluorescence, diamondMaxFluorescence]}
                      valueLabelDisplay="off"
                      step={1}
                      marks={fluorescence_slider_marks}
                      onChange={(event, newValue) => {
                        setDiamondMinFluorescence(newValue[0]);
                        setDiamondMaxFluorescence(newValue[1]);
                      }}
                    />
                  </Container>
                </Slide>
              )}

              {/* Step 9: Certification */}

              {activeStep === 8 && (
                <Slide
                  direction="up"
                  in={activeStep === 8}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep == 8}
                      {...(activeStep === 8 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">
                        What certifications do you want?
                      </Title>
                    </Fade>

                    <CertificationsContainer>
                      {diamond_certifications.map((certification, index) => (
                        <StyledCertification
                          key={index}
                          onClick={() =>
                            onClickCertification(certification.label)
                          }
                          selected={diamondCertifications.includes(
                            certification.label
                          )}
                        >
                          <Typography
                            variant="body1"
                            fontWeight={
                              diamondCertifications.includes(
                                certification.label
                              )
                                ? 600
                                : 400
                            }
                          >
                            {certification.label}
                          </Typography>
                          {diamondCertifications.includes(
                            certification.label
                          ) && <Done />}
                        </StyledCertification>
                      ))}
                    </CertificationsContainer>
                  </Container>
                </Slide>
              )}

              {/* Step 10: "Any more requests?" */}

              {activeStep === 9 && (
                <Slide
                  direction="up"
                  in={activeStep === 9}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container>
                    <Fade
                      in={activeStep === 9}
                      {...(activeStep === 9 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">Any requests?</Title>
                    </Fade>

                    <TextField
                      sx={{
                        width: "75%",
                        [theme.breakpoints.down("sm")]: {
                          width: "90%",
                        },
                      }}
                      placeholder="Do mention any specific requests that you have for us"
                      variant="outlined"
                      multiline
                      rows={6}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                    />
                  </Container>
                </Slide>
              )}

              {/* Step 11: Contact Details */}

              {activeStep === 10 && (
                <Slide
                  direction="up"
                  in={activeStep === 10}
                  easing={theme.transitions.easing.easeInOut}
                  container={containerRef.current}
                  timeout={400}
                  unmountOnExit
                >
                  <Container sx={{ gap: "2rem" }}>
                    <Fade
                      in={activeStep === 10}
                      {...(activeStep === 10 ? { timeout: 600 } : {})}
                    >
                      <Title variant="h3">How can we reach you?</Title>
                    </Fade>

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
                        [theme.breakpoints.down("md")]: {
                          width: "75%",
                        },
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
                </Slide>
              )}

              {/* Buttons */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  margin: "0rem 0rem 2rem 0rem",
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                }}
              >
                {activeStep !== 0 &&
                  (!submitting ? (
                    <Button
                      disableFocusRipple
                      disableRipple
                      variant="outlined"
                      onClick={handleBack}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Previous
                    </Button>
                  ) : null)}

                {activeStep === steps.length - 1 ? (
                  !submitting ? (
                    <Button
                      disableFocusRipple
                      disableRipple
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
                    <CircularProgress />
                  )
                ) : (
                  <Button
                    disableFocusRipple
                    disableRipple
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 3,
                      ml: 1,
                      visibility:
                        activeStep === 0 || activeStep === 1
                          ? "hidden"
                          : "visible",
                    }}
                    disabled={activeStep === 1 ? diamondType === "" : false}
                  >
                    {"Next"}
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}

          {/* Phone Stepper */}

          {!submitted && (
            <MobileStepper
              variant="text"
              steps={phone_steps.length}
              sx={{
                // background: "transparent",
                // backdropFilter: "blur(1rem)",
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                [theme.breakpoints.up("md")]: {
                  display: "none",
                },
              }}
              position="bottom"
              activeStep={activeStep}
              nextButton={
                activeStep === phone_steps.length - 1 || submitted ? (
                  !submitting ? (
                    <Button
                      variant="outlined"
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
                    <CircularProgress />
                  )
                ) : (
                  <Button
                    disableFocusRipple
                    disableRipple
                    variant="outlined"
                    onClick={handleNext}
                    sx={{
                      mr: 1,
                      visibility:
                        activeStep === 0 || activeStep === 1
                          ? "hidden"
                          : "visible",
                    }}
                    disabled={activeStep === 1 ? diamondType === "" : false}
                  >
                    {"Next"}
                  </Button>
                )
              }
              backButton={
                <Button
                  disableFocusRipple
                  disableRipple
                  variant="text"
                  onClick={handleBack}
                  disabled={submitting}
                  sx={{
                    ml: 1,
                    visibility: activeStep !== 0 ? "visible" : "hidden",
                  }}
                >
                  Back
                </Button>
              }
            />
          )}
        </CustomPaper>
      </RootDiv>
      {/* <Copyright /> */}
    </React.Fragment>
  );
}
