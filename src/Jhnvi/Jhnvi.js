import React from "react";
import "./Jhnvi.css";
import { Helmet } from "react-helmet";
import Background from "../Jhnvi/clouds.jpg";
import amn_jhnvi from "./amn_jhnvi.jpg";

const Jhnvi = () => {
  return (
    <div
      className="page"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
          </div>
  );
};

export default Jhnvi;
