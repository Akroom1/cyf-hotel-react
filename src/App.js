import React from "react";
import Heading from "./components/Heading";
import Bookings from "./components/Bookings";
import Restaurant from "./components/Restaurant";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Cards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
