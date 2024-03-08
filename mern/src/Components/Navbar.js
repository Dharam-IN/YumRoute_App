import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Images/YumRoutePNG.png'
import Btn from './Btn';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate()

    const menus = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Services",
            link: "/service"
        },
        {
            label: "Pages",
            link: "/pages"
        },
        {
            label: "Blog",
            link: "/blog"
        },
        {
            label: "Contact",
            link: "/contact"
        },
    ];

    const handleLogOut = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }

    return (
        <>
            <nav className='bg-[#1B3C73] px-8 py-3 flex justify-between relative'>
                <div className="flex items-center gap-4">
                    <IoMenu className='text-3xl text-white cursor-pointer lg:hidden' onClick={() => setSidebarOpen(true)} />
                    <div className="text-white">
                        {/* <h3 className='text-2xl font-bold text-[#FF4121]'>Yum<span className='text-[#FF7B62]'>Route</span></h3> */}
                        <NavLink to={'/'}>
                            <img className='w-[150px] border-none' src={Logo} alt="Logo" />
                        </NavLink>
                    </div>
                    <div className="hidden lg:block">
                        <ul className='flex gap-4 text-white'>
                        {
                            menus.map((lab, index)=>{
                                return <li key={index} className='text-lg cursor-pointer hover:text-[#FF407D]'>
                                    <NavLink to={lab.link}>{lab.label}</NavLink>
                                </li>
                            })
                        }
                        </ul>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                        {
                            (!localStorage.getItem("authToken")) 
                                ?   <div className="flex gap-3">
                                        <Btn BTNDATA={"Login"} Route={'/login'}/>
                                        <Btn BTNDATA={"SignUp"} Route={'/signup'}/>
                                    </div> 
                                :   <div className="flex gap-3">
                                        <button className='bg-[#FF4121] rounded hover:bg-[#FF7B62] px-5 py-2 text-white font-semibold text-1xl' onClick={handleLogOut}>Logout</button>
                                        <Btn BTNDATA={"My Order"} Route={'/signup'}/>
                                    </div>
                        }
                    <div className="w-12 h-12 cursor-pointer rounded-full overflow-hidden">
                        {/* <img src="https://avatars.githubusercontent.com/u/122605883?v=4" alt="user" /> */}
                        <h3 className='text-3xl pt-1 text-white'>D</h3>
                    </div>
                </div>
            </nav>

            {/* Sidebar Menu */}
            <div className={`fixed lg:hidden top-0 w-full h-full bg-[#0000004b] left-[-100% !important] ${sidebarOpen ? "left-[0]" : "left-[-100%]"}`}>
                {/* <div className="w-[250px] h-full p-8 bg-white"> */}
                <div className={`w-[250px] h-full p-8 bg-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <IoMdClose className='text-2xl cursor-pointer mb-5' onClick={() => setSidebarOpen(false)} />
                    <div>
                        {menus.map((menu, index) => (
                            <button key={index} className='block bg-[#6587b7] text-white mb-3 py-2 w-full rounded-xl hover:bg-[#40679E]'>{menu.label}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;