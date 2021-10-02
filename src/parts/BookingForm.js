import React, { Component } from "react";

import propTypes from "prop-types";

import Button from "../elements/Button";
import { InputNumber, InputDate } from "../elements/Form";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  render() {
    return <div></div>;
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};
