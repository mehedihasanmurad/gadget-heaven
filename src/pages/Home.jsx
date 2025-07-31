import React from 'react';
import SideBar from '../components/SideBar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='my-14 max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-5 mx-5'>Explore Cutting-Edge Gadgets</h2>
            <div className='flex flex-col mt-10 gap-10 md:flex-row'>
                <div>
                    <SideBar></SideBar>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;