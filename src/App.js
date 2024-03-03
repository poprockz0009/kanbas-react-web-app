// import logo from './logo.svg';
// // import './App.css';
// import logo from "./logo.svg";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Assignment4 from "./Labs/a4";
import Assignment5 from "./Labs/a5";

function App() {
  return (
    <HashRouter>
      <div>
        <div className="list-group">
          <Link className="list-group-item" to="/Labs">
            Labs
          </Link>
          <Link className="list-group-item" to="/hello">
            Hello
          </Link>
          <Link className="list-group-item" to="/Kanbas">
            Kanbas
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/a4/*" element={<Assignment4 />} />
          <Route path="/a5/*" element={<Assignment5 />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
