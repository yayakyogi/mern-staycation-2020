import React from "react";
import parse from "html-react-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main className="px-2">
      <h4>About the place</h4>
      {parse(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.featureId.length === 0 ? (
          <div className="pl-3">Tidak ada feature</div>
        ) : (
          data.featureId.map((feature, index) => {
            return (
              <div
                key={`feature-${index}`}
                className="col-4 col-md-3"
                style={{ marginBottom: 20 }}
              >
                <img
                  width="38"
                  className="d-block mb-2"
                  src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                  alt={feature.name}
                />
                <span>{feature.qty} </span>
                <span className="text-gray-500 font-weight-light">
                  {feature.name}
                </span>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
}
