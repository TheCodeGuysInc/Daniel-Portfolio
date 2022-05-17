import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useHistory,
  Redirect,
  Link,
} from "react-router-dom";

import HomePage from "./Pages/Home";
import TeamApp from "./Pages/TeamApp";
import ChatApp from "./Pages/ChatApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/chatApp" element={<ChatApp />}></Route>
          <Route path="/teamApp" element={<TeamApp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    // <div className="page-container">
    //   <div className="introduction-section">
    //     <div className="navbar-container">
    //       <div className="navbar-icon">Daniel.</div>

    //       <div className="navbar-navigation-container">
    //         <button>my work</button>
    //         <button>get in touch</button>
    //       </div>
    //     </div>

    //     <div>
    //       <h1>
    //         Hi, I'm Daniel, <span>Web Designer</span> and{" "}
    //         <span>Full Stack</span> Developer
    //       </h1>

    //       <p>
    //         I design and build beautiful websites for businesses around the
    //         globe. If you need a modern and powerful website, send me and email.
    //         If we are a good fit, I will give you a time and cost estimate.
    //       </p>

    //       <div>
    //         <button>see my work</button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="website-example">
    //     <div className="website-example-divider">
    //       <div className="website-example-text">
    //         <p>Latest Work</p>
    //         <h1>Chat App website</h1>

    //         <div>
    //           <p>Website Design</p>
    //           <p>Full Stack Development</p>
    //           <p>Concept</p>
    //         </div>

    //         <p>
    //           This is a homepage design and build for a concept project - a chat
    //           application. I have deisnged the page first then later built a
    //           responsive webpage using React
    //         </p>

    //         <div>
    //           <button>see this project</button>
    //         </div>
    //       </div>

    //       <div className="website-example-image">
    //         <img src="" alt="" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="website-example">
    //     <div className="website-example-divider">
    //       <div className="website-example-text">
    //         <p>Latest Work</p>
    //         <h1>Team website</h1>

    //         <div>
    //           <p>Website Design</p>
    //           <p>Full Stack Development</p>
    //           <p>Concept</p>
    //         </div>

    //         <p>
    //           A full website design and build for a concept team collaboration
    //           platform. This website also includes a beautiful blog. I have
    //           build the website and the blog using Reacct.
    //         </p>

    //         <div>
    //           <button>see this project</button>
    //         </div>
    //       </div>

    //       <div className="website-example-image">
    //         <img src="" alt="" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="about-me">
    //     <div className="website-example-divider">
    //       <div className="website-example-text">
    //         <h1>What I do</h1>
    //       </div>

    //       <div className="website-example-image">
    //         <div>
    //           <h2>Design</h2>
    //           <p>
    //             I design beautiful and powerful websites for modern businesses.
    //             Any business today needs a website that wins customers trust and
    //             helps you do your business well. I make sure your website up to
    //             that standard.
    //           </p>
    //         </div>

    //         <div>
    //           <h2>Development</h2>
    //           <p>
    //             I build websites using best practices and up to date coding
    //             standards. I create responsive, powerful and fully custom
    //             websites using React, JavaScript, Html, CSS, and much more. I
    //             will walk your team through how to edit website content quickly
    //             and easily.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="footer">
    //     <div className="footer-divider">
    //       <div className="footer-left-side">
    //         <h1>Want to work?</h1>

    //         <p>All rights reserved - Daniel Herrgott</p>
    //       </div>

    //       <div className="footer-right-side">
    //         <p>
    //           If you need a modern and powerful website for your business,
    //           startup or personally. I am available for work. You can email me
    //           directly at codeguysdevelopment@gmail.com
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
