import React from "react";

import logoImage from "../img/logo.png";
import Nav from "../ChildComponents/Nav";
import Button from "../ChildComponents/Button";
function Header() {
  return (
    <div className="header">
      <div className="container pt-3">
        <div className="row">
          <div className="col ">
            <img src={logoImage} className="img-fluid" alt="" />
          </div>
          <div className="col d-flex justify-content-between">
            <Nav />
            <div className="mt-3">
              <Button url="/" title="Enqure Now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
