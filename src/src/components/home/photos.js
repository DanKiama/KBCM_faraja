import React from 'react'
import styles from './photos.module.css'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll';
export default ({ article, inline }) => (

  <div>
    {article.photos &&

<ScrollAnimation animateIn="fadeIn" >  <ul className={`list-inline ${inline ? 'd-flex' : ''} justify-content-center ${styles.photosList}`}>
        {article.photos.map((item, index)=> {
          return (
           <li className={`${inline ? styles.inline : ''} shadow`} key={index}>
              <Img alt={item.title} sizes={item.sizes} />
              <h4 className={styles.title}>
                {item.title}
              </h4>
              {item.description &&
                <div className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }} />
              }
            </li>
          )
        })}
      </ul></ScrollAnimation>

    }
  </div>

)