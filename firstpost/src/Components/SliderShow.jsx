import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const SliderShow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="leftarrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide} />
      {SliderData.map((el, ind) => {
        return (
          <div className={ind === current ? "slide active" : "slide"} key={ind}>
            {ind === current && (
              <img src={el.img} alt="slide" className="slim" />
            )}
            {ind === current && <h2 className="slda">{el.data}</h2>}
          </div>
        );
      })}
    </section>
  );
};

export default SliderShow;
