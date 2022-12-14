import React from "react"

import Body from "./components/Body";
import NavBar from "./components/NavBar";

const App = (props) => {
  return (
    <div>
      <h1>Pro Services</h1>
      <NavBar />
      <Body />
    </div>
  );
}

export default App;
