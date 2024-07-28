import React from "react";
import { useNavigate } from "react-router-dom";

const Service1 = () => {
  const nav=useNavigate();
  const change1=()=>{
    nav('/shop');
  }
  return (
    <>
      <div className="row m-0 p-5 cls" id="id1">
        {/* description */}
        <div className="col-lg-3 col-md-6 col-10 m-lg-0 m-auto p-3">
          <h1 className="" style={{ fontWeight: "700" }}>
            Crafted with excellent material.
          </h1>
          <p>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button className="btn btn-dark px-4 py-2" onClick={()=>{change1()}}>Explore</button>
        </div>

        {/* image 1 */}
        <div className="col-lg-3 col-md-6 col-10 p-3 m-lg-0 m-auto text-center">
          <img src="images/product-1.png" height="90%" width="100%" alt="" />
          <h6 className="mt-2">Nordic Chair</h6>
          <h6 className="fw-bold">$50.00</h6>
        </div>

        {/* image 2 */}
        <div className="col-lg-3 col-md-6 col-10 p-3 m-lg-0 m-auto text-center">
          <img src="images/product-2.png" height="90%" width="100%" alt="" />
          <h6 className="mt-2">Kruzo Aero Chair</h6>
          <h6 className="fw-bold">$78.00</h6>
        </div>

        {/* image 3 */}
        <div className="col-lg-3 col-md-6 col-10 p-3 m-lg-0 m-auto text-center">
          <img src="images/product-3.png" height="90%" width="100%" alt="" />
          <h6 className="mt-2">Ergonomic Chair</h6>
          <h6 className="fw-bold">$43.00</h6>
        </div>
      </div>
    </>
  );
};

export default Service1;
