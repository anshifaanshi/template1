import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  const splineRef = useRef(null);

  function handleLoad(splineApp) {
    splineRef.current = splineApp;
    // Example: find object by name and animate
    const lineObj = splineApp.findObjectByName("Line"); 
    // then you can set its rotation, position, or trigger events
  }

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Spline 
        scene="https://prod.spline.design/HSzlAbGOsTRvwq2h/scene.splinecode" 
        onLoad={handleLoad}
      />
    </div>
  );
}
