import React, { useEffect } from "react";
import Heading_Style from "./../../Style/HeadingAbout.module.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

export default function HeadingAbout() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="py-5" data-aos="fade-right" id="about">
        <div className="container">
          <div className="row g-3 mb-5">
            <div className="col-md-6">
              <div>
                <div className="position-relative my-5">
                  <img src="./img/UBTC.png" alt="ubtc" className="w-50" />
                  <h2 className={Heading_Style.title}>About us</h2>
                </div>

                <h3 className={Heading_Style.header + " my-4"}>
                  United Brothers for Trading and Construction
                </h3>

                <h2 className={Heading_Style.heading + " my-3"}>
                  one of the most upgrading and promising companies in Egypt.{" "}
                </h2>
                <p className={Heading_Style.abut_desc}>
                  In February 2010, UBTC was established as an Egyptian
                  joint-stock company subject to the companies' establishment
                  law no.159 for the year 1981. UBTC was established with an
                  authorized capital of 2 million Egyptian pounds.
                </p>
                <AnimatedButton title={"Read More"} link="/about" />
              </div>
            </div>

            <div className="col-md-6 ">
              <div className=" position-relative ">
                <figure className="text-end ">
                  <img
                    src="./img/about1.png"
                    alt="img"
                    className="bg-white p-3"
                  />
                </figure>

                <figure className={Heading_Style.img_layer}>
                  <img
                    src="./img/about2.png"
                    alt="img"
                    className="bg-white p-3"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="dashbord p-5">
                <h4 className={Heading_Style.dashbord_title}>+10</h4>
                <h3 className={Heading_Style.dashbord_desc}>
                  Years of Experience
                </h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="dashbord p-5">
                <h4 className={Heading_Style.dashbord_title}>+15</h4>
                <h3 className={Heading_Style.dashbord_desc}>Projects Done</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="dashbord p-5">
                <h4 className={Heading_Style.dashbord_title}>+400</h4>
                <h3 className={Heading_Style.dashbord_desc}>Total Employees</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
