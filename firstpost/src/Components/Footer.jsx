import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div
      style={{
        borderTop: "6px solid rgb(89,89,88)",
        marginTop:"3100px"
      }}
    >
      <div
        style={{
          display: "flex",
          width: "70%",
          justifyContent: "space-between",
          alignItems: "center",
            // border: "1px solid green",
          margin: "auto",
        }}
      >
        <div
          style={
            {
              // border:"1px solid green"
            }
          }
        >
          <img
            src="https://www.firstpost.com/static/images/fp-desk-logo.png"
            alt="Logo"
            style={{ backgroundColor: "black", marginTop: "2px" }}
          />
        </div>
        <div>
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
      <div
        className="footerdata"
        style={{
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
          width: "70%",
          margin: "auto",
          display: "flex",
          textAlign: "justify",
          marginBottom:"20px"
        }}
      >
        <div>
          <h4>Firstpost</h4>
          <p>About Firstpost</p>
          <p>Press Release</p>
          <p>RSS</p>
          <p>Twitter</p>
          <p>Facebook</p>
        </div>
        <div>
          <h4>Section</h4>
          <p>Front Page</p>
          <p>Politics</p>
          <p>Sports</p>
          <p>India</p>
          <p>World</p>
          <p>Business</p>
          <p>Entertainment News</p>
          <p>Cricket</p>
          <p>Tech</p>
          <p>Health</p>
          <p>Photos</p>
          <p>Videos</p>
          <p>Press Release</p>
          <p>Firstculture</p>
          <p>Long Reads</p>
          <p>Latest Mobiles</p>
          <p>Latest Tablets</p>
          <p>Latest Laptops</p>
        </div>
        <div>
          <h4>Plus</h4>
          <p>Cricket Live Score</p>
          <p>New Delhi</p>
          <p>Mumbai</p>
          <p>Fp Exclusives</p>
          <p>Board Exam Results 2022</p>
          <p>Coronavirus</p>
        </div>
        <div>
          <h4>Tools</h4>
          <p>Rss Feeds</p>
          <p>Apps</p>
          <p>Ios</p>
          <p>Android</p>
        </div>
      </div>
      <h4 style={{ fontSize: "15px" ,marginBottom:"20px" }}>
        Copyright © 2022. Firstpost - All Rights Reserved.
      </h4>
      <p style={{ fontSize: "12px", marginTop: "-10px" }}>
        Terms of use | Privacy | Cookie Policy
      </p>
    </div>
  );
}

export default Footer;
