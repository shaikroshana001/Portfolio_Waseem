import React from 'react';
import { HomeIcons, FaDownload } from './Icons';
import Pic1 from "/src/Images/pic1.jpg"
import { Link } from 'react-router-dom';

const gradientStyle = {
  background: 'linear-gradient(90deg, #A11DED 32%, #F46764 77%)',
};

const Nav = () => {
  return (

    <div className="top-0 w-full z-20 bg-black fixed">
      <nav className="w-full flex justify-between items-center py-6 px-8 md:px-16">
        <div className="text-3xl font-extrabold flex items-center bg-[linear-gradient(90deg,#A11DED_32%,#F46764_77%)] bg-clip-text text-transparent">
          Waseem <span className="ml-1">&lt;/&gt;</span>
        </div>
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/" className="text-white hover:bg-[linear-gradient(90deg,#A11DED_32%,#F46764_77%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"> Home</Link>
          <Link to="/about" className="text-white hover:bg-[linear-gradient(90deg,#A11DED_32%,#F46764_77%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"> About </Link>
          <Link to="/skills" className="text-white hover:bg-[linear-gradient(90deg,#A11DED_32%,#F46764_77%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"> Skills </Link>
          <Link to="/projects" className="text-white hover:bg-[linear-gradient(90deg,#A11DED_32%,#F46764_77%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"> Projects</Link>
          <Link to="/contact" className="text-white hover:bg-[linear-gradient(90deg,#A11DED_32%,#F46764_77%)] hover:bg-clip-text hover:text-transparent transition-all duration-500"> Contact </Link>
        </div>
      </nav>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className='min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6  pt-20 space-y-10 md:space-y-0 md:space-x-16'> {/* Adjusted layout for image alongside text */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left z-10">
          <h2 className="text-6xl font-bold leading-tight"> Hi, I'm Waseem </h2>
          <p className="text-4xl font-semibold bg-[linear-gradient(90deg,#A11DED_10%,#F46764_77%)] bg-clip-text text-transparent"> Full Stack Developer </p>
          <p className="text-lg text-gray-300 max-w-lg mx-auto md:mx-0"> Crafting modern, responsive, and user-friendly websites with passion and precision. </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <a href="/path/to/your/resume.pdf" download="Waseem-Resume.pdf" className="flex items-center bg-[linear-gradient(90deg,#A11DED_32%,#F46764_87%)] hover:bg-purple-700 transition-colors px-6 py-3 rounded-full text-lg font-semibold shadow-lg"> Download Resume <FaDownload className="ml-3" /> </a>
            <HomeIcons />
          </div>
        </div>

        <div className="relative inline-block mt-8 md:mt-0">
          <div className="absolute inset-0 p-4 rounded-full" style={{ ...gradientStyle, filter: 'blur(15px)', zIndex: 0, }}></div>
          <div className="relative inline-block rounded-full" style={gradientStyle}>
            <div className=" rounded-full bg-black">
              <img src={Pic1} alt="Waseem Profile" className="h-100 w-100 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;