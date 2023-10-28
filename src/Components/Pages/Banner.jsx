import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen rounded-md"
        style={{
          backgroundImage: "url(https://i.ibb.co/bz2h2Gm/banner.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Unlock Your Potential with Smart Acumen: Build your Career.
            </h1>
            <p className="mb-5 text-2xl">
              Elevate Your Skills, Expand Your Horizons, and <mark className="rounded-md px-1 shadow-2xl">Shape Your Future</mark>.
            </p>
            <details>
                <summary className="text-xl">
                Welcome to SmartAcumen, where knowledge meets opportunity... show more
                </summary>
                    <p className="mb-3 text-green-200" >
                    " Our e-learning platform is your passport to a world of tech expertise, offering a comprehensive range of courses in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React JS, Express JS, Node JS, JSON, MongoDB, Firebase, Responsive Design, and more. Whether you're a beginner or a seasoned pro, SmartAcumen provides the tools and guidance you need to thrive in the digital age. Join our diverse community of learners, harness the power of online education, and shape your own success story. Unleash your potential and chart a brighter future with SmartAcumen."
                    </p>
            </details>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
