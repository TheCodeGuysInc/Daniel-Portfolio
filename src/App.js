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
  );
}

export default App;
