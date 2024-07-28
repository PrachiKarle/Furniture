import React from "react";
import Heading from "./Heading";
import WhyChoose from "./WhyChoose";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <>
      <Heading data={"About Us"} />

      <WhyChoose />

      <div className="row cls m-0 p-5">
        <div className="col-12 text-center">
          <h1 className="fw-bold">Our Team</h1>
        </div>

        <div className="col-12 m-0 p-0 ">
          <div className="row m-0 p-0">
            <div className="col-lg-3 p-3">
              <img src="images/person_1.jpg" height="50%" width="100%" alt="" />
              <div className="my-4" height="50%" width="100%">
                <h2>Lawson Arnold</h2>
                <p>CEO, Atty.</p>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                
              </div>
            </div>
            <div className="col-lg-3 p-3">
              <img src="images/person_2.jpg" height="50%" width="100%" alt="" />
              <div className="my-4" height="50%" width="100%">
                <h2>Jeremy Walker</h2>
                <p>Founder, Atty.</p>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                
              </div>
            </div>
            <div className="col-lg-3 p-3">
              <img src="images/person_3.jpg" height="50%" width="100%" alt="" />
              <div className="my-4" height="50%" width="100%">
                <h2>Patrik White</h2>
                <p>Manager, Atty.</p>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                
              </div>
            </div>
            <div className="col-lg-3 p-3">
              <img src="images/person_4.jpg" height="50%" width="100%" alt="" />
              <div className="my-4" height="50%" width="100%">
                <h2>Kathryn Ryan</h2>
                <p>Team Member, Atty.</p>
                <p>
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
