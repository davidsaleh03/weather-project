import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavOne from "../components/NavOne";
import Cloudy from "../assets/cloudyicon.gif";
import Error from "../assets/errorIcon.png";
import Rainy from "../assets/rainyicon.gif";
import Snow from "../assets/snowicon.gif";
import Sunny from "../assets/sunny.gif";
import Windy from "../assets/windyicon.gif";
import axios from "axios";

const Home = ({temp, setTemp}) => {
  const [dataAct, setDataAct] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function getData(cityName) {
    setLoading(true)
    try {
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=af0baaec05d9499b85f41128250111&q=${cityName}&days=7&aqi=yes&alerts=yes`,
      );
      navigate(`/info/${cityName}`)
      setDataAct(data);
      setError(false);
    } catch (err) {
      setError(true);
      setLoading(false)
    } finally {
        setLoading(false)
    }
  }


  return (
    <div className="Home">
      <NavOne loading={loading} getData={getData} />
      {
        error
        ?
      <div className="home__description">
        <div className="home__error--figure">
            <img src={Error} alt="" />
        </div>
        <h1 className="error__title">Uh Oh! City not found...</h1>
        <p className="error__para">Please check spelling and try again</p>
      </div>
      :
      <div className="home__description">
        <h1>Enter your city above to view weather details</h1>
        <div className="home__description--icons">
          <div className="home__description--icon icon-2">
            <img src={Cloudy} alt="" className="icon__img" />
          </div>
          <div className="home__description--icon icon-2">
            <img src={Rainy} alt="" className="icon__img" />
          </div>
          <div className="home__description--icon">
            <img src={Sunny} alt="" className="icon__img" />
          </div>
          <div className="home__description--icon icon-2">
            <img src={Windy} alt="" className="icon__img" />
          </div>
          <div className="home__description--icon icon-2">
            <img src={Snow} alt="" className="icon__img" />
          </div>
          <div className="home__description--icon icon-1">
            <img src={Cloudy} alt="" className="icon__img" />
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default Home;
