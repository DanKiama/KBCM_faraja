import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import styles from './pageHero.module.css'
import Container from '../components/container'
import ScrollAnimation from 'react-animate-on-scroll';
export default ({ hero, user }) => (

  <div className={styles.pageHero}>
    {hero.heroImage &&

      <div className={styles.hero}>
        <BackgroundImage Tag="div"
          className={styles.heroImage}
          fluid={hero.heroImage.sizes}
        >
          <div className={styles.overlay}></div>

          <div className={styles.heroDetails}>

            <ScrollAnimation animateIn="fadeIn">   <h1 className={styles.headline}>{hero.title}</h1> </ScrollAnimation>

          </div>

        </BackgroundImage>



      </div>
    }{hero.description &&
      <Container>

        {user &&
          <div data-netlify-identity-menu></div>
        }
        {!user &&

          <ScrollAnimation animateIn="fadeIn">   <h4
            dangerouslySetInnerHTML={{
              __html: hero.description.childMarkdownRemark.html,
            }}
          />
          </ScrollAnimation>
        }


      </Container>

    }
  </div>

)