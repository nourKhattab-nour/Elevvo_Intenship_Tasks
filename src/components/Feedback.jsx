import React from "react";
import FeedbackOne from "../assets/FeedbackOne.png";
import FeedbackTwo from "../assets/FeedbackTwo.png";
import FeedbackThree from "../assets/FeedbackThree.png";

const Feedback = () => {
  return (
    <div className="Feedback_section">
      {/* Top Section */}
      <div className="top_section">
        <p className="title">Loved by Professionals Worldwide</p>
        <p className="Description">
          Don't just take our word for it. Here's what our users are saying
        </p>
      </div>

      {/* Down Section */}
      <div className="down_section">
        {/* Card 1 */}
        <div className="card">
          <div className="card_content">
            <p>
              "TaskFlow has been a game-changer for <br /> my freelance
              business. I can finally see all <br /> my projects in one place,
              and the clean <br /> interface helps me stay focused. I'm <br />{" "}
              getting more done in less time!"
            </p>
            <img src={FeedbackOne} alt="Feedback One" />
          </div>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="card_content">
            <p>
              "We switched our entire marketing team <br /> to TaskFlow.
              Collaboration is smoother, <br /> and we have clear visibility on
              who is <br /> doing what. The reporting features are <br />{" "}
              surprisingly powerful."
            </p>
            <img src={FeedbackTwo} alt="Feedback Two" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="card_content">
            <p>
              "As a student, balancing coursework and <br /> personal projects
              was a nightmare. <br /> TaskFlow's simple design helped me get{" "}
              <br /> organized without a steep learning curve. <br /> Highly
              recommend!"
            </p>
            <img src={FeedbackThree} alt="Feedback Three" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
