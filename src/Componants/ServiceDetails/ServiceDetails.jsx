import React from 'react'
import Heading_Style from './../../Style/HeadingAbout.module.css'
import Footer from './../Footer/Footer';

export default function ServiceDetails() {
  return (
    <>
          <section>
      <div className="container">
      <div className="position-relative my-5">
       <img src="./img/UBTC.png" alt="ubtc" className='' />
       <h2 className={Heading_Style.title}>Service Details</h2>
      </div >
      </div>
    </section>


    <Footer />
    </>
  )
}
