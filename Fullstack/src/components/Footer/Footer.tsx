import Link from "next/link";
import React from "react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="absolute z-50 bottom-0 w-screen">
      <div className="flex justify-end px-4 py-12 mx-auto max-w-7xl md:flex-row">
        <div className="flex items-center space-x-6">
          <Link href="https://x.com/Sid060402" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </Link>
          <Link href="https://github.com/sidhxntt" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/siddhant-gupta-885384239/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
          <Link href="https://www.instagram.com/siddhant.xo/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
