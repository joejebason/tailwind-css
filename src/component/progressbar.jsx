// src/components/ProgressBar.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProgressBar = () => {
  const location = useLocation();
  const routes = ['', '/sellingphone', '/sellingMobile'];
  const currentStep = routes.indexOf(location.pathname);

  return (
    <div className="container m-auto mt-12" >
    <div className="bg-gray-200  border-1 h-6 mx-12">
      <div
        className="bg-green-500 h-full"
        style={{ width: `${(currentStep / (routes.length - 0)) * 100}%` }}
>
        
      </div>
      
    </div>
    <div className='row flex flex-wrap  mx-12' >
      <div className='w-2/6 flex justify-center pt-3'>
            <p className='text-lg text-black font-semibold' >Category</p>
        </div>
        <div className='w-2/6 flex justify-center pt-3'>
        <p className='text-lg text-black font-semibold' >Create Listing</p>
        </div>
        <div className='w-2/6 flex justify-center pt-3'>
        <p className='text-lg text-black font-semibold' >Listing Approval</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
