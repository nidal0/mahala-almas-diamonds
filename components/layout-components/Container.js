/* Common Imports */

import React from "react";
import { styled } from "@mui/system";

/* Styled Container Component */

const ContainerComponent = styled("div")(({ theme }) => ({
  /* XXS breakpoint */
  [theme.breakpoints.only("xxs")]: {
    padding: "0rem 0.5rem 0rem 0.5rem",
  },
  /* XS breakpoint */
  [theme.breakpoints.only("xs")]: {
    padding: "0rem 1rem 0rem 1rem",
  },
  /* XSPLUS breakpoint */
  [theme.breakpoints.only("xsPlus")]: {
    padding: "0rem 1.5rem 0rem 1.5rem",
  },
  /* SM breakpoint */
  [theme.breakpoints.only("sm")]: {
    padding: "0rem 3rem 0rem 3rem",
  },
  /* SMPLUS breakpoint */
  [theme.breakpoints.only("smPlus")]: {
    padding: "0rem 3rem 0rem 3rem",
  },
  /* SM822 breakpoint */
  [theme.breakpoints.only("sm822")]: {
    padding: "0rem 3rem 0rem 3rem",
  },
  /* SM860 breakpoint */
  [theme.breakpoints.only("sm860")]: {
    padding: "0rem 3rem 0rem 3rem",
  },
  /* SM860 breakpoint */
  [theme.breakpoints.only("sm910")]: {
    padding: "0rem 3rem 0rem 3rem",
  },
  /* MD breakpoint */
  [theme.breakpoints.only("md")]: {
    padding: "0rem 4rem 0rem 4rem",
  },
  /* MD1190 breakpoint */
  [theme.breakpoints.only("md1190")]: {
    padding: "0rem 4rem 0rem 4rem",
  },
  /* MD1220 breakpoint */
  [theme.breakpoints.only("md1220")]: {
    padding: "0rem 4rem 0rem 4rem",
  },
  /* LG breakpoint */
  [theme.breakpoints.only("lg")]: {
    // position: "absolute",
    // zIndex: 1,
    padding: "0rem 4rem 0rem 4rem",
  },
  /* LGPLUS breakpoint */
  [theme.breakpoints.up("lgPlus")]: {
    // position: "absolute",
    // zIndex: 1,
    padding: "0rem 5rem 0rem 5rem",
  },
  /* XL breakpoint */
  [theme.breakpoints.up("xl")]: {
    // position: "absolute",
    // zIndex: 1,
    padding: "0rem 23rem 0rem 23rem",
  },
  /* XXL breakpoint */
  [theme.breakpoints.up("xxl")]: {
    // position: "absolute",
    // zIndex: 1,
    padding: "0rem 36rem 0rem 36rem",
  },
  /* XXXL breakpoint */
  [theme.breakpoints.up("xxxl")]: {
    // position: "absolute",
    // zIndex: 1,
    padding: "0rem 72rem 0rem 72rem",
  },
}));

const ContainerComponentNoContain = styled("div")(({ theme }) => ({
  padding: "0rem 0rem 0rem 0rem",
}));

/* Default Export */

const Container = (props) => {
  return (
    <React.Fragment>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return props.noContain
            ? React.cloneElement(
                <ContainerComponentNoContain key={child.key ? child.key : 0}>
                  {child}
                </ContainerComponentNoContain>,
                (() => ({
                  "layout-child-index": child.props.index,
                  "is-contained": "false",
                }))()
              )
            : React.cloneElement(
                <ContainerComponent key={child.key ? child.key : 0}>
                  {child}
                </ContainerComponent>,
                (() => ({
                  "layout-child-index": child.props.index,
                  "is-contained": "true",
                }))()
              );
        }
        return child;
      })}
    </React.Fragment>
  );
};

export default Container;
