import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Componants/Home/Home'
import Main from './Componants/Main/Main'
import About from './Componants/About/About';
import Service from './Componants/Service/Service';
import Project from './Componants/Project/Project';
import Blog from './Componants/Blog/Blog';
import Contact from './Componants/Contact/Contact';
import ServiceDetails from './Componants/ServiceDetails/ServiceDetails';
import ProjectDetails from './Componants/ProjectDetails/ProjectDetails';
import BlogInfo from './Componants/BlogInfo/BlogInfo';
import AllProject from './Componants/AllProject/AllProject';

export default function App() {


const router = createBrowserRouter([
  {path: "" , element:<Main/> , children:[
    {index:true ,  element: <Home/>},
    {path:"/about" , element: <About />} ,
    {path:"/project" , element:<AllProject/>} ,
    {path:"/blog" , element:<BlogInfo />} ,
    {path:"/contact" , element:<Contact/>} ,


    {path:"/service-details" , element: <ServiceDetails />, children:[
      {}
    ]} ,

    {path:"/project-details" , element: <ProjectDetails />, children:[
      {}
    ]} ,
    
    



  ]}
])






  return (

      <RouterProvider router={router} />

  )
}
