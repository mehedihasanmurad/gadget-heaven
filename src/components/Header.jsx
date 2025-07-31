import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from 'react-router';

const Header = () => {
    const location = useLocation();
    const bgClasses = {
        "/": "bg-[#9538E2]",
    };

    const bgClass = bgClasses[location.pathname] || "bg-white"
    return (
        <div className={`${bgClass} rounded-lg relative`}>
            {/* navbar ba header part */}
            <div className={`navbar shadow-sm md:px-10 `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">Statistic</NavLink>
                            <NavLink to="/">Dashboard</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg md:text-2xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-white font-semibold" : "text-black"}>Home</NavLink>
                        <NavLink to="/statistic" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-black"}>Statistic</NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-black"}>Dashboard</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <IoCartOutline className='text-4xl bg-white  p-2 rounded-full'></IoCartOutline>
                    <CiHeart className='text-4xl bg-white  p-2 rounded-full'></CiHeart>
                </div>
            </div>

            {/* hero part */}
            <div>
                <div className="bg-[#9538E2] rounded-lg">
                    <div className="flex justify-center text-center pt-10 pb-20">
                        <div className="max-w-4xl">
                            <h1 className="text-2xl text-white md:text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className="py-6 text-white">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <a href="#_" className="px-7 py-2.5 relative rounded-full group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                                <span class="relative group-hover:text-white">Shop Now</span>
                            </a>
                            {/* <button className="px-5 py-2 btn-primary bg-white text-primary hover:bg-primary hover:text-white rounded-full font-bold duration-1000">Show Now</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;