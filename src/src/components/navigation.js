import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
 
  <nav role="navigation">
    <ul className={styles.navigation}>
     
      <li className={styles.navigationItem}>
        <Link to="/register/"><span data-hover="Home">Home</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/sponsorship/"><span data-hover="Sponsorship">Sponsorship</span></Link>
        
      </li>
      <li className={styles.navigationItem}>
        <Link to="/fundraising/"><span data-hover="Fundraising">Fundraising</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/gallery/"><span data-hover="Gallery">Gallery</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/"><span data-hover="Contact">Contact</span></Link>
      </li>
    
    </ul>


  </nav>
)
