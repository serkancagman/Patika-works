import React from "react";
import style from "./style/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {GiHamburgerMenu} from 'react-icons/gi';
import { MovieContext } from "../context/MovieContext";
const Header = () => {
  const { setSearchQuery } = React.useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.elements.search.value);
 
  };

  return (
    <header className={style.mainHeader}>
      <div className="container">
        <nav className="navbar navbar-expand-md">
          <Link to="/" className="navbar-brand d-flex justify-content-center align-items-center me-5">
            <img className={style.logoIcon} src={logo} alt="logo" />
            <p className={style.logoText}>Movie <span className={style.logondText}>Hell</span></p>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
         
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu />
          </button>
          
          <form onSubmit={handleSubmit} className="w-100 mx-4">
          <div className={`my-auto ${style.searchWrapper}`}>
          <input type="text" id="search" className={` ${style.searchInput}`} placeholder="Search" />
          <button type="submit" className="btn btn-warning">Search</button>
          </div>
          </form>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="mx-2 nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
