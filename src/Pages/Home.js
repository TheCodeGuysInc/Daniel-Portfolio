import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import ChatApp from "../Assets/Images/chatApp.png";
import TeamApp from "../Assets/Images/teamApp.png";
import ProjectButton from "../Assets/Images/project-button.png";
import WorkButton from "../Assets/Images/work-button.png";

export default function HomePage() {
  const navigate = useNavigate();

  function NavigateToChatApp() {
    navigate("/chatApp");
  }

  function NavigateToTeamApp() {
    navigate("/teamApp");
  }

  function NavigateToHome() {
    navigate("/");
  }

  return (
    <div className="page-container">
      <div className="introduction-section">
        <div className="navbar-container">
          <div className="navbar-icon">Daniel.</div>

          <div className="navbar-navigation-container">
            <a className="navbar-link" href="#work-examples">
              my work
            </a>
            <button className="navbar-button">get in touch</button>
          </div>
        </div>

        <div className="developer-description-container">
          <p className="introduction-title">
            Hi, I'm Daniel,{" "}
            <span className="green-highlight">Web Designer</span> and{" "}
            <span className="green-highlight-sm">Full Stack</span> Developer
          </p>

          <p className="introduction-description">
            I design and build beautiful websites for businesses around the
            globe. If you need a modern and powerful website, send me an email.
            If we are a good fit, I will give you a time and cost estimate.
          </p>

          <div className="see-work-button-container">
            <img
              src={WorkButton}
              alt="workButton.png"
              className="website-project-button"
            />
          </div>
        </div>
      </div>

      <div id="work-examples" className="website-example">
        <div className="website-example-divider">
          <div className="website-example-text-container">
            <p className="website-example-heading">Latest Work</p>
            <p className="website-example-title">Chat App website</p>

            <div className="website-example-boxes-container">
              <p className="website-example-box">Website Design</p>
              <p className="website-example-box">Full Stack Development</p>
              <p className="website-example-box">Concept</p>
            </div>

            <p className="website-example-description">
              This is a homepage design and build for a concept project - a chat
              application. I have deisnged the page first then later built a
              responsive webpage using React
            </p>

            <div className="website-example-text-button">
              <img
                src={ProjectButton}
                alt=""
                onClick={NavigateToChatApp}
                className="website-project-button"
              />
            </div>
          </div>

          <div className="website-example-image-container">
            <img
              src={ChatApp}
              alt="chatApp.png"
              className="website-example-image"
            />
          </div>
        </div>
      </div>

      <div className="website-example">
        <div className="website-example-divider">
          <div className="website-example-text-container">
            <p className="website-example-heading">Latest Work</p>
            <p className="website-example-title">Team App website</p>

            <div className="website-example-boxes-container">
              <p className="website-example-box">Website Design</p>
              <p className="website-example-box">Full Stack Development</p>
              <p className="website-example-box">Concept</p>
            </div>

            <p className="website-example-description">
              A full website design and build for a concept team collaboration
              platform. This website also includes a beautiful blog. I have
              built the website and the blog using React.
            </p>

            <div className="website-example-text-button">
              <img
                src={ProjectButton}
                alt=""
                onClick={NavigateToTeamApp}
                className="website-project-button"
              />
            </div>
          </div>

          <div className="website-example-image-container">
            <img
              src={TeamApp}
              alt="teamApp.png"
              className="website-example-image"
            />
          </div>
        </div>
      </div>

      <div className="about-me">
        <div className="about-me-divider">
          <div className="about-me-text-container">
            <p className="about-me-heading">
              What <span className="highlight-span">I do</span>
            </p>
          </div>

          <div className="about-me-image-container">
            <div>
              <h2>Design</h2>
              <p className="about-me-description">
                I design beautiful and powerful websites for modern businesses.
                Any business today needs a website that wins customers trust and
                helps you do your business well. I make sure your website up to
                that standard.
              </p>
            </div>

            <div>
              <h2>Development</h2>
              <p className="about-me-description">
                I build websites using best practices and up to date coding
                standards. I create responsive, powerful and fully custom
                websites using React, JavaScript, Html, CSS, and much more. I
                will walk your team through how to edit website content quickly
                and easily.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="desktop-footer" className="footer">
        <div className="footer-divider">
          <div className="footer-left-side">
            <p className="footer-heading">
              Want to <span className="footer-heading-span">work?</span>
            </p>

            <p className="copyright-statement">
              &copy; All rights reserved - Daniel Herrgott
            </p>
          </div>

          <div className="footer-right-side">
            <p className="footer-website-example-description">
              If you need a modern and powerful website for your business,
              startup or personally. I am available for work. You can email me
              directly at{" "}
              <span className="footer-description-span">
                codeguysdevelopment@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="mobile-footer" className="footer-mobile">
        <div className="footer-divider">
          <div className="footer-left-side">
            <p className="footer-heading">
              Want to <span className="footer-heading-span">work?</span>
            </p>

            <p className="footer-website-example-description">
              If you need a modern and powerful website for your business,
              startup or personally. I am available for work. You can email me
              directly at{" "}
              <span className="footer-description-span">
                codeguysdevelopment@gmail.com
              </span>
            </p>

            <p className="copyright-statement">
              &copy; All rights reserved - Daniel Herrgott
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
