import React from "react";
import "./App.css";
import { Person, Country } from "./components/Person";

function App() {
  return (
    <>
      <h1>Typescript</h1>
      <Person
        name="Daniel"
        email="daniel@gmail.com"
        age={9}
        friends={["david", "John", "janeek"]}
        country={Country.Sweden}
      />
    </>
  );
}

export default App;
