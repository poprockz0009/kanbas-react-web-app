import { React, useState, useEffect } from "react"; //,{useState}                ******
import { useParams } from "react-router-dom";
// import db from "../../Database";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);

  const dispatch = useDispatch();

  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  }; // --> New createModule client function and invoke it with the courseId and module object.
  // Dispatches the new module from the server to the addModule reducer function which will add it
  // to the reducer's modules state variable

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  // const { courseId } = useParams();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter((module) => module._id !== moduleId));
  // };

  return (
    <div class="d-flex flex-column">
      <div class="d-flex flex-row p-2">
        <div className="module-padding">
          <button
            type="button"
            class="btn btn-secondary wd-flex-grow module-button"
          >
            Collapse All
          </button>{" "}
        </div>
        <div className="module-padding">
          <button
            type="button"
            class="btn btn-secondary wd-flex-grow module-button"
          >
            View Progress
          </button>
        </div>
        <div className="module-padding">
          <button
            type="button"
            class="btn btn-secondary wd-flex-grow module-button dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Publish All
          </button>
        </div>
        <ul class="dropdown-menu">
          <li class="dropdown-item">Action</li>
          <li class="dropdown-item">Another action</li>
          <li class="dropdown-item">Something else here</li>
        </ul>
        <div className="module-padding">
          <button
            type="button"
            class="btn btn-danger wd-flex-grow module-button"
            onClick={handleAddModule} // WAS: {() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add Module
          </button>
        </div>
        <div className="module-padding">
          <button
            type="button"
            class="btn btn-danger wd-flex-grow module-button"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          {/* <button>Add</button> */}
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
        </li>

        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item m-2 module-container rounded-0"
            >
              <button onClick={() => dispatch(setModule(module))}>Edit</button>
              <button onClick={() => handleDeleteModule(module._id)}>
                Delete
              </button>

              <h3 class="module-title">{module.name}</h3>
              <p>{module.description}</p>
            </li> // WAS: dispatch(deleteModule(module._id))}
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
