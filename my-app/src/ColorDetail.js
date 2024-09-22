// ColorDetail.js
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

function ColorDetail({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find(c => c.name.toLowerCase() === color);

  if (!selectedColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div>
      <h1>{selectedColor.name}</h1>
      <div
        style={{
          backgroundColor: selectedColor.hex,
          width: "200px",
          height: "200px",
        }}
      ></div>
      <Link to="/colors">Go Back</Link>
    </div>
  );
}

export default ColorDetail;
