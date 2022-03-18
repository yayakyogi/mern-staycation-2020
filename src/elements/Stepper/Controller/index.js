import React from "react";

export default function Controller(props) {
  return (
    <section className="container" data-aos="fade-up" data-aos-duration="500">
      <div className="row justify-content-center">
        <div className="col-3">{props.children}</div>
      </div>
    </section>
  );
}
