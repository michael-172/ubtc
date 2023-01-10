import React, { useEffect } from "react";
import Heading_Style from "./../../Style/HeadingAbout.module.css";

import blogStyle from "./../../Style/Blog.module.css";
import Aos from "aos";

export default function Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="py-5" data-aos="fade-up" id="blogs">
        <div className="container">
          <div className="position-relative my-5">
            <img src="./img/UBTC.png" alt="ubtc" className="w-25" />
            <h2 className={Heading_Style.title}>Our blogs</h2>
          </div>

          <div className="row">
            <div className="col-md-4">
              <figure className=" rounded-5 position-relative ">
                <img
                  src="./img/blog1.png"
                  alt="blog"
                  className="w-100 rounded-5"
                />
                <div
                  className={
                    "position-absolute  end-0 start-0 bottom-0  rounded-5 d-flex justify-content-center align-items-center p-3 " +
                    blogStyle.blog_layout
                  }
                >
                  <div className="text-white text-center">
                    <h3 className={blogStyle.layout_title}>
                      {" "}
                      Lands and its properties
                    </h3>
                    <p className={blogStyle.layout_desc + " my-3"}>
                      The neccessity of land cannot be over said....
                    </p>
                    <button
                      className={
                        "btn rounded-pill px-4 py-2 " + blogStyle.layout_btn
                      }
                    >
                      Read more <i className="fa-solid fa-arrow-right ms-3"></i>
                    </button>
                  </div>
                </div>
              </figure>
            </div>

            <div className="col-md-4">
              <figure className=" rounded-5 position-relative ">
                <img
                  src="./img/blog2.png"
                  alt="blog"
                  className="w-100 rounded-5"
                />
                <div
                  className={
                    "position-absolute  end-0 start-0 bottom-0  rounded-5 d-flex justify-content-center align-items-center p-3 " +
                    blogStyle.blog_layout
                  }
                >
                  <div className="text-white text-center">
                    <h3 className={blogStyle.layout_title}>
                      {" "}
                      Lands and its properties
                    </h3>
                    <p className={blogStyle.layout_desc + " my-3"}>
                      The neccessity of land cannot be over said....
                    </p>
                    <button
                      className={
                        "btn rounded-pill px-4 py-2 " + blogStyle.layout_btn
                      }
                    >
                      Read more <i className="fa-solid fa-arrow-right ms-3"></i>
                    </button>
                  </div>
                </div>
              </figure>
            </div>

            <div className="col-md-4">
              <figure className=" rounded-5 position-relative ">
                <img
                  src="./img/blog2.png"
                  alt="blog"
                  className="w-100 rounded-5"
                />
                <div
                  className={
                    "position-absolute  end-0 start-0 bottom-0  rounded-5 d-flex justify-content-center align-items-center p-3 " +
                    blogStyle.blog_layout
                  }
                >
                  <div className="text-white text-center">
                    <h3 className={blogStyle.layout_title}>
                      {" "}
                      Lands and its properties
                    </h3>
                    <p className={blogStyle.layout_desc + " my-3"}>
                      The neccessity of land cannot be over said....
                    </p>
                    <button
                      className={
                        "btn rounded-pill px-4 py-2 " + blogStyle.layout_btn
                      }
                    >
                      Read more <i className="fa-solid fa-arrow-right ms-3"></i>
                    </button>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
