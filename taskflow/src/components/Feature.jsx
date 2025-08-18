import React from 'react'
import CardOne from "../assets/imgOne.png";
import CardTwo from "../assets/imgTwo.png";
import CardThree from "../assets/imgThree.png";

const Feature = () => {
  return (
    <div>
      <div className="feature_section">
        <div className="top_section">
          <p className="title">Everything you need, nothing you don't.</p>
          <p className="Description">
            TaskFlow is built with powerful features to boost your productivity.
          </p>
        </div>
        <div className="down_section">
          <div className="card">
            <div className="card_content">
              <img src={CardOne} />
              <h3>Intuitive Boards</h3>
              <p>
                Visualize your workflow with <br />
                customizable Kanban boards. Drag and <br />
                drop tasks from 'To Do' with <br />
                satisfying ease.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card_content">
              <img src={CardTwo} />
              <h3>Smart Reminders</h3>
              <p>
                Never miss a deadline again. Set due
                <br />
                dates, get timely notifications, and <br />
                integrate with your favorite calender <br />
                apps.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card_content">
              <img src={CardThree} />
              <h3>Seamless Collaboration</h3>
              <p>
                Assign tasks, share files, and leave <br />
                comments. Keep your team in sync and
                <br />
                your projects moving forward together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature
