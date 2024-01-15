import { Twitter } from "lucide-react";
import React from "react";
import FooterSVG from "./FooterSVG";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "rgb(108, 82, 238)" }}
      className=" relative w-full md:h-[500px] h-[400px] rounded-ee-[100px] rounded-es-[100px]"
    >
      <div aria-hidden height="93" className=" w-full flex justify-start ">
        <div className=" bg-white w-1/2 h-[93px]"></div>
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
      <div aria-hidden className=" w-full">
        <svg
          className=" absolute top-[18%] z-[5] left-[12%] hidden md:block"
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_420_5633)">
            <path
              d="M62.5708 51.7379C57.8475 46.9976 47.7401 34.1748 52.9012 15.1253C52.942 14.9831 52.9343 14.8312 52.8789 14.6941C52.8235 14.557 52.7234 14.4425 52.5954 14.3686C52.4673 14.2947 52.3185 14.2654 52.172 14.286C52.0256 14.3066 51.8899 14.3757 51.7871 14.482C37.8703 28.4764 21.7121 26.1348 15.2452 24.4144C15.1037 24.3763 14.9535 24.3861 14.818 24.4421C14.6825 24.4981 14.5692 24.5972 14.4959 24.7242C14.4227 24.8511 14.3935 24.9987 14.4127 25.144C14.4319 25.2894 14.4986 25.4243 14.6024 25.5279C19.3257 30.2681 29.4327 43.0908 24.2716 62.1403C24.2309 62.2825 24.2389 62.4345 24.2943 62.5716C24.3497 62.7087 24.4493 62.8234 24.5773 62.8973C24.7054 62.9712 24.8547 63.0003 25.0012 62.9797C25.1477 62.9592 25.283 62.8899 25.3857 62.7835C39.3025 48.7892 55.4611 51.131 61.928 52.8513C62.0695 52.8894 62.2197 52.8797 62.3552 52.8237C62.4907 52.7676 62.604 52.6686 62.6772 52.5416C62.7505 52.4147 62.7797 52.267 62.7605 52.1217C62.7413 51.9764 62.6746 51.8414 62.5708 51.7379Z"
              fill="black"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_420_5633">
              <rect
                width="56.4686"
                height="56.4686"
                fill="white"
                transform="translate(28.5254 0.291016) rotate(30)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
        <img
          className=" absolute -top-[50%] -left-[10%] z-0 w-1/3"
          src="./Img/featureBg2.webp"
          alt=""
        />
        <img
          className=" absolute right-0 top-0 h-full z-[5]"
          src="./Img/footerBg.webp"
          alt=""
        />
      </div>
      <div
        style={{ backgroundColor: "rgb(108, 82, 238)" }}
        className=" h-full w-full relative z-[2] pt-8 rounded-ee-[100px] rounded-es-[100px]"
      >
        <h2 className=" md:text-6xl text-3xl text-center text-white font-bold mb-8">
          Join our comunity
        </h2>
        <div className=" flex gap-5 items-center justify-center">
          <button
            style={{ color: "rgb(108, 82, 238)" }}
            className="sc-8f461dda-0 buttonCenterWhite font-semibold"
          >
            <div className="sc-8f461dda-1 buttonSideWhite"></div>
            <span></span>
            <div className="sc-8f461dda-2 iWSHNC">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="20"
                fill="rgb(108, 82, 238)"
                viewBox="0 0 640 512"
              >
                <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
              </svg>
              Join Discord
            </div>
            <div className="sc-8f461dda-1 buttonSideWhite"></div>
          </button>
          <button className="sc-8f461dda-0 BtnOutline">
            <div className="sc-8f461dda-1 ButtonOutline"></div>
            <span></span>
            <div className="sc-8f461dda-2 iWSHNC text-white flex items-center justify-center">
              <Twitter />
              <span>Follow Twitter</span>
            </div>
            <div className="sc-8f461dda-1 ButtonOutline"></div>
          </button>
        </div>
        <div className=" absolute bottom-0 left-0">
          <FooterSVG />
        </div>
      </div>

      <div className=" py-24 w-full">
        <div className=" mx-5 flex flex-col sm:flex-row items-center justify-between">
          <div className=" flex flex-col md:flex-row gap-3 items-center justify-between">
            <svg
              width="146"
              height="43"
              viewBox="0 0 146 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 21.0612H11.2049V32.0306H0V21.0612Z"
                fill="#D6B0FF"
              ></path>
              <path
                d="M17.9279 25.449L11.2049 32.0306L22.4098 42.7806L34.5112 30.9337L32.7184 13.3827H17.9279V25.449Z"
                fill="url(#paint0_linear_420_5664)"
              ></path>
              <path
                d="M11.2049 32.0306H22.4098V43H11.2049V32.0306Z"
                fill="#D6B0FF"
              ></path>
              <path
                d="M48.6293 17.3316V26.9847L32.7184 11.4082L43.9233 0L54.9041 10.9694L48.6293 17.3316Z"
                fill="url(#paint1_linear_420_5664)"
              ></path>
              <path
                d="M43.9233 0H55.1282V10.9694H43.9233V0Z"
                fill="#D6B0FF"
              ></path>
              <path
                d="M11.6531 10.828L22.4285 0.279078L55.0716 32.236L44.2962 42.7849L11.6531 10.828Z"
                fill="#D6B0FF"
              ></path>
              <path
                d="M109.922 12.1279H104.352H98.4081H98.2908L98.4081 23.8598V26.7669H97.8221L87.6032 12.1279H77.1797V31.7743H83.2408L83.0941 17.1353H83.7384L94.0156 31.7743H98.4077H104.351V30.3952V24.9999V23.9098H109.921H111.705H114.696H118.307V19.6095H114.696H111.705H109.921H104.352V19.042V16.7524H109.922H111.705H114.696H125.627H134.206C138.804 16.7524 139.682 17.0472 139.682 22.0251C139.682 23.1148 139.711 25.3238 138.803 26.0896C138.13 26.6492 136.812 26.6787 135.992 26.7082C135.289 26.7378 134.616 26.7669 133.913 26.7669H125.627V18.2251H119.771V31.7743H134.411C136.958 31.7743 141.643 31.9805 143.663 30.125C144.864 29.0057 145.303 27.0912 145.42 25.5005C145.507 24.234 145.537 22.9377 145.537 21.6713C145.537 19.7567 145.595 17.695 144.981 15.8394C143.869 12.4813 140.707 12.2165 137.662 12.1574C136.549 12.1279 135.437 12.1279 134.324 12.1279H125.628H119.772H118.308H114.696H111.705H109.922Z"
                fill="#171717"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_420_5664"
                  x1="29.059"
                  y1="52.5634"
                  x2="13.8379"
                  y2="-7.01869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.030979" strokecolor="#848AFF"></stop>
                  <stop offset="1" strokecolor="#EA8CFF"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_420_5664"
                  x1="29.059"
                  y1="52.5634"
                  x2="13.8379"
                  y2="-7.01869"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.030979" strokecolor="#848AFF"></stop>
                  <stop offset="1" strokecolor="#EA8CFF"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span className=" mx-3">© 2023 NFD, INC. ALL RIGHTS RESERVED.</span>
            <div className=" flex items-center justify-between gap-6">
              <p className=" pb-3 border-b border-black w-fit">Privacy</p>
              <p className=" pb-3 border-b border-black w-fit">Term of Use</p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
            <a
              className=" text-purple-600 underline underline-offset-1"
              href="mailto:ayush.patel.code@gmail.com"
            >
              ayush.patel.code@gmail.com
            </a>
            <button className="sc-8f461dda-0 buttonCenter">
              <div className="sc-8f461dda-1 buttonSide"></div>
              <span></span>
              <div className="sc-8f461dda-2 iWSHNC">Try App</div>
              <div className="sc-8f461dda-1 buttonSide"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
