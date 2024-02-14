import "./index.css";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { React, useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <>
      <div className="wd-padding">
        <div className={"d-none d-md-block"}>
          <div className={"fs-1"}>Dashboard</div>
          <hr />
        </div>
        <h3 className="wd-font-weight">Published courses ({courses.length})</h3>
        <h5>Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />

        <input
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button onClick={addNewCourse}>Add Course</button>
        <button onClick={updateCourse}>Update</button>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3 pt-4"
              key={course._id}
            >
              <div className="card wd-card-style">
                <div className="wd-card-length wd-bg-color">
                  <BsThreeDotsVertical className="wd-color-col float-end" />
                </div>
                <div className="card-body">
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="text-decoration-none"
                  >
                    <p className="wd-card-heading-fontsize wd-color wd-card-ellipsis mb-1">
                      {course.name}
                    </p>
                    <p className="wd-card-subheading-fontsize wd-card-subheading-col wd-card-ellipsis mb-1">
                      {course._id}
                    </p>
                    <p className="wd-card-small-fontsize wd-card-subheading-col wd-card-ellipsis">
                      {course.term}
                    </p>
                  </Link>
                  <IoNewspaperOutline />{" "}
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;

// import db from "../Database";
// import "./index.css";
// import { Link } from "react-router-dom";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { IoNewspaperOutline } from "react-icons/io5";

// function Dashboard() {
//   const courses = db.courses;
//   return (
//     <>
//       <div className="wd-padding">
//         <div className={"d-none d-md-block"}>
//           <div className={"fs-1"}>Dashboard</div>
//           <hr />
//         </div>
//         <h3 className="wd-font-weight">Published courses ({courses.length})</h3>
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           {courses.map((course, index) => (
//             <div
//               className="col-12 col-sm-6 col-lg-4 col-xl-3 pt-4"
//               key={course._id}
//             >
//               <div className="card wd-card-style">
//                 <div className="wd-card-length wd-bg-color">
//                   <BsThreeDotsVertical className="wd-color-col float-end" />
//                 </div>
//                 <div className="card-body">
//                   <Link
//                     key={course._id}
//                     to={`/Kanbas/Courses/${course._id}`}
//                     className="text-decoration-none"
//                   >
//                     <p className="wd-card-heading-fontsize wd-color wd-card-ellipsis mb-1">
//                       {course.name}
//                     </p>
//                     <p className="wd-card-subheading-fontsize wd-card-subheading-col wd-card-ellipsis mb-1">
//                       {course._id}
//                     </p>
//                     <p className="wd-card-small-fontsize wd-card-subheading-col wd-card-ellipsis">
//                       {course.term}
//                     </p>
//                   </Link>
//                   <IoNewspaperOutline />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;
