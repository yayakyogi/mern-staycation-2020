import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, {
  Meta,
  MainContent,
  Numbering,
  Controller,
} from "elements/Stepper";
import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payments";
import Completed from "parts/Checkout/Completed";

import ItemDetails from "json/itemDetails";
import axios from "configs/axios";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
    isSubmitBooking: false,
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  convertDateToString = (date) => {
    const dates = new Date(date);
    const getDate = ("0" + dates.getDate()).slice(-2);
    const getMonth = ("0" + (dates.getMonth() + 1)).slice(-2);
    const getYear = dates.getFullYear();
    const value = `${getYear}-${getMonth}-${getDate}`;
    return value;
  };

  _onSubmit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    this.setState({ isSubmitBooking: true });

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("itemId", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append(
      "bookingDateStart",
      this.convertDateToString(checkout.date.startDate)
    );
    payload.append(
      "bookingDateEnd",
      this.convertDateToString(checkout.date.endDate)
    );
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);

    if (payload) {
      axios
        .post("/booking-page", payload, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(() => {
          this.setState({ isSubmitBooking: false });
          nextStep();
        });
    }
  };

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    if (!checkout) {
      return (
        <div
          className="row justify-content-center align-items-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="col-2">
            <p style={{ fontSize: 20, marginBottom: 30 }}>Pilih kamar dulu</p>
            <Button
              className="btn"
              type="link"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              isLight
              href="/"
            >
              Back
            </Button>
          </div>
        </div>
      );
    }

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            itemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the inctructions below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            itemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: "",
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                styles={{ marginBottom: 50 }}
              />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              <br />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" &&
                    this.state.isSubmitBooking === false && (
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={() => this._onSubmit(nextStep)}
                      >
                        Continue to Book
                      </Button>
                    )}
                  {this.state.isSubmitBooking && (
                    <Button
                      className="btn mb-3"
                      type="button"
                      isBlock
                      isLoading
                      isPrimary
                      isDisabled
                    />
                  )}
                  {!this.state.isSubmitBooking && (
                    <Button
                      className="btn"
                      type="button"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      isBlock
                      isLight
                      onClick={prevStep}
                    >
                      Cancel
                    </Button>
                  )}
                </Controller>
              )}
              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn mb-3"
                    type="link"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps)(Checkout);
