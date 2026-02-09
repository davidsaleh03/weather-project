import React from "react";
import NavTwo from "../components/NavTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Quality = () => {
  const { city } = useParams()
  return (
    <div className="Quality">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
            <FontAwesomeIcon className="info__search" icon={faArrowLeft} />
            <h1>Air Quality for "New York"</h1>
          </div>
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <div className="info__data">
          <div className="quality__more--module">
            <div className="quality__more--top-1">
              <div className="quality__interior margin-30">
                <h1 className="quality__title">Carbon Monoxide (CO) Level</h1>
                <h1 className="quality__title__data">449 PPB</h1>
              </div>
              <div className="quality__interior margin-30">
                <h1 className="quality__title">Nitrogen Dioxide (NO2) Level</h1>
                <h1 className="quality__title__data">449 PPB</h1>
              </div>
              <div className="quality__interior margin-30">
                <h1 className="quality__title">Ozone (O3) Level</h1>
                <h1 className="quality__title__data">100 PPB</h1>
              </div>
              <div className="quality__interior">
                <h1 className="quality__title">Sulfur Dioxide (SO2)</h1>
                <h1 className="quality__title__data">20 PPB</h1>
              </div>
            </div>
            <div className="quality__more--bottom-1">
              <div className="quality__interior margin-30">
                <h1 className="quality__title">US EPA Index</h1>
                <h1 className="quality__title__data">3</h1>
              </div>
              <div className="quality__interior margin-30">
                <h1 className="quality__title">GB Defra Index</h1>
                <h1 className="quality__title__data">5</h1>
              </div>
              <div className="quality__interior margin-30">
                <h1 className="quality__title">PM 2.5</h1>
                <h1 className="quality__title__data">42</h1>
              </div>
              <div className="quality__interior">
                <h1 className="quality__title">PM 10</h1>
                <h1 className="quality__title__data">45</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
