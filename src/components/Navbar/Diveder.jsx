import React from "react";

const Divider = () => {
  return (
    <div className="relative flex items-center justify-center mb-2 w-full ">
      {/* Left Semi-Circle */}
      <div className="absolute left-16 -ml-4  w-8 h-8 bg-[#3CB1BA] rounded-full border-2 border-black"></div>

      {/* Divider Line */}
      <div className="w-full h-[0.5px] bg-white"></div>

      {/* Right Semi-Circle */}
      <div className="absolute right-16 -mr-6 w-8 h-8 bg-[#3CB1BA] rounded-full border-2 border-black"></div>
    </div>
  );
};

export default Divider;
