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
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import ItemDetails from "json/itemDetails";
import { fetchPage } from "../store/actions/page";

class Checkout extends Component {
  state = {
    data: {
      // state untuk booking information
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      // state untuk payment
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
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
    if (!this.props.page.detailPage) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.checkout._id}`,
        "detailPage"
      );
    }
  }

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
            itemDetails={page.detailPage}
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
            itemDetails={page.detailPage}
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
                    data.bankHolder !== "" && (
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

export default connect(mapStateToProps, { fetchPage })(Checkout);
