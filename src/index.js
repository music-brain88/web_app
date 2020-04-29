import React from "react";
import ReactDOM from "react-dom";
import { Button } from '@material-ui/core';

import HeaderComponent from './components/header'

const wasm = import("../build/react_rust_wasm");

wasm.then(wasm => {
  const App = () => {
    return (
      <div>
        <HeaderComponent />
        <h1>Hi there</h1>
        <Button variant="contained" color="primary" onClick={wasm.big_computation}>Run Computation</Button>
      </div>
    );
  };
  if (typeof window !== 'undefined'){
  ReactDOM.render(<App />, document.getElementById("root"));
  }
});
