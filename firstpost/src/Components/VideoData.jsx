import ReactPlayer from "react-player";

import React from "react";

function VideoData() {
  return (
    <div style={{marginTop:"10px"}}>
        <ReactPlayer
      width="100%"
      height="200px"
      
      controls
      url="https://youtu.be/9VqjcpCbbk8"
    />
    
    </div>
  );
}

export default VideoData;
