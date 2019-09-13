import React from 'react'
/*import Link from 'gatsby-link'*/
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PageHero from '../components/pageHero'
import Container from '../components/container'
import ScrollAnimation from 'react-animate-on-scroll';
import RegisterForm from '../components/RegisterForm/RegisterForm';
const netlifyIdentity = require("netlify-identity-widget");

class RegistrationNewIndex extends React.Component {
  constructor(data) {
    super(data);

    this.state = {
      user: null
    }

    this.onSignupClick = this.onSignupClick.bind(this);
  }
 
  componentDidMount() {
   
   this.updateUser();

    netlifyIdentity.on("login", user => this.updateUser());
    netlifyIdentity.on("logout", () => this.updateUser());
  }
  updateUser() {
    var user = netlifyIdentity.currentUser();
    this.setState({ user: user});

  }

  onSignupClick() {
    netlifyIdentity.open('signup'); // open the modal to the signup tab
  }
  render() {
    const { user } = this.state;
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const allSections = get(this, 'props.data.allContentfulBlogPost.edges')
    const hero = allSections.filter(a => (a.node.tags && a.node.tags.includes('Hero')))[0];
    const innerSections = allSections.filter(a => a !== hero);
    return (
      <Layout>
        <Helmet title={`Register | ${siteTitle}`} />
        <PageHero hero={hero.node} user={user} />
        {!user &&
          <Container>
            <div className="row justify-content-center text-center register">
              
              <div className={`col-md-4 col-sm-12`}>
                <ScrollAnimation animateIn="zoomIn">  <a className="btn" onClick={this.onSignupClick}>Sign up</a></ScrollAnimation>
              </div>
              <div className={`col-md-12`}>
                {hero.node.body &&
                  <div className="foot-note"
                    dangerouslySetInnerHTML={{
                      __html: hero.node.body.childMarkdownRemark.html,
                    }}
                  />
                }
              </div>
            </div>
          </Container>
        }
        <div className="container-fluid">
          <div className="wrapper register"> 
        
               <div className={`${!user ? 'd-none' : ''}`}>
              <RegisterForm user={user}></RegisterForm>
            </div>
            {!user &&
              innerSections.map((item, index) => {
                return <section key={item.node.slug}>
                  <ScrollAnimation animateIn="fadeIn">  <div className="row justify-content-between no-gutters">
                    <div className={`col-md-6 ${index % 2 == 0 ? 'order-md-2' : ''}`}>
                      <h3>{item.node.title}</h3>
                      {item.node.description &&
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.node.description.childMarkdownRemark.html,
                          }}

                        />
                      }
                    </div>
                    <div className={`col-md-6 `}>  <Img alt={item.node.title} sizes={item.node.heroImage.sizes} /></div>
                  </div></ScrollAnimation>


                </section>
              })
            }
          </div>

        </div>
      </Layout>
    )
  }
}

export default RegistrationNewIndex

export const pageQuery = graphql`
  query registerNewQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(filter: { tags : { eq: "Register" }} sort: { fields: [sort], order: ASC }) {
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

