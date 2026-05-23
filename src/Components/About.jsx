import React from "react";
import Pic1 from "/src/Images/pic2.jpg";

const gradientStyle = {
  background: "linear-gradient(90deg, #A11DED 32%, #F46764 77%)",
};

const About = () => {
  return (
    <section className="relative z-10 py-10 px-8 md:px-16 text-center">
      <h3 className="text-5xl font-bold mb-20 mt-[-50px] bg-clip-text text-transparent bg-white"> About Me </h3>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
        <div className="relative inline-block mt-8 md:mt-0">
          <div className="absolute inset-0 p-4 rounded-full" style={{ ...gradientStyle, filter: "blur(15px)", zIndex: 0, }}></div>
          <div className="relative inline-block rounded-full" style={gradientStyle}>
            <div className="rounded-full bg-black p-[2px]">
              <img src={Pic1} alt="Waseem Profile" className="h-100 w-100 rounded-full object-cover" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 text-left ml-20 space-y-5 space-x-10">
          <h4 className="text-3xl font-bold text-white">
            <span className="bg-[linear-gradient(90deg,#A11DED_32%,#F46764_77%)] bg-clip-text text-transparent">
              I'm Shaik Waseem
            </span>
          </h4>
          <p className="text-gray-300 text-lg font-medium leading-relaxed">
            I'm a dedicated <strong>Software Engineering Master's student</strong> passionate
            about crafting innovative web and mobile applications. I thrive on bringing ideas
            to life through elegant code and intuitive user interfaces.
          </p>
          <p className="text-gray-300 font-medium text-lg leading-relaxed">
            I'm a <strong>UI/UX Designer</strong> who builds user-friendly apps with engaging
            experiences. My goal is to deliver creative and impactful digital products.
          </p>
          <div className="space-y-4 mt-6 max-w-lg">
            <div className="relative rounded-xl p-[2px] overflow-hidden shadow-md">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="relative flex items-center p-3 w-full rounded-lg bg-gray-900">
                <span className="text-2xl mr-4">💻</span>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Front-End Development
                </span>
              </div>
            </div>
            <div className="relative rounded-xl p-[2px] overflow-hidden shadow-md">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="relative flex items-center p-3 w-full rounded-lg bg-gray-900">
                <span className="text-2xl mr-4">⚙️</span>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Back-End Development
                </span>
              </div>
            </div>
            <div className="relative rounded-xl p-[2px] overflow-hidden shadow-md">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <div className="relative flex items-center p-3 w-full rounded-lg bg-gray-900">
                <span className="text-2xl mr-4">🎨</span>
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  UI/UX Design & Prototyping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
