import React from "react";
import Logo from "../assets/logo3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const NavOne = () => {
  return (
    <div className='NavOne'>
      <div className="nav__container">
          <div className="nav__top">
            <figure className="nav__logo">
              <img src={Logo} alt="" />
            </figure>
            <ul className="nav__top--right">
              <li className="top__right--item">Contact</li>
              <li className="top__right--item item--2">Upgrade</li>
            </ul>
          </div>
          <div className="nav__middle">
            <h1 className="nav__middle--title">Browse Your City</h1>
            <form className="nav__search--bar" role="search">
              <input
                id="cityInput"
                class="search__input"
                type="text"
                placeholder="Enter your city, ex. New York City"
              />
              <button class="search__btn" type="submit">
                <FontAwesomeIcon className ='fa-magnifying-glass'icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default NavOne;
