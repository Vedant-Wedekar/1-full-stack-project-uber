import React from 'react';
import { Link } from 'react-router-dom';

import myImage from '../assets/car.png'; // Adjust path if needed

const First = () => {
  return (
    <div className="h-screen bg-zinc-500 w-full">
      <div className="firstcurve h-[550px] w-full bg-[#121212] border-b-8 rounded-b-[40px]">
        
        

        <div className="light_circ h-20 w-20   rounded-full"> </div>
        <div className="grid justify-center items-center text-white">
          <h5 className="text-3xl font-extrabold mb-3">Lee Cooper</h5>
          <h2 className="italic">Get There</h2>

           </div> <div className="flex justify-center items-center mt-5">
          <img src={myImage} alt="Car" className="h-80 w-80 mr-40" />
        </div>

        <div className="flex justify-center items-center">
          <div className="mt-[90px] rounded-xl btn font-bold text-[20px] h-10 w-60 bg-[#121212] border-2 border-white flex justify-center items-center text-white">
            <Link to='/login'>Continue</Link>
          </div>
        </div>
        <h2 className='text-[8px] mt-[33px] ml-[243px]'>Copyright @2025-2026 | Vedantwedekar</h2>
      </div>
    </div>
  );
};

export default First;
// export default function First() {
//   return <h1>Welcome to Home</h1>;
// }