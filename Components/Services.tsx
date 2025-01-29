import { CircleStackIcon, CodeBracketSquareIcon, RocketLaunchIcon } from "@heroicons/react/16/solid";
import React from "react";

const Services = () => {
    return ( 
    <div className="bg-[#121212] pt-[4rem] md:pd-[8rem] pb-[5rem]">
        <p className="heading">
            My <span className="text-blue-400">Services</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap[3rem] mt-[3rem] text-white gap-12">
            <div>
                <div className="bg-blue-700 hover:scale-110 transform transition-all duration-500 hover:-rotate-12 uppercase font-semibold text-center p-[2rem]">
                    <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Frontend
                        </h1>
                        <p className="text-[15px] text-[#CCFFFF] font-normal">I build responsive and user-friendly interfaces using JavaScript, React, HTML, and CSS to ensure seamless interaction and a modern design for web applications.</p>
                </div>
            </div>
            <div>
                <div className="bg-[#00308F] hover:scale-110 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem]">
                    <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Backend
                        </h1>
                        <p className="text-[15px] text-[#CCFFFF] font-normal">I develop robust server-side applications with Node.js and Express.js, ensuring efficient handling of server logic, APIs, and seamless communication with the database.</p>
                </div>
            </div>
            <div>
                <div className="bg-[#002D62] hover:scale-110 transform transition-all duration-500 hover:rotate-12 uppercase font-semibold text-center p-[2rem]">
                    <CircleStackIcon  className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]"/>
                    <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
                        Database
                        </h1>
                        <p className="text-[15px] text-[#CCFFFF] font-normal">I manage and visualize data with R-Studio and MySQL, handling data collection, conversion, and processing for actionable insights and efficient storage.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Services;
