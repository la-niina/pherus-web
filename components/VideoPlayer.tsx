"use client";

import { useState, useRef } from "react";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null); // Specify the type explicitly
  const [isPlaying, setPlaying] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false);

  const playPauseHandler = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setPlaying(!isPlaying);
    }
  };

  const fullscreenHandler = () => {
    const video = videoRef.current;
    if (video) {
      if (isFullscreen) {
        document.exitFullscreen();
      } else {
        video.requestFullscreen();
      }
      setFullscreen(!isFullscreen);
    }
  };

  return (
    <div className="flex flex-col col-span-1 rounded-sm">
      <video
        className="w-full rounded-md"
        controls
        preload="none"
        ref={videoRef}
        poster="https://i.ytimg.com/vi/4lIRGPvm4LY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCE-l5tTG0E4NrvbWDGqJ8nM_E-Cw" // Specify the path to your thumbnail image
      >
        <source
          src="https://flowbite.com/docs/videos/flowbite.mp4"
          type="video/mp4"
          sizes="1080"
        />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-col p-2">
        <p className="flex text-sm font-[800] line-clamp-2">
          Marvel What If Season 2 Episode 7 God Hela FULL Breakdown, Ending
        </p>

        <p className="flex text-[10px] font-[200]">
          Marvel What If Season 2 Episode 7 God Hela FULL Breakdown, Ending
        </p>
      </div>
    </div>
  );
}
