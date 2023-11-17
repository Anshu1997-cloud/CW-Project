import React, {useContext} from "react";
import "../Style/Shop.css";
import Product from "../components/Products";
import Products from "../components/Product1";
import { AppContext } from "../context/AppContext";
export function Shop(){
    const value = useContext(AppContext)
    return(
   <>
   <div className="home">
    <div className="home_container">
    <img className="home_image" src="//himalayausa.com/cdn/shop/files/Berberine_2_small.jpg?v=1689623874" alt="" srcSet="
        //himalayausa.com/cdn/shop/files/Berberine_2_640x.jpg?v=1689623874 640w
        ,//himalayausa.com/cdn/shop/files/Berberine_2_720x.jpg?v=1689623874 720w
        ,//himalayausa.com/cdn/shop/files/Berberine_2_900x.jpg?v=1689623874 900w 
        " sizes="(min-width: 960px) 450px, (min-width: 720px) 50vw, 100vw"></img>
    </div>
    <div className="header_title">
      <h1>BERBERINE</h1>
    </div>
    <div className="home_row">
       <Product image="//himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_grande.png?v=1614392545" data-src="//himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_grande.png?v=1614392545" data-srcset="//himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_400x.png?v=1614392545 360w, //himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_600x.png?v=1614392545 540w, //himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_800x.png?v=1614392545 720w, //himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545 1024w" alt="" loading="lazy" srcset="//himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_400x.png?v=1614392545 360w, //himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_600x.png?v=1614392545 540w, //himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_800x.png?v=1614392545 720w, //himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545 1024w"
        title='Supplements' content='See All Supplements' />
      <Product image="//himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_grande.png?v=1614392545" data-src="//himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_grande.png?v=1614392545" data-srcset="//himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_400x.png?v=1614392545 360w, //himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_600x.png?v=1614392545 540w, //himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_800x.png?v=1614392545 720w, //himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1614392545 1024w" alt="" loading="lazy" srcset="//himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_400x.png?v=1614392545 360w, //himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_600x.png?v=1614392545 540w, //himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_800x.png?v=1614392545 720w, //himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1614392545 1024w"
      title='Oral Care' 
      content='See All Oral Care'
      />
     <Product image="//himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_grande.png?v=1614392545" data-src="//himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_grande.png?v=1614392545" data-srcset="//himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_400x.png?v=1614392545 360w, //himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_600x.png?v=1614392545 540w, //himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_800x.png?v=1614392545 720w, //himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1614392545 1024w" alt="" loading="lazy" srcset="//himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_400x.png?v=1614392545 360w, //himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_600x.png?v=1614392545 540w, //himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_800x.png?v=1614392545 720w, //himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1614392545 1024w"
     title='Personal Care'
     content='See All Personal Care'
     />
    </div>
    <h1 className="product_header">Best Sellers</h1>
    <div className="home_row">
     <Products header='Best Sellers'  image="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475" 
     title='Unlock the Wishdom of Herbs'
     content='with Herbal Supplements, Toothpaste & More!'
     para='Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of herbs.'
     />
    </div>
    </div>
   </>
    )
}

