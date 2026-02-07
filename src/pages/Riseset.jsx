import React from 'react'
import NavTwo from '../components/NavTwo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Riseset = () => {
  return (
    <div className='Riseset'>
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
           
        </div>
      </div>
    </div>
  )
}

export default Riseset