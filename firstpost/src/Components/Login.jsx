import React, { useState } from "react";

function Login() {
  const [text, seText] = useState("");
  return (
    <div
      className="login"
      style={{
        border: "1px solid grey",
        width: "25%",
        marginLeft: "1100px",
        // height: "200px",
        marginTop: "-6970px",
      }}
    >
      <h4>Subscribe to our foreign policy newsletter</h4>
      <p>
        Sign up for a weekly curated briefing of the most important strategic
        affairs stories from across the world.
      </p>
      <div>
        <label className="required">Email Address</label>
      </div>
      <input type="text" />
      <button onClick={() => seText(" Thank you for subscribing! ")}>
        Subscribe
      </button>
      <p>{text}</p>
    </div>
  );
}

export default Login;
