import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Dash from "../Dash/Dash";
import FooterStyle from "./../../Style/Footer.module.css";
import HomeStyle from "./../../Style/Home.module.css";
export default function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <footer className="my-4" id="contact">
        <Dash />
        <div className="container-fluid">
          <div className="row">
            <div className={FooterStyle.red + " col-md-5 "}>
              <div className="item p-lg-5">
                <div className="p-5 text-white">
                  <h2 className={FooterStyle.item_title + " mb-4"}>UBTC</h2>
                  <span className={FooterStyle.call + " "}>CALL US TODAY</span>
                  <h4 className={FooterStyle.phone + " my-3"}>
                    +2 233 0528 53
                  </h4>

                  <div className=" d-flex d-flex justify-content-start align-items-center ">
                    <span
                      className={
                        FooterStyle.icone +
                        " rounded-circle d-flex d-flex justify-content-center align-items-center "
                      }
                    >
                      <a href="#" target="_blank">
                        <i className="fa-brands text-black fa-xl  fa-twitter"></i>
                      </a>
                    </span>

                    <span
                      className={
                        FooterStyle.icone +
                        " rounded-circle ms-3  d-flex d-flex justify-content-center align-items-center "
                      }
                    >
                      <a href="#" target="_blank">
                        <i className="fa-brands text-black fa-xl  fa-facebook-f"></i>
                      </a>
                    </span>
                    <span
                      className={
                        FooterStyle.icone +
                        " rounded-circle ms-3  d-flex d-flex justify-content-center align-items-center "
                      }
                    >
                      <a href="#" target="_blank">
                        <i className="fa-brands text-black fa-xl  fa-linkedin"></i>
                      </a>
                    </span>
                    <span
                      className={
                        FooterStyle.icone +
                        " rounded-circle ms-3  d-flex d-flex justify-content-center align-items-center "
                      }
                    >
                      <a href="#" target="_blank">
                        <i className="fa-brands text-black fa-xl  fa-youtube"></i>
                      </a>
                    </span>
                  </div>

                  <p className={FooterStyle.foot + " mt-5"}>
                    United Brothers for Trading and Construction “UBTC”{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className={FooterStyle.black + " col-md-7   px-3"}>
              <div className="py-lg-5">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="py-5">
                      <h3
                        className={FooterStyle.foot_title + " mb-5 text-white "}
                      >
                        {" "}
                        Quick Links
                      </h3>

                      <Link>
                        <div className="mb-3">About Company</div>
                      </Link>

                      <Link>
                        <div className="mb-3">Our Services</div>
                      </Link>

                      <Link>
                        <div className="mb-3">Our Projects</div>
                      </Link>

                      <Link>
                        <div className="mb-3">Blogs</div>
                      </Link>

                      <Link>
                        <div className="mb-5">Contacts Us</div>
                      </Link>

                      <p className={FooterStyle.foot_foot + " mt-5 text-white"}>
                        Copyright © 2023 All right reserved
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 ">
                    <div className="border border-2 border-white p-3 rounded-3">
                      <input
                        type="text"
                        className="form-control form-control-lg bg-transparent mb-3"
                        placeholder="Your Name"
                      />

                      <input
                        type="email"
                        className="form-control form-control-lg bg-transparent mb-3"
                        placeholder="Your Email"
                      />

                      <input
                        type="email"
                        className="form-control form-control-lg bg-transparent mb-3"
                        placeholder="Your Phone"
                      />

                      <textarea
                        className="form-control form-control-lg bg-transparent mb-3"
                        placeholder="Your Message"
                        rows="3"
                      ></textarea>

                      <AnimatedButton
                        title={"Send Message"}
                        link=""
                        fullWidth={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
