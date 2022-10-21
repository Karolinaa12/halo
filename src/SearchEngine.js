import React from "react";

export default function SearchEngine() {
  return (
    <div className="WeatherSearch">
      <form>
        <input type="search" placeholder="Type a city" />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
