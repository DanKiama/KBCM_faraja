import React from "react";
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from "../components/layout";
import SEO from "../components/seo";

class homePage extends React.Component{
  render() {
    const banner = get(this, 'props.data.allContentfulBannerSection.nodes')[0]
   
    return (
      <Layout>
        <SEO title="Banner" />
             
              
        <div className="Banner">
          <div className="overlay"></div>
            <div className="banner_message">
             
               <h1>
              {banner.bannerText}
              
              </h1>
             
              <p>
              {banner.description.content && banner.description.content.length && banner.description.content[0].content.length &&
              
              banner.description.content[0].content[0].value}
              
              </p>
            </div>
  
         
        
        </div>
      </Layout>
    )
  }
}


export default homePage;

export const query = graphql`
  query BannerQuery {
    allContentfulBannerSection {
    
        nodes {
          title
          bannerText
          description {
            
            content {
              content {
                value
              }
            }
          }
          slug
         
          bannerImage {
            sizes(resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
        
        
      }
    }
  }
`; 