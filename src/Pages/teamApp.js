import React from "react";
import "./TeamApp.css";
import { useNavigate } from "react-router-dom";

export default function TeamApp() {
  const navigate = useNavigate();
  function NavigateToHome() {
    navigate("/");
  }

  function NavigateToTeamApp() {
    window.open("https://team-app.webflow.io/");
  }

  return (
    <div className="page-container">
      <div className="introduction-section">
        <div className="navbar-container">
          <div className="navbar-icon">Daniel.</div>

          <div className="navbar-navigation-container">
            <button onClick={NavigateToHome}>home</button>
            <button>get in touch</button>
          </div>
        </div>

        <div>
          <p>Project Showcase</p>
          <h1>Team Website</h1>

          <p>
            A full website design and build for a concept team collaboration
            platform. This website also includes a beautiful blog. I have built
            the website and the blog using React.
          </p>

          <div>
            <button onClick={NavigateToTeamApp}>visit live site </button>
          </div>
        </div>
      </div>

      <div className="website-example">
        <div className="website-example-divider">
          <div className="website-example-image">
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-divider">
          <div className="footer-left-side">
            <h1>Want to work?</h1>

            <p>All rights reserved - Daniel Herrgott</p>
          </div>

          <div className="footer-right-side">
            <p>
              If you need a modern and powerful website for your business,
              startup or personally. I am available for work. You can email me
              directly at codeguysdevelopment@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
