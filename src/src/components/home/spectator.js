import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Photos from './photos'
import styles from './home-section.module.css'
import Container from '../container'
import ScrollAnimation from 'react-animate-on-scroll';
export default ({ article }) => (
  <div className={styles.spectator}>
    <Container >
    <ScrollAnimation animateIn="fadeIn" ><div className="text-center">
       <h3 className={`${styles.previewTitle}`}> 
          {article.title}
        </h3>
   <div className={styles.description}
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      </div></ScrollAnimation>
    </Container>
    <div className={`row`}>
      <div className="col-md-12 col-sm-12">
        {article.photos &&
          <div>
            {article.photos.map((item, index) => {
              return   <ScrollAnimation animateIn="fadeInUp"  key={index}><div className={styles.spectatorImages}>
             <div className="row justify-content-between no-gutters">
                  <div className={`col-md-6 ${index % 2 == 0 ? 'order-md-2' : ''} d-flex`}>

                    {item.description &&
                      <h4 className="align-self-center"
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}

                      />
                    }
                  </div>
                  <div className={`col-md-6 `}> <Img alt={item.title} sizes={item.sizes} /></div>
                </div>
              

              </div>  </ScrollAnimation>
            })
            }
          </div>
        }</div>
    </div>
    <Container >
   

        <div className={`${styles.body} p-5 mt-4 shadow`}
          dangerouslySetInnerHTML={{
            __html: article.body.childMarkdownRemark.html,
          }}
        />
     
    </Container>
  </div>
)
