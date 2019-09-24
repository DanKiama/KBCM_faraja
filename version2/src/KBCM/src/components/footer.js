import React from 'react'
import Link from 'gatsby-link'
import { FaTwitter, FaLinkedin, FaFacebook, FaGooglePlus, FaGooglePlusSquare } from 'react-icons/fa';
import styles from './footer.module.css'

export default () => (
  
      
       
     
<footer className={styles.footer}>

<div className="inner">

    <div className="row">

      
      <div className="col-md-12 py-2">
          <ul>
              <li>
              <FaTwitter />
              </li>
              <li>
              <FaLinkedin /> 
              </li>
              <li>
              <FaFacebook /> 
              </li>
              
              <li>
              <FaGooglePlusSquare /> 
              </li>
          </ul>
     
   
      </div>
     

  
   
  </div>
  

 
  <div className="footer-copyright text-center">© 2018 Copyright:
    <a href="https:farajacancersupport.org" target="blank"> faraja</a>
  </div>

  </div>
</footer>
 
  

           

   
)