import React from 'react'
import Img from 'gatsby-image'
import styles from './sponsors.module.css'

export default ({ data }) => (

  <div>
  <div className="text-center">
    <h4 className={styles.headline}>A very special thank you to our 2019 Silver Sponsors, gift and prize sponsors this year.</h4>
    </div>

      <div className="row justify-content-center">
      <div className="col-md-9">
      <div className="row justify-content-center">
      {data[0].node.logos.map(item => {
          return (
            <div className={`col-md-1 col-sm-6 ${styles.image}`} key={item.title}>
              <Img alt="" sizes={item.sizes} />

            </div>
          )
        })}
      </div>
      </div>
      
      </div>
    
      </div>
)
