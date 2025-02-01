import React from 'react';
import Hero from '../../assets/ZIA 1 (1).png'
import Line2 from '../../assets/Line 2 (1).png'
import Line1 from '../../assets/Line (1).png'
import Group from '../../assets/Group 12.png'
import Next from '../../assets/Next Page (1).png'
const App = () => {
  return (
    <div className="min-h-screen bg-[#060c31] text-white font-sans overflow-hidden">
      {/* Main Container */}
      <div className="flex items-center justify-between p-12 h-screen relative">

        {/* Card Section */}
        <div className="relative">

          {/* Left Span Wrapper */}
          <div className="absolute top-[-40px] left-0 flex justify-start gap-[246px] items-center">
            <span className="text-white text-lg font-bold">02/ <span className="text-[#37a7b1]">3</span></span>
            <div className="flex flex-row gap-3">
              <div className="flex flex-row items-center gap-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="w-2.5 h-2.5 bg-[#37a7b1] rounded-full"></span>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="border-2 border-[#38a9b3] rounded-lg max-w-[340px] h-[221px] relative z-10 p-3">
            <h2 className="text-2xl font-bold mb-2">Turn Your App Vision into Reality</h2>
            <p className="text-sm text-[#b3b3b3] leading-relaxed mb-5">
              From concept to launch, I bring expertise in Java, Kotlin, Jetpack Compose, and ASO to build apps users love and markets recognize.
            </p>
            <button
              className="bg-transparent text-white border border-white px-6 py-2 rounded-full cursor-pointer text-base transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Delivery Section */}
        <div className="bg-[#060c31] rounded-lg gap-10 flex flex-row p-5 w-[300px] absolute top-[550px] text-center z-10">
          <div>
            <p className="text-xs text-white">Already Delivered</p>
            <h2 className="text-2xl font-bold text-white">1150</h2>
          </div>
          <div>
            <p className="text-xs text-white">On-time Delivery Probability</p>
            <h2 className="text-2xl font-bold text-white">100%</h2>
          </div>
        </div>

        {/* Left Arrow Image */}
        <div className="absolute ml-[360px]">
          <img src={Line2} alt="" className="left-arrow" />
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center items-center   h-full">
          <img
            src={Hero}
            alt="Profile"
            className="w-[700px] absolute  left-100 transform -translate-y-3"
          />
        </div>

        {/* Right Arrow and Dots Section */}
        <div className="relative">
          <img
            src={Line1}
            alt=""
            className="right-arrow absolute mt-[-170px] left-[440px]"
          />
          <div className="ml-[340px] bg-[#060c31] rounded-lg p-6 text-center w-[150px] h-[120px] left-[200px] mt-[-302px] border-2 border-[#38a9b3] relative z-10">
            <h3 className="text-xs text-[#38a9b3]">Smart Help!</h3>
            <h3 className="text-base text-white">Any Time</h3>
            <h3 className="text-xs text-[#38a9b3]">Anywhere</h3>
          </div>
          <div className="absolute top-[-200px] left-[700px] transform -translate-y-1/2 flex flex-col items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#37a7b1] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </div>
        </div>

        {/* Group 12 Image */}
        <img
          src={Group}
          alt="Group 12"
          className="absolute left-[1200px] top-[590px]"
        />

        {/* Next Page Image */}
        <div className="relative">
          <a href="nextpage.html">
            <img
              src={Next}
              alt="Next Page"
              className="ml-[300px] mt-2.5 relative z-10 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
