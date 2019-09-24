import React from "react";
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';

import Tilt from 'react-parallax-tilt';

class homePage extends React.Component{
  render() {
    const banner = get(this, 'props.data.allContentfulBannerSection.nodes')[0]
    const aboutUsSection = get(this, 'props.data.allContentfulHomeAboutUsSection.nodes')[0]
    return (
      <Layout>
        <SEO title="Banner" />
             
              
        <section className="Banner">
          <div className="overlay"></div>

      
            <div className="banner_message">
             
               <h1>
               <Tilt> <img src="../header.png"/></Tilt>
              
          
              </h1>
             
              <p>
              {banner.description.content && banner.description.content.length && banner.description.content[0].content.length &&
              
              banner.description.content[0].content[0].value}
              
              </p>
             
              <div className="scroll">
             
             
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>

              </div>
            </div>
  
         
        
        </section>

        <section id="about" className="aboutUs">
               <div className="inner">
               
               <div className="row">
                
                  <div className="col-md-12 col-sm-12 col-12">
                  <img src="../coffee.gif"/>
                    <h2>{aboutUsSection.heading}</h2>
                    <p>
                    {aboutUsSection.description.content && aboutUsSection.description.content.length && aboutUsSection.description.content[0].content.length &&
                                  
                      aboutUsSection.description.content[0].content[0].value}   
                     </p>
                  </div>
                </div>
               </div>
        </section>

        <section className="host_your_own">
        
         
                  <div className="inner">
                
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-12 align-center">
                        <h2>Heading</h2>
                      </div>
                     </div>
                      <div className="row">
                        
                          <div className="col-md-4 col-sm-12 col-12">
                                  
                                  <span>Host your own</span>
                          </div>
                          <div className="col-md-4 col-sm-12 col-12">
                          <span>How it helps</span>
                          </div>
                          <div className="col-md-4 col-sm-12 col-12">
                          <span>KBCM agenda</span>
                          </div>
                        </div>
                
                 
               </div>
        </section>
        <section className="ideas">
       <div className="inner">
         <div className="row">
         <div className="col-md-12 col-sm-12 col-12">
                        <h2>IDEAS ON HOW TO HOST A COFFEE MORNING</h2><br/>
          </div>
         </div>
       <div className="row">
                      <div className="col-md-5 col-sm-12 col-12 align-center">
                        
                        <ParallaxProvider>
            
                          <Parallax className="custom-class" x={[-50, 0]} tagOuter="figure">
                <Tilt> <img src="../coffeeMaker.gif"/></Tilt>
                         
                          </Parallax>
                      </ParallaxProvider>
                      </div>
                      <div className="col-md-7 col-sm-12 col-12">
                        <h4>Have a bake sale at work/school/church</h4>
                        <p>
                        You can do it yourself or get your friends with “baking fingers” to help! Make simple, delicious pastries and sell them at a profit with proceeds going towards Faraja Cancer Support Trust
                        </p>
                        <p>Host a Coffee Morning as a residential estate
                          Get all tenants to meet at the carpark/ swimming pool and have a “pot luck” brunch with a donation box!</p>
                        
                      </div>
        </div>
       </div>
        </section>
        <section className="ideas">
       <div className="inner">
       <div className="row">
       <div className="col-md-7 col-sm-12 col-12">
                        <h4>Host a Coffee Morning as a residential estate</h4>
                        <p>
                        You can do it yourself or get your friends with “baking fingers” to help! Make simple, delicious pastries and sell them at a profit with proceeds going towards Faraja Cancer Support Trust
                        </p>
                        <p>Host a Coffee Morning as a residential estate
                          Get all tenants to meet at the carpark/ swimming pool and have a “pot luck” brunch with a donation box!</p>
                        
                      </div>
                      <div className="col-md-5 col-sm-12 col-12 align-center">
                        
                        <ParallaxProvider>
            
                          <Parallax className="custom-class" y={[10, 0]} tagOuter="figure">
                
                          <img src="../residential.png"/>
                          </Parallax>
                      </ParallaxProvider>
                      </div>
                     
        </div>
       </div>
        </section>

        <section className="host_your_own">
        
         
        <div className="inner">
      
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 align-center">
              <h2>Upcoming coffee mornings</h2>
            </div>
           </div>
            <div className="row">
              
            <div class="col">
                      <div className="event_item">
                        <div className="logo"></div>
                        <div className="event_name">Zep RE</div>
                        <div className="event_dates">TBC</div>
                      </div>
           </div>
          
              </div>
      
       
     </div>
</section>
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

    allContentfulHomeAboutUsSection {
      nodes {
        description {
          content {
            content {
              value
            }
          }
        }
        heading
      }
    }


   




  }
`; 