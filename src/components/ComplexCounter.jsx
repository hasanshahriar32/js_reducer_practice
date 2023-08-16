import { useReducer } from "react";

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };

    default:
      return state;
  }
};
function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter App: {count.counter}</h1>
      <button
        style={{ marginBottom: "2px" }}
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        Decrement by 2
      </button>
    </>
  );
}

export default ComplexCounter;
