import React from "react";

import ImageCompleted from "assets/images/img-completed.png";

export default function Completed() {
  return (
    <div
      className="container mx-auto"
      style={{ marginBottom: 30 }}
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="row justify-content-center text-center">
        <div className="col-md-4 col-10">
          <img src={ImageCompleted} className="img-fluid" alt="img-completed" />
          <p className="text-gray-500">
            We will inform you via email later once the transaction has ben
            accepted
          </p>
        </div>
      </div>
    </div>
  );
}
