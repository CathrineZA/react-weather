import React from "react";

export default function Weather() {
  return (
    <form>
      <input type="search" placeholder="Enter a city.." />
      <button type="Submit" className="sea">
        Search
      </button>
      <button type="Submit" className="cur">
        Current
      </button>
    </form>
  );
}
