import React from "react";
import Button from "../ChildComponents/Button";
import HeroBg from "../img/herobg.png";

function Hero() {
  return (
    <div className="background">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-6 hero-title text-white">
            <p>Smarter</p>
            <p>Transportation </p>
            <p>Optimize Routes, Track Loads, Automate Billing</p>
            <div className="d-flex">
              <Button classname="me-3" url="/" title="Request Demo" />
              <Button classname="ms-3 bg-dark" url="/" title="Enquire Now" />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-xl-6 hero-img">
            <img className="img-fluid mt-5" src={HeroBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
