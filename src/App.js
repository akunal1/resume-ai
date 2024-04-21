import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
import "./css/App.css";
import "./css/responsive.css";
import Global from "./components/Global";
import FullPageIframe from "./components/Stream";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Global />} />
        <Route path="/ipl-stream" element={<FullPageIframe />} />
      </Routes>
    </Router>
  );
}

export default App;
