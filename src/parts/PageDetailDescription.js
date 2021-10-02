import React from "react";

export default function PageDetailDescription({ data }) {
  return (
    <main data-aos="fade-up" data-aos-delay="500">
      <h4>About the place</h4>
      <p>{data.description}</p>
      <div
        className="row"
        style={{ marginTop: 30 }}
        data-aos="fade-up"
        data-aos-delay="800"
      >
        {data.features.length === 0
          ? "Tidak ada feature"
          : data.features.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2"
                    src={`${feature.imageUrl}`}
                    alt={feature.name}
                  />
                  <span>{feature.qty} </span>
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
