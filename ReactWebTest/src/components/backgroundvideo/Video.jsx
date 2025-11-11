import React from "react";
import backgroundVideo from "../pictures/background.mp4";
import "./VideoBackground.css";

export default function VideoBackground() {
  return (
    <>
      <video src={backgroundVideo} autoPlay loop muted></video>
    </>
  );
}
