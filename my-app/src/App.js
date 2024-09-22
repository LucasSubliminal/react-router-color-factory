// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetail from "./ColorDetail";
import NewColorForm from "./NewColorForm";

function App() {
  const [colors, setColors] = useState([
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" }
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route
          path="/colors/new"
          element={<NewColorForm addColor={addColor} />}
        />
        <Route path="/colors/:color" element={<ColorDetail colors={colors} />} />
        {/* Redirect any invalid route to /colors */}
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
