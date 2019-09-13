import React from 'react'
/*import Link from 'gatsby-link'*/
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageHero from '../components/pageHero'
import ScrollAnimation from 'react-animate-on-scroll';
class FundraisingIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const allSections = get(this, 'props.data.allContentfulBlogPost.edges')
    const hero = allSections.filter(a => (a.node.tags && a.node.tags.includes('Hero')))[0];
    const innerSections = allSections.filter(a => a !== hero);
    return (
      <Layout>
      <Helmet title={`Fundraising | ${siteTitle}`} />
        <PageHero hero={hero.node} />
        <section>
        <div className="container-fluid helpCancerSection">
           
            <div className="row justify-content-center ">
            <div className="col-lg-5 col-md-8 mt-2 ">
                <div className="row justify-content-center ">
                      <div className="col-lg-4 col-md-4 col-sm-4 mt-2 ">
                      <ScrollAnimation animateIn="fadeInLeft"><span className={''}>
                          <img className="brandLogo" src="/armaan.jpg"/>
                        </span></ScrollAnimation>
                          
                      </div>
                      
                      <div className="col-md-4 col-sm-4 mt-5">
                      <ScrollAnimation animateIn="fadeIn">  
                      <span className={''}>
                      <img className="brandLogo cancer" src="/helpCancerPatients.jpg"/>
                      </span>
                    
                      
                      </ScrollAnimation>
                          
                      
                      </div>
                      <div className="col-md-4 col-sm-4 mt-2">
                      <ScrollAnimation animateIn="fadeInRight"> 
                      <span className={''}>
                      <img className="brandLogo" src="/drOrganic.jpg"/>
                      </span>
                      </ScrollAnimation>
                          
                      
                      </div>
                </div>
            </div>
          
        
            </div>
            <div className="row justify-content-center ">
               <div className="col-lg-5 col-md-6 mt-5 helpCancerText">
               <ScrollAnimation animateIn="fadeInUp">
               <p>Buy any Dr. Organic product from The Health Cart between Jun 11<sup>the</sup> to 20<sup>th</sup> and 33% of the value will be donated to Faraja Cancer Support and you get free delivery! </p>
                <br/> <h3 className="center">HOW TO ORDER</h3>
                <ol>
                  <li>
                    Go to <a target="blank" href="https://healthcart.co.ke/collections/faraja">healthcart.co.ke/faraja</a>
                  </li>
                  <li>
                    Add any Dr.Organic product at the above link to your cart
                  </li>
                  <li>
                    Follow the checkout procedure and type <b>'FARAJA'</b> in the discount code field
                  </li>
                  <li>
                    Need help to place your order? <b>Call 0725155929</b>
                  </li>
                </ol>
                  </ScrollAnimation>
               </div>
               </div>
            <div className="row justify-content-center ">
            <div className="col-lg-5 col-md-6 mt-2 ">
            <div className="row justify-content-center ">
            <div className="col-lg-6 col-md-6 mt-2 ">
               <ScrollAnimation animateIn="fadeInLeft">  <img className="borderWhite" src="/raftingImage.jpg"/></ScrollAnimation>

               </div>
               <div className="col-lg-6 col-md-6 mt-2 ">
               <ScrollAnimation animateIn="fadeInRight">  <img className="borderWhite" src="/armaanTeam.jpg"/></ScrollAnimation>

               </div>
            </div>
            </div>
            
           </div>
            </div>
        </section>
        <section>
    
          <div className="container-fluid">
            
            <div className="wrapper fundraising">

            <h3>WAYS TO FUNDRAISE</h3>
              <div className="row justify-content-center ">
                {innerSections.map((item, index) => {
                  return    <div className={`col-md-4 mt-5 `} key={item.node.slug}>
                  <ScrollAnimation animateIn="fadeInUp">  <div className="image-item shadow-bottom">
                      <div className="row justify-content-between">

                        <div className={`col-md-12 `}>  <Img alt={item.node.title} sizes={item.node.heroImage.sizes} /></div>
                        <div className={`col-md-12 `}>
                          <h3>{item.node.title}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.node.description.childMarkdownRemark.html,
                            }}

                          />
                        </div>
                      </div>
                    </div></ScrollAnimation> 
                  </div> 

                })}
              </div>

            </div>

          </div> 
          </section>
      </Layout>
    )
  }
}

export default FundraisingIndex

export const pageQuery = graphql`
  query fundraisingQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: { tags : { eq: "Fundraising" }} sort: { fields: [sort], order: ASC }) {
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
  
   
  } 
`

