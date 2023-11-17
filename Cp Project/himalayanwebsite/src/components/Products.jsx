import React from 'react';
import "../Style/Product.css";

function Product({image, title, content}){

    return(
     <div className="product" >
  <img className="product_image" src={image} alt=""></img>
   <h1>{title}</h1>
   <h3>{content}</h3>
     </div>
    )
}
export default Product