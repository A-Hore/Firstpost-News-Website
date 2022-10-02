import React, { useState } from "react";

function Login() {
  const [text, seText] = useState("");
  return (
    <div
      className="login"
      style={{
        border: "1px solid grey",
        width: "25%",
        height:'auto',
        marginLeft: "1100px",
        // height: "200px",
        // marginTop: "-6840px",
        marginTop: "-6700px",
      }}
    >
      <h4 style={{marginTop:"20px"}}>Subscribe to our foreign policy newsletter</h4>
      <p style={{marginTop:"10px" ,marginBottom:"15px"}}>
        Sign up for a weekly curated briefing of the most important strategic
        affairs stories from across the world.
      </p>
      <div>
        <label className="required">Email Address</label>
      </div>
      <input type="text" />
      <button style={{marginBottom:"20px"}} onClick={() => seText(" Thank you for subscribing! ")}>
        Subscribe
      </button>
      <p>{text}</p>
    </div>
  );
}

export default Login;
