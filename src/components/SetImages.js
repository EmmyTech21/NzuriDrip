import React from 'react';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const setImages = {
  "Power Move Set": "src/assets/jogger-set3.png",
  "Urban Camo Set": "src/assets/jogger-set2.png", 
  "Luxe Loungewear Set": "src/assets/jogger-set1.png",
};

export default function SetImages({ color }) {
  return (
    <Zoom>
      <img
        src={setImages[color]}
        alt={`Nzuri Set - ${color}`}
        className="w-full object-cover rounded-lg shadow-md"
        loading="lazy"
      />
    </Zoom>
  );
}