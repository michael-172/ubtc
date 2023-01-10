import React from "react";
import { Link } from "react-router-dom";
import AnimatedBtnStyle from "../../Style/AnimatedBtnStyle.module.css";
const AnimatedButton = ({ title, link, fullWidth }) => {
  return (
    <>
      <Link to={link}>
        <button
          className={`${AnimatedBtnStyle.btn_header} ${
            fullWidth ? "w-100" : ""
          } btn w-50 py-3`}
        >
          <span>
            {title} <i className="fa-solid fa-arrow-right ms-3 "></i>
          </span>
        </button>
      </Link>
    </>
  );
};

export default AnimatedButton;
