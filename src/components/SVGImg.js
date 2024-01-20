import React from "react";
import "../sass/SVG.scss";

function SVGImg({ data }) {
  return (
    <div className="svg">
      <div className="svg__text hidden">{data.name}</div>
      <img className="svg__img" src={data.link} alt={data.name} />
    </div>
  );
}

export default SVGImg;
