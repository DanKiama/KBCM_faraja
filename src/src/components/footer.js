import React from 'react'
import Link from 'gatsby-link'

export default () => (
    <footer className="container-fluid">
        <div className="wrapper">
            <div className="row">
                <div className="col-md-8 col-sm-12">
                    <div className="row">
                        <div className="col-md-4 col-sm-12"> <Link to="/"><img src="/footer-logo.png" alt="Faraja Rafting Challenge" /></Link></div>

                        <div className="col-md-12 col-sm-12">
                            <ul>
                                <li>21 - 23 June 2019</li>
                                <li>Savage Wilderness Camp - Sagana, Kenya</li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <ul>
                                <li><a href="mailto:info@farajacancersupport.org">info@farajacancersupport.org</a></li>
                                <li>T: 0748 811 909 </li>
                                <li>P. O. Box 39173-00800 Nairobi, Kenya.</li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-sm-12">
                            <ul>
                                <li><a href="https://www.farajacancersupport.org">www.farajacancersupport.org</a></li>
                              
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <ul>
                        <li><strong>DID YOU KNOW</strong></li>
                        <li><p>Faraja means 'Comfort' in Swahili and was founded in 2010 by Shaira Adamali.</p><p> Our Main Objective is to provide a safe haven for patients and their carers by providing emotional, practical and healing support.</p></li>
                    </ul>
                </div>
            </div>



        </div>
    </footer>
)
