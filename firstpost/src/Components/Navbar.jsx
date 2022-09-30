import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Links = [
  { path: "/", title: "India" },
  { path: "/world", title: "World" },
  { path: "/politics", title: "Politics" },
  { path: "/auto", title: "Auto" },
  { path: "/sports", title: "Sports" },
  { path: "/entertainment", title: "Entertainment" },
  { path: "/tech", title: "Tech" },
  { path: "/crypto", title: "Business" },
  { path: "/netra", title: "Health" },
];

export default function Navbar() {
  let activeStyle = {
    textDecoration: "none",
    color: "red",
    // fontWeight:"bold",
    fontSize: "16px",
    textAlign: "center",
   
  };
  let style2 = {
    margin: "auto",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "14px",
    color: "grey",
  };
 
  return (
    <div
    
      style={{
        width: "100%",
        // border: "1px solid red",
        display: "flex",
        alignItems: "center",
        margin: "auto",
        justifyContent: "space-evenly",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        height: "25px",
        position:" sticky",
        top: "50px",
        zIndex:"2",
        backgroundColor:"rgb(254,255,254)"
        
      }}
    >
      <div
        style={{
          display: "flex",
          width: "65%",
          alignItems: "center",
          margin: "auto",
          justifyContent: "space-evenly",
        }}
      >
        {Links.map((el) => (
          <div
          className="xyz"
            style={{
              borderRight: "2px solid grey",
              margin: "auto",
              width: "10.5%",
            }}
            end
          >
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : style2)}
              to={el.path}
              key={el.path}
              end
            >
              {el.title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
