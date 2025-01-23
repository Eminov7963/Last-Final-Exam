import React from "react";
import styles from "./index.module.scss";
const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.bolmeler}>
            <h6>Top Products</h6>
            <p>Managed Website</p>
            <p>Manage Reputation</p>
            <p>Power Tools</p>
            <p>Marketing Service</p>
          </div>
          <div className={styles.bolmeler}>
            <h6>Top Products</h6>
            <p>Managed Website</p>
            <p>Manage Reputation</p>
            <p>Power Tools</p>
            <p>Marketing Service</p>
          </div>
          <div className={styles.bolmeler}>
            <h6>Top Products</h6>
            <p>Managed Website</p>
            <p>Manage Reputation</p>
            <p>Power Tools</p>
            <p>Marketing Service</p>
          </div>
          <div className={styles.bolmeler}>
            <h6>Top Products</h6>
            <p>Managed Website</p>
            <p>Manage Reputation</p>
            <p>Power Tools</p>
            <p>Marketing Service</p>
          </div>
          <div className={styles.last}>
            <h6>Newsletter</h6>
            <span>
              Heaven fruitful doesn't over lesser in days
            </span>
            <div className={styles.buttons}>
              <input type="email" placeholder="Enter Email Address" />
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
