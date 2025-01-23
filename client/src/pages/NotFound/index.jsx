import React from "react";
import styles from "./index.module.scss";
import { Helmet } from "react-helmet-async";
const Notfound = () => {
  return (
    <div className={styles.not}>
      <Helmet>
        <title>Not Found!!</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1>Not Founded !!</h1>
    </div>
  );
};

export default Notfound;
