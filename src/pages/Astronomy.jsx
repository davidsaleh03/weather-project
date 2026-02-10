import React from 'react'
import NavTwo from '../components/NavTwo'
import Sunrise from "../assets/sunrise.gif";
import Sunset from "../assets/sunset.gif";
import Moonrise from "../assets/moonrise.gif";
import Moonset from "../assets/moonset.gif";
import Moon from "../assets/moon.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingCurrent from '../components/LoadingCurrent';

const Riseset = ( ) => {
  const { city } = useParams();

  const [weatherData, setWeatherData] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=af0baaec05d9499b85f41128250111&q=${city}&days=7&aqi=yes&alerts=yes`,
        );
        setWeatherData(data);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    };
    getWeather();
  }, [city]);

  function timeToMinutes(t) {
    let [time, modifier] = t.split(" ");
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  }

  function localTimeMin(localTime) {
    const time = localTime.split(" ")[1];
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  function riseSet(astro, localTime) {
    const currentMinutes = localTimeMin(localTime);

    const sunriseMinutes = timeToMinutes(`${astro.sunrise}`);
    const sunsetMinutes = timeToMinutes(`${astro.sunset}`);

    let nextEvent = "";
    let nextTitle = "";
    let nextMinutes = 0;

    if (sunriseMinutes > currentMinutes && sunsetMinutes > currentMinutes) {
      nextEvent = sunriseMinutes < sunsetMinutes ? "sunrise" : "sunset";
      nextTitle = sunriseMinutes < sunsetMinutes ? "Sunrise" : "Sunset";
    } else if (sunriseMinutes > currentMinutes) {
      nextEvent = "sunrise";
      nextTitle = "Sunrise";
    } else if (sunsetMinutes > currentMinutes) {
      nextEvent = "sunset";
      nextTitle = "Sunset";
    } else {
      nextEvent = "sunriseTomorrow";
      nextTitle = "Sunrise";
    }

    const nextEventTime =
      nextEvent === "sunriseTomorrow"
        ? `${astro.sunrise}`
        : `${astro[nextEvent]}`;
    nextMinutes =
      nextEvent === "sunriseTomorrow"
        ? sunriseMinutes + 1440
        : timeToMinutes(nextEventTime);

    let diff = nextMinutes - currentMinutes;

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    const timeUntil = `+${hours}hr${minutes}m`;

    return { nextTitle, nextEventTime, timeUntil };
  }

  if (loading) {
    return (
      <div className='Astronomy'>
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
            <FontAwesomeIcon className="info__search1" icon={faArrowLeft} onClick={()=>{navigate(-1)}} />
            <h1>Astronomical Data for " "</h1>
          </div>
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <LoadingCurrent />
      </div>
    </div>
    );
  }

  const { nextTitle, nextEventTime, timeUntil } = riseSet(
    weatherData.forecast.forecastday[0].astro,
    weatherData.location.localtime,
  );

  return (
    <div className='Astronomy'>
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
            <FontAwesomeIcon className="info__search1" icon={faArrowLeft} onClick={()=>{navigate(-1)}} />
            <h1>Astronomical Data for "{weatherData.location.name},{" "}
            {weatherData.location.country}"</h1>
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
                  <h1 className="astro__next--title"><span className="white">Next:</span> {nextTitle}</h1>
                  <h1 className="astro__next--time">{nextEventTime}</h1>
                  <h1 className="astro__next--left">{timeUntil}</h1>
                </div>
              </div>
              <div className="current-1">
                <img src={Sunrise} alt="" className="astro__riseset" />
                <div className="astro__container">
                <h1 className="astro__riseset--title orange">Sunrise</h1>
                <h1 className="astro__riseset--data">{weatherData.forecast.forecastday[0].astro.sunrise}</h1>
                </div>
              </div>
              <div className="current-1 margin-no">
                <img src={Sunset} alt="" className="astro__riseset" />
                <div className="astro__container">
                <h1 className="astro__riseset--title orange">Sunset</h1>
                <h1 className="astro__riseset--data">{weatherData.forecast.forecastday[0].astro.sunset}</h1>
                </div>
              </div>
            </div>
            <div className="current__middle">
              <div className="current-1">
                <img src={Moonrise} alt="" className="astro__riseset" />
                <div className="astro__container astro-1">
                <h1 className="astro__riseset--title blue">Moonrise</h1>
                <h1 className="astro__riseset--data">{weatherData.forecast.forecastday[0].astro.moonrise}</h1>
                </div>
              </div>
              <div className="current-1">
               <img src={Moonset} alt="" className="astro__riseset" />
               <div className="astro__container">
               <h1 className="astro__riseset--title blue">Moonset</h1>
               <h1 className="astro__riseset--data">{weatherData.forecast.forecastday[0].astro.moonset}</h1>
               </div>
              </div>
              <div className="current-1 current-1-2 margin-no">
                <img src={Moon} alt="" className="astro__riseset" />
                <div className="astro__container">
                <h1 className="astro__riseset--title blue text-align">Moon Phase</h1>
                <h1 className="astro__riseset--data text-align">{weatherData.forecast.forecastday[0].astro.moon_phase}</h1>
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