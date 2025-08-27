
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import MainPart from "../components/mainContent/MainSection";

const HomePage = () => {
  const [city, setCity] = useState("London");
  return (
    <div className="container">
      <Navbar onSearch={setCity} />
      <MainPart city={city} />
    </div>
  );
};

export default HomePage;
