import React from "react";
import ModuleList from "./ModuleList";
import CourseNavigation from "../CourseNavigation";
import "./index.css";

function Modules() {
  return (
    <div>
      <h2 className="title-padding">Modules</h2>
      <ModuleList />
    </div>
  );
}

export default Modules;
