import React, { useContext } from "react";
import { WishlistContext } from "../../context/wishlistContext";
import styles from "./index.module.scss";
import Rating from "@mui/material/Rating";
import { FaHeart } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
const Wishlist = () => {
  const { wish, ToggleWishlist } = useContext(WishlistContext);
  console.log(wish);

  return (
    <div className={styles.wishlist}>
      <Helmet>
        <title>Wish List</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      {wish &&
        wish.map((q) => {
          return (
            <div className={styles.cards} key={q._id}>
              <img src={q.image} alt={q.title} />
              <h1>{q.title}</h1>
              <div className={styles.prices}>
                <span className={styles.oldprice}>${q.oldprice}</span>
                <span className={styles.price}>${q.price}</span>
              </div>
              <Rating
                name="half-rating"
                defaultValue={q.ratings}
                precision={0.5}
              />
              <div className={styles.icons}>
                <button onClick={() => ToggleWishlist(q)}>
                  <FaHeart className={styles.heart} />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Wishlist;
