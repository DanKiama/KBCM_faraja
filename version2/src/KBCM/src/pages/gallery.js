import React from "react";
import { graphql } from 'gatsby';
import StackGrid, { easings, transitions } from "react-stack-grid";

import Layout from "../components/layout";
import SEO from "../components/seo";

const { scaleDown, fadeUp } = transitions;

class gallery extends React.Component {
    constructor() {
        super();
        this.state = { width: -1 };
    }


    render() {
        console.log(this.props)
        const gallery = this.props.data.allContentfulPhotoGallery.nodes[0].images

        const newImageData = [];
        gallery.forEach((image) => {
            let imageData = [];
            imageData = {
                src: image.photo.file.url,
                srcSet: image.photo.file.url,
                sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
                width: image.photo.file.details.image.width,
                height: image.photo.file.details.image.height,
            }
            newImageData.push(imageData);
        })
        console.log(newImageData);
        const width = this.state.width;
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
                <section section className="gallery" >
                    <div>
                        <StackGrid
                            columnWidth={400}
                            appearDelay={10}
                            duration={480}
                            easing={easings.quartOut}
                            appear={fadeUp.appear}
                            appeared={fadeUp.appeared}
                            enter={fadeUp.enter}
                            entered={fadeUp.entered}
                            leaved={fadeUp.leaved}
                            monitorImagesLoaded={false}
                        >
                            {gallery.map((image, i) => (
                                <figure key={i} className="image">
                                    <img src={image.photo.file.url} />
                                </figure>
                            ))};
                        </StackGrid>
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

