import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

import "./HomePage.css";
export default function HomePage({ cart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  // when you want to use fetch
  // fetch("http://localhost:3000/api/products")
  // .then((response)=>{
  //   response.json().then((data)=>{
  //     console.log(data);
  //   })
  // })

  // another way to write the code above
  // fetch("http://localhost:3000/api/products")
  // .then((response)=>{
  //   return response.json();
  // }).then((data)=>{
  //     console.log(data);
  //   })
  return (
    <>
      <title>Ecom project</title>
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
