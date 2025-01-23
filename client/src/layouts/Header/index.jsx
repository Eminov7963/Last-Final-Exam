import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";

const Header = () => {
  return (
    <header>
      <div  className={styles.contain}>
        <img
          src="https://preview.colorlib.com/theme/aranoz/img/logo.png"
          alt=""
        />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              </li>
              <li>
              <NavLink to="/add">Add</NavLink>
              </li>
              <li>
              <NavLink to="/wishlist">Wishlist</NavLink>
              </li>
            
          </ul>
        </nav>
        <div className={styles.icons}>
          <CiSearch className={styles.search} />
          <Link to="/wishlist">
            <FaHeart className={styles.wishlist} />
          </Link>
          <SlBasket className={styles.basket} />
        </div>
      </div>
    </header>
  );
};

export default Header;
