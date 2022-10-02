import React from "react";
import { SocialIcon } from "react-social-icons";
import HamSide from "./HamSide";

function Nav() {
  return (
    <>
    
    <div className="navbar1">
    <HamSide />
      <div className="navbar11">
      
        <img
          src="https://www.firstpost.com/static/images/fp-desk-logo.png"
          alt="Logo"
        />
      </div>
      <div className="navbar12">
        <SocialIcon
          style={{ height: "30px", width: "30px", marginLeft: "5px" }}
          url="https://twitter.com/firstpost"
        />
        <SocialIcon
          style={{ height: "30px", width: "30px", marginLeft: "8px" }}
          url="https://youtube.com/firstpost"
        />
        <SocialIcon
          style={{ height: "30px", width: "30px", marginLeft: "8px" }}
          url="https://facebook.com/firstpost"
        />
        <SocialIcon
          style={{ height: "30px", width: "30px", marginLeft: "8px" }}
          url="https://instagram.com/firstpost"
        />
      </div>
    </div>
    </>
  );
}

export default Nav;
