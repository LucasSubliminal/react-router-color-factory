// ColorList.js
import React from "react";
import { Link } from "react-router-dom";

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the Color Factory</h1>
      <Link to="/colors/new">Add a New Color</Link>
      <div>
        <h3>Please select a color:</h3>
        <ul>
          {colors.map(color => (
            <li key={color.name}>
              <Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ColorList;
