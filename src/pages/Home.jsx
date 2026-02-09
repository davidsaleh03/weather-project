import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import NavOne from '../components/NavOne'
import Cloudy from "../assets/cloudyicon.gif";
import Rainy from "../assets/rainyicon.gif";
import Snow from "../assets/snowicon.gif";
import Sunny from "../assets/sunny.gif";
import Windy from "../assets/windyicon.gif";
import HomeDescription from '../components/HomeDescription'

const Home = () => {
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (event) => {
    event.preventDefault();
    if (!city.trim()) return;

    navigate(`/info/${encodeURIComponent(city)}`);
  };
  return (
    <div className='Home'>
        <NavOne
        city={city}
        setCity={setCity}
        onSearch={handleSearch} 
        />
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
    </div>
  )
}

export default Home