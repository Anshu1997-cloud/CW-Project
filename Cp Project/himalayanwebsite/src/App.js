

import { AllRoutes } from "./components/AllRoutes.jsx";
import BoxElement from "./components/BoxElement.jsx";
import { Navbar } from "./components/Navbar.jsx";



import "./Main.css";
import { StoreLocator } from "./Pages/Store-Locator.jsx";

function App() {
  return (
    <>
     <BoxElement/>
    <Navbar />
    <AllRoutes/>
    <StoreLocator/>
   
  </>
    
     )
  }

export default App;
