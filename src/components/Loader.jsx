import React, { useEffect, useState } from "react";

// Optional: simulate progress if not using real loading data
const useFakeProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 5;
        return next >= 100 ? 100 : next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return { progress };
};

const CanvasLoader = () => {
  const { progress } = useFakeProgress();

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#0f172a]"
      style={{ fontFamily: "sans-serif" }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </div>
  );
};

export default CanvasLoader;
