import React from "react";
import DashStyle from "./../../Style/Dash.module.css";

export default function Dash() {
  return (
    <>
      <section className={DashStyle.dash + " py-5"} >
        <div className="container">
          <div className="row g-3">
            <div className="col-md-2">
              <div className=" text-center p-3">
                <img src="./img/dash1.png" alt="img" className="w-100" />
              </div>
            </div>

            <div className="col-md-2">
              <div className=" text-center p-3">
                <img src="./img/dash2.png" alt="img" className="w-100" />
              </div>
            </div>

            <div className="col-md-2">
              <div className=" text-center p-3">
                <img src="./img/dash1.png" alt="img" className="w-100" />
              </div>
            </div>

            <div className="col-md-2">
              <div className=" text-center p-3">
                <img src="./img/dash2.png" alt="img" className="w-100" />
              </div>
            </div>

            <div className="col-md-2">
              <div className=" text-center p-3">
                <img src="./img/dash1.png" alt="img" className="w-100" />
              </div>
            </div>

            <div className="col-md-2">
              <div className=" text-center p-3">
                <img src="./img/dash2.png" alt="img" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
