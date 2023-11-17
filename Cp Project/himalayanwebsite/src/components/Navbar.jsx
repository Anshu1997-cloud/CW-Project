import React, { useContext } from 'react';
import  { Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const Navbar = () => {
    
    return(
        <>
        <div className="header">
        <img 
             className="header-logo"
             src="https://himalayausa.com/cdn/shop/files/Himalaya_Logo_-_Since_1930_CMYK_-_Reduced_160x.png?v=1673635210" alt="Logo" />
      
       <div className="header_nav">
         <Link to= "/">Shop</Link>
       </div>
       <div div className="header_option">
         <Link to="/About">About</Link>
       </div>
       <div div className="header_option">
         <Link to="/Store-Locator">Store-Locator</Link>
       </div>
       <div  className = "header_search">
       <input
             className="header_searchInput"
             type="text"
             />
             <SearchIcon
             className="header_searchIcon"/>
       </div>
       <div  className="header_nav">
           <Link to="/Items">Items</Link>
       </div>
      <div className="header_nav" >
             <Link to="/Signup">Sign-Up</Link>
         </div>
       <div className="header_nav">
         <Link to="/My-Account">My-Account</Link>
       </div>
       <div className="header_optionBasket">
         <Link  to= "/Cart"className="header_optionLineTwo header_basketCount"> Cart  0<ShoppingCartIcon/></Link>
       </div>
     </div>
     </>
    )
}