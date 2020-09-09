import React, { useEffect } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Showcase from "./Components/Showcase/Showcase";
import Main from "./Pages/Main/Main";
import Modal from "./Components/Modal/Modal";

function App() {
  useEffect(() => {
    fetch("/hi")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Showcase>
        <Header />
        <Main />
      </Showcase>

      <Modal />
    </div>
  );
}

export default App;

//  Sortable => https://codesandbox.io/s/practical-lehmann-lezmu?file=/src/App.js
