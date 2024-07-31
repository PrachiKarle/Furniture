import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import WhyChoose from "./WhyChoose";
import Blog1 from "./Blog1";
import Service1 from "./Service1";

const Home = () => {
  const nav = useNavigate();
  const change1 = () => {
    nav("/shop");
  };
  return (
    <>
      <Heading data={" Modern Interior Design Studio"} />

      <Service1 />

      <WhyChoose />

      {/* we help you */}
      <div className="row m-0 cls p-5 pb-0">
        {/* help furni img */}
        <div className="col-lg-6 col-md-10 col-12 m-lg-0 pb-0 m-auto h-100">
          <img
            src="images/10003.jpg"
            width="60%"
            alt=""
            style={{ borderRadius: "25px" }}
          />
          <img
            src="images/10004.jpg"
            width="60%"
            alt=""
            style={{
              position: "relative",
              top: "-200px",
              left: "200px",
              borderRadius: "25px",
            }}
          />
        </div>

        {/* help */}
        <div className="col-lg-6 col-md-10 col-12 m-lg-0 pb-0 m-auto h-100">
          <h1 className="display-4 fw-bold my-4">
            We Help You Make Modern Interior Design
          </h1>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant morbi
            tristique senectus et netus et malesuada
          </p>
          <div className="d-flex justify-content-between my-2">
            <ul>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
            <ul>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
          </div>
          <button
            className="btn btn-dark px-4 py-2"
            onClick={() => {
              change1();
            }}
          >
            Explore
          </button>
        </div>
      </div>

      <div className="row m-0 cls py-3 px-5">
        <div className="col-md-4 col-12 h-100 d-md-flex d-block">
          <img src="images/product-1.png" height="60px" alt="" />
          <div>
            <b>Nordic Chair</b> <br />
            <b className="fw-normal" style={{ color: "#999B9A" }}>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </b>{" "}
          </div>
        </div>

        <div className="col-md-4 col-12 h-100 d-md-flex d-block">
          <img src="images/product-2.png" height="60px" alt="" />
          <div>
            <b>Kruzo Aero Chair</b> <br />
            <b className="fw-normal" style={{ color: "#999B9A" }}>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </b>{" "}
          </div>
        </div>

        <div className="col-md-4 col-12 h-100 d-md-flex d-block">
          <img src="images/product-3.png" height="60px" alt="" />
          <div>
            <b>Ergonomic Chair</b> <br />
            <b className="fw-normal" style={{ color: "#999B9A" }}>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            </b>{" "}
          </div>
        </div>
      </div>

      <div className="row m-0 p-5 pb-0 cls">
        <h1>Recent Blogs</h1>
      </div>

      <Blog1 />
    </>
  );
};

export default Home;
