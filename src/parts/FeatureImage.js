import React from "react";

export default function FeatureImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`featuredImage-${index}`}
              className={`item ${index > 0 ? "column-5" : "column-7"} ${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <div
                className="card h-100"
                data-aos="fade-up"
                data-aos-delay={300 * index}
              >
                <figure className="img-wrapper">
                  <img
                    className="img-cover"
                    src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                    alt={item._id}
                  />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
