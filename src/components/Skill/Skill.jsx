import React from 'react';
import Vec from '../../assets/Vector (1).png';
import Flatter from '../../assets/Group.png';
import Kotlin from '../../assets/devicon-plain_kotlin.png';
import Java from '../../assets/Java.png';
import Swift from '../../assets/Swift.png';
import App1 from '../../assets/Group (1).png';
import Dart from '../../assets/logos_dart.png';
import Divider from '../Navbar/Diveder';


const Skill = () => {
  return (
    <div className='bg-gray-900  w-full py-10 px-5 flex flex-col items-center'>
      <div className='flex justify-center items-center mb-6'>
        <h1 className='text-white font-bold text-3xl mr-4'>My SKILLS</h1>
        <img src={Vec} alt="Skill Icon" className='w-12 h-12'/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 text-center max-w-4xl mt-10'>
        <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform border-[3px] border-dotted border-blue-200'>
          <img src={Flatter} alt="Flutter" className='mx-auto w-20 h-20'/>
          <p className='text-white mt-2'>Using Flutter, I build high-performance, cross-platform apps that save time and resources, ensuring a consistent user experience.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform'>
          <img src={Kotlin} alt="Kotlin" className='mx-auto w-20 h-20'/>
          <p className='text-gray-900 mt-2'>Kotlin enables me to create modern, expressive, and efficient Android applications.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform'>
          <img src={Java} alt="Java" className='mx-auto w-20 h-20'/>
          <p className='text-gray-900 mt-2'>Java provides a robust foundation for building scalable Android and backend applications.</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform border-[3px] border-dotted border-blue-200'>
          <img src={App1} alt="Dart" className='mx-auto w-20 h-20'/>
          <p className='text-white mt-2'>Implementing ASO strategies, I enhance app visibility and increase downloads, maximizing your app’s potential in competitive markets.</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition-transform border-[3px] border-dotted border-blue-200'>
          <img src={Swift} alt="Swift" className='mx-auto w-20 h-20'/>
          <p className='text-white mt-2'>Swift is my choice for developing seamless and efficient iOS applications.</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform'>
          <img src={Dart} alt="Dart" className='mx-auto w-20 h-20'/>
          <p className='text-gray-900 mt-2'>Dart is my go-to language for crafting smooth, high-performance mobile applications.</p>
        </div>
      </div>
      <div className='mt-16 w-full max-w-8xl'>
        <Divider />
      </div>
    </div>
  );
};

export default Skill;


