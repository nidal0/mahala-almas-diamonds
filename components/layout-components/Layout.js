/* React Imports */

import React from "react";
import { Helmet } from "react-helmet";
import { withRouter } from "next/router";

/* Component Imports */

import Header from "./Header";
import Container from "./Container";

const Layout = ({
  keywords,
  description,
  canonicalUrl,
  //   ogImageParams,
  noContain,
  children,
}) => {
  return (
    <React.Fragment>
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
