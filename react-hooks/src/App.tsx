import React from "react";
import "./App.css";
import UseContextComponent from "./components/UseContextComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseStateComponent from "./components/UseStateComponent";
import UseReducerComponent from "./components/useReducerComponents/useReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import CustomHookComponent from "./components/CustomHookComponent";

import EvenMoreReactComponent from "./components/EvenMoreReactComponent";

function App() {
  return (
    <div>
      <h1>even more react component</h1>
      <EvenMoreReactComponent />
      <h1>custom hook</h1>
      <CustomHookComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>UseState</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
