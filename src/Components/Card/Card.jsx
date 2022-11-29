import React from "react";

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-center">
          <img src={data.image} alt="speed png" height={45} className="logo" />
        </div>
        <h5 className="card-text text-center">{data.title}</h5>
        <p className="card-text text-center">{data.description}</p>
      </div>
    </div>
  );
}
