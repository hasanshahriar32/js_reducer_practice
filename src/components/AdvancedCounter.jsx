import { useReducer } from "react";

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
function AdvancedCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter App: {count}</h1>
      <button
        style={{ marginBottom: "2px" }}
        onClick={() => dispatch("increment")}
      >
        Increment
      </button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </>
  );
}

export default AdvancedCounter;
