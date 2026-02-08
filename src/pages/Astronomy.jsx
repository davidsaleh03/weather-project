import React from 'react'
import NavTwo from '../components/NavTwo'
import Sunrise from "../assets/sunrise.gif";
import Sunset from "../assets/sunset.gif";
import Moonrise from "../assets/moonrise.gif";
import Moonset from "../assets/moonset.gif";
import Moon from "../assets/moon.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Riseset = () => {
  return (
    <div className='Astronomy'>
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
            <FontAwesomeIcon className="info__search" icon={faArrowLeft} />
            <h1>Astronomical Data for "New York"</h1>
          </div>
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <div className="info__data">
          <div className="quality__more--module">
            <div className="current__top">
              <div className="current-1">
                <div className="astro__next">
                  <h1 className="astro__next--title"><span className="white">Next:</span> Sunrise</h1>
                  <h1 className="astro__next--time">06:46 AM</h1>
                  <h1 className="astro__next--left">+8hr53m</h1>
                </div>
              </div>
              <div className="current-1">
                <img src={Sunrise} alt="" className="astro__riseset" />
                <div className="astro__container">
                <h1 className="astro__riseset--title orange">Sunrise</h1>
                <h1 className="astro__riseset--data">06:46 AM</h1>
                </div>
              </div>
              <div className="current-1 margin-no">
                <img src={Sunset} alt="" className="astro__riseset" />
                <div className="astro__container">
                <h1 className="astro__riseset--title orange">Sunset</h1>
                <h1 className="astro__riseset--data">05:29 PM</h1>
                </div>
              </div>
            </div>
            <div className="current__middle">
              <div className="current-1">
                <img src={Moonrise} alt="" className="astro__riseset" />
                <div className="astro__container astro-1">
                <h1 className="astro__riseset--title blue">Moonrise</h1>
                <h1 className="astro__riseset--data">10:40 PM</h1>
                </div>
              </div>
              <div className="current-1">
               <img src={Moonset} alt="" className="astro__riseset" />
               <div className="astro__container">
               <h1 className="astro__riseset--title blue">Moonset</h1>
               <h1 className="astro__riseset--data">09:16 AM</h1>
               </div>
              </div>
              <div className="current-1 current-1-2 margin-no">
                <img src={Moon} alt="" className="astro__riseset" />
                <div className="astro__container">
                <h1 className="astro__riseset--title blue text-align">Moon Phase</h1>
                <h1 className="astro__riseset--data text-align">Waning Gibbous</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Riseset