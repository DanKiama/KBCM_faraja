import React from "react";
import { Link, graphql } from "gatsby";
import Img from 'gatsby-image'

import Layout from "../components/layout";
import SEO from "../components/seo";

const Banner = ({ data }) => {
  const banner = data.allContentfulBannerSection.nodes[0];

  return (
    <Layout>
      <SEO title="Banner" />
           
            
      <div className="Banner">

         <h1>blogs</h1>

       
      
      </div>
    </Layout>
  );
};

export default Banner;
