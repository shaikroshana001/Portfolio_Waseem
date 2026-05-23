import React from "react";

import { FaHtml5, FaCss3Alt, FaReact, FaWordpressSimple, FaDatabase, FaPhp } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiElementor } from "react-icons/si";

const skillData = [
  { name: "HTML", icon: FaHtml5, color: "bg-orange-500", rating: 9 },
  { name: "CSS", icon: FaCss3Alt, color: "bg-blue-500", rating: 8 },
  { name: "JavaScript", icon: TbBrandJavascript, color: "bg-yellow-500", rating: 7 },
  { name: "React", icon: FaReact, color: "bg-cyan-400", rating: 6 },
  { name: "WordPress", icon: FaWordpressSimple, color: "bg-gray-400", rating: 8 },
  { name: "Elementor", icon: SiElementor, color: "bg-pink-500", rating: 9 },
  { name: "Database (SQL/NoSQL)", icon: FaDatabase, color: "bg-indigo-500", rating: 5 },
  { name: "PHP", icon: FaPhp, color: "bg-purple-500", rating: 4 },
];

const RatingDot = ({ color = "bg-gray-700", active = false }) => (
  <div
    className={`w-3 h-3 rounded-full mx-0.5 transition-all duration-300 ${active ? color : "bg-gray-700"
      } ${active ? "opacity-100" : "opacity-50"}`}
  ></div>
);

const SkillItem = ({ Icon, colorClass, rating, name }) => {
  const dots = Array.from({ length: 10 }, (_, index) => (
    <RatingDot key={index} color={colorClass} active={index < rating} />
  ));

  return (
    <div className="flex items-center py-4">
      <div
        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mr-6 flex-shrink-0"
        style={{ direction: "ltr" }}
      >
        <Icon
          className={`text-3xl ${colorClass.replace("bg-", "text-")}`}
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col flex-grow items-start">
        <span className="text-lg font-semibold mb-1">{name}</span>
        <div className="flex w-40 justify-start">{dots}</div>
      </div>
    </div>
  );
};

const Skills = () => {
  const leftSkills = skillData.slice(0, 4);
  const rightSkills = skillData.slice(4, 8);

  return (
    <div
      id="skills"
      className="min-h-screen text-white py-20 px-8 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#A11DED] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#F46764] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <h3 className="text-5xl font-bold mb-16 text-center z-10 relative">
        My Skills
      </h3>

      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div className="flex flex-col items-end">
            {leftSkills.map((skill, index) => (
              <div className="flex flex-row-reverse w-full justify-end" key={`left-${index}`}>
                <SkillItem Icon={skill.icon} colorClass={skill.color} rating={skill.rating} name={skill.name} />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start">
            {rightSkills.map((skill, index) => (
              <div className="flex w-full justify-start" key={`right-${index}`}>
                <SkillItem Icon={skill.icon} colorClass={skill.color} rating={skill.rating} name={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
