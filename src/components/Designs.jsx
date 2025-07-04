import React from "react";
import GridMotion from "./GridMotion";

// Importing images from assets/designs
import img1 from "../assets/designs/1.png";
import img2 from "../assets/designs/2.png";
import img3 from "../assets/designs/3.png";
import img4 from "../assets/designs/4.png";
import img5 from "../assets/designs/5.png";
import img6 from "../assets/designs/6.png";
import img7 from "../assets/designs/7.png";
import img8 from "../assets/designs/8.png";
import img9 from "../assets/designs/9.png";
import img10 from "../assets/designs/10.png";
import img11 from "../assets/designs/11.png";
import img12 from "../assets/designs/12.png";
import img13 from "../assets/designs/13.png";
import img14 from "../assets/designs/14.png";
import img15 from "../assets/designs/15.png";

const Designs = () => {
  // Original 15 images
  const baseImages = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
  ];

  // Repeat and slice to fill exactly 28 slots
  const designImages = [...baseImages, ...baseImages]
    .slice(0, 28); // Ensure exactly 28 images

  return (
    <GridMotion
      items={designImages}
      gradientColor="rgba(255,255,255,0.05)"
      title="Design Gallery"
      subtitle="Posters • Logos • Thumbnails"
    />
  );
};

export default Designs;
