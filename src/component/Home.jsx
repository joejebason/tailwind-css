import React, {useState} from "react";
import iphone11 from "../assets/iphone11.webp";
import Iphone12mini from "../assets/apple12mini.webp";
import iphone12pro from "../assets/apple12pro.webp";
import apple13pro from "../assets/apple13pro.webp";
import iPhone13 from "../assets/iPhone13.webp"; 
import iphone12 from "../assets/iphone12m.webp";
import iphone14 from "../assets/iphone14m.webp";
import iphone14pro from "../assets/iphone14pro.webp";
import ProgressBar from "./progressbar";


const Home = () =>{
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('');
    const [priceFilter, setPriceFilter] = useState({
        under300: false,
        range300to500: false,
        range500to700: false,
        above700: false,
      });

      const [memoryFilter, setMemoryFilter] = useState({
        gb32: false,
        gb64: false,
        gb128: false,
        gb256: false,
        above256: false,
          
      })
      
// Function to handle changes in price range checkboxes
const handlePriceFilterChange = (filterType) => {
    setPriceFilter({
      ...priceFilter,
      [filterType]: !priceFilter[filterType],
    });
  };

  const handleMemoryFilterChange = (filterType) => {
    setMemoryFilter({
      ...memoryFilter,
      [filterType]: !memoryFilter[filterType],
    });
  };

  // Assuming your iphoneListings data structure remains the same

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };



    // Assuming your iPhone listings array looks like this
const iphoneListings = [
    { id: 1, name: 'iPhone 13Pro', memory: 256  , price: 640, image: apple13pro },
    { id: 2, name: 'iPhone 12', memory: 128 , price: 580, image: iphone12 },
    { id: 3, name: 'iPhone 13', memory: 128 , price: 520, image: iPhone13 },
    { id: 4, name: 'iPhone 11', memory: 128 , price: 460, image: iphone11 },
    { id: 5, name: 'iPhone 12 Mini', memory: 128 , price: 610, image: Iphone12mini },
    { id: 6, name: 'iPhone 12Pro', memory: 256 , price: 540, image: iphone12pro },
    { id: 7, name: 'iPhone 14', memory: 64 , price: 420, image: iphone14 },
    { id: 8, name: 'iPhone 14 Pro', memory: 256 , price: 630, image: iphone14pro },
    // Add more iPhone listings as needed
  ];
  
  
  // Filter the listings based on the search term
  const filteredListings = iphoneListings.filter((listing) => {
    const nameMatch = listing.name.toLowerCase().includes(searchTerm.toLowerCase());
    const numberMatch = listing.memory === parseInt(searchTerm); // Check if the memory matches the search term
    return nameMatch || numberMatch;
  });

  
  const applyPriceFilter = (listing) => {
    if (
      (!priceFilter.under300 && !priceFilter.range300to500 && !priceFilter.range500to700 && !priceFilter.above700) ||
      (priceFilter.under300 && listing.price >= 0 && listing.price < 300) ||
      (priceFilter.range300to500 && listing.price >= 300 && listing.price < 500) ||
      (priceFilter.range500to700 && listing.price >= 500 && listing.price < 700) ||
      (priceFilter.above700 && listing.price >= 700)
    ) {
      return true;
    }
    return false;
  };

  const applyMemoryFilter = (listing) => {
    if (
      (!memoryFilter.gb32 &&
        !memoryFilter.gb64 &&
        !memoryFilter.gb128 &&
        !memoryFilter.gb256 &&
        !memoryFilter.above256) ||
      (memoryFilter.gb32 && listing.memory === 32) ||
      (memoryFilter.gb64 && listing.memory === 64) ||
      (memoryFilter.gb128 && listing.memory === 128) ||
      (memoryFilter.gb256 && listing.memory === 256) ||
      (memoryFilter.above256 && listing.memory > 256)
    ) {
      return true;
    }
    return false;
  };


//   const sortedAndFiltered = filteredListings
//     .filter(applyPriceFilter)
//     .filter(applyStorageFilter)
//     .sort((a, b) => {
//       if (sortType === 'low') {
//         return a.price - b.price;
//       } else if (sortType === 'high') {
//         return b.price - a.price;
//       }
//       return 0;
//     });
const sortedAndFiltered = filteredListings
    .sort((a, b) => {
      if (sortType === 'low') {
        return a.price - b.price;
      } else if (sortType === 'high') {
        return b.price - a.price;
      }
      return 0;
    })
    .filter(applyPriceFilter)
    .filter(applyMemoryFilter);
    
    return(
        <>
        <div className="container mx-auto" >

            <div className="flex flex-wrap justify-center items-center mt-12" >
                <p className="text-[2.25rem] font-semibold text-gray-700" >Best deals on Refurbished iPhones.</p>
            </div>

            <div className="text-end" >
            <select className="border text-lg font-semibold rounded px-4 outline-none bg-slate-100" value={sortType} onChange={handleSortChange}>
                <option value="">SORT BY</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
                
            </select>
             </div>   

            <div className="flex flex-wrap justify-center mt-12" >
                <div>
                <input
                    type="text"
                    className="border w-[35rem] p-2 outline-none rounded-md border-gray-400"
                    placeholder="Find a good deal"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
               
            </div> 

             <div className="row mx-auto my-12 " >
             <div className="flex flex-wrap ">
                <div className="w-1/4 rounded-md h-[27rem] bg-gray-100 mt-4">
                    <div className="m-8 " >
                        <p className="text-lg font-semibold" >Price</p>
                        <div className="flex flex-wrap mt-4" >
                        <input className="m-1" type="checkbox" onChange={() => handlePriceFilterChange('under300')} checked={priceFilter.under300} /><p className="ml-2 text-[0.875rem] font-medium" >under $300</p>
                        </div>
                        <div className="flex flex-wrap mt-2" >
                        <input className="m-1" type="checkbox" onChange={() => handlePriceFilterChange('range300to500')} checked={priceFilter.range300to500} /><p className="ml-2 text-[0.875rem] font-medium" >$300 - $500 </p>
                        </div>
                        <div className="flex flex-wrap mt-2" >
                        <input className="m-1" type="checkbox" onChange={() => handlePriceFilterChange('range500to700')} checked={priceFilter.range500to700} /><p className="ml-2 text-[0.875rem] font-medium" >$500 - $700 </p>
                        </div>
                        <div className="flex flex-wrap mt-2" >
                        <input className="m-1" type="checkbox" onChange={() => handlePriceFilterChange('above700')} checked={priceFilter.above700} /><p className="ml-2 text-[0.875rem] font-medium" >above- $700 </p>
                        </div>
                    </div>

                    <div className="m-8 " >
                        <p className="text-lg font-semibold" >Memory Storage Capacity</p>
                        <div className="flex flex-wrap mt-4" >
                        <input className="m-1" type="checkbox"  onChange={() => handleMemoryFilterChange('gb32')} checked={memoryFilter.gb32} /><p className="ml-2 text-[0.875rem] font-medium" > 32 GB</p>
                        </div>
                        <div className="flex flex-wrap mt-2" >
                        <input className="m-1" type="checkbox" onChange={() => handleMemoryFilterChange('gb64')} checked={memoryFilter.gb6464} /><p className="ml-2 text-[0.875rem] font-medium" >64 GB</p>
                        </div>
                        <div className="flex flex-wrap mt-2" >
                        <input className="m-1" type="checkbox" onChange={() => handleMemoryFilterChange('gb128')} checked={memoryFilter.gb128128} /><p className="ml-2 text-[0.875rem] font-medium" >128 GB</p>
                        </div>
                        <div className="flex flex-wrap mt-2" >
                        <input className="m-1" type="checkbox"  onChange={() => handleMemoryFilterChange('gb256')} checked={memoryFilter.gb25656}/><p className="ml-2 text-[0.875rem] font-medium" >256 GB</p>
                        </div>
                        <div className="flex flex-wrap mt-2" >
                        <input className="m-1" type="checkbox" onChange={() => handleMemoryFilterChange('above256')} checked={memoryFilter.above256}/><p className="ml-2 text-[0.875rem] font-medium" >above 256 GB</p>
                        </div>
                    </div>
                </div>
                <div className="w-3/4" > 
                <div className="row mx-auto flex flex-wrap" >

              
                
             {sortedAndFiltered.map((listing) => (
                    <div className="w-1/3" key={listing.id}>
                    {/* <a href="sellingMobile"> */}
                        <div className="m-4 border hover:shadow-lg">
                        <div className="flex justify-center">
                            <img src={listing.image} alt={listing.name} className="text-center" />
                        </div>
                        <div className="py-3 text-center">
                            <div>
                            <p className="text-lg font-medium">{listing.name}<span className="text-[0.875rem] font-medium ml-2" >{listing.memory} GB</span></p>
                            <div className="text-center pt-4">
                                <p className="text-lg text-green-600 font-medium">${listing.price}</p>
                            </div>
                            </div>
                        </div>
                        <div className="row flex flex-wrap mx-4 my-4" >
                            <div className="w-1/2 ">
                                <button className=" w-28 text-lg font-medium rounded border-2 border-yellow-500 text-gray-900">Add cart</button>
                            </div>
                            <div className="w-1/2 ">
                                <button className="border w-28 text-lg font-medium rounded bg-yellow-500 text-gray-900">Buy Now</button>
                            </div>
                        </div>
                        </div>
                        
                        
                    {/* </a> */}
                    </div>
                   
                ))}
                 </div>
                </div>
                </div>

            </div>   
        </div>
        </>
    )
}

export default Home;