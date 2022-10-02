import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import apikey from "../Components/api";
import SliderShow from "../Components/SliderShow";
import { SliderData } from "../Components/SliderData";

function getData(page) {
  return axios.get(
    `https://newsdata.io/api/1/news?apikey=${apikey}&language=en,hi&country=in&category=business&page=${page}`
  );
}

const Business = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(page)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [page]);

  return loading === true ? (
    <Loading />
  ) : (
    <div className="country">
      <SliderShow slides={SliderData} />
      <h1>BUSINESS NEWS</h1>
      <div></div>

      {data.map((el) => (
        <div
          style={{
            /*border: "1px solid red ",*/ marginTop: "20px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <img
            style={{ height: "400px", width: "100%", zIndex: "-1" }}
            src={
              !el.image_url
                ? "http://india.mom-gmr.org/uploads/tx_lfrogmom/media/16540-1592_import.png"
                : el.image_url
            }
            alt="News"
          />
          <div
            style={{
              //   border: "1px solid green",
              width: "90%",
              margin: "auto",
              marginTop: "-20px",
              //   zIndex: "20",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <u
              style={{
                textDecorationColor: "red",
                textDecorationThickness: "4px",
              }}
            >
              <p
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  color: "grey",
                  marginLeft: "-490px",
                }}
              >
                {el.country}
              </p>
            </u>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                textAlign: "justify",
                padding: "0px 10px 0px 10px",
              }}
            >
              {el.title}
            </p>
            <p
              style={{
                textAlign: "justify",
                padding: "0px 20px 0px 20px",
                paddingBottom: "20px",
              }}
            >
              {!el.description
                ? "afrkrjqerf erfoj3f34 34roi34rfnefq34o4fi34r"
                : el.description.slice(1, 158)}
              ...
            </p>
            <a href={el.link}> <button className="newsbtn"> READ MORE</button></a>
          </div>
        </div>
      ))}
      <div className="buttondata">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button>{page}</button>
        <button onClick={() => setPage(page + 1)}>{page + 1}</button>
        <button onClick={() => setPage(page + 2)}>{page + 2}</button>
        <button disabled={page === 4} onClick={() => setPage(page + 1)}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Business;
