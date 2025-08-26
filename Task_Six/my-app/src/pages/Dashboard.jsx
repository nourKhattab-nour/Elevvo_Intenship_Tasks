import React from 'react'
import Header from '../components/Menu/Menu';
import TopHeader from "../components/Dashboards/Header";
import Main from "../components/Dashboards/Main";

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <TopHeader/>
        <Main/>
    </div>
  )
}

export default Dashboard
