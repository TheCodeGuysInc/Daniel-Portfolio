import React from "react";
import "./ChatApp.scss";
import { useNavigate } from "react-router-dom";
import ChatWebsite from "../Assets/Images/chat-app-full.png";

export default function ChatApp() {
  const navigate = useNavigate();
  function NavigateToHome() {
    navigate("/");
  }

  function NavigateToChatApp() {
    window.open("https://chat-app-homepage.webflow.io/");
  }

  return (
    <div className="chat-app-page-container">
      <div className="chat-app-introduction-section">
        <div className="chat-app-navbar-container">
          <div className="chat-app-navbar-icon">Daniel.</div>

          <div className="chat-app-navbar-navigation-container">
            <a className="chat-app-navbar-link" href="/">
              home
            </a>
            <button className="chat-app-navbar-button">get in touch</button>
          </div>
        </div>

        <div className="chat-app-developer-description-container">
          <p className="chat-app-introduction-heading">Project Showcase</p>
          <h1 className="chat-app-introduction-title">Chat App Website</h1>

          <p className="chat-app-introduction-description">
            This is a homepage design and build for a concept project - a chat
            application. I have desinged the page first then later built a
            responsive webpage using React
          </p>

          <div className="chat-app-visit-live-site-button-container">
            <button
              className="chat-app-visit-live-site-button"
              onClick={NavigateToChatApp}
            >
              visit live site{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="chat-app-website-example">
        <div className="chat-app-website-example-divider">
          <div className="chat-app-website-image-container">
            <img
              className="chat-app-website-image"
              src={ChatWebsite}
              alt="team-website.png"
            />
          </div>
        </div>
      </div>

      <div className="chat-app-footer">
        <div className="chat-app-footer-divider">
          <div className="chat-app-footer-left-side">
            <p className="chat-app-footer-heading">
              Want to{" "}
              <span className="chat-app-footer-heading-span">work?</span>
            </p>

            <p className="chat-app-copyright-statement">
              &copy; All rights reserved - Daniel Herrgott
            </p>
          </div>

          <div className="chat-app-footer-right-side">
            <p className="chat-app-footer-website-example-description">
              If you need a modern and powerful website for your business,
              startup or personally. I am available for work. You can email me
              directly at{" "}
              <span className="chat-app-footer-description-span">
                codeguysdevelopment@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="mobile-footer" className="chat-app-footer-mobile">
        <div className="chat-app-footer-divider">
          <div className="chat-app-footer-left-side">
            <p className="chat-app-footer-heading">
              Want to{" "}
              <span className="chat-app-footer-heading-span">work?</span>
            </p>

            <p className="chat-app-footer-website-example-description">
              If you need a modern and powerful website for your business,
              startup or personally. I am available for work. You can email me
              directly at{" "}
              <span className="chat-app-footer-description-span">
                codeguysdevelopment@gmail.com
              </span>
            </p>

            <p className="chat-app-copyright-statement">
              &copy; All rights reserved - Daniel Herrgott
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
