import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimoni from "../parts/Testimoni";
import Footer from "../parts/Footer";

import { fetchPage } from "../store/actions/page";

class LandingPage extends Component {
  // constructor adalah component yg berjalan paling pertama jika di class component
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef(); // buat ref baru dari React.createRef()
  }
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
        "landingPage"
      );
  }
  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("landingPage"))
      return (
        <div
          style={{ height: "100vh" }}
          className="row justify-content-center align-items-center"
        >
          <div className="text-center">
            <div class="spinner-border text-primary mb-3" role="status"></div>
            <h5>Sedang memuat data...</h5>
          </div>
        </div>
      );
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.category} />
        <Testimoni data={page.landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
