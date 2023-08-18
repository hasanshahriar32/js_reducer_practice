import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 100,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.value };
    case "decrement":
      return { ...state, counter: state.counter - action.value };
    case "increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "decrement2":
      return { ...state, counter2: state.counter2 - action.value };

    default:
      return state;
  }
};
function ComplexCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Counter App 1: {count.counter}</h1>
      <button
        style={{ marginBottom: "2px" }}
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 2 })}>
        Decrement by 2
      </button>
      <h1>Counter App 2: {count.counter2}</h1>
      <button
        style={{ marginBottom: "2px" }}
        onClick={() => dispatch({ type: "increment2", value: 1 })}
      >
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 2 })}>
        Decrement by 2
      </button>
    </>
  );
}

export default ComplexCounter;
