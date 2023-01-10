import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';

export default function Main() {
  return (
    <div className='bg-all vh-100'>
      <Navbar/>
      <Outlet />
    </div>
  )
}
