import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { HamSideData } from "./HamSideData";
import { IconContext } from "react-icons";
import { SocialIcon } from "react-social-icons";

function HamSide() {
  const [sidebarS, setsidebarS] = useState(false);

  const showsidebarS = () => setsidebarS(!sidebarS);
  return (
    <>
      <IconContext.Provider value={{ color: "fff" }}>
        <div
          className="navbarS"
          // style={{
          //   border: "1px solid white",
          //   padding: "2px",
          //   borderRadius: "2px",
          //   marginLeft: "-30px",
          // }}
        >
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars
              onClick={showsidebarS}
              style={{ color: "white", width: "20px", marginTop: "2px" }}
            />
          </Link>
        </div>
        <navS className={sidebarS ? " nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showsidebarS}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {HamSideData.map((el, ind) => {
              return (
                <li key={ind} className={el.cName}>
                  <Link to={el.path}>
                    {el.icon}
                    <span>{el.title}</span>
                  </Link>
                </li>
              );
            })}
            <div
              style={{
                height: "50px",
                padding: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
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
          </ul>
        </navS>
      </IconContext.Provider>
    </>
  );
}

export default HamSide;
