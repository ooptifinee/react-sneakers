import React from "react";
import 'macro-css'
import './App.css';
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Content from "./components/Content";

function App() {
  return <div className="wrapper clear">
    <Drawer/>
    <Header/>
    <Content/>
  </div>;
}

export default App;
