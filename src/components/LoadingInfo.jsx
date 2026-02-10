import React from "react";

const LoadingInfo = () => {
  return (
    <div className="info__data">
      <div className="info__current--loading shimmer-blue"></div>
      <div className="info__air-quality--loading shimmer-blue"></div>
      <div className="info__alerts--loading shimmer-red"></div>
      <div className="info__forecast--loading shimmer-orange"></div>
      <div className="info__riseset--loading shimmer-blue"></div>
    </div>
  );
};

export default LoadingInfo;
