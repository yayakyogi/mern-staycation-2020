import React from "react";

import Button from "../elements/Button";

export default function MostPicked(props) {
  return (
    <section
      className="container"
      ref={props.refMostPicked}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h4 className="mb-3">Most Picked</h4>
      <div className="container-grid sm">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
            >
              <div
                className="card card-featured"
                data-aos="fade-up"
                data-aos-delay={200 * index}
              >
                <div className="tag">
                  $ {item.price}
                  <span className="font-weight-light">per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="streched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.title}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
