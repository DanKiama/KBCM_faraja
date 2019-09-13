import React from 'react'
import Link from 'gatsby-link'
import ScrollAnimation from 'react-animate-on-scroll';
import Photos from './photos'
import styles from './home-section.module.css'
export default ({ article }) => (
 
  <div className={`row justify-content-between ${styles.difference}`}>
 <div className="col-md-12 col-sm-12">
 <ScrollAnimation animateIn="fadeIn">
<section id="makeDifference" className={styles.homeFundraiserSection}>
  <div className="container">
 <div className="row justify-content-between">
   
 <div className="col-lg-12 col-md-12 col-sm-12 relative">
 <ScrollAnimation animateIn="pulse" delay="500">
   <div className={styles.fundsContent}>
     <h4>6th Annual WWRC - Sagana</h4>
     <h3>Congratulations to our Highest Fundraisers!</h3>
    
    <p>
    We are overwhelmed by the support and enthusiasm shown this year by both corporate and individual teams. We had some fantastic new fundraising initiatives that were not only creative but simple and fun.
     </p>
   </div>
   </ScrollAnimation>
  
 
   <ScrollAnimation animateIn="fadeInUp">
   <div className={styles.topFunds}>
     <p>Ksh 5.5</p>
     <p>MILLION</p>
     <p><span>44 teams! 500 spectators!</span></p>

   </div>
   </ScrollAnimation>

   <ScrollAnimation animateIn="fadeIn" >
   <span className={styles.fundRaiser1}>
   
   Gio Gio <strong>Ksh 570,500</strong>
   </span>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn " delay="500">
   <span className={styles.fundRaiser2}>
      Sayani Investments <strong>Ksh 420,000</strong>
   </span>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" delay="1000">
   <span className={styles.fundRaiser3}>
   PwC <strong> Ksh 418,500</strong>
   </span>
   </ScrollAnimation>
   <ScrollAnimation animateIn="faddeIn" delay="1500">
   <span className={styles.fundRaiser4}>
   Anjarwalla and Khanna <strong> Ksh 280,700</strong>
   </span>
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" delay="2000">
   <span className={styles.fundRaiser5}>
   Armaan <strong> Ksh 256,869</strong>
   </span>
   </ScrollAnimation>
 </div>
</div>
</div>
</section>
</ScrollAnimation>
<div className="container">
 <div id={styles.makeDifferenceSection} className={`row justify-content-between`}>
 <div className="col-md-12 col-sm-12">
    <ScrollAnimation animateIn="fadeIn">   <h3 className={styles.previewTitle}>
        {article.title}
      </h3></ ScrollAnimation>
     <ScrollAnimation animateIn="rotateInDownRight" animateOnce ={true}>  <div className={styles.paddle}> <img src="/paddle.png" alt="Paddle Image" /></div></ ScrollAnimation>
     <ScrollAnimation animateIn="fadeIn">  <div className={styles.body}
        dangerouslySetInnerHTML={{
          __html: article.body.childMarkdownRemark.html,
        }} /></ ScrollAnimation>
      <div className="col-md-8 col-sm-10">
      <ScrollAnimation animateIn="zoomIn" >  <Link to="/register" className="btn">REGISTER TODAY!</Link></ ScrollAnimation>
      </div>
  
    </div>
  
 </div>
</div>
 </div>
   
   

  </div>

)

