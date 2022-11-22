import React from "react";

export default function Card({ data }) {
  return (
    <div className="row">
      {data?.map((data) => {
        return (
          <div className="col-md-6 px-2 py-2">
            <div key={data.id} className="card">
              <div className="card-body">
                <img
                  src={data.image}
                  alt="speed png"
                  height={45}
                  className="logo"
                />
                <h2 className="card-text py-2">{data.title}</h2>
                <p className="card-text ">{data.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
