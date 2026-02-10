import React from "react";

const LoadingForecast = () => {
  return (
    <div className="info__data">
      <div className="quality__more--module--1">
        <div className="forecast__dates">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div className="forecast__date-1--loading shimmer-orange" key={i}></div>
          ))}
        </div>
      </div>
      <div className="quality__more--module--2">
        <div className="quality__more--module-top fdc">
            <div className="fdn">

            <div className="quality__more--module-1--loading shimmer-orange"></div>
            <div className="quality__more--module-1--loading shimmer-orange"></div>
            <div className="quality__more--module-1--loading shimmer-orange"></div>
            <div className="quality__more--module-1--loading shimmer-orange"></div>
            </div>
          <div className="quality__more--module-bottom">
            <div className="quality__more--module-2--loading shimmer-orange">
              <div className="forecast__hourly--container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingForecast;
