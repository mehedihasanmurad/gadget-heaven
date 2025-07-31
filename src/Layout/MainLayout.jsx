import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <div className='mt-3 mx-3'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;