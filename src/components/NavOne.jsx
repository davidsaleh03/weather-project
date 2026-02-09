import React from "react";
import Logo from "../assets/logo3.png";
import Background from "../assets/overlay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const NavOne = ({ city, setCity, onSearch, loading }) => {
  return (
    <>
      <div className="NavOne">
        <div className="nav__container">
          <div className="nav__top">
            <figure className="nav__logo">
              <img src={Logo} alt="" />
            </figure>
            <ul className="nav__top--right">
              <li className="top__right--item link__hover-effect">Contact</li>
              <li className="top__right--item item--2 link__hover-effect">
                Upgrade
              </li>
            </ul>
          </div>
          <div className="nav__middle">
            <h1 className="nav__middle--title">Browse Your City</h1>
            <form
              className="nav__search--bar"
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
                onSearch();
              }}
            >
              <input
                id="cityInput"
                class="search__input"
                type="text"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder="Enter your city, ex. New York City"
              />
              <button class="search__btn" type="submit" disabled={loading}>
                {loading ? (
                  <FontAwesomeIcon
                    className="fa-magnifying-glass"
                    icon={faSpinner}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="fa-magnifying-glass"
                    icon={faMagnifyingGlass}
                  />
                )}
              </button>
            </form>
          </div>
        </div>
        <img src={Background} alt="" className="background__nav" />
        <div className="background__color"></div>
      </div>
    </>
  );
};

export default NavOne;
