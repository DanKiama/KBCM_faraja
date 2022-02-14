import React from "react";
import Img from 'gatsby-image';
import get from 'lodash/get';
import { Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout";
import SEO from "../components/seo";
import { node } from "prop-types";


class gallery extends React.Component {
    render() {
        console.log(this.props)
        // const recipeEdges = this.props.data.allDrupalRecipes.edges
        const gallery = this.props.data.allContentfulPhotoGallery.nodes[0].images
        console.log(gallery)
        const filters = [
            { name: "Coffee Morning", status: false },
            { name: "Snacks", status: false },
            { name: "Meet Up", status: false },
            { name: "Events", status: false },
            { name: "Others", status: false },
        ];


        return (
            <Layout>
                <SEO title="Gallery" />



                <div className="gallery-section-hero bg-image">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="hero-text">
                                    <h2>Memories in a Snap</h2>
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
                            {gallery.map((image, i) => (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-6 coffe-morning">
                                    <div className="gallery_item">
                                        <div className="gallery_item_image set-bg">
                                            <img src={image.photo.file.url} className="img-fluid" />
                                        </div>
                                        <div className="gallery_item_text">
                                            <h4>Coffee Mornings</h4>
                                            <ul>
                                                <li>Coffee & snack</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout >
        )
    }

}


export default gallery;


export const query = graphql`
    query galleryQueryAndGalleryQuery {
        allContentfulPhotoGallery {
            nodes {
              images {
                photo {
                  file {
                    url
                  }
                }
              }
              coverImage {
                title
              }
              title {
                title
              }
            }
          }
    }
`


