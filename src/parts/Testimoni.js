import React from "react";
import Star from "../elements/Star";
import Button from "../elements/Button";

import TestimoniAccent from "../assets/images/img-frame-testimonial.png";

export default function Testimoni({ data }) {
  return (
    <section className="container" data-aos="fade-up" data-aos-duration="500">
      <div className="row align-items-center">
        <div className="col-12 col-md-5" style={{ marginRight: 10 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 2 }}
            />
            <img
              src={TestimoniAccent}
              alt="Testimonial frame"
              className="position-absolute"
              style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4}></Star>
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName},{data.familyOccupation}
          </span>
          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data.id}`}
            >
              Read their story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
