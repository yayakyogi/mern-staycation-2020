import React from "react";

import Breadcrumb from "../elements/Breadcrumb";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section
      className="container spacing-sm"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="row align-items-center">
        <div className="col-12 col-md-5">
          <Breadcrumb data={breadcrumb} />
        </div>
        <div className="col-12 col-md-auto text-center page-title">
          <h1 className="h2">{data.title}</h1>
          <span className="text-gray-400">
            {data.city}, {data.country}
          </span>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
}
