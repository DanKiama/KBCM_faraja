import React from 'react'
/*import Link from 'gatsby-link' */
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageHero from '../components/pageHero'
import Container from '../components/container'
import ScrollAnimation from 'react-animate-on-scroll';

class SponsorIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const allSections = get(this, 'props.data.allContentfulBlogPost.edges')
    const hero = allSections.filter(a => (a.node.tags && a.node.tags.includes('Hero')))[0];;

    const innerSections = allSections.filter(a => a !== hero);

    return (
      <Layout>
        <Helmet title={`Sponsorship | ${siteTitle}`} />
        <PageHero hero={hero.node} />

        <Container>
          <div className="sponsorship">


            {innerSections.map((item, index) => {
              return <ScrollAnimation key={item.node.slug} animateIn="fadeInUp"><section className="effect4" >
                {index < 2 &&
                  <div className="row align-items-center h-100 no-gutters">
                    <div className={`col-md-5`}>   <div className={`col-md-10`}> {item.node.heroImage && <Img alt={item.node.title} sizes={item.node.heroImage.sizes} />}</div></div>
                    <div className={`col-md-6 text-center`}>
                      <h3>{item.node.title}</h3>
                      {item.node.description &&
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.node.description.childMarkdownRemark.html,
                          }}

                        />
                      }
                    </div>
                  </div>
                }
                {index == 2 &&
                  <div>
                    <div className="row justify-content-center">

                      <div className={`col-md-12 text-center`}>
                        <div>  {item.node.heroImage && <Img alt={item.node.title} sizes={item.node.heroImage.sizes} />}</div>
                        <h3 className="mt-3">{item.node.title}</h3>
                        {item.node.description &&
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.node.description.childMarkdownRemark.html,
                            }}

                          />
                        }
                      </div>
                    </div>
                    <div className="row justify-content-center sponsor-images">
                      <div className="col-md-8 col-sm-6">

                        {item.node.photos &&
                          <div className="row justify-content-center">

                            {item.node.photos.map((item, index) => {
                              return (
                                <div className={`col-md-2 col-sm-2 `} key={index}>
                                  {item.sizes &&
                                    <Img alt={item.title} sizes={item.sizes} />
                                  }
                                </div>
                              )
                            })}
                          </div>
                        }

                      </div>
                    </div>
                  </div>

                }

              </section></ScrollAnimation>


            })
            }
          </div>

        </Container>


      </Layout>
    )
  }
}

export default SponsorIndex

export const pageQuery = graphql`
  query sponsorQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: { tags : { eq: "Sponsorship" }} sort: { fields: [sort], order: ASC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 1920, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          photos 
            {
              title,
              sizes(maxWidth: 350, resizingBehavior: SCALE) {
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



