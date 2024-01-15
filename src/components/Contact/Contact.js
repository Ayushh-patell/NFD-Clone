import React from "react";

const Contact = () => {
  return (
    <div className=" w-full pt-20 p-10 pb-32 bg-white relative overflow-hidden" id="contact">
      <div aria-hidden className=" w-full">
        <img
          className=" absolute -top-14 right-0 h-full"
          src="./Img/teamBg2.webp"
          alt=""
        />
      </div>
      <div className=" w-full flex flex-col md:flex-row">
        <div className=" md:w-1/2 md:pr-11 flex flex-col gap-6 relative z-[5]">
          <h2 className=" text-3xl text-black font-bold">
            We are delighted to introduce the NFD team to you
          </h2>
          <p style={{backgroundColor:"rgba(255, 255, 255, 0.323)"}} className=" lg:text-lg text-base text-gray-500 rounded-md p-2">
            NFD team is always open to new partnerships and new team members, so
            if you have a desire to join and you have a big experience in
            development or crypto - just leave your request in form and we will
            consider it.
          </p>
          <button className="sc-8f461dda-0 buttonCenter my-7">
            <div className="sc-8f461dda-1 buttonSide"></div>
            <span></span>
            <div className="sc-8f461dda-2 iWSHNC">Fill the form</div>
            <div className="sc-8f461dda-1 buttonSide"></div>
          </button>
        </div>
        <div className=" md:w-1/2">
          <div className=" md:w-3/4 mx-auto grid lg:grid-cols-3 grid-cols-2 rounded-lg shadow-lg bg-white relative z-[5]">
            <div className=" contactcard relative border border-gray-200 overflow-hidden">
              <div className=" moreinfo absolute top-0 -left-full w-full h-full bg-white z-[11]">
                <p className=" p-2 border-b border-gray-200 text-sm">
                  More Info
                </p>
                <div className=" rounded-full overflow-hidden w-7 h-7 m-2 bg-sky-400">
                    <img className=" w-7 h-7" src="./Img/villiam.webp" alt="" />
                </div>
                <p className=" p-2 text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  praesentium beatae voluptas nihil, impedit vero!
                </p>
              </div>
              <div className=" p-4 flex flex-col justify-center items-center">
                <div className=" w-20 h-20 rounded-full  my-3 border border-sky-400 relative">
                  <div className="rotateinfo w-full h-full absolute top-0 left-0 z-10">
                    <div className=" w-3 h-3 border-2 border-white rounded-full bg-sky-400 absolute top-[7%] right-[7%]"></div>
                  </div>
                  <div
                    className=" border border-white w-full h-full rounded-full overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(251, 194, 235) 0%, rgb(56, 189, 348) 100%)",
                    }}
                  >
                    <img
                      className=" w-full h-full object-cover object-center"
                      src="./Img/villiam.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" text-center">
                  <p className=" text-black text-sm">William</p>
                  <p className=" text-gray-600 text-sm">CTO</p>
                </div>
              </div>
            </div>
            <div className=" contactcard relative border border-gray-200 overflow-hidden">
              <div className=" moreinfo absolute top-0 -left-full w-full h-full bg-white z-[11]">
                <p className=" p-2 border-b border-gray-200 text-sm">
                  More Info
                </p>
                <div className=" rounded-full overflow-hidden w-7 h-7 m-2 bg-orange-400">
                    <img className=" w-7 h-7" src="./Img/leoor.webp" alt="" />
                </div>
                <p className=" p-2 text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  praesentium beatae voluptas nihil, impedit vero!
                </p>
              </div>
              <div className=" p-4 flex flex-col justify-center items-center">
                <div className=" w-20 h-20 rounded-full  my-3 border border-orange-400 relative">
                  <div className="rotateinfo w-full h-full absolute top-0 left-0 z-10">
                    <div className=" w-3 h-3 border-2 border-white rounded-full bg-orange-400 absolute top-[7%] right-[7%]"></div>
                  </div>
                  <div
                    className=" border border-white w-full h-full rounded-full overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(251, 146, 60, 0.5) 0%, rgb(251, 146, 60) 100%)",
                    }}
                  >
                    <img
                      className=" w-full h-full object-cover object-center"
                      src="./Img/leoor.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" text-center">
                  <p className=" text-black text-sm">Leo</p>
                  <p className=" text-gray-600 text-sm">CEO</p>
                </div>
              </div>
            </div>
            <div className=" contactcard relative border border-gray-200 overflow-hidden">
              <div className=" moreinfo absolute top-0 -left-full w-full h-full bg-white z-[11]">
                <p className=" p-2 border-b border-gray-200 text-sm">
                  More Info
                </p>
                <div className=" rounded-full overflow-hidden w-7 h-7 m-2 bg-sky-400">
                    <img className=" w-7 h-7" src="./Img/minter.webp" alt="" />
                </div>
                <p className=" p-2 text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  praesentium beatae voluptas nihil, impedit vero!
                </p>
              </div>
              <div className=" p-4 flex flex-col justify-center items-center">
                <div className=" w-20 h-20 rounded-full  my-3 border border-sky-400 relative">
                  <div className="rotateinfo w-full h-full absolute top-0 left-0 z-10">
                    <div className=" w-3 h-3 border-2 border-white rounded-full bg-sky-400 absolute top-[7%] right-[7%]"></div>
                  </div>
                  <div
                    className=" border border-white w-full h-full rounded-full overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(251, 194, 235) 0%, rgb(56, 189, 348) 100%)",
                    }}
                  >
                    <img
                      className=" w-full h-full object-cover object-center"
                      src="./Img/minter.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" text-center">
                  <p className=" text-black text-sm">Vadim</p>
                  <p className=" text-gray-600 text-sm">CCO</p>
                </div>
              </div>
            </div>
            <div className=" contactcard relative border border-gray-200 overflow-hidden">
              <div className=" moreinfo absolute top-0 -left-full w-full h-full bg-white z-[11]">
                <p className=" p-2 border-b border-gray-200 text-sm">
                  More Info
                </p>
                <div className=" rounded-full overflow-hidden w-7 h-7 m-2 bg-green-600">
                    <img className=" w-7 h-7" src="./Img/vitale.webp" alt="" />
                </div>
                <p className=" p-2 text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  praesentium beatae voluptas nihil, impedit vero!
                </p>
              </div>
              <div className=" p-4 flex flex-col justify-center items-center">
                <div className=" w-20 h-20 rounded-full  my-3 border border-green-600 relative">
                  <div className="rotateinfo w-full h-full absolute top-0 left-0 z-10">
                    <div className=" w-3 h-3 border-2 border-white rounded-full bg-green-600 absolute top-[7%] right-[7%]"></div>
                  </div>
                  <div
                    className=" border border-white w-full h-full rounded-full overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(212, 252, 121) 0%, rgb(22, 163, 24) 100%)",
                    }}
                  >
                    <img
                      className=" w-full h-full object-cover object-center"
                      src="./Img/vitale.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" text-center">
                  <p className=" text-black text-sm">Vitale</p>
                  <p className=" text-gray-600 text-sm">Team Lead Fullstack</p>
                </div>
              </div>
            </div>
            <div className=" contactcard relative border border-gray-200 overflow-hidden">
              <div className=" moreinfo absolute top-0 -left-full w-full h-full bg-white z-[11]">
                <p className=" p-2 border-b border-gray-200 text-sm">
                  More Info
                </p>
                <div className=" rounded-full overflow-hidden w-7 h-7 m-2 bg-gray-300">
                    <img className=" w-7 h-7" src="./Img/nik.webp" alt="" />
                </div>
                <p className=" p-2 text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  praesentium beatae voluptas nihil, impedit vero!
                </p>
              </div>
              <div className=" p-4 flex flex-col justify-center items-center">
                <div className=" w-20 h-20 rounded-full  my-3 border border-gray-300 relative">
                  <div className="rotateinfo w-full h-full absolute top-0 left-0 z-10">
                    <div className=" w-3 h-3 border-2 border-white rounded-full bg-gray-300 absolute top-[7%] right-[7%]"></div>
                  </div>
                  <div
                    className=" border border-white w-full h-full rounded-full overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(207, 217, 223) 0%, rgb(209, 213, 219) 100%)",
                    }}
                  >
                    <img
                      className=" w-full h-full object-cover object-center"
                      src="./Img/nik.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" text-center">
                  <p className=" text-black text-sm">Nikita</p>
                  <p className=" text-gray-600 text-sm">Frontend Developer</p>
                </div>
              </div>
            </div>
            <div className=" contactcard relative border border-gray-200 overflow-hidden">
              <div className=" moreinfo absolute top-0 -left-full w-full h-full bg-white z-[11]">
                <p className=" p-2 border-b border-gray-200 text-sm">
                  More Info
                </p>
                <div className=" rounded-full overflow-hidden w-7 h-7 m-2 bg-sky-300">
                    <img className=" w-7 h-7" src="./Img/den.webp" alt="" />
                </div>
                <p className=" p-2 text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
                  praesentium beatae voluptas nihil, impedit vero!
                </p>
              </div>
              <div className=" p-4 flex flex-col justify-center items-center">
                <div className=" w-20 h-20 rounded-full  my-3 border border-sky-300 relative">
                  <div className="rotateinfo w-full h-full absolute top-0 left-0 z-10">
                    <div className=" w-3 h-3 border-2 border-white rounded-full bg-sky-300 absolute top-[7%] right-[7%]"></div>
                  </div>
                  <div
                    className=" border border-white w-full h-full rounded-full overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(251, 194, 235) 0%, rgb(125, 211, 252) 100%)",
                    }}
                  >
                    <img
                      className=" w-full h-full object-cover object-center"
                      src="./Img/den.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className=" text-center">
                  <p className=" text-black text-sm">Den</p>
                  <p className=" text-gray-600 text-sm">Backend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
