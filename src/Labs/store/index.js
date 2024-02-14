import { configureStore } from "@reduxjs/toolkit";
import helloreducer from "../a4/ReduxExamples/HelloRedux/helloreducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloreducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;
