import React from "react";
import Img from 'gatsby-image';
import get from 'lodash/get';
import { Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import baguetteBox from "baguettebox.js";

import Layout from "../components/layout";
import SEO from "../components/seo";

class gallery extends React.Component {
    render() {
        // baguetteBox.run('.gallery');
        return (
            <Layout>
                <SEO title="Gallery" />

                <div className="gallery-section-hero bg-image">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="hero-text">
                                    {/* <h2>Memories in a Snap</h2> */}
                                </div>
                            </div>
                        </div >
                    </div >
                </div >

                {/* Gallery Section */}
                <section section className="gallery items" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="gallery_filter">
                                    <li className="active" data-filter="*">All</li>
                                    <li data-filter=".coffee-morning">Coffee Morning</li>
                                    <li data-filter=".bike-ride">Bike Ride</li>
                                    <li data-filter=".meeting">Meeting</li>
                                    <li data-filter=".exercise-center">Exercise Center</li>
                                </ul>
                            </div>
                        </div>

                        <div className="row gallery_image">
                            <div className="col-lg-4 col-md-6 col-sm-6 coffe-morning">
                                <div className="gallery_item">
                                    <div className="gallery_item_image set-bg">
                                        <img src="../img6.jpg" alt="image" className="img-fluid" />
                                        <a className="view-btn" href="../img6.jpg">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                        </a>
                                    </div>
                                    <div className="gallery_item_text">
                                        <h4>Coffee Mornings</h4>
                                        <ul>
                                            <li>Coffee & snack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 coffe-morning">
                                <div className="gallery_item">
                                    <div className="gallery_item_image set-bg">
                                        <img src="../img1.jpg" alt="image" className="img-fluid" />
                                        <a className="view-btn" href="../img1.jpg">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                        </a>
                                    </div>
                                    <div className="gallery_item_text">
                                        <h4>Coffee Mornings</h4>
                                        <ul>
                                            <li>Coffee & snack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 coffe-morning">
                                <div className="gallery_item">
                                    <div className="gallery_item_image set-bg">
                                        <img src="../img2.jpg" alt="image" className="img-fluid" />
                                        <a className="view-btn" href="../img2.jpg">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                        </a>
                                    </div>
                                    <div className="gallery_item_text">
                                        <h4>Coffee Mornings</h4>
                                        <ul>
                                            <li>Coffee & snack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 coffe-morning">
                                <div className="gallery_item">
                                    <div className="gallery_item_image set-bg">
                                        <img src="../img4.jpg" alt="image" className="img-fluid" />
                                        <a className="view-btn" href="../img4.jpg">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                        </a>
                                    </div>
                                    <div className="gallery_item_text">
                                        <h4>Coffee Mornings</h4>
                                        <ul>
                                            <li>Coffee & snack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 coffe-morning">
                                <div className="gallery_item">
                                    <div className="gallery_item_image set-bg">
                                        <img src="../img3.jpg" alt="image" className="img-fluid" />
                                        <a className="view-btn" href="../img3.jpg">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                        </a>
                                    </div>
                                    <div className="gallery_item_text">
                                        <h4>Coffee Mornings</h4>
                                        <ul>
                                            <li>Coffee & snack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 coffe-morning">
                                <div className="gallery_item">
                                    <div className="gallery_item_image set-bg">
                                        <img src="../img5.jpg" alt="image" className="img-fluid" />
                                        <a className="view-btn" href="../img5.jpg">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                                        </a>
                                    </div>
                                    <div className="gallery_item_text">
                                        <h4>Coffee Mornings</h4>
                                        <ul>
                                            <li>Coffee & snack</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout >
        )
    }

}

export default gallery;
