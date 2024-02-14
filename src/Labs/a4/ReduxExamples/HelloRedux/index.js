import { useSelector, useDispatch } from "react-redux";
function HelloRedux() {
  //   const { message } = useSelector((state) => state.helloReducer);
  const state = useSelector((state) => state);
  //   console.log(state);
  const message = state.helloReducer?.message;

  return (
    <div>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
    </div>
  );
}
export default HelloRedux;
