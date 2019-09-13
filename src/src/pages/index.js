import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import ContainerFluid from '../components/container-fluid'
import Hero from '../components/hero'
import Sponsors from '../components/sponsors'
import { graphql } from 'gatsby'
import MakeDifference from '../components/home/make-a-difference'
import Spectator from '../components/home/spectator'
import Prizes from '../components/home/prizes'
import Chance from '../components/home/fighting-chance'
import Layout from '../components/layout'

class RootIndex extends React.Component {

  componentDidMount() {

  }

  render() {

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const slides = get(this, 'props.data.allContentfulSlide.edges')
    const sponsors = get(this, 'props.data.allContentfulSponsor.edges')


    return (
      <Layout>

        <Helmet>
          <title>{siteTitle}</title>
          <meta name="title" content={siteTitle} />
          <meta name="description" content="Faraja’s annual White Water Rafting Challenge is an annual event organized by Faraja Cancer Support Trust in partnership with Savage Wilderness Camp." />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:description" content="Faraja’s annual White Water Rafting Challenge is an annual event organized by Faraja Cancer Support Trust in partnership with Savage Wilderness Camp." />
          <meta property="og:image" content="https://images.ctfassets.net/snidcxsl43uf/7mgZcz9Zs8wtWoekzxxCzD/caf81b0288cbf15a963dfc94668f6f57/DSC04361-e1549603874684.jpg?w=872&h=490&q=50&fm=webp&fit=scale" />
          <meta property="og:url" content="https://farajaraftingchallenge.org/" />
         
        </Helmet>

        <Hero data={slides} isHome={true} />

        <div className="sections-list">
          {posts.map(({ node }) => {
            if (node.slug === 'make-splash-make-a-difference') {
              return (

                <section key={node.slug}>  
                <MakeDifference article={node} />
                </section>

              )
            }
            if (node.slug === 'spectators') {
              return (
                <section key={node.slug}>   <ContainerFluid> <Spectator article={node} /></ContainerFluid></section>
              )
            }
            if (node.slug === 'prizes') {
              return (
                <section key={node.slug}>   <ContainerFluid><Prizes article={node} /></ContainerFluid></section>
              )
            }
            if (node.slug === 'fighting-chance') {
              return (
                <section key={node.slug}>   <ContainerFluid><Chance article={node} /></ContainerFluid></section>
              )
            }
          })}
        </div>


        <section className="sponsors">
          <ContainerFluid>
            {sponsors &&
              <Sponsors data={sponsors}></Sponsors>
            }
          </ContainerFluid>
        </section>


      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [sort], order: ASC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          photos 
            {
              title,
              description
              ,
              sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
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
  
    allContentfulSponsor(filter: { contentful_id : { eq: "4ELHWSP5K3vzS2xTMepLWS" }} sort: { fields: [name], order: DESC }) {
      edges {
        node {
          name
          logos 
            {
              title,
              sizes(maxWidth: 250, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
              }
            }
        }
      }
    }
    allContentfulSlide(sort: { fields: [title], order: DESC }) {
      edges {
        node {
          id
          title
          hero {
            sizes(quality: 100, maxWidth: 4160) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
         
        }
      }
    }
  } 
`
