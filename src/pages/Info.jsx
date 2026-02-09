import React, { useEffect, useState } from "react";
import NavTwo from "../components/NavTwo";
import Cloudy from "../assets/cloudyicon.gif";
import Rainy from "../assets/rainyicon.gif";
import Humid from '../assets/raindrop.gif'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";


const Info = () => {
  const { city } = useParams()
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  if (!state) {
    navigate("/");
    return null;
  }

  useEffect(() => {
    async function fetchWeather() {
        try {
            setLoading(true);
            const res = await fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=af0baaec05d9499b85f41128250111&q=${city}&days=7&aqi=yes&alerts=yes`
            )
            const result = await res.json();
            setData(result);
         } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      fetchWeather()
    }
  },[city])
  return (
    <div className="Info">
      <NavTwo />
      <div className="info__container">
        <div className="info__top">
          <h1 className="info__search">Search Results: "New York"</h1>
          <div class="search__temp--change">
            <div class="temp__change--slider"></div>
            <button class="btn__temp-f click">°C</button>
            <button class="btn__temp-c click">°F</button>
          </div>
        </div>
        <div className="info__data">
          <div className="info__current">
            <div className="info__current--top">
              <div className="current__img">
                <img src={Cloudy} alt="" className="current__img--img" />
              </div>
              <div className="current__info">
                <h1 className="current__ammount">24°C</h1>
                <h1 className="current__feel">Partly cloudy</h1>
              </div>
            </div>
            <div className="info__current--bottom">
              <h1 className="current__bottom">Feels Like : 15°C</h1>
              <h1 className="current__bottom">Humidity : 0</h1>
            </div>
            <div className="see__more">
                <h1 className='see__text'>See More</h1>
                <FontAwesomeIcon className='arrow__more' icon={faArrowRight} />
            </div>
          </div>
          <div className="info__air-quality">
            <div className="air__quality--container">

            <div className="airquality__info">
                <h1 className="airquality__title">Air Quality:</h1>
                <div className="airquality__data">
                    <div className="quality__data--point">Carbon Monoxide (CO) Level : 449 PPB</div>
                    <div className="quality__data--point">Nitrogen Dioxide (NO2) Level : 449 PPB</div>
                    <div className="quality__data--point">Ozone (O3) Level: 100 PPB</div>
                </div>
            </div>
            <div className="see__more more--2">
                <h1 className='see__text'>See More</h1>
                <FontAwesomeIcon className='arrow__more' icon={faArrowRight} />
            </div>
            </div>
          </div>
          <div className="info__alerts">
            <h1 className="alerts">Alerts: No Current Alerts</h1>
          </div>
          <div className="info__forecast">
            <div className='forecast__day--array'>
            <div className="forecast__day">
                <div className="forecast__date">02-06</div>
                <div className="forecast__high">24°C</div>
                <div className="forecast__low">24°C</div>
                <div className="forecast__precipitation">
                    <img src={Rainy} alt="" className="rainy" />
                    <h1>90%</h1>
                </div>
                <div className="forecast__humidity">
                    <img src={Humid} alt="" className="humid" />
                    <h1>90%</h1>
                </div>
            </div>
            <div className="forecast__day">
                <div className="forecast__date">02-06</div>
                <div className="forecast__high">24°C</div>
                <div className="forecast__low">24°C</div>
                <div className="forecast__precipitation">
                    <img src={Rainy} alt="" className="rainy" />
                    <h1>90%</h1>
                </div>
                <div className="forecast__humidity">
                    <img src={Humid} alt="" className="humid" />
                    <h1>90%</h1>
                </div>
            </div>
            <div className="forecast__day">
                <div className="forecast__date">02-06</div>
                <div className="forecast__high">24°C</div>
                <div className="forecast__low">24°C</div>
                <div className="forecast__precipitation">
                    <img src={Rainy} alt="" className="rainy" />
                    <h1>90%</h1>
                </div>
                <div className="forecast__humidity">
                    <img src={Humid} alt="" className="humid" />
                    <h1>90%</h1>
                </div>
            </div>
            <div className="forecast__day">
                <div className="forecast__date">02-06</div>
                <div className="forecast__high">24°C</div>
                <div className="forecast__low">24°C</div>
                <div className="forecast__precipitation">
                    <img src={Rainy} alt="" className="rainy" />
                    <h1>90%</h1>
                </div>
                <div className="forecast__humidity">
                    <img src={Humid} alt="" className="humid" />
                    <h1>90%</h1>
                </div>
            </div>
            </div>
            <div className="see__more more--3">
                <h1 className='see__text'>See More</h1>
                <FontAwesomeIcon className='arrow__more' icon={faArrowRight} />
            </div>
          </div>
          <div className="info__riseset">
            <div className="riseset__info">
                <div className="riseset__h1">Sunrise</div>
                <div className="riseset__act">06:46 AM</div>
                <div className="riseset__left">+8hr53m</div>
            </div>
            <div className="see__more more--4">
                <h1 className='see__text'>See More</h1>
                <FontAwesomeIcon className='arrow__more' icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Info;
