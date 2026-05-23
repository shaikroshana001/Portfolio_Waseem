import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Pro1 from "/src/Images/Project1.jpg";
import Pro2 from "/src/Images/Project2.jpg";
import Pro3 from "/src/Images/Project3.jpg";
import Pro4 from "/src/Images/Project4.jpg";
import Pro5 from "/src/Images/Project5.jpg";
import Pro6 from "/src/Images/Project6.jpg";

const webProjects = [
  {
    title: "Personal Portfolio on Netlify",
    image: Pro1,
    shortDesc:
      "A clean, high-resolution screenshot of your portfolio website's homepage.",
    longDesc:
      "A professional online portfolio built to showcase my UI/UX and web development skills. It features a curated selection of my work, case studies, and a downloadable resume, all deployed efficiently on Netlify.",
    link: "https://shaikwaseem.netlify.app/",
  },
  {
    title: "Zway Taxi",
    image: Pro2,
    shortDesc: "A clean screenshot of the zwaytaxi.com website.",
    longDesc:
      "A modern and user-friendly website for Zway Taxi, designed and built with WordPress and Elementor. Focuses on a streamlined booking experience and easy navigation.",
    link: "https://zwaytaxi.com/",
  },
  {
    title: "Hi5 Home Services",
    image: Pro3,
    shortDesc: "A clean screenshot of the hi5homeservices.com website.",
    longDesc:
      "A responsive business website developed using WordPress and Elementor, focusing on service presentation and client engagement.",
    link: "https://hi5homeservices.com/hi5/",
  },
];

const mobileProjects = [
  {
    title: "Animal Wiki - Mobile App Design",
    image: Pro4,
    shortDesc:
      "A clean, high-resolution screenshot of the entire set of 'Animal Wiki' screens.",
    longDesc:
      "A comprehensive UI/UX case study designed for exploring the animal kingdom. Showcases onboarding, authentication, and detailed animal discovery flows.",
    link: "#",
  },
  {
    title: "Fashion E-commerce App",
    image: Pro5,
    shortDesc:
      "A mobile screen mockup showing a modern e-commerce product page.",
    longDesc:
      "Conceptual app design focusing on intuitive product browsing, detailed item views, and a streamlined cart experience to enhance engagement.",
    link: "#",
  },
  {
    title: "User Authentication Screens",
    image: Pro6,
    shortDesc: "A mockup showing a clean and modern sign-in or sign-up page.",
    longDesc:
      "Focused UX case study on designing seamless sign-in and sign-up flows with clear layouts and smooth onboarding.",
    link: "#",
  },
];

const Project = () => {

  const [activeTab, setActiveTab] = useState("web");
  const projects = activeTab === "web" ? webProjects : mobileProjects;

  return (
    <section id="projects" className="text-white mt-[-150px] py-20 px-6 md:px-16 relative">
      <h2 className="text-5xl font-bold mb-12 text-center">My Projects</h2>

      <div className="flex justify-center space-x-6 mb-5">
        <button
          onClick={() => setActiveTab("web")}
          className={`px-10 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${activeTab === "web"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/30"
              : "text-white border-2 border-transparent"
            }`}
          style={{
            borderImage:
              activeTab === "web"
                ? "none"
                : "linear-gradient(to right, #a855f7, #ec4899) 1",
          }}
        >
          Web Application
        </button>

        <button
          onClick={() => setActiveTab("mobile")}
          className={`px-10 py-3 text-lg font-semibold rounded-full transition-all duration-300 ${activeTab === "mobile"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-pink-500/30"
              : "text-white border-2 border-transparent"
            }`}
          style={{
            borderImage:
              activeTab === "mobile"
                ? "none"
                : "linear-gradient(to right, #a855f7, #ec4899) 1",
          }}
        >
          Mobile Application
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-[#12051E]/60 backdrop-blur-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-bold mb-2 text-center">{proj.title}</h3>
            <p className="text-gray-300 text-sm mb-2 text-center">
              {proj.shortDesc}
            </p>
            <p className="text-gray-400 text-sm mb-4 text-center">
              {proj.longDesc}
            </p>

            <div className="flex justify-center">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-32 py-2  border-2 border-transparent [border-image:linear-gradient(to_right,#a855f7,#ec4899)_1] text-lg font-semibold text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
              >
                Demo <FaPlay className="text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
