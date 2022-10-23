import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import one from "../assets/Rectangle 26.png";

const Home = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold uppercase">Cox's bazar</h1>
            <p className="py-6">
              Cox's Bazar is a city, fishing port, tourism centre and district
              headquarters in southeastern Bangladesh. It is famous mostly for
              its long natural sandy beach, and it ...
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
            <div>
              <h2>Center Mode</h2>
              <Slider {...settings}>
                <div>
                  <h3>
                    <img src={one} alt="" />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img src={one} alt="" />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img src={one} alt="" />
                  </h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
