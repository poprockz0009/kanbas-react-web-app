import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";

function Dashboard() {
  const courses = db.courses;
  return (
    <>
      <div className="wd-padding">
        <div className={"d-none d-md-block"}>
          <div className={"fs-1"}>Dashboard</div>
          <hr />
        </div>
        <h3 className="wd-font-weight">Published courses ({courses.length})</h3>
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
                  <IoNewspaperOutline />
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

// function Dashboard() {
//   const courses = db.courses;
//   return (
//     <div>
//       <div className={'d-none d-md-block'}>
//         <div className={'fs-1'}>Dashboard</div>
//         <hr />
//       </div>
//       <h3>Published courses ({courses.length})</h3>
//       <div className="list-group">
//         {courses.map((course, index) => (
//           <Link
//             key={index}
//             to={`/Kanbas/Courses/${course._id}`}  //when clicked sends to courses page
//             className="list-group-item"
//           >
//             {course.name}
//             {/* {course._id} */}
//           </Link>
//         ))}
//       </div>
//       {/* <pre>
//         <code>{JSON.stringify(courses, null, 2)}</code>
//       </pre>  */}
//     </div>
//   );
// }

// export default Dashboard;
