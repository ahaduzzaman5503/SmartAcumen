import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaLink,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto footer flex justify-center items-center bg-neutral p-5">
        <nav className="flex flex-col">
          <header
            className="font-bold text-white 
     text-2xl capitalize"
          >
            SmartAcumen
          </header>
        </nav>
      </footer>

      <footer className="container mx-auto footer  p-10 bg-neutral text-neutral-content lg:grid-rows-1 md:grid-rows-2 sm:grid-rows-2  grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <nav>
          <header
            className="font-bold text-white 
     text-xl pb-2 capitalize"
          >
            Features
          </header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <header
            className="font-bold text-white 
     text-xl pb-2 capitalize"
          >
            Products
          </header>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <header
            className="font-bold text-white 
     text-xl pb-2 capitalize"
          >
            Our Hub
          </header>
          <a className="link link-hover">About</a>
          <a className="link link-hover">News policy</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header
            className="font-bold text-white 
     text-xl pb-2 capitalize"
          >
            Support
          </header>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Returns & Refunds</a>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
      </footer>

      <footer className="container mx-auto footer flex justify-center items-center bg-neutral p-5">
        <nav className="flex gap-5">
          <a>
            <FaGithub size={30} color="white"></FaGithub>
          </a>
          <a>
            <FaLinkedinIn size={30} color="white"></FaLinkedinIn>
          </a>
          <a>
            <FaLink size={30} color="white"></FaLink>
          </a>
          <a>
            <FaFacebook size={30} color="white"></FaFacebook>
          </a>
          <a>
            <FaInstagram size={30} color="white"></FaInstagram>
          </a>
          <a>
            <FaTwitter size={30} color="white"></FaTwitter>
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
