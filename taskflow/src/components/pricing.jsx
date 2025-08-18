import React from "react";

const Pricing = () => {
  return (
    <div className="pricing_section">
      {/* Top Section */}
      <div className="top_section">
        <p className="title">Find the perfect plan</p>
        <p className="Description">
          Start for free, or unlock more power and collaboration.
        </p>
      </div>

      {/* Down Section */}
      <div className="down_section">
        {/* Free Plan */}
        <div className="card">
          <div className="card_content">
            <h4>Free</h4>
            <p>
              For individuals getting started with task <br /> management.
            </p>
            <h1>$0</h1>
            <span>/forever</span>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Up to 3 projects
              </li>
              <li>
                <i className="ri-check-double-line"></i> Basic task tracking
              </li>
              <li>
                <i className="ri-check-double-line"></i> Community support
              </li>
            </ul>
            <button>Get started</button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="card">
          <button className="popular">Pro</button>
          <div className="card_content">
            <h4>Pro</h4>
            <p>
              For power users and small teams who need <br /> more.
            </p>
            <h1>$8</h1>
            <span>/user/month</span>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Unlimited projects
              </li>
              <li>
                <i className="ri-check-double-line"></i> Advanced tracking &
                reports
              </li>
              <li>
                <i className="ri-check-double-line"></i> Calendar integrations
              </li>
              <li>
                <i className="ri-check-double-line"></i> Priority support
              </li>
            </ul>
            <button>Get started</button>
          </div>
        </div>

        {/* Team Plan */}
        <div className="card">
          <div className="card_content">
            <h4>Team</h4>
            <p>
              For larger organizations with advanced security needs
              management.
            </p>
            <h1>$15</h1>
            <span>/user/month</span>
            <ul>
              <li>
                <i className="ri-check-double-line"></i> Everything in Pro
              </li>
              <li>
                <i className="ri-check-double-line"></i> Team dashboards
              </li>
              <li>
                <i className="ri-check-double-line"></i> Admin controls & SSO
              </li>
              <li>
                <i className="ri-check-double-line"></i> Dedicated success
                manager
              </li>
            </ul>
            <button>Get started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
