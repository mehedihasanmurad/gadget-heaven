import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';

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