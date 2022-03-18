import React, { Component } from "react";

import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import FeatureImage from "../parts/FeatureImage";
import PageDetailDescription from "../parts/PageDetailDescription";
import BookingForm from "../parts/BookingForm";
import Categories from "../parts/Categories";
import Testimoni from "../parts/Testimoni";
import Footer from "../parts/Footer";

import itemDetails from "../json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        ></PageDetailTitle>
        <FeatureImage data={itemDetails.imageUrls}></FeatureImage>
        <section
          className="container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={itemDetails}></PageDetailDescription>
            </div>
            <div className="col-5">
              <BookingForm itemDetails={itemDetails} startBooking={"href=`/checkout`"}></BookingForm>
              {console.log("itemDetail from pagedetails: ", itemDetails)}
            </div>
          </div>
        </section>
        <Categories data={itemDetails.categories} />
        <Testimoni data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
