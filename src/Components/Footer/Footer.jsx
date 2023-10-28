import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
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

      <footer className="container mx-auto footer grid-rows-1 grid-cols-4 p-10 bg-neutral text-neutral-content">
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
            <FaFacebook size={30}></FaFacebook>
          </a>
          <a>
            <FaTwitter size={30}></FaTwitter>
          </a>
          <a>
            <FaLinkedinIn size={30}></FaLinkedinIn>
          </a>
          <a>
            <FaInstagram size={30}></FaInstagram>
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
