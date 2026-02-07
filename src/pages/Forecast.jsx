import React from 'react'
import NavTwo from '../components/NavTwo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Forecast = () => {
  return (
    <div className='Forecast'>
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <FontAwesomeIcon className="info__search" icon={faArrowLeft} />
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <div className="info__data">
            <div className="quality__more--module--1"></div>
            <div className="quality__more--module--2"></div>
        </div>
      </div>
    </div>
  )
}

export default Forecast