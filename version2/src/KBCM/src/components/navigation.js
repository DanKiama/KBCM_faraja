import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
 
  <nav role="navigation">
    <ul className={styles.navigation}>
     
      <li className={styles.navigationItem}>
        <Link to="/"><span data-hover="Home">Home</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="#about"><span data-hover="About">About </span></Link>
        
      </li>
      <li className={styles.navigationItem}>
        <Link to="/ideas/"><span data-hover="Ideas">Ideas</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/"><span data-hover="Gallery">Gallery</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/"><span data-hover="Contact">Contact</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/"><span data-hover="FAQs">FAQs</span></Link>
      </li>
    
    </ul>


  </nav>
)
