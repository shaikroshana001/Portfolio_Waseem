import React from 'react';
// CORRECT: Fa*, FaLinkedin, and FaDownload are from 'react-icons/fa'
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
// CORRECT: BiLogoGmail must be imported separately from 'react-icons/bi'
import { BiLogoGmail } from "react-icons/bi";


const GlossyIcon = ({ Icon, href }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg text-white"> <Icon className="text-2xl" />
        </a>
    );
};

const HomeIcons = () => {
    return (
        <div className="flex space-x-4">
            <GlossyIcon Icon={FaGithub} href="https://github.com/shaikwaseem76/" />
            <GlossyIcon Icon={FaLinkedin} href="https://www.linkedin.com/feed/" />
            <GlossyIcon Icon={BiLogoGmail} href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" />
        </div>
    );
};


export { HomeIcons, GlossyIcon, FaDownload };