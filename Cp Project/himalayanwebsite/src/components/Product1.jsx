import React from 'react';
import "../Style/Product.css";



function Products({image,title, content, para}){


   return(
      
       <div className="product1">
      <img className="product_image" src={image} alt=""></img>
      <h1 >{title}</h1>
      <h2>{content}</h2>
      <p>{para}</p>
       </div>
   )
}
export  default Products