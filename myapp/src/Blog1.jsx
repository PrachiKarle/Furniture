import React from "react";

const Blog1 = () => {
  return (
    <>
      {/* Blog */}
      <div className="row m-0 cls p-5" style={{ height: "85vh" }}>
        
        {/* blog 1 */}
        <div className="col-md-4 col-12 m-md-0 m-auto p-3">
          <img src="images/post-1.jpg" height="90%" width="100%" alt="" />
          <h6 className="fw-bold my-2">First Time Home Owner Ideas</h6>
          <h6 className="fw-normal">
            by <b>Kristin Watson</b> on <b>Dec 19, 2021</b>
          </h6>
        </div>
        {/* blog 2 */}
        <div className="col-md-4 col-12 m-md-0 m-auto p-3">
          <img src="images/post-2.jpg" height="90%" width="100%" alt="" />
          <h6 className="fw-bold my-2">How To Keep Your Furniture Clean</h6>
          <h6 className="fw-normal">
            by <b>Robert Fox</b> on <b>Dec 15, 2021</b>
          </h6>
        </div>
        {/* blog 3 */}
        <div className="col-md-4 col-12 m-md-0 m-auto p-3">
          <img src="images/post-3.jpg" height="90%" width="100%" alt="" />
          <h6 className="fw-bold my-2">
            Small Space Furniture Apartment Ideas
          </h6>
          <h6 className="fw-normal">
            by <b>Kristin Watson</b> on <b>Dec 12, 2021</b>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Blog1;
