import React from 'react';
import { NavLink } from 'react-router';

const SideBar = () => {
    return (
        <div className='border border-slate-100 rounded-lg shadow-md mx-5 flex flex-col p-10 space-y-6'>
            <NavLink to="/" className={({ isActive }) => isActive ? "border px-8 text-center  py-2 bg-[#9538E2] text-white rounded-full" : "border bg-base-300 px-5 py-2 rounded-full text-black"}>Products</NavLink>
            <NavLink to="/laptop" className={({ isActive }) => isActive ? "border px-5 text-center  py-2 bg-[#9538E2] text-white rounded-full" : "border bg-base-300 px-5 py-2 text-center rounded-full text-black"}>Laptops</NavLink>
            <NavLink to="/phone" className={({ isActive }) => isActive ? "border px-5 text-center  py-2 bg-[#9538E2] text-white rounded-full" : "border bg-base-300 px-5 py-2 text-center rounded-full text-black"}>Phones</NavLink>
            <NavLink to="/accessories" className={({ isActive }) => isActive ? "border px-5 text-center  py-2 bg-[#9538E2] text-white rounded-full" : "border bg-base-300 px-5 py-2 text-center rounded-full text-black"}>Accessories</NavLink>
            <NavLink to="/smartwatch" className={({ isActive }) => isActive ? "border px-5 text-center  py-2 bg-[#9538E2] text-white rounded-full" : "border bg-base-300 px-5 py-2 text-center rounded-full text-black"}>Watches</NavLink>
            <NavLink to="/tablet" className={({ isActive }) => isActive ? "border px-5 text-center  py-2 bg-[#9538E2] text-white rounded-full" : "border bg-base-300 px-5 py-2 text-center rounded-full text-black"}>Tablet</NavLink>
            <NavLink to="/iphone" className={({ isActive }) => isActive ? "border px-5 text-center  py-2 bg-[#9538E2] text-white rounded-full" : "border bg-base-300 px-5 py-2 text-center rounded-full text-black"}>Iphone</NavLink>
        </div>
    );
};

export default SideBar;