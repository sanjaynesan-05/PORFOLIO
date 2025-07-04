import React, { useEffect, useState } from "react";
import MetallicPaint, { parseLogoImage } from "./MetallicPaint";
import codeImage from "../assets/code.png"; // Adjust path if your structure differs

export default function MetallicPaintLoader() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    async function loadImage() {
      try {
        const response = await fetch(codeImage);
        const blob = await response.blob();
        const { imageData } = await parseLogoImage(blob);
        setImageData(imageData);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    }

    loadImage();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {imageData ? (
        <MetallicPaint imageData={imageData} />
      ) : (
        <p style={{ color: "#ccc" }}>Loading metallic effect...</p>
      )}
    </div>
  );
}
