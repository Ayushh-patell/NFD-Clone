import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const FeaturesAccordian = () => {
    const [active, setactive] = useState(0);
  return (
    <div className=" flex lg:hidden flex-col w-full px-5">
      <div className=" w-full">
        <div onClick={() => {setactive(0)}} className=" flex justify-between items-center border-y border-gray-200 rounded-md py-5 px-2">
          <div className=" flex justify-center items-center gap-2">
            <span className=" text-lg font-semibold">01</span>
            <p className=" text-left flex flex-col">
              <span className=" font-semibold">Activities</span>
            </p>
          </div>
          <ArrowUpRight className={` w-4 h-4 ${active!==0 ? "block":"hidden"}`}/>
          <ArrowDownRight className={` w-4 h-4 ${active===0 ? "block":"hidden"}`}/>
        </div>
        <div className={`${active===0 ? "flex":" hidden"} flex-col justify-center items-center text-left `}>
            <p className=" text-gray-700">
            Receive already reviewed information about the most captivating
              events in crypto world. The professional analytics will allow you to easily make money.
            </p>
            <img className=" w-28 " src="./Img/activitiesBenefitOPT.webp" alt="" />
        </div>
      </div>
      <div className=" w-full">
        <div onClick={() => {setactive(1)}} className=" mt-5 flex justify-between items-center border-y border-gray-200 rounded-md py-5 px-2">
          <div className=" flex justify-center items-center gap-2">
            <span className=" text-lg font-semibold">02</span>
            <p className=" text-left flex flex-col">
              <span className=" font-semibold">Auto-Update feed</span>
            </p>
          </div>
          <ArrowUpRight className={` w-4 h-4 ${active!==1 ? "block":"hidden"}`}/>
          <ArrowDownRight className={` w-4 h-4 ${active===1 ? "block":"hidden"}`}/>
        </div>
        <div className={`${active===1 ? "flex":" hidden"} flex-col justify-center items-center text-left`}>
            <p className=" text-gray-700">
            All activities will have an “auto update feed”, which will be monitored by the NFD team so that you wont miss important changes or additions to any activity. Stay up to date!
            </p>
            <img className=" w-28 " src="./Img/feedBenefitOPT.webp" alt="" />
        </div>
      </div>
      <div className=" w-full">
        <div onClick={() => {setactive(2)}} className=" mt-5 flex justify-between items-center border-y border-gray-200 rounded-md py-5 px-2">
          <div className=" flex justify-center items-center gap-2">
            <span className=" text-lg font-semibold">03</span>
            <p className=" text-left flex flex-col">
              <span className=" font-semibold">Calender</span>
            </p>
          </div>
          <ArrowUpRight className={` w-4 h-4 ${active!==2 ? "block":"hidden"}`}/>
          <ArrowDownRight className={` w-4 h-4 ${active===2 ? "block":"hidden"}`}/>
        </div>
        <div className={`${active===2 ? "flex":" hidden"} flex-col justify-center items-center text-left`}>
            <p className=" text-gray-700">
            We have implemented an internal calendar functionality that will synchronize all your “Activities” in NFD, all their deadlines and important events. You can also add your token
            </p>
            <img className=" w-28 " src="./Img/calendarBenefitOPT.webp" alt="" />
        </div>
      </div>
      <div className=" w-full">
        <div onClick={() => {setactive(3)}} className=" mt-5 flex justify-between items-center border-y border-gray-200 rounded-md py-5 px-2">
          <div className=" flex justify-center items-center gap-2">
            <span className=" text-lg font-semibold">04</span>
            <p className=" text-left flex flex-col">
              <span className=" font-semibold">Aggregator</span>
            </p>
          </div>
          <ArrowUpRight className={` w-4 h-4 ${active!==3 ? "block":"hidden"}`}/>
          <ArrowDownRight className={` w-4 h-4 ${active===3 ? "block":"hidden"}`}/>
        </div>
        <div className={`${active===3 ? "flex":" hidden"} flex-col justify-center items-center text-left`}>
            <p className=" text-gray-700">
            Create a project card, set up data parsing in just 2 minutes and get only the necessary information concerning any crypto project.
            </p>
            <img className=" w-28 " src="./Img/aggregatorBenefitOPT.webp" alt="" />
        </div>
      </div>
      <div className=" w-full">
        <div onClick={() => {setactive(4)}} className=" mt-5 flex justify-between items-center border-y border-gray-200 rounded-md py-5 px-2">
          <div className=" flex justify-center items-center gap-2">
            <span className=" text-lg font-semibold">05</span>
            <p className=" text-left flex flex-col">
              <span className=" font-semibold">Alpha Search</span>
            </p>
          </div>
          <ArrowUpRight className={` w-4 h-4 ${active!==4 ? "block":"hidden"}`}/>
          <ArrowDownRight className={` w-4 h-4 ${active===4 ? "block":"hidden"}`}/>
        </div>
        <div className={`${active===4 ? "flex":" hidden"} flex-col justify-center items-center text-left`}>
            <p className=" text-gray-700">
            Make your own list of influencers, funds or degen accounts on Twitter and monitor their new subscriptions and where those subscriptions match each other. Be the first to find an alpha.
            </p>
            <img className=" w-28 " src="./Img/alphaSearchBenefitOPT.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default FeaturesAccordian
