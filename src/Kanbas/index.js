import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
// import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

import Signin from "../project/users/signin";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "https://node-server-app-7dbg.onrender.com/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
    setCourse({ name: "" });
  };

  const deleteCourse = async (courseId) => {
    console.log("delete");
    const response = await axios.delete(`${URL}/${courseId}`);
    console.log(response);
    setCourses(courses.filter((c) => c._id !== courseId));
    console.log(courses);
  };

  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div className="" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />

            <Route
              path="Account"
              element={<h1 className="account-padding">Account</h1>}
            />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
      </div>
    </Provider>
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
