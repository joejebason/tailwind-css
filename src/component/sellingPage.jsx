import React, {useState } from "react";
import mobile from "../assets/iphone.jpg";
import ProgressBar from "./progressbar";

const Selling = () =>{

    const [previewImage, setPreviewImage] = useState(null);
    const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
    window.location.reload(); 
  };

    
   

    const handleSelectImage = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
            setPreviewImage(fileReader.result);
        });
        fileReader.readAsDataURL(file);
    }
    
    return(
        <>
        <div>
            <div className="lg:block none">
        <ProgressBar/>
        </div>
            <div className="container mx-auto" >
                
                <p className="text-[3rem] font-bold leading-6 text-center pt-[3rem] text-black" >Post Your AD</p>
                <div className="mx-4 md:mx-[3rem] lg:mx-[6rem] mt-12" >
                    <div className="row" >
                    <div className="flex flex-wrap w-full" >
                        <div className=" w-full flex  lg:w-1/2 " >
                            <div className=" justify-center mt-12" >
                                <img src={mobile} className="w-[23rem] "/>
                            </div>
                        </div>
                        <div className="w-full flex flex-wrap lg:w-1/2   " >
                            <div className="mx-2 md:mx-6 lg:mx-10">
                            <div className="border bg-gray-200 mt-10 flex flex-wrap" >
                                <div className="w-3/4" >
                                <p className="p-5 text-lg lg:text-[1.5rem] text-black text-center leading-9 font-semibold" >Select Product Details</p>
                                </div>
                                <div className="w-1/4 flex justify-center items-center">
                                    <a href="" onClick={handleRefresh}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/>
                                </svg>
                                </a>
                                </div>
                            </div>
                            <div className=" mt-6" >
                                <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Brand</p>
                            <select className="w-[15rem] h-12 border p-2 text-[.875rem] lg:text-lg font-medium leading-6 text-gray-800" >
                                <option className="text-[.675rem] lg:text-lg font-medium leading-6 text-gray-800" value=""  selected>
                                Select a Model
                                </option>
                                <option value="option1">iphone 11</option>
                                <option value="option2">iphone Xr</option>
                                <option value="option3">iphone Xs</option>
                                <option value="option4">Vivo</option>
                                <option value="option5">iphone 12pro</option>
                                <option value="option6">iphone 14pro Max</option>
                                <option value="option7">iphone 13</option>
                            </select>
                            </div>

                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Add title</p>
                            <input type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-12 outline-none p-3 text-[.5625rem] md:text-[.875rem]" placeholder="Mention the key features of your item (e.g. brand, model, age, type)" />
                            </div>
                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Description</p>
                            <textarea type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-28  outline-none p-3 text-[.5625rem] md:text-[.875rem]" placeholder="Include condition, features and reason for selling..." />
                            </div>
                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Battery Health</p>
                            <input type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-12 outline-none p-3 text-[.875rem]" placeholder="" />
                            </div>
                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Device ESN</p>
                            <input type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-12 outline-none p-3 text-[.5625rem] md:text-[.875rem]" placeholder="Enter IMEI for cellular Devices" />
                            </div>

                            <div className=" border bg-gray-200 mt-10" >
                                <p className="p-5 text-lg lg:text-[1.5rem] text-black leading-6 text-center font-semibold" >Set a Price</p>
                            </div>

                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Price</p>
                            <input type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-12 outline-none p-3 text-[.5625rem] md:text-[.875rem]" placeholder="set a price" />
                            </div>

                            <div className=" border bg-gray-200 mt-10" >
                                <p className="p-5 text-lg lg:text-[1.5rem] text-black text-center leading-6 font-semibold" >Upload Photo</p>
                            </div>

                            <div className=" border bg-gray-200 mt-10" >
                            <input type="file" onChange={handleSelectImage} />
                                    {
                                        previewImage ?
                                            <img src={previewImage} alt="preview-image" />
                                        :
                                            null
                                    }
                                   
            
                            </div>

                            <div className=" border bg-gray-200 mt-10" >
                                <p className="p-5 text-lg lg:text-[1.5rem] text-black text-center leading-6 font-semibold" >Select Shipping</p>
                            </div>

                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Address</p>
                            <input type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-12 outline-none p-3 text-[.5625rem] md:text-[.875rem]" placeholder=" Enter a Door no.. " />
                            </div>

                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Ship from : Location</p>
                            <input type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-12 outline-none p-3 text-[.5625rem] md:text-[.875rem]" placeholder="Enter a City, State.. " />
                            </div>
                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Ship from : Zip Code</p>
                            <input type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-12 outline-none p-3 text-[.5625rem] md:text-[.875rem]" placeholder="Enter a Zip Code.. " />
                            </div>
                            <div className=" mt-6" >
                            <p className="text-[.875rem] lg:text-lg font-medium leading-6 pb-3 text-gray-600" >Mobile Number:</p>
                            <input type="text" className="border border-gray-400 w-[20rem] md:w-[25rem] lg:w-[28.75rem] h-12 outline-none p-3 text-[.5625rem] md:text-[.875rem]" placeholder="Enter a Number.." />
                            </div>

                            <div className=" mt-6 text-center" >
                           <button type="submit" className="border w-36 p-2 bg-green-700 text-gray-100 text-lg font-semibold rounded" >Post Now</button>
                            </div>

                        </div>
                        </div>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Selling;