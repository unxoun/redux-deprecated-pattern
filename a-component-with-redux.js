import { createStore } from "redux";
import { useState } from "react";

// reducer
const counterReducre = (state = { value: 0 }, action) => {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
  }
};

// store
const store = createStore(counterReducre);

export default function Redux() {
  //
  const [counterValue, setCounterValue] = useState(null);
  store.subscribe(() => {
    // this callback gets invoked on every store update.
    const storeState = store.getState();
    setCounterValue(storeState.value);
  });

  //
  const handleClick = () => {
    store.dispatch({ type: "counter/incremented" });
  };

  //
  return <button onClick={handleClick}>{counterValue}</button>;
}
