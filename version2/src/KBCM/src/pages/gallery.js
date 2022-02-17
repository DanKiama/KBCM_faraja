import React from "react";
import { graphql } from 'gatsby';
// import StackGrid, { easings, transitions } from "react-stack-grid";
import Gallery from 'react-grid-gallery';

import Layout from "../components/layout";
import SEO from "../components/seo";

// const { scaleDown, fadeUp } = transitions;

class gallery extends React.Component {
    render() {
        console.log(this.props)
        const gallery = this.props.data.allContentfulPhotoGallery.nodes[0].images

        const newImageData = [];
        gallery.forEach((image) => {
            let imageData = [];
            imageData = {
                src: image.photo.file.url,
                srcset: image.photo.file.url,
                width: image.photo.file.details.image.width,
                height: image.photo.file.details.image.height,
                thumbnail: image.photo.file.url,
                thumbnailWidth: image.photo.file.details.image.width,
                thumbnailHeight: image.photo.file.details.image.height,
            }
            newImageData.push(imageData);
        })
        console.log(newImageData);

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
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row">
                        <section className="gallery">
                            <Gallery
                                className=""
                                images={newImageData}
                                rowHeight={180}
                                enableImageSelection={false}
                                backdropClosesModal={true}
                                lightboxWidth={500}
                            />

                        </section>
                    </div>
                </div>


            </Layout >
        )
    }

}


export default gallery;


export const query = graphql`
    query GalleryQuery {
        allContentfulPhotoGallery {
            nodes {
                images {
                    photo {
                    file {
                        url
                        details {
                        image {
                            height
                            width
                        }
                        }
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

