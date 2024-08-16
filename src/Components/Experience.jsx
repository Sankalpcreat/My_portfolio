import React, { useEffect } from "react";
import "../index.css";
import Aos from "aos";

const Shape1 = () => {
  return (
    <div className="wrapper w-[6.2px] h-[12px] bg-SecondaryColor rounded m-[5px]"  style={{ boxShadow: `0 0 5px 1px rgba(255, 200, 107, 0.8)` }}></div>
  );
};
const Shape2 = () => {
  return (
    <div className="wrapper w-[6.2px] h-[15px] bg-SecondaryColor rounded m-[5px] "  style={{ boxShadow: `0 0 5px 2px rgba(255, 200, 107, 0.8)` }}></div>
  );
};

const Experience = () => {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 500,
    });
  }, []);
  const shapes = Array.from({ length: 20 });
  return (
    <>
    <div className="wrapper w-full h-full bg-DarkColor flex flex-col p-[50px] sm:p-[20px] pb-[50px]">
      <div className="title text-[80px] text-PrimiaryColor pt-[100px] pl-[60px] josefin-sans-bold sm:text-[60px] sm:pt-[50px] sm:pl-[10px] ">
        Jouney
      </div>
      <div className="contect_wrapper pt-[50px] pl-[300px] sm:pt-[20px] sm:pl-[10px] ">
        <div className="exp1 flex justify-space-between">
          <div className="arraow flex flex-col gap-[330px] sm:gap-[300px] sm:hidden ">
            <div className="arrow_ring relative">
              <div className="arrow-pointer w-[250px] sm:w-[85px] h-[30px] bg-PrimiaryColor flex justify-center items-center text-[25px] pl-[20px] sm:pl-[10px] text-PrimiaryColor josefin-sans-light">
                2023
              </div>
              <div
                className=" sm:hidden ring w-[50px] h-[50px] sm:w-[35px] sm:h-[35px] bg-SecondaryColor border-0 absolute left-[152px] top-[-5px] sm:left-[159px] sm:top-[3px] rounded-[50%]"
                style={{ boxShadow: `0 0 10px 5px rgba(255, 200, 107, 0.8)` }}
              ></div>
            </div>
            <div className="arrow_ring relative">
              <div className="arrow-pointer w-[230px] h-[120px] bg-PrimiaryColor flex justify-center items-center text-[22px] pl-[20px] text-PrimiaryColor josefin-sans-light">
                2020-2024
              </div>
              <div
                className=" sm:hidden ring w-[50px] h-[50px] bg-SecondaryColor border-0 absolute left-[152px] top-[-5px] rounded-[50%]"
                style={{ boxShadow: `0 0 10px 5px rgba(255, 200, 107, 0.8)` }}
              ></div>
            </div>
            
          </div>
          <div className="animation_line pl-[70px] pr-[70px]  sm:hidden " >
            {shapes.map((_, index) => (
              <React.Fragment key={index}>
                <div data-aos="fade-up"><Shape1 /></div>
              </React.Fragment>
            ))}
          </div>
          <div className="right flex flex-col gap-[112px] sm:gap-[50px] mb-[50px] ">
            <div className="items pr-[50px] sm:pr-[20px] ">
              <div className="title text-SecondaryColor text-[45px] josefin-sans-bold      sm:text-[30px] ">
                Software Intern
              </div>
              <div className="sub_title text-[#b3b3b7] text-[25px] josefin-sans-light sm:text-[18px]">
                QED42,Pune,Maharashtra
              </div>
              <div className="content text-PrimiaryColor text-[22px] josefin-sans-light sm:text-[18px] pt-[25px]">
              Develop web projects with HTML,CSS,Javascript,Typescript,React,Webpack and Tailwind CSS.
              Enhance data retrieval with API fetching in React,boosting efficiency.Improve website performance and user engagement with responsive design.
              Collaborate with team to resolve issue,ensuring timely project completion.
              </div>
              <div className="title text-SecondaryColor text-[45px] josefin-sans-bold      sm:text-[30px] ">
                Bachelor In Technology
              </div>
              <div className="sub_title text-[#b3b3b7] text-[25px] josefin-sans-light sm:text-[18px]">
                SRM University,Chennai
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="box w-full h-5px " style={{boxShadow:" -2px 9px 31px 6px black"}}></div>
    </>
  );
};

export default Experience;
