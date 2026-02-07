import React from 'react'
import NavTwo from '../components/NavTwo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Quality = () => {
  return (
    <div className='Quality'>
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
           <div className="quality__more--module">
            <div className="quality__more--top-1">
            <div className="quality__interior"><span className="quality-title">Carbon Monoxide (CO) Level</span>
             
               449 PPB</div>
            <div className="quality__interior"> <span className="quality-title">Nitrogen Dioxide (NO2) Level</span>
             
               449 PPB</div>
            <div className="quality__interior"><span className="quality-title">Ozone (O3) Level</span>
             
               100 PPB</div>
            <div className="quality__interior"><span className="quality-title">Sulfur Dioxide (SO2)</span>
             
               20 PPB</div>
            </div>
            <div className="quality__more--bottom-1">
            <div className="quality__interior"><span className="quality-title">US EPA Index </span>
             
               3</div>
            <div className="quality__interior"><span className="quality-title">GB Defra Index</span>
             
               5</div>
            <div className="quality__interior"><span className="quality-title">PM 2.5</span>
             
               42</div>
            <div className="quality__interior"><span className="quality-title">PM 10</span>
             
               45</div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Quality