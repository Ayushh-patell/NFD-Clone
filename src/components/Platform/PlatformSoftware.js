import {
  AppWindow,
  Apple,
  Hand,
  KeyRound,
  LayoutGrid,
  Settings,
} from "lucide-react";
import React, { useState } from "react";
import PlatformSVG from "./PlatformSVG";

const PlatformSoftware = () => {
  const [OsButton, setOsButton] = useState([false, false]);
  const handleOsButton = (index) => {
    let OsBtn = OsButton.map((btn, idx) => {
      if (idx === index) {
        btn = true;
      } else {
        btn = false;
      }
      return btn;
    });

    setOsButton(OsBtn);
  };

  return (
    <section className=" platform w-full pt-32 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center rounded-3xl w-3/4 lg:h-[600px] h-[850px] overflow-hidden">
        <div className=" flex flex-col bg-white lg:w-1/2 w-full justify-center items-center p-10 gap-3 relative">
          <PlatformSVG />
          <h3 className=" md:text-5xl text-xl font-bold">NFD Platform</h3>
          <h3 className=" md:text-5xl text-xl font-bold text-purple-400">"NFD.gg"</h3>
          <p className=" lg:text-lg text-base text-gray-400">
            An Alpha community 2.0 with its own platform for participating,
            searching, and tracking any crypto related information.
          </p>

          <div className=" hidden lg:flex xl:flex-row flex-col gap-6 w-full justify-between">
            <div className=" shadowcustom rounded-lg flex gap-3 p-3 items-center justify-between">
              <LayoutGrid className=" w-9 h-9 bg-gray-300 rounded-md p-2 text-white" />
              <p className=" leading-tight text-sm">Info in one place</p>
            </div>
            <div className=" shadowcustom rounded-lg flex gap-3 p-3 items-center justify-between">
              <KeyRound className=" w-9 h-9 bg-gray-300 rounded-md p-2 text-white" />
              <p className=" leading-tight text-sm">Private Tools</p>
            </div>
            <div className=" shadowcustom rounded-lg flex gap-3 p-3 items-center justify-between">
              <Settings className=" w-9 h-9 bg-gray-300 rounded-md p-2 text-white" />
              <p className=" leading-tight text-sm">Wide Functionality</p>
            </div>
          </div>
          <div className=" flex gap-4 items-center relative z-[5]">
            <div>
              <button className="sc-8f461dda-0 buttonCenter">
                <div className="sc-8f461dda-1 buttonSide"></div>
                <span></span>
                <div className="sc-8f461dda-2 iWSHNC">Platform</div>
                <div className="sc-8f461dda-1 buttonSide"></div>
              </button>
            </div>
            <div className=" text-purple-600 cursor-pointer">how it works?</div>
          </div>
          <div
            style={{
              backgroundImage: "url(./Img/PurpleEllips.webp)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className=" absolute bottom-0 left-0 right-0 h-24"
          ></div>
        </div>
        <div className=" flex flex-col bg-black lg:w-1/2 w-full justify-center items-center p-10 gap-3 relative">
          <div
            style={{
              backgroundImage: "url(./Img/PurpleEllips.webp)",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className=" absolute top-0 left-0 right-0 h-24 rotate-180"
          ></div>
          <svg className="relative z-[5]" height="32" width="174">
            <mask
              id="mask0_1504_15677"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="174"
              height="32"
            >
              <rect
                width="174"
                height="32"
                rx="16"
                fill="#6C52EE"
                fillOpacity="0.5"
              ></rect>
            </mask>
            <rect
              x="0.5"
              y="0.5"
              width="173"
              height="31"
              rx="15.5"
              fill="#6C52EE"
              fillOpacity="0.1"
              stroke="#9580FF"
            >
              <g mask="url(#mask1_1504_15677)">
                <path
                  d="M209.098 114.91H-35.4973V-38.2814H209.098V114.91ZM-35.1809 114.594H208.782V-37.965H-35.1809V114.594Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M208.94 30.5117H-35.3394V30.8281H208.94V30.5117Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M208.94 22.8688H-35.3394V23.1852H208.94V22.8688Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M208.94 15.2245H-35.3394V15.5409H208.94V15.2245Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M208.94 7.58105H-35.3394V7.89743H208.94V7.58105Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M208.94 -0.0632324H-35.3394V0.253145H208.94V-0.0632324Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M172.086 -38.1238H171.77V114.752H172.086V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M164.684 -38.1238H164.367V114.752H164.684V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M157.281 -38.1238H156.965V114.752H157.281V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M149.879 -38.1238H149.562V114.752H149.879V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M142.477 -38.1238H142.16V114.752H142.477V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M135.074 -38.1238H134.758V114.752H135.074V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M127.672 -38.1238H127.355V114.752H127.672V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M120.269 -38.1238H119.953V114.752H120.269V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M112.867 -38.1238H112.551V114.752H112.867V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M105.465 -38.1238H105.149V114.752H105.465V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M98.0625 -38.1238H97.7461V114.752H98.0625V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M90.6599 -38.1238H90.3435V114.752H90.6599V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M83.2573 -38.1238H82.9409V114.752H83.2573V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M75.8547 -38.1238H75.5383V114.752H75.8547V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M68.4524 -38.1238H68.136V114.752H68.4524V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M61.0498 -38.1238H60.7334V114.752H61.0498V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M53.6479 -38.1238H53.3315V114.752H53.6479V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M46.2453 -38.1238H45.929V114.752H46.2453V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M38.843 -38.1238H38.5266V114.752H38.843V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M31.4404 -38.1238H31.124V114.752H31.4404V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M24.0386 -38.1238H23.7222V114.752H24.0386V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M16.636 -38.1238H16.3196V114.752H16.636V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M9.23361 -38.1238H8.91724V114.752H9.23361V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
                <path
                  d="M1.83127 -38.1238H1.51489V114.752H1.83127V-38.1238Z"
                  fill="#6C52EE"
                  fillOpacity="0.8"
                ></path>
              </g>
            </rect>
          </svg>
          <div
            height="32"
            width="174"
            className=" relative flex justify-between bottom-10"
          >
            <Hand className=" text-white stroke-1" />
            <p className=" text-white">Software by NFD</p>
          </div>
          <div className=" text-center">
            <p
              style={{
                color: "rgb(39, 39, 80)",
                background:
                  "linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 162.5%) padding-box text",
                WebkitTextFillColor: " transparent",
              }}
              className=" font-bold md:text-4xl text-2xl"
            >
              NFD Software
            </p>
            <p
              style={{
                color: "rgb(39, 39, 80)",
                background:
                  "linear-gradient(341.87deg, rgb(132, 138, 255) -1.64%, rgb(234, 140, 255) 106.1%) padding-box text",
                WebkitTextFillColor: " transparent",
              }}
              className=" font-bold md:text-4xl text-2xl"
            >
              "Combine"
            </p>
          </div>
          <p className=" text-gray-600 lg:text-lg text-base text-cente ">
            Handle your crypto-wallets, farm activities and retrodrops on a
            single app.
          </p>

          <div className=" hidden lg:flex justify-between items-center text-white">
            <button
              onClick={() => {
                handleOsButton(0);
              }}
              className={` w-fit ${
                OsButton[0] ? "text-white" : "text-gray-500"
              }`}
            >
              <div className=" flex items-center justify-center gap-3 relative top-4">
                <Apple className=" stroke-1" />
                MacOs
              </div>
              <div>
                <svg
                  className={`${
                    OsButton[0] ? "visible" : "invisible"
                  } border-b-2 border-purple-600`}
                  width="200"
                  height="36"
                  viewBox="0 0 200 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M200 0L176.83 36H29L0 0H200Z"
                    fill="url(#paint0_linear_1423_21068)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1423_21068"
                      x1="164"
                      y1="6"
                      x2="164"
                      y2="41"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6C52EE" stopOpacity="0"></stop>
                      <stop
                        offset="1"
                        stopColor="#6C52EE"
                        stopOpacity="0.3"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </button>
            <button
              onClick={() => {
                handleOsButton(1);
              }}
              className={` w-fit ${
                OsButton[1] ? "text-white" : "text-gray-500"
              }`}
            >
              <div className=" flex items-center justify-center gap-3 relative top-4">
                <AppWindow className=" stroke-1" />
                Windows
              </div>
              <div>
                <svg
                  className={`${
                    OsButton[1] ? "visible" : "invisible"
                  } border-b-2 border-purple-600`}
                  width="200"
                  height="36"
                  viewBox="0 0 200 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M200 0L176.83 36H29L0 0H200Z"
                    fill="url(#paint0_linear_1423_21068)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1423_21068"
                      x1="156"
                      y1="6"
                      x2="156"
                      y2="41"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#6C52EE" stopOpacity="0"></stop>
                      <stop
                        offset="1"
                        stopColor="#6C52EE"
                        stopOpacity="0.3"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </button>
          </div>
          <div className=" flex gap-4 items-center mt-5">
            <div>
              <button className="sc-8f461dda-0 buttonCenter">
                <div className="sc-8f461dda-1 buttonSide"></div>
                <span></span>
                <div className="sc-8f461dda-2 iWSHNC">Download</div>
                <div className="sc-8f461dda-1 buttonSide"></div>
              </button>
            </div>
            <div className=" text-purple-600 cursor-pointer">how it works?</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSoftware;
