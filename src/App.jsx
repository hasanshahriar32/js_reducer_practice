import { useReducer } from "react";
import "./App.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter App: {count}</h1>
      <button
        style={{ marginRight: "2px" }}
        onClick={() => dispatch("increment")}
      >
        Increment
      </button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </>
  );
}

export default App;
