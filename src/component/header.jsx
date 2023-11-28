import React from "react";
import logo from "../assets/logo1-removebg-preview.png";

const Header = () =>{
    return(
        <>
        <div>
        <nav className="bg-gray-200 p-2">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white text-xl font-bold">
             <a href="/"><img src={logo} className="w-24 h-16" /></a> 
            </div>
            
          </div>
          <div>
            <a href="/sellingphone" ><button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">Sell</button></a>
          </div>
        </div>
      </div>
    </nav>
        </div>
        </>
    )
}

export default Header;