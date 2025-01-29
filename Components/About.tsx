import Image from "next/image";
import React from "react";

const About = () => {
    return (
      <div className="bg-[#121121] pg-[3rem] pt-[4rem] md:pt-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
          <div>
            <h1 className="text-[20px] font-bold uppercase text-white mb-[1rem]">ABOUT ME</h1>
            <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[4rem] text-white font-bold">
              Transforming <span className="text-blue-400">Visions</span>
            </h2>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
              <p className="mt-[1.5rem] text-[18px] text-[#CCFFFF] w-[100%] md:w-[100%]">
                Besides being a programmer, my other main profession is Sociology. As a Research Assistant at CRRC, I have worked extensively with data—cleaning, visualizing, connecting datasets to maps, and enabling live data updates for real-time analysis.
                My role bridges research and technology, turning complex data into meaningful insights.
                I am continuously enhancing my skills in both fields, diving deeper into data science for sociological research and honing my expertise in software development, including full-stack development and Python programming.
              </p>
            </div>
          </div>
          <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[300px] w-[200px] h-[200px] relative">
            <Image
              src="/images/ArmIMg2.jpg"
              alt="user"
              layout="fill"
              objectFit="contain"
              className="relative z-[11] w-[100%] h-[100%] object-contain"
            />
          </div>
        </div>
      </div>
    );
  };
  

export default About