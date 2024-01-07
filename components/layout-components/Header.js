import { withRouter } from "next/router";
import Head from "next/head";
import React from "react";

const Header = (props) => {
  // const { router } = props.router;
  const keywords = props.keywords;
  const description = props.description;
  const title = props.title;
  // const canonicalUrl = props.canonicalUrl;
  // const ogImageParams = props.ogImageParams;

  return (
    <React.Fragment>
      <Head>
        {/* <link
          rel="preconnect"
          href={process.env.PRODUCTION_URL}
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href={process.env.CDN_URL}
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href={process.env.API_CDN_URL}
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://google.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link
          rel="canonical"
          href={
            canonicalUrl
              ? canonicalUrl
              : process.env.PRODUCTION_URL + router.asPath.substring(1)
          }
        /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="cache-control" content="Private" />
        <meta httpEquiv="Expires" content="31536000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FFFEF2" />
        <meta
          name="Description"
          content={
            description
              ? description
              : "Mahala Almas helps you find the diamond that ou want."
          }
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="keywords"
          content={keywords ? keywords : "almas, diamonds, mahala, uae, india"}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content={title ? title : "Mahala Almas Diamonds"}
        />
        <meta
          property="og:title"
          content={title ? title : "Mahala Almas Diamonds"}
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "Mahala Almas helps you find the diamond that ou want."
          }
        />
        {/* <meta
          property="og:url"
          content={
            canonicalUrl
              ? canonicalUrl
              : process.env.PRODUCTION_URL + router.asPath.substring(1)
          }
        />
        <meta
          property="og:image"
          content={
            ogImageParams
              ? ogImageParams.ogImageUrl
              : process.env.CDN_URL + "images/icons/logo/og_512.jpg"
          }
        />
        <meta
          property="og:image:alt"
          content={process.env.CDN_URL + "images/icons/logo/og_512.jpg"}
        />
        <meta
          property="og:image:secure_url"
          content={
            ogImageParams
              ? ogImageParams.ogImageUrl
              : process.env.CDN_URL + "images/icons/logo/og_512.jpg"
          }
        />
        <meta
          property="og:image:type"
          content={ogImageParams ? ogImageParams.ogImageType : "image/jpeg"}
        />
        <meta
          property="og:image:width"
          content={
            ogImageParams ? ogImageParams.ogImageWidth.toString() : "512"
          }
        />
        <meta
          property="og:image:height"
          content={
            ogImageParams ? ogImageParams.ogImageHeight.toString() : "512"
          }
        />
        <meta property="og:locale" content="en_IN" />
        <link
          rel="icon"
          href={process.env.CDN_URL + "images/icons/logo/favicon_48.png"}
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href={process.env.CDN_URL + "images/icons/logo/favicon_48.png"}
        />
        <link
          rel="apple-touch-icon"
          href={process.env.CDN_URL + "images/icons/logo/favicon_192.png"}
        /> */}
        {/* <link rel="manifest" href={process.env.CDN_URL + "manifest.json"} /> */}
        <title>{title ? title : "Mahala Almas"}</title>
      </Head>
    </React.Fragment>
  );
};

export default withRouter(Header);
