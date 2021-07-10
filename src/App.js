import React from "react";
import "./styles.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';

export default function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}
