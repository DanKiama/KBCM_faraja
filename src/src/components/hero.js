import React from 'react'
import Link from 'gatsby-link'
import BackgroundImage from 'gatsby-background-image'
import styles from './hero.module.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Header from '../components/header'

class Hero extends React.Component {
  constructor() {
    super();
    this.state = { activeSlide: 0 };
  }
  componentDidMount() {

    setTimeout(() => {
      this.start();
    }, 2000)
  }

  start() {
    const { data } = this.props;
    const { activeSlide } = this.state;

    let time = 5000;
    var newCount = activeSlide === data.length - 1 ? 0 : activeSlide + 1;
    this.setState({ activeSlide: newCount }, () => {
      setTimeout(() => {
        this.start();
      }, time)
    })
  }

  render() {
    const { data, isHome } = this.props;
    const { activeSlide } = this.state;
    return (
    
      <div className={styles.hero}>
         <Header />
        <div className="relative">
        <div className={styles.hero_text}>
            <ScrollAnimation animateIn="fadeIn" >
                <h1> <ScrollAnimation animateIn="bounceIn" delay="500">KENYAS <br/>BIGEST COFFEE <br/>MORNING </ScrollAnimation></h1>
            </ScrollAnimation>

           
            </div>
        
          
        </div>

      </div>
    )

  }

}

export default Hero;

