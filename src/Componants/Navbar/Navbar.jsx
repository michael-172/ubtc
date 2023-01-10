import React from 'react'
import NavbarStayle from './../../Style/Navbar.module.css'
import {Link} from 'react-scroll'
import '../../Style/Navbar.css'
export default function Navbar() {
 
  return (
    <>
      <nav className="navbar navbar-expand-lg py-2">
  <div className="container">
    <Link className="navbar-brand" to="home" >
     <img src="./img/logo.png" alt="logo"  style={{cursor: "pointer"}} />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item  me-4">
          <Link className={"nav-link  " +  NavbarStayle.navbar_link } to="about" spy={true} smooth={true} offset={-90} duration={500}>About Us</Link>
        </li>
        <li className="nav-item me-4">
          <Link  className={"nav-link " +  NavbarStayle.navbar_link } to="services" spy={true} offset={-90} duration={500}>Services</Link >
        </li>

        <li className="nav-item me-4">
          <Link className={"nav-link " +  NavbarStayle.navbar_link } to="project" spy={true} offset={-90} duration={500}>Projects</Link>
        </li>


        <li className="nav-item me-4">
          <Link className={"nav-link " +  NavbarStayle.navbar_link } to="blogs" spy={true} offset={-90} duration={500}>Blogs</Link>
        </li>

        <li className="nav-item me-4">
          <Link className={"nav-link " +  NavbarStayle.navbar_link } to="contact"  spy={true} offset={50} duration={500}>Contact Us</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>


    </>
  )
}
