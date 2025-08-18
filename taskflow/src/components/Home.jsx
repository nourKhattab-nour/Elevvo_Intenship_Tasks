import React from 'react'
import Logo  from "../assets/Logo.png";
const Home = () => {
  return (
    <div>
      <div className="Home_section">
        <div className="top_section">
          <img src={Logo} />
          <a className="login">login</a>
          <button className="started">Get Started Free</button>
        </div>
        <div className="down_section">
          <p className="title">
            Achieve Clarity and <span>Focus</span>
          </p>
          <p className="Description">
            Stop jugging scrattered to_do lists. TaskFlow brings ll your tasks
            into one <br />
            clam, organized space. Finally get work done without chaos.
          </p>
          <button>Claim your free acoount</button>
        </div>
      </div>
    </div>
  );
}

export default Home
