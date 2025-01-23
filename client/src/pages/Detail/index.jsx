import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Base_Url } from "../../constant/services";
import styles from "./index.module.scss";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Detail = () => {
  const { id } = useParams();
  const [products, setProduct] = useState([]);
  const getDataById = async () => {
    const resp = await axios.get(`${Base_Url}/products/${id}`);
    console.log(resp.data.data);
    setProduct(resp.data.data);
  };
  useEffect(() => {
    getDataById();
  }, []);
  return (
    <div className={styles.Det}>
      {products && (
        <Helmet>
          <title>{products.title}</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
      )}
      {products && (
        <div className={styles.card}>
          <img src={products.image} alt={products.title} />
          <h1>{products.title}</h1>
          <div className={styles.prices}>
            <span className={styles.oldprice}>${products.oldprice}</span>
            <span className={styles.price}>${products.price}</span>
          </div>
          <Rating
            name="half-rating"
            defaultValue={products.ratings}
            precision={0.5}
          />
          <button>
            <Link to="/">Go Back</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Detail;
