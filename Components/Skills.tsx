import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
    return <div className="pt-[4rem] md:pt-[8rem] pg-[5rem] bg-[#09101a]">Skills
    <h1 className="heading">Education & <span className="text-blue-400">Skills</span></h1>
    <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
            <SkillsItem 
                title="Software Development" 
                year="2022-2025"
                description="Learned HTML, CSS, JavaScript,TypeScript React, and Next.js, aiming to excel in modern web development."
                />
            <SkillsItem 
                title="Education" 
                year="2018-2022"
                description="Studied Sociology at Yerevan State University.Additionally, proficient in Microsoft Office tools, including Word, Excel, and PDF handling."
                />
            <SkillsLanguage skill1="html" 
                            skill2="css" 
                            skill3="javascript" 
                            skill4="Python"
                            skill5="Git/GitHub"
                            skill6="SPSS"
                            level1="w-[88%]" 
                            level2="w-[88%]" 
                            level3="w-[80%]"
                            level4="w-[55%]"
                            level5="w-[55%]"
                            level6="w-[65%]"
                            />
        </div>
        <div>
            <SkillsItem 
                title="Python Development" 
                year="2023-Currnet"
                description="Currently learning Python with a focus on machine learning applications."
                />
            <SkillsItem 
                title="R-Studio and MySQL" 
                year="2022-2024"
                description="Gained experience with R-Studio, working on data analysis, map creation, and data visualization. Currently practicing MySQL and working with SPSS for statistical analysis."
                />
            <SkillsLanguage skill1="TypeScript" 
                            skill2="React JS" 
                            skill3="Next JS" 
                            skill4="Node JS"
                            skill5="R-studio"
                            skill6="MySQl"
                            level1="w-[40%]" 
                            level2="w-[75%]" 
                            level3="w-[75%]"
                            level4="w-[40%]"
                            level5="w-[50%]"
                            level6="w-[30%]"
                            />
        </div>
    </div>
    </div>
}

export default Skills;