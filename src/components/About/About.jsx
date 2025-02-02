import React from "react";
import Zai from "../../assets/Image.png";

const About = () => {
  return (
    <div className="bg-[#060C31] w-full h-auto py-20 flex flex-col justify-center items-center px-10">
      
      {/* Centered Heading */}
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center w-full">
        ABOUT ME
      </h1>

      {/* First Section (Image Right, Text Left) */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row-reverse items-center gap-10">
        
        {/* Image Section - Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Zai} alt="Zia Ahmed" className="w-[500px] h-[400px]" />
        </div>

        {/* Text Section - Left */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-3">
            Hello, I’m <span className="text-blue-400">Zia Ahmed</span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            With the purpose of empowering businesses through technology, I bring over 
            <span className="font-bold text-blue-400"> 7 years </span> 
            of expertise in mobile app development and App Store Optimization (ASO).
            <br /><br />
            I leverage my skills in <span className="font-semibold text-blue-400">Java, Kotlin, Jetpack Compose,</span> and 
            <span className="font-semibold text-blue-400"> Flutter</span> to create high-performance apps that engage users 
            and drive growth.
          </p>
          <div className="flex justify-center flex-row gap-4 mt-4">
            <button className="bg-[#3CB1BA] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
              BOOK CONSULTATION
            </button>
            <button className="bg-transparent border-2 border-[#3CB1BA] text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#3CB1BA] hover:text-white transition duration-300">
              GET QUOTATION
            </button>
          </div>
        </div>
      </div>

      {/* Second Section (Image Left, Text Right) */}
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 mt-20">
        
        {/* Image Section - Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Zai} alt="Zia Ahmed" className="w-[500px] h-[400px]" />
        </div>

        {/* Text Section - Right */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-3">
            My Expertise & Approach
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I specialize in delivering top-notch mobile applications that align with 
            business goals. My approach is centered around innovation, user experience, 
            and long-term growth.
            <br /><br />
            By combining <span className="font-semibold text-blue-400">cutting-edge tech</span> with deep industry insights, 
            I ensure that every project I undertake leads to measurable success.
          </p>
          <div className="flex justify-center flex-row gap-4 mt-4">
            <button className="bg-[#3CB1BA] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition duration-300">
              VIEW PORTFOLIO
            </button>
            <button className="bg-transparent border-2 border-[#3CB1BA] text-blue-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#3CB1BA] hover:text-white transition duration-300">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
