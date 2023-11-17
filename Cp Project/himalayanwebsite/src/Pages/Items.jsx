import React, {useState, useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext"
import { Navigate } from "react-router-dom";
import axios from "axios";

export const Items=() => {
    const[productData, setProductData] = useState([]);
  const{isAuth} = useContext(AppContext);
  useEffect(() => {
    axios
          .get("https://fakestoreapi.com/products")
          .then((response) => console.log(response.data))
          .catch((err) => console.log(err));
},[]);
    if(isAuth === false){
      return <Navigate to = "/My-Account" />;
    }
    return (
    <div style={{display: "grid" , gridTemplateColumns: "repeat(3, 1fr)", gap: "16px"}}>
    {productData.map((el) => {
         return (
         <div style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", padding: "8px"}} key ={el.id}>
        <h3>{el.title}</h3>
        <img height="100px" src= {el.image} alt={el.title} />
        <h4>₹{el.price}</h4>
        <p>rating: {el.rating.rate}</p>
        </div>
         )
      })}
    </div>
    )
};

