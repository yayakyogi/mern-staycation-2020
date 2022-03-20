import React from "react";

import { InputText } from "../../elements/Form";

export default function BookingInformation(props) {
  const { data, itemDetails, checkout } = props;
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div
          className="col-5 border-right py-5"
          style={{ paddingRight: 80 }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="card">
            <figure className="img-wrapper" style={{ height: 270 }}>
              <img
                className="img-cover"
                src={`${process.env.REACT_APP_HOST}/${itemDetails.imageId[0].imageUrl}`}
                alt={itemDetails.title}
              />
            </figure>
            <div className="row align-items-center">
              <div className="col">
                <div className="meta-wrapper">
                  <h5>{itemDetails.title}</h5>
                  <span className="text-gray-500">
                    {itemDetails.city}, {itemDetails.country}
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <span>
                  {"$" + checkout.duration * itemDetails.price} USD
                  <span className="text-gray-400"> per </span>
                  {checkout.duration} {itemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-5 py-5"
          style={{ paddingLeft: 80 }}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={props.onChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={props.onChange}
          />

          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={props.onChange}
          />

          <label htmlFor="phone">Phone Number</label>
          <InputText
            id="phone"
            name="phone"
            type="phone"
            value={data.phone}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
}
