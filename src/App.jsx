import { useState } from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";

function App() {
  return (
    <>
      <div className="main-screen">
        <div className="first-component">
          <FirstComponent />
        </div>
        <div className="second-component">
          <SecondComponent />
        </div>
        <div className="third-component">
          <ThirdComponent />
        </div>
      </div>
    </>
  );
}

export default App;
