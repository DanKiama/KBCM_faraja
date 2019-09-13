import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Photos from './photos'
import Container from '../container'
import styles from './home-section.module.css'


export default ({ article }) => (
  <div className={`${styles.prize}`}>
    <Container >
      <div className="text-center">

        <h3 className={styles.previewTitle}>{article.title}</h3>
        {article.body &&
          <div
            dangerouslySetInnerHTML={{
              __html: article.body.childMarkdownRemark.html,
            }} />
        }
      </div>
    </Container>
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <Photos article={article} />
      </div>
    </div>
  </div>
)
