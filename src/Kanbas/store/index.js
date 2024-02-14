import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";

const store = configureStore({
  reducer: {
    modulesReducer,
  },
});

export default store;

// configure a new store
// import reducer

// add reducer to store
