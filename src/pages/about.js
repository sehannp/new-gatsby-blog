import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const about = () => (
  <Layout>
    <SEO title="About Sehan" />
    <h1>Sehan Nadesan Pushparaja</h1>
    <p> I learn tools and build things ! Everything involving JavaScript, SAS, Machine Learning interests me. I have learned a lot from fellow developers in Reddit, Udemy, Coursera, Stack Overflow, and other public forums. In fact there were lot of heros out there who provided the right guidance at the right time. Kudos to them.
    This is hence, me giving back to the aspiring students like me who wanted abstracted, toned-down information so that it would enable them to find some light. I will post my learnings, journey, and few occasional portraits that I draw !  
    </p>

    <p>
      You can view my work through the portfolio section of this website, or github. But note that I am much more than what these accounts show !. 
      If you are interested in having a discussion do please connect with me on LinkedIn ! 
    </p>

    <p>
      Happy Learning ! Cheers !
    </p>
    <Link to="/">Home</Link>
  </Layout>
)

export default about
