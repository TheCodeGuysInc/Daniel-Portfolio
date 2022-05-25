import React from "react";
import "./TeamApp.scss";
import { useNavigate } from "react-router-dom";
import TeamWebsite from "../Assets/Images/team-website-full.png";

export default function TeamApp() {
  const navigate = useNavigate();
  function NavigateToHome() {
    navigate("/");
  }

  function NavigateToTeamApp() {
    window.open("https://team-app.webflow.io/");
  }

  return (
    <div className="team-app-page-container">
      <div className="team-app-introduction-section">
        <div className="team-app-navbar-container">
          <div className="team-app-navbar-icon">Daniel.</div>

          <div className="team-app-navbar-navigation-container">
            <a className="team-app-navbar-link" href="/">
              home
            </a>
            <button className="team-app-navbar-button">get in touch</button>
          </div>
        </div>

        <div className="team-app-developer-description-container">
          <p className="team-app-introduction-heading">Project Showcase</p>
          <h1 className="team-app-introduction-title">Team Website</h1>

          <p className="team-app-introduction-description">
            A full website design and build for a concept team collaboration
            platform. This website also includes a beautiful blog. I have built
            the website and the blog using React.
          </p>

          <div className="team-app-visit-live-site-button-container">
            <button
              className="team-app-visit-live-site-button"
              onClick={NavigateToTeamApp}
            >
              visit live site{" "}
            </button>
          </div>
        </div>
      </div>

      <div className="team-app-website-example">
        <div className="team-app-website-example-divider">
          <div className="team-app-website-image-container">
            <img
              className="team-app-website-image"
              src={TeamWebsite}
              alt="team-website.png"
            />
          </div>
        </div>
      </div>

      <div className="team-app-footer">
        <div className="team-app-footer-divider">
          <div className="team-app-footer-left-side">
            <p className="team-app-footer-heading">
              Want to{" "}
              <span className="team-app-footer-heading-span">work?</span>
            </p>

            <p className="team-app-copyright-statement">
              &copy; All rights reserved - Daniel Herrgott
            </p>
          </div>

          <div className="team-app-footer-right-side">
            <p className="team-app-footer-website-example-description">
              If you need a modern and powerful website for your business,
              startup or personally. I am available for work. You can email me
              directly at{" "}
              <span className="team-app-footer-description-span">
                codeguysdevelopment@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="mobile-footer" className="team-app-footer-mobile">
        <div className="team-app-footer-divider">
          <div className="team-app-footer-left-side">
            <p className="team-app-footer-heading">
              Want to{" "}
              <span className="team-app-footer-heading-span">work?</span>
            </p>

            <p className="team-app-footer-website-example-description">
              If you need a modern and powerful website for your business,
              startup or personally. I am available for work. You can email me
              directly at{" "}
              <span className="team-app-footer-description-span">
                codeguysdevelopment@gmail.com
              </span>
            </p>

            <p className="team-app-copyright-statement">
              &copy; All rights reserved - Daniel Herrgott
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
