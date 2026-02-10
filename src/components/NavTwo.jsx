import React from "react";
import Logo from "../assets/logo3.png";
import Background from "../assets/overlay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavTwo = ( ) => {

  return (
    <div className="NavTwo">
      <div className="nav__container">
        <div className="nav__top">
          <figure className="nav__logo">
            <img src={Logo} alt="" />
          </figure>
          {/* <form className="nav__search--bar-2" role="search">
            <input
              id="cityInput"
              class="search__input-2"
              type="text"
              placeholder="Enter your city, ex. New York City"
            />
            <button class="search__btn-2" type="submit">
              <FontAwesomeIcon
                className="fa-magnifying-glass-2"
                icon={faMagnifyingGlass}
              />
            </button>
          </form> */}
          <ul className="nav__top--right">
            <Link to="/">
              <FontAwesomeIcon className="home__btn" icon={faHouse} />
            </Link>
          </ul>
        </div>
      </div>
      <img src={Background} alt="" className="background__nav" />
      <div className="background__color"></div>
    </div>
  );
};

export default NavTwo;
