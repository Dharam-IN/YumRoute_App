import React from 'react';
import { FaSearch } from "react-icons/fa";
import BanIMG from './Images/BannerIMG.jpg'

const Banner = () => {
  return (
    <>
        <div className="flex justify-center items-center h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${BanIMG})`}}>
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="border flex items-center justify-center items-center ">
                    <input type="text" className="w-full py-2 px-4 rounded-lg focus:outline-none" placeholder="Search..." />
                    <button className="py-3 px-6 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"><FaSearch /></button>
                </div>
            </div>
        </div>

    </>

  )
}

export default Banner