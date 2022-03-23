import React from "react";

import ImageHero from "../assets/images/img-hero.png";
import ImageHero_ from "../assets/images/img-frame-home.png";

import Button from "../elements/Button";
import formatNumber from "../utils/formatNumber";

export default function Hero(props) {
  // buat function untuk mengarahkan agar tombol ketika selesai di klik mengarah ke bagian yg dituju
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30, // perintah agar content memiliki jarak 30 pixel dari atas
      behavior: "smooth", // perintah agar scroll menjadi smooth
    });
  }
  return (
    <section
      className="container pt-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="row align-items-center">
        {/* colum left */}
        <div
          className="col-12 col-lg-6 pr-3"
          style={{ width: 530, height: 500 }}
        >
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work <br />
            Start Next Vaction
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-md-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: 80 }}>
            {/* column travelers */}
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                src="/images/ic_traveler.svg"
                width="32"
                height="32"
                alt={props.data.travelers}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  travelers
                </span>{" "}
              </h6>
            </div>
            {/* column treasures */}
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img
                src="/images/ic_treasure.svg"
                width="32"
                height="32"
                alt={props.data.treasures}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  treasures
                </span>{" "}
              </h6>
            </div>
            {/* column cities */}
            <div className="col-auto">
              <img
                src="/images/ic_cities.svg"
                width="32"
                height="32"
                alt={props.data.cities}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">cities</span>{" "}
              </h6>
            </div>
          </div>
        </div>

        <div
          style={{ height: 100, width: "100%" }}
          className="d-block d-sm-none"
        ></div>
        {/* column right */}
        <div className="d-none d-lg-block col-6 pl-5">
          <div style={{ width: 520, height: 450 }}>
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHero_}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
