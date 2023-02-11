import React from "react";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";

export default function App() {
  return (
    <div className="cards">
      <div className="cards--body">
        <Info />
        <About />
        <Interest />
      </div>
    </div>
  )
}