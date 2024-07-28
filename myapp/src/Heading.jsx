import React from "react";
import { useNavigate } from "react-router-dom";

const Heading = (props) => {
  const nav=useNavigate();
  const change1=()=>{
    nav('/shop');
  }
  return (
    <>
      {/* Home */}
      <div className="row m-0 p-5 pt-3" style={{ backgroundColor: "#3B5D50" }}>
        <div className="col-lg-5 col-md-8  col-12 m-lg-0 m-auto px-3 py-5">
          <h1
            className="text-light display-5 my-3"
            style={{  fontWeight: "700" }}
          >
            {props.data}
          </h1>

          <p style={{ color: "#9DAEA8" }}>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <button className="btn btn-warning px-4 py-2" onClick={()=>{change1()}}>Shop Now</button>
          
        </div>

        <div className="col-lg-7 col-12">
          <img src="images/couch.png" height="100%" width="100%" alt="" />
        </div>
      </div>
    </>
  );
};

export default Heading;
