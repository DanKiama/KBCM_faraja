import React from "react";
import Img from 'gatsby-image';
import get from 'lodash/get';
import { Link, graphql } from 'gatsby';
import baguetteBox from "baguettebox.js";

import Layout from "../components/layout";
import SEO from "../components/seo";

class gallery extends React.Component {
    render() {
        baguetteBox.run('.gallery');
        return (
            <Layout>
                <SEO title="Gallery" />

                <section className="gallery-section-hero bg-image">
                    <div className="row justify-content-center align-items-center">
                        <div class="col-md-7 text-center">
                            <h1 class="text-white heading text-uppercase aos-init aos-animate" data-aos="fade-up">Memories in Snap</h1>
                            <p class="lead text-white mb-5 aos-init" data-aos="fade-up" data-aos-delay="100">If a picture paints a thousand words, then a let a picture inspire a thousand words.</p>
                        </div>
                    </div>
                </section>

                {/* Gallery Body */}
                <div className="container-fluid">
                    <section className="row align-items-stretch photos">
                        <div className="col-12 ">
                            <div className="gallery row align-items-stretch">
                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../img1.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../img2.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../img3.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../img4.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../img5.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../img6.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../img7.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../pic4.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../pic5.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4 aos-init aos-animate">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../pic6.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../pic7.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../pic8.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>

                                <div className="col-6 col-md-6 col-lg-4">
                                    <a className="lightbox d-block photo-item" href="../img.jpg">
                                        <img src="../pic9.jpg" alt="image" className="img-fluid" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        )
    }

}

export default gallery;
