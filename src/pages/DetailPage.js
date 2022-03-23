import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeatureImage from "../parts/FeatureImage";
import PageDetailDescription from "../parts/PageDetailDescription";
import BookingForm from "../parts/BookingForm";
import Testimoni from "../parts/Testimoni";
import Footer from "../parts/Footer";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "../store/actions/page";
import Activities from "parts/Activities";

class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(
        `detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
    }
  }
  render() {
    const { page, match } = this.props;
    if (!page[match.params.id])
      return (
        <div
          style={{ height: "100vh" }}
          className="row justify-content-center align-items-center"
        >
          <div className="text-center">
            <div
              className="spinner-border text-primary mb-3"
              role="status"
            ></div>
            <h5>Sedang memuat data...</h5>
          </div>
        </div>
      );

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={page[match.params.id]}
        ></PageDetailTitle>
        <FeatureImage data={page[match.params.id].imageId}></FeatureImage>
        <section
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription
                data={page[match.params.id]}
              ></PageDetailDescription>
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[match.params.id]}
                startBooking={this.props.checkoutBooking}
              ></BookingForm>
            </div>
          </div>
        </section>
        <Activities data={page[match.params.id]} />
        <Testimoni data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage, checkoutBooking })(
  DetailsPage
);
