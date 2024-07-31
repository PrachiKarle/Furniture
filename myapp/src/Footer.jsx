import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav=useNavigate();
  return (
    <>
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
        <div className="col-lg-2 col-md-3 p-2 col-6" style={{cursor:"pointer"}}>
          <p onClick={()=>{nav('/about')}}>About us </p>
          <p onClick={()=>{nav('/service')}}>Services </p>
          <p onClick={()=>{nav('/blog')}}>Blog</p>
          <p onClick={()=>{nav('/contact')}}>Contact us</p>
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
        <div className="col-12 p-2 d-lg-flex justify-content-lg-between" style={{ borderTop: "1px solid " }}>
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
