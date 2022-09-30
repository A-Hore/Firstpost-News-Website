import axios from "axios";
import React, { useEffect, useState } from "react";
import apikey from "./api";
import { Link } from "react-router-dom";

function getDataSide() {
  return axios.get(
    `https://newsdata.io/api/1/news?apikey=${apikey}&category=top&language=en`
  );
}

function SideBar() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getDataSide().then((res) => setDatas(res.data.results));
  }, []);

  return (
    <div
      className="sidebar"
      style={{
        /*border: "1px solid red",*/ width: "25%",
        marginLeft: "1100px",
        marginTop: "60px",
      }}
    >
      <h4> MOST READ</h4>
      <div></div>
      {datas.map((el) => (
        <div style={{ border: "1px solid grey" }}>
          <h4
            style={{
              fontSize: "26px",
              textAlign: "initial",
              paddingLeft: "10px",
            }}
          >
            {el.title}
          </h4>{" "}
          <p
            style={{
              textAlign: "initial",
              paddingLeft: "10px",
              marginTop: "-20px",
            }}
          >
            {el.description}
          </p>
          <Link to={el.link}><button>READ MORE</button></Link>
        </div>
      ))}
      
    </div>
  );
}

export default SideBar;
