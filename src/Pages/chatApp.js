import React from "react";
import "./ChatApp.css";
import { useNavigate } from "react-router-dom";

export default function ChatApp() {
  const navigate = useNavigate();
  function NavigateToHome() {
    navigate("/");
  }

  function NavigateToChatApp() {
    window.open("https://chat-app-homepage.webflow.io/");
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
          <h1>Chat App Website</h1>

          <p>
            This is a homepage design and build for a concept project - a chat
            application. I have designed the pages first then later built a
            responsive website using React.
          </p>

          <div>
            <button onClick={NavigateToChatApp}>visit live site </button>
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
