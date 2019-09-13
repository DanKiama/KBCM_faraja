import React from 'react'
/*import Link from 'gatsby-link'
import { graphql } from 'gatsby*/
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageHero from '../components/pageHero'
import Gallery from '../components/gallery/gallery'
class GalleryIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const gallery = get(this, 'props.data.allContentfulBlogPost.edges')[0].node
    console.log(gallery);
    return (
      <Layout>
       <Helmet title={`Gallery | ${siteTitle}`} />
        <PageHero hero={gallery} />
    
        <div className="wrapper">
        
       <Gallery data={gallery.photos} />
        </div>
      </Layout>
    )
  }
}

export default GalleryIndex


export const pageQuery = graphql`
  query galleryQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: { contentful_id : { eq: "1ExCukUAxoXluYCxMynrPO" }} sort: { fields: [sort], order: DESC }) {
      edges {
        node {
       
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 1024, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          photos 
            {
              id,
              title,
              sizes(maxWidth: 1024, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
              }
            }
          body {
            childMarkdownRemark {
              html
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  
   
  } 
`

