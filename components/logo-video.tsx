"use client";

import { useRef, useState, useEffect } from "react";

export default function LogoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReversed, setIsReversed] = useState(false);
  const animationRef = useRef<number>(0);
  const frameInterval = 1000 / 30; // ~30fps
  const lastFrameTimeRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playForward = () => {
      video.playbackRate = 1;
      video.play();
    };

    const playReverse = () => {
      video.pause();
      const step = 0.05; // Time to move backward each frame
      lastFrameTimeRef.current = 0;

      const reverseAnimation = (timestamp: number) => {
        if (
          !lastFrameTimeRef.current ||
          timestamp - lastFrameTimeRef.current >= frameInterval
        ) {
          if (video.currentTime <= 0) {
            setIsReversed(false);
            playForward();
            return;
          }

          video.currentTime = Math.max(0, video.currentTime - step);
          lastFrameTimeRef.current = timestamp;
        }

        animationRef.current = requestAnimationFrame(reverseAnimation);
      };

      animationRef.current = requestAnimationFrame(reverseAnimation);
    };

    const handleEnded = () => {
      if (!isReversed) {
        setIsReversed(true);
        playReverse();
      }
    };

    video.addEventListener("ended", handleEnded);

    // Initial setup
    if (isReversed) {
      playReverse();
    } else {
      playForward();
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isReversed]);

  return (
    <video
      ref={videoRef}
      src="/logo.mp4"
      autoPlay
      muted
      playsInline
      preload="metadata"
      className="w-full h-auto object-cover"
    />
  );
}
