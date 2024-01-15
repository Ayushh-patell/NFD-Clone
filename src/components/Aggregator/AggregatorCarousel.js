import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";

const owlOptions = {
    loop: false,
    dots: true,
    items: 1,
  };

const AggregatorCarousel = () => {
  return (
       <OwlCarousel className="owl-theme mt-6" {...owlOptions}>
       <div className=" w-3/4 mx-auto flex items-center justify-center">
        <img  src="./Img/Aggslider1.webp" alt="" />
       </div>
       <div className=" w-3/4 mx-auto flex items-center justify-center">
        <img  src="./Img/Aggslider2_1.webp" alt="" />
       </div>
       <div className=" w-3/4 mx-auto flex items-center justify-center">
        <img  src="./Img/Aggslider3.webp" alt="" />
       </div>

       </OwlCarousel>

  )
}

export default AggregatorCarousel
