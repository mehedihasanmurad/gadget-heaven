import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* navbar */}
            <div className='mt-3 mx-3'>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;