import React from "react";

function Loading() {
  return (
    <div style={{margin:"auto" ,marginTop:"200px" , display:"inline-block"}}>
      <img
        style={{ margin:"auto",marginRight: "-40px" ,opacity:"1" }}
        src="http://india.mom-gmr.org/uploads/tx_lfrogmom/media/16540-1592_import.png"
        alt=""
      />
      <img
        style={{ position: "absolute", zIndex: "2", opacity: 0.8, marginLeft:"-450px" }}
        src="https://miro.medium.com/max/978/0*JVdgKzSfU4q4psf6.gif"
        alt="loading"
      />
    </div>
  );
}

export default Loading;
