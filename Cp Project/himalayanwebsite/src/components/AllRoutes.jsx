import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {Shop} from "../Pages/Shop.jsx"
import {About} from "../Pages/About.jsx"
import {StoreLocator} from "../Pages/Store-Locator.jsx"
import {Items} from "../Pages/Items.jsx";
import {Signup} from "../Pages/Signup.jsx"
import {MyAccount }from "../Pages/My-Account.jsx"
import {Cart} from "../Pages/Cart.jsx";

export const  AllRoutes = () => {

    return(
<Routes>
       <Route path="/" element = {<Shop/>} />
       <Route path="/About" element = {<About/>} />
       <Route path="/StoreLocator" element = {<StoreLocator/>}/>
       <Route path="/Items" element = {<Items/>}/>
       <Route path="/Signup" element = {<Signup/>}/>
       <Route path="/My-Account" element = {<MyAccount/>} />
       <Route path="/Cart" element = {<Cart/>}/>
</Routes>
    )
}