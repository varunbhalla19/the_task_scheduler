import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Showcase from "./Components/Showcase/Showcase";
import Home from "./Pages/Home/Home";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  const [opened, open] = useState(false);

  console.log("opened => ", opened);

  return (
    <div className="App">
      <Sidebar />
      <Showcase>
        <Header open={open} opened={opened} />
        <Home />
      </Showcase>

      <AddTask open={open} opened={opened} />
    </div>
  );
}

export default App;
