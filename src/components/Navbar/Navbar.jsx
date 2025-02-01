import React from "react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#060C31] w-full h-30 flex justify-between items-center px-10">
      {/* Logo & Navigation */}
      <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full ml-20" />
      <div className="flex items-center space-x-10">
        <ul className="flex space-x-14 text-white font-extralight">
          <li className="hover:text-[#3CB1BA] cursor-pointer transition duration-300">
            About
          </li>
          <li className="hover:text-[#3CB1BA] cursor-pointer transition duration-300">
            Services
          </li>
          <li className="hover:text-[#3CB1BA] cursor-pointer transition duration-300">
            Experience
          </li>
          <li className="hover:text-[#3CB1BA] cursor-pointer transition duration-300">
            Portfolio
          </li>
          <li className="hover:text-[#3CB1BA] cursor-pointer transition duration-300">
            Free Tools
          </li>
          <li className="hover:text-[#3CB1BA] cursor-pointer transition duration-300">
            Testimonials
          </li>
          <li className="hover:text-[#3CB1BA] cursor-pointer transition duration-300">
            Blog
          </li>
        </ul>
      </div>

      {/* Contact Button */}
      <button className="bg-transparent border border-[#3CB1BA] text-white px-5 py-2 rounded-full hover:bg-[#3CB1BA] hover:text-[#060C31] transition duration-300">
        Contact
      </button>
      
    </div>
  );
};

export default Navbar;
