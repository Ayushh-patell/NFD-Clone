import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const AboutAccordian = () => {
  const [active, setactive] = useState(0);
  return (
    <div className=" flex lg:hidden flex-col mx-5">
      <div className=" w-full">
        <div onClick={() => {setactive(0)}} className=" flex justify-between items-center border-y border-gray-200 rounded-md py-5 px-2">
          <div className=" flex justify-center items-center gap-2">
            <span className=" text-lg font-semibold">01</span>
            <p className=" text-left flex flex-col">
              <span className=" font-semibold">Problem</span>
              <span>Crypto Infonise</span>
            </p>
          </div>
          <ArrowUpRight className={` w-4 h-4 ${active===1 ? "block":"hidden"}`}/>
          <ArrowDownRight className={` w-4 h-4 ${active===0 ? "block":"hidden"}`}/>
        </div>
        <div className={`${active===0 ? "flex":" hidden"} flex-col justify-center items-center text-left `}>
            <img className=" w-28 " src="./Img/AboutImg.webp" alt="" />
            <h4 className=" font-semibold">The first web3 crypto platform</h4>
            <p className=" text-gray-700">In today's cryptospace there is a big problem of "information noise". Anyone getting into crypto and trying to find worthwhile activities or alpha projects in it encounters a huge amount of information that they have to filter daily.</p>
        </div>
      </div>
      <div className=" w-full">
        <div onClick={() => {setactive(1)}} className=" mt-5 flex justify-between items-center border-y border-gray-200 rounded-md py-5 px-2">
          <div className=" flex justify-center items-center gap-2">
            <span className=" text-lg font-semibold">02</span>
            <p className=" text-left flex flex-col">
              <span className=" font-semibold">Solution</span>
              <span>Crypto Infonise</span>
            </p>
          </div>
          <ArrowUpRight className={` w-4 h-4 ${active===0 ? "block":"hidden"}`}/>
          <ArrowDownRight className={` w-4 h-4 ${active===1 ? "block":"hidden"}`}/>
        </div>
        <div className={`${active===1 ? "flex":" hidden"} flex-col justify-center items-center text-left`}>
            <img className=" w-28 " src="./Img/AboutImg2.webp" alt="" />
            <h4 className=" font-semibold">We work to make your life easier</h4>
            <p className=" text-gray-700">With NFD you will be able to participate only in the most selected activities, thanks to which you can quickly understand crypto and earn money. Also with the help of our Aggregator you will be able to track all the necessary information on the projects you are interested in in one place..</p>
        </div>
      </div>
    </div>
  );
};

export default AboutAccordian;
