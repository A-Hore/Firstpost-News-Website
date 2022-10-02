import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleNewsPage = () => {
  const { user_id, title } = useParams();
  // console.log(params);
  const [details, setDetails] = useState({});
  return (
   <>
    <div style={{ margin: "auto", padding: "2px", marginTop: "40px",paddingTop:"10px" }}>
      <h4 style={{marginBottom:"20px"}}>PAGE NOT FOUND</h4>
      <img
        src="https://images.firstpost.com/wp-content/uploads/nodefp/404.jpg"
        alt=""
      />
      
    </div>
    <Link to="/">
    <button
      style={{
        margin: "auto",
        marginTop: "40px",
        border: "1px solid red",
        padding:"10px 10px",
        color:"black",
        backgroundColor:"yellow",
        border:"0px",
        fontWeight:"bold",
        borderRadius:"10px"
    
      }}
    >
      GO HOME
    </button>
  </Link></>

  );
};

export default SingleNewsPage;
