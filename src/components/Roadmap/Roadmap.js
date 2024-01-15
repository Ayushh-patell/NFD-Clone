import React from "react";
import RoadmapCarousel from "./RoadmapCarousel";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className=" w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(147.35deg, rgb(35, 35, 36) -0.9%, rgb(21, 21, 22) 116.23%)",
      }}
    >
      <div aria-hidden height="93" className=" w-full flex justify-start ">
        <div className=" bg-white w-1/2 h-[93px] relative z-10"></div>
        <svg
          style={{ scale: "1 -1" }}
          width="168"
          height="93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M168.184 93H1521.78c7.82 0 15.33 3.108 20.86 8.64 18.58 18.584 5.42 50.36-20.86 50.36H-526.263c-33.354 0-57.358-32.038-47.986-64.049l15.224-52C-552.787 14.643-533.243 0-511.04 0H-1.184A50 50 0 0 1 26.62 8.444l113.76 76.112A50.002 50.002 0 0 0 168.184 93Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      <div aria-hidden>
        <img
          className=" hidden md:block absolute left-0 top-0"
          src="./Img/featureBg.webp"
          alt=""
        />
        <img
          className=" absolute left-[45%]"
          src="./Img/featureBg2.webp"
          alt=""
        />
        <img
          className=" hidden lg:block absolute scale-75 -right-20"
          src="./Img/featureBg2.webp"
          alt=""
        />
      </div>

      <h2 className=" text-center md:text-6xl text-2xl text-white font-bold my-4 mt-12 relative z-10">
        NFD game changing crypto platform
      </h2>

      <div className=" flex justify-center items-center gap-4">
        <div className=" flex justify-center items-center gap-2 text-white">
          <div className=" w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></div>
          <p>Done</p>
        </div>
        <div className=" flex justify-center items-center gap-2 text-white">
          <div className=" w-2 h-2 rounded-full bg-orange-500 pulse flex-shrink-0"></div>
          <p>In work</p>
        </div>
        <div className=" flex justify-center items-center gap-2 text-white">
          <div className=" w-2 h-2 rounded-full bg-white flex-shrink-0"></div>
          <p>Upcoming</p>
        </div>
      </div>

      <div className=" my-32">
        <div className=" hidden lg:block">
          <div
            aria-hidden
            style={{ backgroundColor: "rgba(224, 224, 224, 0.15)" }}
            className=" w-screen h-[1px]"
          ></div>
          <div className=" grid grid-cols-5 gap-5 text-left px-14">
            <div className=" pt-5 relative">
              <div
                aria-hidden
                className=" w-4 h-4 rounded-full blur-[2px] bg-purple-500 absolute -top-2 -left-2"
              ></div>
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
            <div className=" pt-5 relative">
              <div
                aria-hidden
                className=" w-4 h-4 rounded-full blur-[2px] bg-white absolute -top-2 -left-2"
              ></div>
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
            <div className=" pt-5 relative">
              <div
                aria-hidden
                className=" w-4 h-4 rounded-full blur-[2px] bg-white absolute -top-2 -left-2"
              ></div>
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
            <div className=" pt-5 relative">
              <div
                aria-hidden
                className=" w-4 h-4 rounded-full blur-[2px] bg-white absolute -top-2 -left-2"
              ></div>
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
            <div className=" pt-5 relative">
              <div
                aria-hidden
                className=" w-4 h-4 rounded-full blur-[2px] bg-white absolute -top-2 -left-2"
              ></div>
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
          </div>
        </div>
        <div className=" block lg:hidden">
          <RoadmapCarousel />
        </div>
      </div>

      <div
        aria-hidden
        height="93"
        className=" w-full flex justify-start mt-10 "
      >
        <div className=" bg-white w-1/2 h-[93px] relative z-10"></div>
        <svg
          width="168"
          height="93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M168.184 93H1521.78c7.82 0 15.33 3.108 20.86 8.64 18.58 18.584 5.42 50.36-20.86 50.36H-526.263c-33.354 0-57.358-32.038-47.986-64.049l15.224-52C-552.787 14.643-533.243 0-511.04 0H-1.184A50 50 0 0 1 26.62 8.444l113.76 76.112A50.002 50.002 0 0 0 168.184 93Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Roadmap;
