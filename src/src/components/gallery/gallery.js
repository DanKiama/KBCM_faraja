import React from 'react'
import styles from './gallery.module.css'
import Img from 'gatsby-image'
import Container from '../container'


class Gallery extends React.Component {
  constructor() {
    super();
    this.state = { activeSlide: null };
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    this.onNextPrevSlide = this.onNextPrevSlide.bind(this);
    this.onClose = this.onClose.bind(this);
  }
  componentDidMount() {

  }
  onThumbnailClick(id) {

    const { data } = this.props;
    var activeSlide = data.filter(a => a.id == id)[0];

    this.setState({ activeSlide: activeSlide }, () => {
      document.body.style.overflow = "hidden";
    })
  }
  onNextPrevSlide(currentId, backwards) {

    const { data } = this.props;
    var currentSlide = data.filter(a => a.id == currentId)[0];

    const currentIndex = data.indexOf(currentSlide);
    var index = (currentIndex - 1);

    if (backwards) {
      index = (currentIndex + 1);
    }

    let nextIndex = index % data.length;
    nextIndex = nextIndex == -1 ? data.length - 1 : nextIndex

    var activeSlide = data[nextIndex];
    this.setState({ activeSlide: null }, () => {
      this.setState({ activeSlide: activeSlide })
    })
    
  }
  onClose() {
    this.setState({ activeSlide: null }, () => { document.body.style.overflow = "inherit"; })
  }
  render() {
    const { data } = this.props;
    const { activeSlide } = this.state;
    return (
      <div>
        {data && !activeSlide &&

          <ul className={`justify-content-center ${styles.thumnailsList}`}>
            {data.map((item, index) => {
              return (
                <li className={`${styles.inline} effect4`} key={index}>
                  <a title="Larger image" onClick={this.onThumbnailClick.bind(this, item.id)}><Img alt={item.title} sizes={item.sizes} /></a>

                </li>
              )
            })}
          </ul>

        }
        {activeSlide &&



          <div className={styles.overlay}>
            <a className={styles.close} title="Close" onClick={this.onClose}>X</a>
            <a className={styles.next} title="Next" onClick={this.onNextPrevSlide.bind(this, activeSlide.id)}>></a>
            <a className={styles.previous} title="Previous" onClick={this.onNextPrevSlide.bind(this, activeSlide.id, true)}>&lt;</a>
            <Container>
              <div className="animated zoomIn">
                 <Img alt={activeSlide.title} sizes={activeSlide.sizes} />
              </div>
             
            </Container>

          </div>
        }

      </div>



    )
  }
}

export default Gallery;