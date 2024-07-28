import React from "react";

const Shop1 = () => {
  return (
    <>
      <div className="row m-0 p-5 cls" id="id1">
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
        {/* image 4 */}
        <div className="col-lg-3 col-md-6 col-10 p-3 m-lg-0 m-auto text-center">
          <img src="images/product-1.png" height="90%" width="100%" alt="" />
          <h6 className="mt-2">Nordic Chair</h6>
          <h6 className="fw-bold">$50.00</h6>
        </div>
      </div>
    </>
  );
};

export default Shop1;
