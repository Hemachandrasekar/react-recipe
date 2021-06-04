import React from "react";
import "./styles.css";
import Recipe from "./Recipe";

export default function App() {
  return (
    <div className="flex bg-green-700 text-white p-4">
      <Recipe />
    </div>
  );
}
