import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const URL = "https://node-server-app-7dbg.onrender.com/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  // create a state variable that holds
  // default values for the form below.
  // eventually we'll fetch this initial
  // data from the server and populate
  // the form with the remote data so
  // we can modify it here in the UI

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`} // encode the title in the URL that
        className="btn btn-primary me-2 float-end" // updates the title
      >
        Update Title
      </a>
      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        } // form element to edit local state variable
        // used to encode in URL that updates property
        // in remote object
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a
        href="https://node-server-app-7dbg.onrender.com/a5/assignment"
        className="btn btn-primary me-2"
      >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href="https://node-server-app-7dbg.onrender.com/a5/assignment/title"
        className="btn btn-primary me-2"
      >
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;
