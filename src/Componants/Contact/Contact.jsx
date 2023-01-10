import React from 'react'
import Heading_Style from './../../Style/HeadingAbout.module.css'
import HomeStyle from './../../Style/Home.module.css'
import Footer from './../Footer/Footer';

export default function Contact() {
  return (
    <>
      <section className='py-5'>
        <div className="container">
          <div>
       <div className="position-relative my-5">
       <img src="./img/UBTC.png" alt="ubtc" className='' />
       <h2 className={Heading_Style.title}>Contact Us</h2>
      </div >

           <form action="">
            <div className="row  p-4" >
              <div className="col-md-6 mb-5 ">
                <input type="text" placeholder='What is your name? *' className='form-control form-control-lg  border-0 border-bottom border-3 bg-transparent  p-3 rounded-0 ' />
              </div>

              <div className="col-md-6 mb-5  ">
                <input type='email' placeholder='What it your email? *' className='form-control form-control-lg  border-0 border-bottom border-3 bg-transparent  p-3 rounded-0 ' />
              </div>

              <div className="col-md-6 mb-5 ">
                <input type="text" placeholder='What is your phone number?* ' className='form-control form-control-lg  border-0 border-bottom border-3 bg-transparent  p-3 rounded-0 ' />
              </div>
  
              <div className="col-md-6 mb-5  ">
                <input type='text' placeholder='What is your company?*' className='form-control form-control-lg  border-0 border-bottom border-3 bg-transparent  p-3 rounded-0 ' />
              </div>

              <div className="col-md-12  mb-5">
              <textarea className="form-control form-control-lg border-0 border-bottom border-3 bg-transparent  p-3 rounded-0 " id="exampleFormControlTextarea1" placeholder='Write your message here' rows="3"></textarea>
              </div>

              <div className="col-md-3 offset-9"> 
                
              <button className={HomeStyle.btn_header + ' btn w-100 py-3'}>send message <i className="fa-solid fa-arrow-right ms-3 "></i></button>
              </div>
            </div>
           </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
