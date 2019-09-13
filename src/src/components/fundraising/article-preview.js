import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'


export default ({ article }) => (
  <div className={styles.preview}>

    <h3 className={styles.previewTitle}>
    {article.title}
    </h3>
  
    <div
      dangerouslySetInnerHTML={{
        __html: article.body.childMarkdownRemark.html,
      }}
    />
  </div>
)
