import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div className="" style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route
            path="Account"
            element={<h1 className="account-padding">Account</h1>}
          />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;

// import KanbasNavigation from "./KanbasNavigation";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./Dashboard";
// // import "./index.css"; // optionally import CSS files as needed
// function Kanbas() {
//   return (
//     <div className="d-flex">
//       <KanbasNavigation />
//       <div>
//         {/* <h1>Account</h1>
//         <h1>Dashboard</h1>
//         <h1>Courses</h1> */}
//         <Routes>
//           <Route path="/" element={<Navigate to="Dashboard" />} />
//           <Route path="Account" element={<h1>Account</h1>} />
//           <Route path="Dashboard" element={<Dashboard />} />
//           <Route path="Courses/*" element={<h1>Courses</h1>} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
// export default Kanbas;
