import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const contactUs = () => (
  <Layout>
    <SEO title="Overview" />
    <section className="Banner inner_page">
          <div className="overlay"></div>

      
            <div className="banner_message">
             
               <h1>
              Having any questions? get in touch with us
              
          
              </h1>
             
           

            </div>
  
         
        
        </section>

        <section className="form">
       <div className="inner">
           <div className="row">

           <div className="col-md-6 col-sm-12 col-12">
                <h2>
                    Get in touch
                </h2>
                <p>
                    
                </p>

           </div>



               <div className="col-md-6 col-sm-12 col-12">
        <form method="post" action="">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
                <label>Your Email:  <input type="email" name="_replyto" /></label>
            </p>
         
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button className="button" type="submit">Send</button>
            </p>
            </form>
               </div>
           </div>
       </div>

        </section>


   
  </Layout>
)

export default contactUs