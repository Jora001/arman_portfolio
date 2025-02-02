import React from "react";
import Particle from "./Particle";
import TextEffects from "./TextEffects";
import Image from "next/image";
import { CodeBracketIcon, NewspaperIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center relative">
      <Particle />
      <div className="w-[80%] mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold cursor-pointer">
            HI, <span className="text-blue-400">I&apos;M</span>{" "}
            <span>ARMAN</span>
          </h1>
          <TextEffects />
          <p className="mt-[1.5rem] text-[18px] text-[#CCFFFF]">
            I am Arman, a developer from Yerevan, Armenia, with a passion for
            technology and innovation. Since 2022, I have been honing my skills
            in data visualization, web development, and software development,
            driven by a commitment to creating impactful and efficient
            solutions. Thank you for exploring my portfolio—I look forward to
            contributing to meaningful projects and advancing in this
            ever-evolving field. Best regards, Arman.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a
              href="/Arman Haroyan - CV_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-[2rem] hover:bg-blue-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#FFFFFF] text-black flex items-center space-x-2">
                <p>My CV</p>
                <NewspaperIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </a>

            <a
              href="https://github.com/Arman-Haroyan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <button className="flex items-center space-x-2">
                <p className="text-[20px] font-semibold w-[2-rem] h-[2rem] hover:text-blue-400 transition-all duration-200 text-white">
                  My GitHub
                </p>
                <CodeBracketIcon className="w-[3-rem] h-[3rem] hover:text-blue-400 transition-all duration-200 text-white" />
              </button>
            </a>
          </div>
        </div>

        <div className="w-[400px] bg-[#55e6a5] relative hidden lg:flex items-center justify-center rounded-full h-[400px]">
          <Image
            src="/images/ArmIMg.jpg"
            alt="user"
            layout="fill"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
