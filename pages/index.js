/* Component Imports */

import Layout from "/components/layout-components/Layout";
import Welcome from "../components/page-sections/index/Welcome";

export default function Home() {
  return (
    <Layout noLayoutHeader>
      <Welcome />
    </Layout>
  );
}
