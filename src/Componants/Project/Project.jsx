import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading_Style from "./../../Style/HeadingAbout.module.css";
import styles from "../../Style/Project.module.css";
import serviceStyle from "./../../Style/service.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Aos from "aos";
export default function Project() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <section className={`${styles.project} `} id="project">
        <div className="container">
          <div className="position-relative my-5">
            <img src="./img/ubtcgray.png" alt="ubtc" className="w-25" />
            <h2 className={Heading_Style.title + " text-white"}>Our Project</h2>
          </div>

          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            dotListClass={"dots"}
            showDots={true}
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {/* data-aos="fade-right" */}
            <div className="row ">
              <div className="col-md-3 ">
                <Link to="/project-details">
                  <figure className={serviceStyle.service_img}>
                    <img
                      src="./img/project/project1.png"
                      alt="project"
                      className="w-100"
                    />

                    <div
                      className={
                        serviceStyle.loyout +
                        " d-flex justify-content-center align-items-center text-center"
                      }
                    >
                      <div>
                        <h5 className="text-uppercase mb-3">Project</h5>
                        <h3 className="my-3">IL Monte Galala</h3>

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
                </Link>
              </div>

              <div className="col-md-9 ">
                <div className="row">
                  <div className="col-md-8">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project2.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">
                              New Giza for Real Estate Development
                            </h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project3.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Fouka Bay</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project4.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Ein Bay</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4 ">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project5.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Seashell</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4 ">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project6.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Fouka Bay</h3>

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
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-3 ">
                <Link to="/project-details">
                  <figure className={serviceStyle.service_img}>
                    <img
                      src="./img/project/project1.png"
                      alt="project"
                      className="w-100"
                    />

                    <div
                      className={
                        serviceStyle.loyout +
                        " d-flex justify-content-center align-items-center text-center"
                      }
                    >
                      <div>
                        <h5 className="text-uppercase mb-3">Project</h5>
                        <h3 className="my-3">IL Monte Galala</h3>

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
                </Link>
              </div>

              <div className="col-md-9 ">
                <div className="row">
                  <div className="col-md-8">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project2.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">
                              New Giza for Real Estate Development
                            </h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project3.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Fouka Bay</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project4.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Ein Bay</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4 ">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project5.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Seashell</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4 ">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project6.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Fouka Bay</h3>

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
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-3 ">
                <Link to="/project-details">
                  <figure className={serviceStyle.service_img}>
                    <img
                      src="./img/project/project1.png"
                      alt="project"
                      className="w-100"
                    />

                    <div
                      className={
                        serviceStyle.loyout +
                        " d-flex justify-content-center align-items-center text-center"
                      }
                    >
                      <div>
                        <h5 className="text-uppercase mb-3">Project</h5>
                        <h3 className="my-3">IL Monte Galala</h3>

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
                </Link>
              </div>

              <div className="col-md-9 ">
                <div className="row">
                  <div className="col-md-8">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project2.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">
                              New Giza for Real Estate Development
                            </h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project3.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Fouka Bay</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project4.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Ein Bay</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4 ">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project5.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Seashell</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4 ">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project6.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Fouka Bay</h3>

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
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <div className="col-md-3 ">
                <Link to="/project-details">
                  <figure className={serviceStyle.service_img}>
                    <img
                      src="./img/project/project1.png"
                      alt="project"
                      className="w-100"
                    />

                    <div
                      className={
                        serviceStyle.loyout +
                        " d-flex justify-content-center align-items-center text-center"
                      }
                    >
                      <div>
                        <h5 className="text-uppercase mb-3">Project</h5>
                        <h3 className="my-3">IL Monte Galala</h3>

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
                </Link>
              </div>

              <div className="col-md-9 ">
                <div className="row">
                  <div className="col-md-8">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project2.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">
                              New Giza for Real Estate Development
                            </h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project3.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Fouka Bay</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project4.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Ein Bay</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4 ">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project5.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Seashell</h3>

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
                    </Link>
                  </div>

                  <div className="col-md-4 ">
                    <Link to="/project-details">
                      <figure className={serviceStyle.service_img}>
                        <img
                          src="./img/project/project6.png"
                          alt="project"
                          className="w-100"
                        />

                        <div
                          className={
                            serviceStyle.loyout +
                            " d-flex justify-content-center align-items-center text-center"
                          }
                        >
                          <div>
                            <h5 className="text-uppercase mb-3">Project</h5>
                            <h3 className="my-3">Fouka Bay</h3>

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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
