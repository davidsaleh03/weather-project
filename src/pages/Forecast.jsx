import React from "react";
import NavTwo from "../components/NavTwo";
import Cloudy from "../assets/cloudyicon.gif";
import Humid from "../assets/raindrop.gif";
import Rainy2 from "../assets/rainy2.gif";
import Sunrise from "../assets/sunrise.gif";
import Sunset from "../assets/sunset.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingForecast from "../components/LoadingForecast";

const Forecast = ({temp, setTemp}) => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0)
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

  useEffect(() => {
    if (weatherData?.forecast?.forecastday) {
      setActiveIndex(0);
    }
  },[weatherData])

  if (loading) {
    return (
      <div className="Forecast">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
                      <FontAwesomeIcon className="info__search1" icon={faArrowLeft} onClick={()=>{navigate(-1)}} />
                      <h1>Forecast for " "</h1>
                    </div>
          <div className="search__temp--change">
              <div
                className={`temp__change--slider ${temp ? "active" : ""}`}
              ></div>
              <button
                className="btn__temp-f click"
                onClick={() => setTemp(false)}
              >
                °C
              </button>
              <button
                className="btn__temp-c click"
                onClick={() => setTemp(true)}
              >
                °F
              </button>
            </div>
        </div>
        <LoadingForecast />
      </div>
    </div>
    );
  }

  const activeDay = weatherData.forecast.forecastday[activeIndex]

  return (
    <div className="Forecast">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <div className="info__top--left">
                      <FontAwesomeIcon className="info__search1" icon={faArrowLeft} onClick={()=>{navigate(-1)}} />
                      <h1>Forecast for "{weatherData.location.name},{" "}
                      {weatherData.location.country}"</h1>
                    </div>
          <div className="search__temp--change">
              <div
                className={`temp__change--slider ${temp ? "active" : ""}`}
              ></div>
              <button
                className="btn__temp-f click"
                onClick={() => setTemp(false)}
              >
                °C
              </button>
              <button
                className="btn__temp-c click"
                onClick={() => setTemp(true)}
              >
                °F
              </button>
            </div>
        </div>
        <div className="info__data">
          <div className="quality__more--module--1">
            <div className="forecast__dates">
              {weatherData.forecast.forecastday.map((date, index) => {
                return (
                  <h1 className={`forecast__date-1 ${activeIndex === index ? 'active' : ''}`} onClick={() => setActiveIndex(index)} key={index}>
                    {date.date.slice(5, 10)}
                  </h1>
                );
              })}
            </div>
          </div>
          <div className="quality__more--module--2">
            <div className="quality__more--module-top">
              <div className="quality__more--module-1">
                <img src={Cloudy} alt="" className="forecast__img22" />
                <div className="quality__more--container22">
                  {
                    temp
                    ?
                    <>
                  <h1>
                    High: <span className="less__bold">{Math.round(activeDay.day.maxtemp_f)}°F</span>
                  </h1>
                  <h1>
                    Low: <span className="less__bold">{Math.round(activeDay.day.mintemp_f)}°F</span>
                  </h1>
                    </>
                    :
                    <>
                    <h1>
                    High: <span className="less__bold">{Math.round(activeDay.day.maxtemp_c)}°C</span>
                  </h1>
                  <h1>
                    Low: <span className="less__bold">{Math.round(activeDay.day.mintemp_c)}°C</span>
                  </h1>
                    </>
                  }
                </div>
              </div>
              <div className="quality__more--module-1">
                <div className="forecast__humid2">
                  <img src={Humid} alt="" />
                  <h1 className="humid2__data">{activeDay.day.avghumidity}</h1>
                </div>
                <div className="forecast__humid2">
                  <img src={Rainy2} alt="" />
                  <h1 className="humid2__data">{activeDay.day.daily_chance_of_rain}%</h1>
                </div>
              </div>
              <div className="quality__more--module-1">
                <div className="forecast__condition--container">
                  <h1 className="forecast__condition--h1">
                    UV: <span className="less__bold">{activeDay.day.uv}</span>
                  </h1>
                  <h1 className="forecast__condition--h1">
                    CO: <span className="less__bold">{Math.round(activeDay.day.air_quality.co)}</span>
                  </h1>
                  <h1 className="forecast__condition--h1">
                    NO2: <span className="less__bold">{Math.round(activeDay.day.air_quality.no2)}</span>
                  </h1>
                  <h1 className="forecast__condition--h1">
                    O3: <span className="less__bold">{Math.round(activeDay.day.air_quality.o3)}</span>
                  </h1>
                  <h1 className="forecast__condition--h1">
                    SO2: <span className="less__bold">{Math.round(activeDay.day.air_quality.so2)}</span>
                  </h1>
                </div>
              </div>
              <div className="quality__more--module-1">
                <div className="forecast__humid2">
                  <img src={Sunrise} alt="" />
                  <h1 className="humid2__data2">{activeDay.astro.sunrise.slice(0,5)}</h1>
                </div>
                <div className="forecast__humid2">
                  <img src={Sunset} alt="" />
                  <h1 className="humid2__data2">{activeDay.astro.sunset.slice(0,5)}</h1>
                </div>
              </div>
            </div>
            <div className="quality__more--module-bottom">
              <div className="quality__more--module-2">
                <div className="forecast__hourly--container">
                  {
                    activeDay.hour.map((hour, index) => {
                      return <div className="forecast__hourly" key={index}>
                    <h1 className="forecast__hourly--title">{hour.time.slice(11)}</h1>
                    <div className="forecast__hourly--data">
                      <img src={Cloudy} alt="" className="hourly__img" />
                      <h1>{hour.condition.text}</h1>
                      {
                        temp
                        ?
                        <>
                         <h1>{Math.round(hour.temp_f)}°F</h1>
                        </>
                        :
                         <>
                         <h1>{Math.round(hour.temp_c)}°C</h1>
                        </>
                      }
                      <div className="hourly__inner"></div>
                    </div>
                  </div>
                    })
                  }
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
