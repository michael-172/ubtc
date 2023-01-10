import React, { useEffect } from "react";
import Heading_Style from "./../../Style/HeadingAbout.module.css";
import serviceStyle from "./../../Style/service.module.css";
import { Link } from "react-router-dom";
import Project from "./../Project/Project";
import Aos from "aos";

export default function Service() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <section
        id="services"
        className={serviceStyle.service + " py-5 text-white"}
      >
        <div className="container">
          <div className="position-relative my-5">
            <img src="./img/ubtcgray.png" alt="ubtc" className="w-25" />
            <h2 className={Heading_Style.title + " text-white"}>Our Service</h2>
          </div>
          <div className="row" data-aos="fade-left">
            <div className="col-md-3">
              <Link to="/service-details">
                <figure className={serviceStyle.service_img + " mt-5"}>
                  <img src="./img/service1.png" alt="img" className="w-100" />

                  <div
                    className={
                      serviceStyle.loyout +
                      " d-flex justify-content-center align-items-center text-center"
                    }
                  >
                    <div>
                      <h5 className="text-uppercase mb-3">Service</h5>
                      <h3 className="my-3">Concrete</h3>

                      <div
                        className={
                          serviceStyle.icon +
                          " d-flex justify-content-center align-items-center text-center m-auto"
                        }
                      >
                        <i
                          className={
                            "fa-solid fa-plus fa-lg " + serviceStyle.plus
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                </figure>
                <h3 className={serviceStyle.service_title + " text-center "}>
                  Concrete
                </h3>
              </Link>
            </div>

            <div className="col-md-3">
              <Link to="/service-details">
                <figure className={serviceStyle.service_img}>
                  <img src="./img/service2.png" alt="img" className="w-100" />

                  <div
                    className={
                      serviceStyle.loyout +
                      " d-flex justify-content-center align-items-center text-center"
                    }
                  >
                    <div>
                      <h5 className="text-uppercase mb-3">Service</h5>
                      <h3 className="my-3">Finishing</h3>

                      <div
                        className={
                          serviceStyle.icon +
                          " d-flex justify-content-center align-items-center text-center m-auto"
                        }
                      >
                        <i
                          className={
                            "fa-solid fa-plus fa-lg " + serviceStyle.plus
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                </figure>
                <h3 className={serviceStyle.service_title + " text-center "}>
                  Finishing
                </h3>
              </Link>
            </div>

            <div className="col-md-3">
              <Link to="/service-details">
                <figure className={serviceStyle.service_img + " mt-5"}>
                  <img src="./img/service3.png" alt="img" className="w-100" />

                  <div
                    className={
                      serviceStyle.loyout +
                      " d-flex justify-content-center align-items-center text-center"
                    }
                  >
                    <div>
                      <h5 className="text-uppercase mb-3">Service</h5>
                      <h3 className="my-3">Landscape </h3>

                      <div
                        className={
                          serviceStyle.icon +
                          " d-flex justify-content-center align-items-center text-center m-auto"
                        }
                      >
                        <i
                          className={
                            "fa-solid fa-plus fa-lg " + serviceStyle.plus
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                </figure>
                <h3 className={serviceStyle.service_title + " text-center "}>
                  Landscape{" "}
                </h3>
              </Link>
            </div>

            <div className="col-md-3">
              <Link to="/service-details">
                <figure className={serviceStyle.service_img}>
                  <img src="./img/service4.png" alt="img" className="w-100 " />

                  <div
                    className={
                      serviceStyle.loyout +
                      " d-flex justify-content-center align-items-center text-center"
                    }
                  >
                    <div>
                      <h5 className="text-uppercase mb-3">Service</h5>
                      <h3 className="my-3">MEP</h3>

                      <div
                        className={
                          serviceStyle.icon +
                          " d-flex justify-content-center align-items-center text-center m-auto"
                        }
                      >
                        <i
                          className={
                            "fa-solid fa-plus fa-lg " + serviceStyle.plus
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                </figure>
                <h3 className={serviceStyle.service_title + " text-center "}>
                  MEP
                </h3>
              </Link>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
