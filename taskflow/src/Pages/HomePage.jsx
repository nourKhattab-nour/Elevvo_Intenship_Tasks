import React from 'react'
import Home from "../components/Home";
import Feature from "../components/Feature";
import Feedback from "../components/Feedback";
import Pricing from "../components/pricing";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Home/>
      <Feature/>
      <Feedback/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default HomePage
