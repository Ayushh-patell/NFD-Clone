import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import SlideSVG1 from "./slideSVG1";
import SlideSVG3 from "./slideSVG3";
import SlideSVG2 from "./slideSVG2";

const AggregatorSlider = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sliderRef = useRef();

  const [slide1SVG, setslide1SVG] = useState(0)
  const [slide2SVG, setslide2SVG] = useState(2)

  useGSAP(
    () => {
      gsap.defaults({ overwrite: "auto", duration: 1.5 });
      gsap.set(".Img1", { right: " 5%", bottom: "50%", translate: "0 40%" });
      gsap.set(".Img21", { right: " 6%", bottom: "-15%", translate: "0 40%", autoAlpha: 0.5,});
      gsap.set(".Img22", { right: " 5%", bottom: "-15%", translate: "0 40%", autoAlpha: 0.5,});
      gsap.set(".Img3", { right: " 5%", bottom: "-50%", translate: "0 40%", autoAlpha: 0,});
      gsap.set(".slideText1", {autoAlpha:1})
      gsap.set(".slideText2", {autoAlpha:0.6})
      gsap.set(".slideText3", {autoAlpha:0.6})
      ScrollTrigger.create({
        trigger: ".targetscroll",
        scroller: ".scroller",
        start: "5% top",
        end: "50% top",
        onEnter: () => {
          gsap.to(".Img1", { right: "-50%", autoAlpha: 0.5 });
          gsap.to(".Img21", { bottom: "70%", right: "10%", delay: 0.2, autoAlpha: 1,});
          gsap.to(".Img22", { bottom: "40%", delay: 0.2, autoAlpha: 1 });
          gsap.to(".Img3", { bottom: "-45%", autoAlpha: 0.5, delay: 0.4 });
          gsap.to(".slideText1", {autoAlpha:0.6})
          gsap.to(".slideText2", {autoAlpha:1})
          setslide1SVG(1)
          setslide2SVG(0)
        },
        onLeaveBack: () => {
          gsap.to(".Img1", { right: " 5%", bottom: "50%", translate: "0 40%", autoAlpha: 1,
          });
          gsap.to(".Img21", { right: " 6%", bottom: "-15%", translate: "0 40%", autoAlpha: 0.5,
          });
          gsap.to(".Img22", { right: " 5%", bottom: "-15%", translate: "0 40%", autoAlpha: 0.5,
          });
          gsap.to(".Img3", { right: " 5%", bottom: "-50%", translate: "0 40%", autoAlpha: 0,
          });
          gsap.to(".slideText1", {autoAlpha:1})
          gsap.to(".slideText2", {autoAlpha:0.6})
          setslide1SVG(0)
          setslide2SVG(2)
        },
      });
      ScrollTrigger.create({
        trigger: ".targetscroll",
        scroller: ".scroller",
        start: "50% top",
        end: "80% top",
        onEnter: () => { gsap.to(".Img21", { right: "-50%", autoAlpha: 0.5 });
         gsap.to(".Img22", { right: "-50%", autoAlpha: 0.5 });
          gsap.to(".Img3", { bottom: "40%", autoAlpha: 1, delay: 0.2 });
          gsap.to(".slideText2", {autoAlpha:0.6})
          gsap.to(".slideText3", {autoAlpha:1})
          setslide1SVG(2)
          setslide2SVG(1)
        },
        onLeaveBack: () => {
          gsap.to(".Img1", { right: "-50%", autoAlpha: 0.5 });
          gsap.to(".Img21", { bottom: "70%", right: "10%", delay: 0.2, autoAlpha: 1,
          });
          gsap.to(".Img22", { bottom: "40%", right: "5%", delay: 0.2, autoAlpha: 1,
          });
          gsap.to(".Img3", { bottom: "-45%", autoAlpha: 0.5, delay: 0.4 });
          gsap.to(".slideText2", {autoAlpha:1})
          gsap.to(".slideText3", {autoAlpha:0.6})
          setslide1SVG(1)
          setslide2SVG(0)
        },
      });
    },
    { scope: sliderRef }
  );

  return (
    <div className=" w-full" ref={sliderRef}>
      <div className=" w-[90%] mx-auto  rounded-lg overflow-hidden h-[600px] relative flex justify-end items-center">
        <div className=" w-1/2 h-full  absolute top-0 left-0 flex flex-col justify-center items-center gap-5 p-6 text-center">
          <p className=" text-white slideText1">
            You can see several categories of these events, from retrodrops and
            early projects to raffles and mint sales.
          </p>
          <div>
            <svg
              width="28"
              height="46"
              viewBox="0 0 28 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity="1"
            >
            {slide1SVG === 0 && <SlideSVG1/>}
            {slide1SVG === 1 && <SlideSVG2/>}
            {slide1SVG === 2 && <SlideSVG3/>}
            </svg>
          </div>
          <p className=" text-white slideText2">
            All of these events have an overview page and a step-by-step guide.
          </p>
          <div>
          <svg
              width="28"
              height="46"
              viewBox="0 0 28 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              opacity="1"
            >
            {slide2SVG === 0 && <SlideSVG1/>}
            {slide2SVG === 1 && <SlideSVG2/>}
            {slide2SVG === 2 && <SlideSVG3/>}
            </svg>
          </div>
          <p className=" text-white slideText3">
            And a major plus is that they all have an “Auto-update feed”, and
            all updates/changes to these activities are analyzed and researched
            by our team and published in this feed.
          </p>
        </div>
        <div
          style={{ scrollbarWidth: "none" }}
          className=" scroller w-full h-full overflow-x-hidden overflow-y-scroll relative"
        >
          <div className=" targetscroll w-full h-[2000px] relative"></div>
        </div>
        <div className=" w-full h-full absolute top-0 pointer-events-none">
          <img
            className="Img1 slideImg absolute w-[40%]"
            src="./Img/Aggslider1.webp"
            alt=""
          />
          <img
            className="Img21 slideImg absolute w-[30%]"
            src="./Img/Aggslider2_1.webp"
            alt=""
          />
          <img
            className="Img22 slideImg absolute w-[30%]"
            src="./Img/Aggslider2_2.webp"
            alt=""
          />
          <img
            className="Img3 slideImg absolute w-[35%]"
            src="./Img/Aggslider3.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AggregatorSlider;
