import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../content/slide1.png';
import slide2 from '../content/slide2.png';
import slide3 from '../content/slide3.png';
import slide4 from '../content/slide4.png';
import slide5 from '../content/slide5.png';
import slide6 from '../content/slide6.png';


export default class ResponsiveCarousel extends Component {
   render() {
      var settings = {
         dots: false,
         infinite: true,
         speed: 800,
         slidesToShow: this.props.slidesToShow,
         slidesToScroll: 1,
         initialSlide: 0,
         autoplay: true,
         autoplaySpeed: 2000,
      };
      return (
         <div>
            <Slider {...settings}>
               <div>
                  <img src={slide1} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide2} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide3} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide4} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide5} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide6} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide1} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide2} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide3} alt="" className={this.props.tailwindclass} />
               </div>
               <div>
                  <img src={slide4} alt="" className={this.props.tailwindclass} />
               </div>
            </Slider>
         </div>
      );
   }
}