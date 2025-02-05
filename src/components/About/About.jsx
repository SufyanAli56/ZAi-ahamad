import React from "react";
import Zai from "../../assets/Image.png";
import Zai1 from "../../assets/Image (1).png";
import Box from "../../assets/Image (2).png";
import Divider from "../Navbar/Diveder";

const About = () => {
  return (
    <div className="bg-[#060C31] w-full py-20 flex flex-col justify-center items-center px-6 md:px-10">
      {/* Centered Heading */}
      <p className="text-[#16b8c3] text-center md:text-left mr-24">
        #Meet the Architect of Digital Solutions
      </p>
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center w-full">
        ABOUT ME
      </h1>

      {/* First Section (Image Right, Text Left) */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Image Section - Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Zai}
            alt="Zia Ahmed"
            className="w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Text Section - Left */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-3">
            Hello, I’m <span className="text-blue-400">Zia Ahmed</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            With the purpose of empowering businesses through technology, I
            bring over 7 years of expertise in mobile app development and App
            Store Optimization (ASO). My goal is to add value by transforming
            innovative ideas into high-quality, user-centric applications. I
            leverage my skills in Java, Kotlin, Jetpack Compose, and Flutter to
            create high-performance apps that engage users and drive growth. By
            implementing effective ASO strategies, I ensure that the apps I
            develop not only capture attention but also achieve lasting success
            in competitive markets.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 mt-6 relative z-10">
            <button className="bg-gradient-to-r from-[#16b8c3] to-[#0fa7b1] text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
              BOOK CONSULTATION
            </button>

            <button className="bg-transparent border-2 border-[#16b8c3] text-[#16b8c3] font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-[#16b8c3] hover:text-white hover:scale-105 transition-transform duration-300 ease-in-out">
              GET QUOTATION
            </button>
          </div>
        </div>
      </div>

      {/* Background Stats Section */}
      <div className="relative flex flex-wrap justify-center gap-10  mr-160 opacity-100">
        <div className="text-white text-center w-40">
          <h1 className="text-5xl font-bold">823</h1>
          <p className="text-lg">Total Clients Served</p>
        </div>
        <div className="text-white text-center w-40">
          <h1 className="text-5xl font-bold">326+</h1>
          <p className="text-lg">Upwork Clients</p>
        </div>
        <div className="text-white text-center w-40">
          <h1 className="text-5xl font-bold">116+</h1>
          <p className="text-lg">Fiverr Clients</p>
        </div>
      </div>

      {/* Second Section (Image Left, Text Right) */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 mt-20">
        {/* Image Section - Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Zai1}
            alt="Zia Ahmed"
            className="w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Text Section - Right */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-3">
            Discover the Secrets of Mobile App Development
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Explore a world where development meets new ideas. My portfolio is
            your entry point to a collection of high-quality apps, easy-to-use
            designs, and solutions that make a difference. Learn how my skills
            in app development and ASO can help your business grow, engage
            users, and thrive in today’s digital space. Let’s work together to
            create mobile experiences that impress and inspire!
          </p>

          {/* Call-to-Action Box */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 border-[1px] border-green-300 rounded-lg p-4">
            <img src={Box} alt="Icon" className="w-24 h-auto" />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold">Join the Revolution</h3>
              <p className="text-sm text-gray-300">
                Explore the high-tech, low-life world where the lines between
                humanity and machinery blur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 w-full max-w-8xl">
        <Divider/>
      </div>
    </div>
  );
};

export default About;
