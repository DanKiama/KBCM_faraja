import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/navigation'
import styles from './navigation.module.css'
const netlifyIdentity = require("netlify-identity-widget");

export default class Header extends React.Component {
 
    constructor(data) {
        super(data);

        this.state = {
            products: []
        }
    }
    componentDidMount(){
        netlifyIdentity.init();
    }
   
    render() {
        return (
            <div id="header" className="container-fluid">
                <div className="wrapper">
                    <div className="row justify-content-between">
                        <div className="col-lg-2 col-md-2 col-sm-3 col-3 padding-0">
                            <div id="logo">   <Link to="/"><img src="/faraja.png" alt="faraja kbcm" /></Link></div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-12 padding-0 main_navigation_wrapper">
                           
                           <Navigation />
                           
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-12 col-9 padding-0 align-right">
                                <ul className="navigation_buttons">
                                    <li className={styles.rightNavigationItem}>
                                    <Link className={styles.navigationButtons} to="/">SIGN UP</Link>
                                    </li>
                                    <li className={styles.rightNavigationItem}>
                                    <Link className={styles.navigationButtons} to="/">DONATE</Link>
                                    
                                    </li>
                                    <li className={styles.rightNavigationItem}>
                                    <Link className={styles.navigationButtons} to="/">BROCHURE</Link>
                                    </li>
                                    <li className={styles.rightNavigationItem}>
                                    <Link className={styles.navigationButtons} to="/">PLEDGE</Link>
                                    </li>
                                </ul>
                                {/* <!--start navigation icon--> */}
                                        <div className="mobileMenu">
                                        <div className="bar1"></div>
                                        <div className="bar2"></div>
                                        <div className="bar3"></div>
                                        </div>
                                        

                                {/* <!--end navigation icon--> */}
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}
