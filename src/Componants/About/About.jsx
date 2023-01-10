import React, { useEffect } from "react";
import HeadingAbout from "./../HeadingAbout/HeadingAbout";
import AboutStyle from "./../../Style/About.module.css";

import Footer from "./../Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <HeadingAbout />
      <section className={AboutStyle.heading + " py-5"} data-aos="fade-up">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <figure className="p-3 bg-white">
                <img src="./img/about3.png" alt="img" className="w-100" />
              </figure>
            </div>

            <div className="col-md-8">
              <div className={"text-white p-4 "}>
                <h2 className={AboutStyle.title + " mb-4"}>Vision</h2>
                <p className={AboutStyle.desc + " mb-4"}>
                  We aim to be Egypt’s premier constructing organization by
                  achieving extraordinary results for our customers and building
                  satisfying careers for our people. To lead the industry in the
                  Middle East Region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={" py-5"}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8">
              <div className={"text-dark p-4 "}>
                <h2 className={AboutStyle.title + " mb-4"}>Mission</h2>
                <p className={AboutStyle.desc + " mb-4"}>
                  Working as a unique team that combines modern construction
                  techniques, qualified, professional workers in the field of
                  construction to meet and exceed our customer standards,
                  expectations and community service.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <figure className="p-3 bg-white">
                <img src="./img/about1.png" alt="img" className="w-100" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className={AboutStyle.heading + " py-5"}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <figure className="p-3 bg-white">
                <img src="./img/about5.png" alt="img" className="w-100" />
              </figure>
            </div>

            <div className="col-md-8">
              <div className={"text-white p-4 "}>
                <h2 className={AboutStyle.title + " mb-4"}>Value</h2>
                <p className={AboutStyle.desc + " mb-4"}>
                  Commitment to building fruitful, long- term relationships with
                  our clients. Sincerity and improvement in work Teamwork and
                  loyalty. Innovation: We develop and apply world-class
                  construction technology{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
