import React from "react";
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Parallax } from 'react-scroll-parallax';
import { ParallaxProvider } from 'react-scroll-parallax';



class homePage extends React.Component{
  render() {
    const banner = get(this, 'props.data.allContentfulBannerSection.nodes')[0]
    const aboutUsSection = get(this, 'props.data.allContentfulHomeAboutUsSection.nodes')[0]
    const hostYourOwn = get(this, 'props.data.allContentfulHostCoffeeMorning.nodes')[0]
    const upcomingCoffeeMornings = get(this, 'props.data.allContentfulUpcomingCoffeeMornings.edges')
    console.log(upcomingCoffeeMornings);
    return (
      <Layout>
        <SEO title="Banner" />
             
              
        <section className="Banner">
          <div className="overlay"></div>

      
            <div className="banner_message">
             
               <h1>
          <img src="../header.png"/>
              
          
              </h1>
             
              <p>
              {banner.description.content && banner.description.content.length && banner.description.content[0].content.length &&
              
              banner.description.content[0].content[0].value}
              
              </p>
             <Link to="#about">
             <div className="scroll">
             
             
             <div className="chevron"></div>
             <div className="chevron"></div>
             <div className="chevron"></div>

           </div>
             </Link>
             
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
                     <a className="button" href="https://farajacancersupport.org/about/" target="blank">Read more about Faraja</a>
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
                        <h2>{hostYourOwn.mainTitle}</h2><br/>
          </div>
         </div>
       <div className="row">
                      <div className="col-md-5 col-sm-12 col-12 align-center">
                        
                        <ParallaxProvider>
            
                          <Parallax className="custom-class" x={[-50, 0]} tagOuter="figure">
              
                            <Img alt="coffee maker" sizes={hostYourOwn.ideaOne.sizes} />
            
                         
                          </Parallax>
                      </ParallaxProvider>
                      </div>
                      <div className="col-md-7 col-sm-12 col-12">
                        <h4>{hostYourOwn.ideOneTitle}</h4>
                        <p>
                        {hostYourOwn.ideaOneDescription.content && hostYourOwn.ideaOneDescription.content.length && hostYourOwn.ideaOneDescription.content[0].content.length &&
              
              hostYourOwn.ideaOneDescription.content[0].content[0].value}
                       </p>
                        
                      </div>
        </div>
       </div>
        </section>
        <section className="ideas">
       <div className="inner">
       <div className="row">
       <div className="col-md-7 col-sm-12 col-12">
                        <h4>{hostYourOwn.ideaTwoTitle}</h4>
                        <p>
                        {hostYourOwn.ideaTwoDescription.content && hostYourOwn.ideaTwoDescription.content.length && hostYourOwn.ideaTwoDescription.content[0].content.length &&
              
              hostYourOwn.ideaTwoDescription.content[0].content[0].value}
                       </p>
                        
                      </div>
                      <div className="col-md-5 col-sm-12 col-12 align-center">
                        
                        <ParallaxProvider>
            
                          <Parallax className="custom-class" y={[10, 0]} tagOuter="figure">
                
                          <Img alt="coffee maker" sizes={hostYourOwn.ideaTwoImage.sizes} />
                          </Parallax>
                      </ParallaxProvider>
                      </div>
                     
        </div>
       </div>
        </section>

        <section className="host_your_own upcoming">
        
         
        <div className="inner">
      
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 align-center">
              <h2>Upcoming coffee mornings</h2>
            </div>
           </div><br/>
            <div className="row">
              
            <div className="col-md-12">
            {upcomingCoffeeMornings.map(({ node }) => {
           
           return (
         
            <div className="event_item">
            <div className="logo"> <Img alt="coffee maker" sizes={node.logo.sizes} /></div>
            <div className="event_name">{node.name}</div>
            <div className="event_dates">{node.confirmation}</div>
            </div>
         
           )})}
                     
           </div>
          
              </div>
      
       
     </div>
</section>

<section className="bottom_section">
        
         
        <div className="inner">
      
          <div className="row">
          <div className="col-md-5 col-sm-12 col-12 align-center">
             
            </div>
            <div className="col-md-7 col-sm-12 col-12 bottom_heading ">
            
              <h2>Long heading will go in here</h2>
              <h3>Speak to one of us now</h3>
              <p>
              Discover your special morning cup of coffee here at Arabusta! We will offer you aromatic blend of arabica and orient spices. Our regular clients adore this morning routine and come to us everyday for the next portion of coffee. Our menu includes various special beverages you can try!

Call us or contact online to book a table for your perfect meeting with friends! You will have your great time at Aromecafe over coffee and dessert.
              </p>
              <Link className="button" to="" target="blank">Contact us</Link>

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


    allContentfulHostCoffeeMorning  {
      nodes {
        mainTitle
        ideOneTitle
        ideaTwoTitle
        ideaOne {
          sizes(resizingBehavior: SCALE) {
           ...GatsbyContentfulSizes_withWebp
          }
        }

        ideaOneDescription {
          content {
            content {
              value
            }
          }
        }

        
        ideaTwoImage {
          sizes(resizingBehavior: SCALE) {
           ...GatsbyContentfulSizes_withWebp
          }
        }

        ideaTwoDescription {
          content {
            content {
              value
            }
          }
        }
        
      }
    }


    allContentfulUpcomingCoffeeMornings {
   edges{
    node {
      
      name
      logo {
        sizes(resizingBehavior: SCALE) {
         ...GatsbyContentfulSizes_withWebp
        }
      }
      confirmation
    }
  }
   }


  }
`; 