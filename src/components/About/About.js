import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import AboutAccordian from "./AboutAccordian";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const aboutRef = useRef();

  useGSAP(
    () => {
        const videoElem = document.querySelector(".video")
      gsap.to(".pinned", {
        scrollTrigger: {
          trigger: ".pinned",
          start: "top 20%",
          end: `+=${window.innerWidth/5}`,
          pin: true,
          scrub: 1,
        },
      })
      ScrollTrigger.create({
        trigger: ".pinned",
        start: "top 20%",
        end: `+=${window.innerWidth/5 + 50}`,
        onEnter: () => videoElem.play().catch(e => console.log(e)),
        onEnterBack: () => videoElem.play().catch(e => console.log(e)),
        onLeave: () => videoElem.pause(),
        onLeaveBack: () => videoElem.pause()
      });
    },
    { scope: aboutRef }
  );

  return (
    <div
      ref={aboutRef}
      id="about"
      className=" w-full bg-white mt-7 md:p-10 p-4 relative"
    >
      <div className="lg:flex items-center w-full pinned hidden ">
        <div className=" w-1/3">
          <h2 className=" font-bold text-4xl">
            The First web3 crypto platform
          </h2>
          <h3 className=" font-bold text-3xl">Problem</h3>
          <p className=" text-gray-500 lg:text-lg text-base">
            Today, even in alpha communities, there's an enormous volume of
            information that members have to wade through for 6-8+ hours a day.
            Cutting through the noise of spam is a real problem even where
            there's something genuinely worth knowing.
          </p>
        </div>
        <div className=" w-2/3 relative">
        <video className=" video absolute top-0 right-[12%]" width="75%" height="100%" muted preload="preload"><source src="./aboutVideo.webm" type="video/webm"/></video>
          <img
            src="./Img/VideoBg.webp"
            alt="background for video"
            className=" w-3/4 mx-auto mt-20"
          />
        </div>
      </div>

      <div className="lg:flex items-center w-full absolute top-1/2 hidden">
        <div className=" w-1/3 bg-white">
          <h2 className=" font-bold text-4xl">
            We work to make your life easier!
          </h2>
          <h3 className=" font-bold text-3xl">Solution</h3>
          <p className=" text-gray-500 lg:text-lg text-base">
            NFD.gg heralds a new era in alpha communities, one where they have
            their own platform, which structures and condenses relevant
            information on all these alpha activities, where our team monitors
            any updates on these activities 24/7. No more reading 2000+ discord
            messages a day and tracking twitter day in, day out. Everything you
            ever need to know can be found on NFD.gg.
          </p>
          <div className=" flex justify-between items-center bg-white shadow-xl w-3/4 font-bold lg:text-lg text-base p-4 gap-5">
            <div className=" p-2 bg-gray-200 rounded-md">
              <svg
                width="29"
                height="23"
                viewBox="0 0 29 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 11.2653H5.89431V17.1327H0V11.2653Z"
                  fill="#D6B0FF"
                ></path>
                <path
                  d="M9.43089 13.6122L5.89431 17.1327L11.7886 22.8827L18.1545 16.5459L17.2114 7.15816H9.43089V13.6122Z"
                  fill="url(#paint0_linear_420_4686-small)"
                ></path>
                <path
                  d="M5.89431 17.1327H11.7886V23H5.89431V17.1327Z"
                  fill="#D6B0FF"
                ></path>
                <path
                  d="M25.5813 9.27041V14.4337L17.2114 6.10204L23.1057 0L28.8821 5.86735L25.5813 9.27041Z"
                  fill="url(#paint1_linear_420_4686-small)"
                ></path>
                <path
                  d="M23.1057 0H29V5.86735H23.1057V0Z"
                  fill="#D6B0FF"
                ></path>
                <path
                  d="M6.13008 5.7917L11.7984 0.149274L28.9702 17.2425L23.3019 22.8849L6.13008 5.7917Z"
                  fill="#D6B0FF"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_420_4686-small"
                    x1="15.2864"
                    y1="28.1153"
                    x2="7.02525"
                    y2="-3.68817"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.030979" stopColor="#848AFF"></stop>
                    <stop offset="1" stopColor="#EA8CFF"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_420_4686-small"
                    x1="15.2864"
                    y1="28.1153"
                    x2="7.02525"
                    y2="-3.68817"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.030979" stopColor="#848AFF"></stop>
                    <stop offset="1" stopColor="#EA8CFF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>
              NFD will save you time and help you earn money in crypto.
            </span>
          </div>
        </div>
        <div className=" w-2/3"></div>
      </div>
      <AboutAccordian/>
    </div>
  );
};

export default About;
