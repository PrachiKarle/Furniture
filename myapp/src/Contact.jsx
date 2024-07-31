import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Heading from "./Heading";

const Contact = () => {
  const nav=useNavigate();
  const [firstName, setName] = useState("");
  const [lastName, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const save = (e) => {
    e.preventDefault();
    const data = {
      fName: firstName,
      lName: lastName,
      mail: email,
      message: msg,
    };
    console.log(data);
    alert("Message send Successfully");
    setName("");
    setName2("");
    setEmail("");
    setMsg("");
    nav('/');
  };
  return (
    <>
      <Heading data={"Contact Us"} />

      <div className="row m-0 p-5">
        <div className="col-lg-8  col-12 m-auto">
          <div className="row m-0 p-0">
            <div className="col-md-4 col-12 d-md-flex d-block">
              <button
                className="btn px-3 mx-2"
                style={{ backgroundColor: "#3B5D50", height: "40px" }}
              >
                <i className="bi bi-geo-alt-fill text-light"></i>
              </button>
              <p>43 Raymouth Rd. Baltemoer, London</p>
            </div>
            <div className="col-md-4 col-12 d-md-flex d-block">
              <button
                className="btn px-3 mx-2"
                style={{ backgroundColor: "#3B5D50", height: "40px" }}
              >
                <i className="bi bi-envelope text-light"></i>
              </button>
              <p>info@yourdomain.com</p>
            </div>
            <div className="col-md-4 col-12 d-md-flex d-block">
              <button
                className="btn px-3 mx-2"
                style={{ backgroundColor: "#3B5D50", height: "40px" }}
              >
                <i className="bi bi-telephone text-light"></i>
              </button>
              <p>+1 294 3925 3939</p>
            </div>
          </div>
        </div>

        <div className="col-md-8 col-11 m-auto mt-5">
          <form action="" onSubmit={(e) => save(e)} className="w-100 h-100">
            {/* Name */}
            <div className="form-group my-3 row">
              <div className="col">
                <label htmlFor="" className="">
                  First Name:
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={firstName}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="" className="">
                  Last Name:
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={lastName}
                  onChange={(e) => {
                    setName2(e.target.value);
                  }}
                  className="form-control"
                  required
                />
              </div>
            </div>
            {/* email */}
            <div className="form-group my-3">
              <label htmlFor="" className="">
                Email:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder=""
                className="form-control"
                required
              />
            </div>
            {/* message */}
            <div className="form-group my-3">
              <label htmlFor="" className="">
                Message
              </label>
              <textarea
                name=""
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                className="form-control"
                id=""
                required
              ></textarea>
            </div>
            {/* send btn */}
            <div className="form-group my-3">
              <button type="submit" className="btn btn-dark px-4 py-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
