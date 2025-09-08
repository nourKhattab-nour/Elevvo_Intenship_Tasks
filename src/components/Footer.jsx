import React from 'react'
import Logo from "../assets/Logo.png";
import Social from "../assets/SocialIcons.png";
const Footer = () => {
  return (
    <div>
      <div className="footer_section">
        <div className="top_section">
          <div className="Col">
            <img src={Logo}></img>
            <p>The simplest way to organize your work and life.</p>
          </div>
          <div className="Col">
            <ul>
              <li>PRODUCT</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Updates</li>
            </ul>
          </div>
          <div className="Col">
            <ul>
              <li>COMPANEY</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="Col">
            <ul>
              <li>LEGAL</li>
              <li>Privacy</li>
              <li>Teams</li>
              <li>security</li>
            </ul>
          </div>
        </div>
        <div className="border"></div>
        <div className="down_section">
          <div className="right_section">
            <p>@ 2024 TaskFlow. Inc All right reserved</p>
          </div>
          <div className="left_section">
            <img src={Social}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
