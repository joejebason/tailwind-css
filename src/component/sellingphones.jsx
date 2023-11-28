import React, { useState, useEffect } from "react";
import iphone from "../assets/iphone14.jpg";
import iphone11 from "../assets/iphone11.webp";
import Iphone12mini from "../assets/apple12mini.webp";
import iphone12 from "../assets/apple12pro.webp";
import apple13pro from "../assets/apple13pro.webp";
import ProgressBar from "./progressbar";


const SellingPhone = () =>{
   
    return(
        <>
        <div className="lg:block none">
        <ProgressBar/>
        </div>
        <section className="container m-auto">
            
            <div className="mt-8 text-center">
            <p className="text-[2.5rem] text-black font-semibold leading-8 " >Sell iPhone</p>
            <p className="text-[1.5rem] text-gray-600 font-medium leading-7 mt-6" >Get more for your <span className="text-green-600" >iPhone</span> trade-in when you sell on this.</p>
            </div> 
            <div className="row mx-auto my-12" >
            <div className="flex flex-wrap  mx-auto">
            <div className="w-1/4  " >
            <a href="sellingMobile">
            <div className=" m-4 border hover:shadow-lg" >
                <div className="flex justify-center" >
            <img src={apple13pro} className="text-center" />
            </div>
            
            <div className="py-3 text-center " >
                <div className="" >
                <p className="text-lg font-medium" >Apple iphone 13Pro</p>
                <div className="flex flex-wrap pt-4" >
                    <div className="w-1/2" >
                        <p className="text-lg text-gray-600 font-medium" >price avg</p>
                        <p className="text-lg text-green-600 font-medium" >$640</p>
                    </div>
                    <div className="w-1/2" >
                    <p className="text-lg text-gray-600 font-medium" >trade in</p>
                    <p className="text-lg text-red-600 font-medium" >$440</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </a>
            </div>
            <div className="w-1/4  " >
            <a href="sellingMobile">
            <div className=" m-4 border hover:shadow-lg" >
                <div className="flex justify-center" >
            <img src={iphone11} className="text-center" />
            </div>
            
            <div className="py-3 text-center " >
                <div className="" >
                <p className="text-lg font-medium" >Apple iphone 12Pro</p>
                <div className="flex flex-wrap pt-4" >
                    <div className="w-1/2" >
                        <p className="text-lg text-gray-600 font-medium" >price avg</p>
                        <p className="text-lg text-green-600 font-medium" >$580</p>
                    </div>
                    <div className="w-1/2" >
                    <p className="text-lg text-gray-600 font-medium" >trade in</p>
                    <p className="text-lg text-red-600 font-medium" >$370</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </a>
            </div>
            <div className="w-1/4  " >
            <a href="sellingMobile">
            <div className=" m-4 border hover:shadow-lg" >
                <div className="flex justify-center" >
            <img src={iphone12} className="text-center" />
            </div>
            
            <div className="py-3 text-center " >
                <div className="" >
                <p className="text-lg font-medium" >Apple iphone 11</p>
                <div className="flex flex-wrap pt-4" >
                    <div className="w-1/2" >
                        <p className="text-lg text-gray-600 font-medium" >price avg</p>
                        <p className="text-lg text-green-600 font-medium" >$480</p>
                    </div>
                    <div className="w-1/2" >
                    <p className="text-lg text-gray-600 font-medium" >trade in</p>
                    <p className="text-lg text-red-600 font-medium" >$310</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </a>
            </div>
            <div className="w-1/4  " >
                <a href="sellingMobile">
            <div className=" m-4 border hover:shadow-lg" >
                <div className="flex justify-center" >
            <img src={Iphone12mini} className="text-center" />
            </div>
            
            <div className="py-3 text-center " >
                <div className="" >
                <p className="text-lg font-medium" >Apple iphone 12 Mini</p>
                <div className="flex flex-wrap pt-4" >
                    <div className="w-1/2" >
                        <p className="text-lg text-gray-600 font-medium" >price avg</p>
                        <p className="text-lg text-green-600 font-medium" >$301</p>
                    </div>
                    <div className="w-1/2" >
                    <p className="text-lg text-gray-600 font-medium" >trade in</p>
                    <p className="text-lg text-red-600 font-medium" >$160</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </a>
            </div>
            </div>
            </div>
        </section>
        
        </>
    )
}

export default SellingPhone;