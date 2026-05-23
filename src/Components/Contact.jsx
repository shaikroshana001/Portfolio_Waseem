import React from "react";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <div>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16">
        <h2 className="text-5xl font-bold mb-12 text-center text-white">
          Contact
        </h2>

        <div className="w-full max-w-2xl p-8 rounded-2xl bg-[#12051E]/70 backdrop-blur-xl border border-white/10 shadow-lg">
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Name</label>
              <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="flex flex-col">
              <label className="text-white font-medium mb-2">Message</label>
              <textarea rows="5" placeholder="Write your message" className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"></textarea>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300">
                Send a Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="flex justify-center space-x-6 mb-12 pb-6">
        <SocialIcon Icon={FaGithub} color="text-white" href="https://github.com/yourusername" />
        <SocialIcon Icon={BiLogoGmail} color="text-red-500" href="mailto:your_email@gmail.com" />
        <SocialIcon Icon={FaWhatsapp} color="text-green-500" href="https://wa.me/yournumber" />
        <SocialIcon Icon={FaLinkedin} color="text-blue-500" href="https://linkedin.com/in/yourusername" />
      </div>

      <footer className="text-gray-400 mx-auto max-w-6xl border-t border-gray-600/100 relative overflow-hidden min-h-[100px]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto pt-8 px-8">
          <div className="flex flex-col items-center md:items-start space-y-4 mb-6 md:mb-0">
            <div className="text-4xl font-extrabold flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"> Waseem </span>
              <span className="text-pink-500 text-3xl ml-1">{"</>"}</span>
            </div>
            <p className="text-sm">© All rights reserved</p>
          </div>

          <nav className="flex space-x-6 text-lg font-semibold text-white">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative text-white transition-all duration-300 hover:bg-[linear-gradient(90deg,#A11DED_10%,#F46764_77%)] hover:bg-clip-text hover:text-transparent"> {link.name} </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
};

const SocialIcon = ({ Icon, color, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 flex items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20"> <Icon className={`text-2xl ${color}`} /> </a>
  );
};

export default Contact;
