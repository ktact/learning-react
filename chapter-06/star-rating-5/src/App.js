import React from "react";
import StarRating from "./StarRating";

export default function App() {
  return (
    <StarRating
      style={{ backgroundColor: "lightblue" }}
      totalStars={10}
      onDoubleClick={e => alert("double click")}
    />
  );
}
