import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return <div className='min-h-screen font-inter text-[#333]'>
    {/* <Header /> */}
    <Outlet />
  </div>
}

export default Layout;