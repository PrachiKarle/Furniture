import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container-fluid p-5 cls" style={{ height: "40vh" }}></div>

      <footer className="row m-0 p-5" style={{ height: "38vh" }}>
        <div className="col-lg-8 p-4 col-md-6 col-12 h-100">
          <h5 style={{ color: "#3B5D50" }}>
            <i className="bi bi-envelope me-3" style={{ color: "#C4C4C4" }}></i>
            Subscribe to Newsletter
          </h5>

          <form action="" className="d-flex">
            <input
              type="text"
              placeholder="Enter your name"
              className="form-control"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mx-2"
            />
            <button
              className="btn px-5 py-3"
              style={{ backgroundColor: "#3B5D50", color: "white" }}
            >
              <i className="bi bi-send"></i>
            </button>
          </form>
        </div>

        {/* sofa */}
        <div className="col-lg-4 col-md-6 col-12 h-100">
          <img
            src="images/sofa.png"
            height="380px"
            width="100%"
            style={{ position: "relative", top: "-200px" }}
            alt=""
          />
        </div>
      </footer>

      <footer className="row m-0 p-5">
        <div className="col-lg-4 col-md-6 p-3 col-12">
          <h3 className="fw-bold" style={{ color: "#3B5D50" }}>
            Furni.
          </h3>
          <p>
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique. Pellentesque habitant
          </p>
        </div>
        <div className="col-lg-2 col-md-3 p-2 col-6">
          <p>About us </p>
          <p>Services </p>
          <p>Blog</p>
          <p>Contact us</p>
        </div>
        <div className="col-lg-2 col-md-3 p-2 col-6">
          <p>Support</p>
          <p>Knowledge base </p>
          <p>Live chat</p>
        </div>
        <div className="col-lg-2 col-md-3 p-2 col-6">
          <p>Jobs </p>
          <p>Our team </p>
          <p>Leadership</p>
          <p>Privacy Policy</p>
        </div>
        <div className="col-lg-2 col-md-3 p-2 col-6">
          <p>Nordic Chair</p>
          <p>Kruzo Aero </p>
          <p>Ergonomic Chair</p>
        </div>
      </footer>

      <div className="row m-0 p-5">
        <div className="col-12 p-2 d-flex justify-content-between" style={{ borderTop: "1px solid " }}>
          <p>Copyright ©2024. All Rights Reserved.</p>
          <p className="d-flex">
            <p>Terms & Conditions</p>
            <p className="mx-4">Privacy Policy</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
