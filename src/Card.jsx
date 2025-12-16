import React from "react";

function Card({ title, text, img }) {
  return (
    <div className="card-box">
      <img
        src={process.env.PUBLIC_URL + "/" + img}
        alt="Card"
        className="card-img"
      />
      <h2>{title}</h2>
      <p>{text}</p>
      <button className="button">View</button>
    </div>
  );
}

export default Card;

