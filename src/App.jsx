import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import CardShow from "./CardShow.jsx";
import Header from "./Header.jsx";
import { useState } from "react";

//This is the entry part of the application
function App() {
  //implement stateVariable and stateFunction - which will be shared to all components
  //to constantly keep update on latest value of Card
  let [count, setCount] = useState(0);

  return (
    <>
    {/* passin count variable to Update Count in Nav Component*/} 
      <Nav count={count} />  
      <Header />
    {/* passing count and setCount variable to getback the button Click response 
    with latest value of count*/}
      <CardShow count={count} updateCount={setCount} />   
      <Footer />
    </>
  );
}

export default App;
