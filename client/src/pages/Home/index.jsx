import React, { useContext, useState } from "react";
import axios from "axios";
import { Base_Url } from "../../constant/services";
import styles from "./index.module.scss";
import Rating from "@mui/material/Rating";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../../context/wishlistContext";
import { Helmet} from 'react-helmet-async';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [productscopy, setProductsCopy] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getAllData = async () => {
    const resp = await axios.get(`${Base_Url}/products`);
    setProducts(resp.data.data);
    setProductsCopy(resp.data.data);
  };

  const {wish,ToggleWishlist} = useContext(WishlistContext)
  const filtered = products.filter((c)=>c.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))

  const HandleChange = (e)=>{
    let sorted = null
    if (e.target.value === "asc") {
      sorted = [...products].toSorted((a,b)=>a.price - b.price)
    } else if (e.target.value === "desc") {
      sorted = [...products].toSorted((a,b)=>b.price - a.price)
    }else{
      sorted = [...productscopy]
    }
    setProducts(sorted)
  }
    
  
  useState(() => {
    getAllData();
  });
  return (
    <main>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <section className={styles.mainSection}>
        
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.center}>
            <h1>Wood & Cloth Sofa </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, impedit.</p>
            <button>Buy Now</button>
            </div>
          </div>
          <div className={styles.right}>
            <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" alt="" />
          </div>
        </div>
      </section>
      <section className={styles.products}>
        <div className={styles.text}>
          <div className={styles.text1}>
          <label htmlFor="search">Search</label>
          <input type="text" id="search" placeholder="Search" onChange={(e)=>setSearchQuery(e.target.value)}/>
          </div>
          <select name="" id="" onChange={HandleChange} className={styles.sorted} >
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
            <option value="default">DEFAULT</option>
          </select>
        </div>
        <div className={styles.contain}>
          {products &&
            filtered.map((q) => {
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
                    <Link to={`/products/${q._id}`}>
                      <FaInfoCircle className={styles.info}/>
                    </Link>
                    <button onClick={()=>ToggleWishlist(q)}>
                      <FaHeart className={styles.heart}/>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <section className={styles.staticCards}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h1>Best Sellers</h1>
            <p>Shop</p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.cards}>
              <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_5.png" alt="" />
              <h1>Sun</h1>
              <span>$150</span>
            </div>
            <div className={styles.cards}>
              <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_8.png" alt="" />
              <h1>Quertz</h1>
              <span>$180</span>
            </div>
            <div className={styles.cards}>
              <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_7.png" alt="" />
              <h1>Prag</h1>
              <span>$200</span>
            </div>
            <div className={styles.cards}>
              <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png" alt="" />
              <h1>Simpson</h1>
              <span>$100</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.subscribe}>
        <div className={styles.container}>
          <h4>Join Our Newsletter</h4>
          <h1>Subscribe to get Updated with new offers</h1>
          <div className={styles.email}>
            <input type="email" placeholder="Enter Email Address"/>
            <button>Subscribe Now</button>
          </div>
        </div>
      </section>
      <section className={styles.images}>
        <div className={styles.top}>
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" alt="" />
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" />
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" />
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png" alt="" />
        </div>
        <div className={styles.top}>
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" alt="" />
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" />
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" />
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" />
          <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png" alt="" />
        </div>
      </section>
    </main>
  );
};

export default Home;
