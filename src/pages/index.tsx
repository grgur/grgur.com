import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Videos from "../components/videos"
import About from "../components/about2"
import Testimonial from "../components/testimonials"

const IndexPage = () => (
  <Layout>
    <SEO title="Grgur Grisogono" />
    <About />
    <Videos />
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    <Testimonial />
  </Layout>
)

export default IndexPage
