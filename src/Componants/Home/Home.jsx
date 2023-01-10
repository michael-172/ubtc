import React, { useEffect } from "react";
import HomeStyle from "./../../Style/Home.module.css";
import HeadingAbout from "./../HeadingAbout/HeadingAbout";
import Service from "./../Service/Service";
import Blog from "./../Blog/Blog";
import Dash from "./../Dash/Dash";
import Footer from "./../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Project from "../Project/Project";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <header className="vh-100" data-aos="fade-up" id="home">
        <div className="container h-100 d-flex align-items-center">
          <div>
            <div className="row g-2">
              <div className="col-md-6 mt-5">
                <div>
                  <div className={HomeStyle.item_header + " my-5"}>
                    <img src="./img/UBTC.png" alt="" className="w-100"/>
                    <h1 className={HomeStyle.h1 + " mb-5"}>
                      {" "}
                      <span className={HomeStyle.header_span}>
                        Construction
                      </span>{" "}
                      you can count on.
                    </h1>
                  </div>

                  <p className={HomeStyle.header_desc + " my-5"}>
                    We provide a complete service for the sale, purchase or
                    rental of real estate. We have been operating in Madrid and
                    Barcelona more than 15 years.
                  </p>
                  <AnimatedButton title={"View More"} link="" />
                </div>
              </div>

              <div className="col-md-6">
                <div>
                  <img src="./img/pngwing.png" alt="img" className="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeadingAbout />
      <Service />
      <Project />
      <Blog />
      <Footer />
    </>
  );
}
