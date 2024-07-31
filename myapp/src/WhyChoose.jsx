import React from "react";

const WhyChoose = () => {
  return (
    <>
      {/* why choose us */}
      <div className="row m-0 py-5 cls px-2" id="id2">
        <div className="col-lg-6 col-md-10 col-12 p-5 m-lg-0 m-auto">
          <h1>Why Choose Us</h1>
          <p style={{ color: "#767977" }}>
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <div className="row m-0 p-0 py-3">
            <div className="col-md-6 col-12">
              <img src="images/truck.svg" height="20%" width="40%" alt="" />
              <br />
              <b>Fast & Free Shipping</b>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img src="images/bag.svg" height="20%" width="40%" alt="" />
              <br />
              <b>Easy to Shop</b>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
          <div className="row m-0 p-0">
            <div className="col-md-6 col-12">
              <img src="images/support.svg" height="20%" width="40%" alt="" />
              <br />
              <b>24/7 Support</b>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img src="images/return.svg" height="20%" width="40%" alt="" />
              <br />
              <b>Hassle Free Returns</b>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate.
              </p>
            </div>
          </div>
        </div>
        {/* img */}
        <div className="col-lg-6 col-md-10 col-12 m-lg-0 m-auto p-5">
          <img src="images/10001.jpg" height="100%" width="100%" alt="" />
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
