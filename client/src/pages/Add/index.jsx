import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Base_Url } from "../../constant/services";
import styles from "./index.module.scss";
import Rating from "@mui/material/Rating";
import { Helmet} from 'react-helmet-async';
const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string().url().required("Required"),
  price: Yup.number().required("Required"),
});

export const Add = () => {
  const [products, setProducts] = useState([]);

  const getAllData = async () => {
    const resp = await axios.get(`${Base_Url}/products`);
    setProducts(resp.data.data);
  };
  const deleteData = async (id) => {
    try {
      const deleted = await axios.delete(`${Base_Url}/products/${id}`);
      if (deleted.status === 200) {
        setProducts([...products].filter((c) => c._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  });
  return (
    <div className={styles.crud}>
      <Helmet>
        <title>Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className={styles.adding}>
        <h1>Adding</h1>
        <Formik
          initialValues={{
            title: "",
            image: "",
            price: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            const res = { ...values, ratings: 3, oldprice: null };
            const post = await axios.post(`${Base_Url}/products`, res);
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label htmlFor="title">Title</label>
                <Field name="title" />
                {errors.title && touched.title ? (
                  <div>{errors.title}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="image">image</label>
                <Field name="image" type="url" />
                {errors.image && touched.image ? (
                  <div>{errors.image}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="price">price</label>
                <Field name="price" />
                {errors.price && touched.price ? (
                  <div>{errors.price}</div>
                ) : null}
              </div>

              <button type="submit">Add</button>
            </Form>
          )}
        </Formik>
      </div>
      <table>
        <thead>
          <tr>
            <th>Img</th>
            <th>Title</th>
            <th>Price</th>
            <th>Oldprice</th>
            <th>Ratings</th>
            <th>Crud</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((q) => {
              return (
                <tr key={q._id}>
                  <td>
                    <img src={q.image} alt={q.title} />
                  </td>
                  <td>{q.title}</td>
                  <td>{q.price}</td>
                  <td>{q.oldprice}</td>
                  <td>
                    <Rating
                      name="half-rating"
                      defaultValue={q.ratings}
                      precision={0.5}
                    />
                  </td>
                  <td className={styles.button}>
                    <button onClick={() => deleteData(q._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Add;
