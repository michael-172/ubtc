import React from 'react'
import Footer from './../Footer/Footer';
import Heading_Style from './../../Style/HeadingAbout.module.css'

export default function BlogInfo() {
  return (
    <>
    <section>
      <div className="container">
      <div className="position-relative my-5">
       <img src="./img/UBTC.png" alt="ubtc" className='' />
       <h2 className={Heading_Style.title}>Blogs</h2>
      </div >

      {/* pagination from api  */}
      </div>

    </section>

    <Footer />

    </>
  )
}
