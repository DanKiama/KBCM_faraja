import React from 'react'
/*import Link from 'gatsby-link'
import { graphql } from 'gatsby*/
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageHero from '../components/pageHero'
import ContactForm from '../components/contact/contactForm'

class ContactIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const contact = get(this, 'props.data.allContentfulBlogPost.edges')[0].node
   
    return (
      <Layout>
       <Helmet title={`Contact | ${siteTitle}`} />
        <PageHero hero={contact} />
    
        <div className="wrapper">
        
       <ContactForm data={contact} />
        </div>
      </Layout>
    )
  }
}

export default ContactIndex

export const pageQuery = graphql`
  query contactQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: { contentful_id : { eq: "7BbPCmZWrhGcQXPwMkSoUH" }} sort: { fields: [sort], order: DESC }) {
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



