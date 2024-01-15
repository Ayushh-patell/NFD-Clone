import React, { useState } from "react";
import FeaturesAccordian from "./FeaturesAccordian";

const Features = () => {
  const [imgsrc, setimgsrc] = useState("./Img/activitiesBenefitOPT.webp");
  const [activefeature, setactivefeature] = useState(0);
  return (
    <div id="features" className=" bg-white pt-10 w-full">
      <h2 className=" text-center md:text-5xl text-2xl font-bold my-8">
        Use all the benefits of NFD
      </h2>
      <p className=" text-center lg:text-lg text-base text-gray-600 my-2">
        Unlock the next level of control with customizable real-time feeds,
        charts, watchlists, and alerts with NFD.gg
      </p>

      <div className=" hidden w-full mt-20 p-10 md:flex gap-4 items-center">
        <div className=" w-1/3 px-5 flex flex-col gap-5">
          <div
            onClick={() => {
              setactivefeature(0);
              setimgsrc("./Img/activitiesBenefitOPT.webp");
            }}
            className={` p-8 cursor-pointer overflow-hidden rounded-xl border border-gray-100 relative ${
              activefeature === 0 ? "h-fit bg-gray-300" : " h-8 bg-white"
            }`}
          >
            <h4
              className={` text-left text-2xl font-semibold ${
                activefeature === 0 ? "text-black" : "text-gray-400"
              }`}
            >
              Activities
            </h4>
            <p className=" text-gray-500">
              Receive already reviewed information about the most captivating
              events in crypto world. The professional analytics will allow you
              to easily make money.
            </p>
          </div>
          <div
            onClick={() => {
              setactivefeature(1);
              setimgsrc("./Img/feedBenefitOPT.webp");
            }}
            className={` p-8 cursor-pointer overflow-hidden rounded-xl border border-gray-100 relative ${
              activefeature === 1 ? "h-fit bg-gray-300" : " h-8 bg-white"
            }`}
          >
            <h4
              className={` text-left text-2xl font-semibold ${
                activefeature === 1 ? "text-black" : "text-gray-400"
              }`}
            >
              Auto-Update feed
            </h4>
            <p className=" text-gray-500">
            All activities will have an “auto update feed”, which will be monitored by the NFD team so that you wont miss important changes or additions to any activity. Stay up to date!
            </p>
          </div>
          <div
            onClick={() => {
              setactivefeature(2);
              setimgsrc("./Img/calendarBenefitOPT.webp");
            }}
            className={` p-8 cursor-pointer overflow-hidden rounded-xl border border-gray-100 relative ${
              activefeature === 2 ? "h-fit bg-gray-300" : " h-8 bg-white"
            }`}
          >
            <h4
              className={` text-left text-2xl font-semibold ${
                activefeature === 2 ? "text-black" : "text-gray-400"
              }`}
            >
              Calender
            </h4>
            <p className=" text-gray-500">
            We have implemented an internal calendar functionality that will synchronize all your “Activities” in NFD, all their deadlines and important events. You can also add your token
            </p>
          </div>
          <div
            onClick={() => {
              setactivefeature(3);
              setimgsrc("./Img/aggregatorBenefitOPT.webp");
            }}
            className={` p-8 cursor-pointer overflow-hidden rounded-xl border border-gray-100 relative ${
              activefeature === 3 ? "h-fit bg-gray-300" : " h-8 bg-white"
            }`}
          >
            <h4
              className={` text-left text-2xl font-semibold ${
                activefeature === 3 ? "text-black" : "text-gray-400"
              }`}
            >
              Aggregator
            </h4>
            <p className=" text-gray-500">
            Create a project card, set up data parsing in just 2 minutes and get only the necessary information concerning any crypto project.
            </p>
          </div>
          <div
            onClick={() => {
              setactivefeature(4);
              setimgsrc("./Img/alphaSearchBenefitOPT.webp");
            }}
            className={` p-8 cursor-pointer overflow-hidden rounded-xl border border-gray-100 relative ${
              activefeature === 4 ? "h-fit bg-gray-300" : " h-8 bg-white"
            }`}
          >
            <h4
              className={` text-left text-2xl font-semibold ${
                activefeature === 4 ? "text-black" : "text-gray-400"
              }`}
            >
              Alpha Search
            </h4>
            <p className=" text-gray-500">
            Make your own list of influencers, funds or degen accounts on Twitter and monitor their new subscriptions and where those subscriptions match each other. Be the first to find an alpha.
            </p>
          </div>
        </div>
        <div className=" w-2/3">
          <img className=" w-full p-7 object-contain" src={imgsrc} alt="Features" />
        </div>
      </div>
      <FeaturesAccordian/>
    </div>
  );
};

export default Features;
