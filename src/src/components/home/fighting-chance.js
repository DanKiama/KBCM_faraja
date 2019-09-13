import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styles from './home-section.module.css'
import Container from '../container'

export default ({ article }) => (
  <div className={styles.fight}>
 <Container >
    
    <h3 className={styles.previewTitle}>
    <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
  
    <div className={styles.body}
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
      <Link to={`/blog/${article.slug}`}>Read more +</Link>
  
  </Container>
  </div>

)
