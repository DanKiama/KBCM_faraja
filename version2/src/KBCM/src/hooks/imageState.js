import { useStaticQuery, graphql } from "gatsby";

export const query = graphql`
    query galleryQuery {
        allContentfulPhotoGallery {
            edges {
                node {
                    images {
                    photo_gallery {
                        coverImage {
                        file {
                            url
                        }
                        }
                        tags
                    }
                    }
                }
                }
            }
    }
`

const imgs = this.props.data.allContentfulPhotoGallery.edges
const filters = [
    { name: "Coffee Morning", status: false },
    { name: "Snacks", status: false },
    { name: "Meet Up", status: false },
    { name: "Events", status: false },
    { name: "Others", status: false },
];

const Filters = () => {


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
}




