import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";

const owlOptions = {
  loop: false,
  dots: true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      }
  }
};

const RoadmapCarousel = () => {
  return (
    <OwlCarousel className="owl-theme" {...owlOptions}>
      <div style={{background:"linear-gradient(146.95deg, rgb(35, 35, 36) -0.9%, rgb(21, 21, 22) 130.17%)"}} className=" pt-5 p-4 mx-12 relative rounded-lg shadow-lg">
        <h4 className=" text-xl pb-5 border-b border-white w-fit text-white">
          Stage 1
        </h4>
        <ul className=" flex flex-col items-start justify-center mt-4">
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
            <p>Development</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
            <p>Activities & Aggregator</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
            <p>Alpha Test</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
            <p>Alpha search tool</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-orange-500 pulse flex-shrink-0"></div>
            <p>Beta test</p>
          </li>
        </ul>
      </div>
      <div style={{background:"linear-gradient(146.95deg, rgb(35, 35, 36) -0.9%, rgb(21, 21, 22) 130.17%)"}} className=" pt-5 p-4 mx-12 relative rounded-lg shadow-lg">
        <h4 className=" text-xl pb-5 border-b border-white w-fit text-white">
          Stage 2
        </h4>
        <ul className=" flex flex-col items-start justify-center mt-4">
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-orange-500 pulse flex-shrink-0"></div>
            <p>ROI scanner</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-orange-500 pulse flex-shrink-0"></div>
            <p>Aggregator "Summary"</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-orange-500 pulse flex-shrink-0"></div>
            <p>Twitter scanner tool</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>Whale's analysis</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-orange-500 pulse flex-shrink-0"></div>
            <p>Blocks in agggregator</p>
          </li>
        </ul>
      </div>
      <div style={{background:"linear-gradient(146.95deg, rgb(35, 35, 36) -0.9%, rgb(21, 21, 22) 130.17%)"}} className=" pt-5 p-4 mx-12 relative rounded-lg shadow-lg">
        <h4 className=" text-xl pb-5 border-b border-white w-fit text-white">
          Stage 3
        </h4>
        <ul className=" flex flex-col items-start justify-center mt-4">
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-orange-500 pulse flex-shrink-0"></div>
            <p>New sections in "Activities"</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>Launching NFD DAO</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>Expanding the calander</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>Token vesting tool</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>NFD lab incubator</p>
          </li>
        </ul>
      </div>
      <div style={{background:"linear-gradient(146.95deg, rgb(35, 35, 36) -0.9%, rgb(21, 21, 22) 130.17%)"}} className=" pt-5 p-4 mx-12 relative rounded-lg shadow-lg">
        <h4 className=" text-xl pb-5 border-b border-white w-fit text-white">
          Stage 4
        </h4>
        <ul className=" flex flex-col items-start justify-center mt-4">
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>Crypto arbitrage scanner</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>Alpha search AI developing based on data collected</p>
          </li>
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>Adding any service based on NFD DAO</p>
          </li>
        </ul>
      </div>
      <div style={{background:"linear-gradient(146.95deg, rgb(35, 35, 36) -0.9%, rgb(21, 21, 22) 130.17%)"}} className=" pt-5 p-4 mx-12 relative rounded-lg shadow-lg">
        <h4 className=" text-xl pb-5 border-b border-white w-fit text-white">
          Stage 5
        </h4>
        <ul className=" flex flex-col items-start justify-center mt-4">
          <li className=" my-1 flex justify-center items-center gap-2 text-white">
            <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
            <p>
              The launch of project "X" by NFD labs, which will change the
              culture of crypto investment
            </p>
          </li>
        </ul>
      </div>
    </OwlCarousel>
  );
};

export default RoadmapCarousel;
