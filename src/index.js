import React from "react";
import ReactDOM from "react-dom";

const wasm = import("../build/react_rust_wasm");

wasm.then(wasm => {
  const App = () => {
    return (
      <div>
        <h1>Hi there</h1>
        <button onClick={wasm.big_computation}>Run Computation</button>
        <div>
          <h2> sample</h2>
          <button onClick={wasm.sample}>Run Computation</button>
        </div>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});
