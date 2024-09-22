// NewColorForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [name, setName] = useState("");
  const [hex, setHex] = useState("#000000");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name, hex });
    navigate("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="hex">Color Value</label>
        <input
          type="color"
          id="hex"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          required
        />
      </div>
      <button>Add Color</button>
    </form>
  );
}

export default NewColorForm;
