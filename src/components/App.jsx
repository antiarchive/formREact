import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState(false);
  const [isMousedOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");

  function handleClick(event) {
    //console.log("clicked");
    setHeading(name);
    event.preventDefault();
  }
  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    //console.log(event.target.value);
    setName(event.target.value);
    console.log(name);
  }

  return (
    <div className="container">
      <h1>hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="what is your name?"
          value={name}
        />
        <button
          id="button"
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
