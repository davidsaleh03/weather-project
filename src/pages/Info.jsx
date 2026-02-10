import React, { useEffect, useState } from "react";
import NavTwo from "../components/NavTwo";
import Cloudy from "../assets/cloudyicon.gif";
import Rainy from "../assets/rainyicon.gif";
import Humid from "../assets/raindrop.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Info = () => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=af0baaec05d9499b85f41128250111&q=${city}&days=7&aqi=yes&alerts=yes`,
        );
        setWeatherData(data);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [city]);
  console.log(weatherData);

  function alertMod(alertChk) {
    if (!alertChk) {
      return `No Current Alerts`;
    } else {
      return `${weatherData.alerts.alert[0].desc}`;
    }
  }

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
      <div className="loading-screen">
        <h2>Loading weather for {city}...</h2>
      </div>
    );
  }

  if (error) {
    return <h2>Failed to fetch data for "{city}".</h2>;
  }

  const { nextTitle, nextEventTime, timeUntil } = riseSet(
    weatherData.forecast.forecastday[0].astro,
    weatherData.location.localtime,
  );
  return (
    <div className="Info">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <h1 className="info__search">
            Search Results: "{weatherData.location.name},{" "}
            {weatherData.location.country}"
          </h1>
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <div className="info__data">
          <div className="info__current" onClick={() => navigate(`/info/current/${city}`)}>
            <div className="info__current--top">
              <div className="current__img">
                <img src={Cloudy} alt="" className="current__img--img" />
              </div>
              <div className="current__info">
                <h1 className="current__ammount">
                  {Math.round(weatherData.current.temp_f)}°F
                </h1>
                <h1 className="current__feel">
                  {weatherData.current.condition.text}
                </h1>
              </div>
            </div>
            <div className="info__current--bottom">
              <h1 className="current__bottom">
                Feels Like: {Math.round(weatherData.current.feelslike_f)}°F
              </h1>
              <h1 className="current__bottom">
                Humidity: {Math.round(weatherData.current.humidity)}
              </h1>
            </div>
            <div className="see__more">
              <h1 className="see__text">See More</h1>
              <FontAwesomeIcon className="arrow__more" icon={faArrowRight} />
            </div>
            <div className="search__more--hover">
              <h1>See More</h1>
              <FontAwesomeIcon
                className="see__more--left"
                icon={faArrowRight}
              />
            </div>
          </div>
          <div className="info__air-quality" onClick={() => navigate(`/info/quality/${city}`)}>
            <div className="air__quality--container">
              <div className="airquality__info">
                <h1 className="airquality__title">Air Quality:</h1>
                <div className="airquality__data">
                  <div className="quality__data--point">
                    Carbon Monoxide (CO) Level:{" "}
                    {Math.round(weatherData.current.air_quality.co)} PPB
                  </div>
                  <div className="quality__data--point">
                    Nitrogen Dioxide (NO2) Level:{" "}
                    {Math.round(weatherData.current.air_quality.no2)} PPB
                  </div>
                  <div className="quality__data--point">
                    Ozone (O3) Level:{" "}
                    {Math.round(weatherData.current.air_quality.o3)} PPB
                  </div>
                </div>
              </div>
              <div className="see__more more--2">
                <h1 className="see__text">See More</h1>
                <FontAwesomeIcon className="arrow__more" icon={faArrowRight} />
              </div>
            </div>
            <div className="search__more--hover">
              <h1>See More</h1>
              <FontAwesomeIcon
                className="see__more--left left-more-1"
                icon={faArrowRight}
              />
            </div>
          </div>
          <div className="info__alerts">
            <h1 className="alerts">Alerts:</h1>
            <div className="alertsActual">
              <div className="alert-ticker">
                {weatherData.alerts.alert[0] ? (
                  <div
                    className="alert-ticker__inner"
                    data-text={weatherData.alerts?.alert
                      ?.map((a) => `⚠️ ${a.desc} `)
                      .join("   ")}
                  >
                    {weatherData.alerts.alert.map((a, i) => (
                      <span className="ticker__color" key={i}>
                        ⚠️ {a.desc}
                      </span>
                    ))}
                  </div>
                ) : (
                  <h1 className="ticker__color ticker__size">
                    No Current Alerts
                  </h1>
                )}
              </div>
            </div>
          </div>
          <div className="info__forecast">
            <div className="forecast__day--array">
              {weatherData.forecast.forecastday
                .slice(0, 4)
                .map((day, index) => {
                  return (
                    <div className="forecast__day" key={index} onClick={() => navigate(`/info/forecast/${city}`)}>
                      <div className="forecast__date">
                        {day.date.slice(5, 10)}
                      </div>
                      <div className="forecast__high">
                        {Math.round(day.day.maxtemp_f)}°F
                      </div>
                      <div className="forecast__low">
                        {Math.round(day.day.mintemp_f)}°F
                      </div>
                      <div className="forecast__precipitation">
                        <img src={Rainy} alt="" className="rainy" />
                        <h1>{Math.round(day.day.daily_chance_of_rain)}%</h1>
                      </div>
                      <div className="forecast__humidity">
                        <img src={Humid} alt="" className="humid" />
                        <h1>{Math.round(day.day.avghumidity)}</h1>
                      </div>
                      <div className="search__more--forecast">
                        <FontAwesomeIcon
                className="see__more--left"
                icon={faArrowRight}
              />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="see__more more--3">
              <h1 className="see__text">See More</h1>
              <FontAwesomeIcon className="arrow__more" icon={faArrowRight} />
            </div>
          </div>
          <div className="info__riseset" onClick={() => navigate(`/info/astronomy/${city}`)}>
            <div className="riseset__info">
              <div className="riseset__h1">{nextTitle}</div>
              <div className="riseset__act">{nextEventTime}</div>
              <div className="riseset__left">{timeUntil}</div>
            </div>
            <div className="see__more more--4">
              <h1 className="see__text">See More</h1>
              <FontAwesomeIcon className="arrow__more" icon={faArrowRight} />
            </div>
            <div className="search__more--hover">
              <h1 className="see--h1">See More</h1>
              <FontAwesomeIcon
                className="see__more--left"
                icon={faArrowRight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
