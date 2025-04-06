"use client";

import { useEffect, useRef, useState } from "react";

export default function Video({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (visible) {
      video.src = src; // Load only when visible
      video.play().catch(() => {}); // Autoplay muted works in modern browsers if playsInline
    } else {
      video.pause();
      video.removeAttribute("src"); // Unload video from memory
      video.load();
    }
  }, [visible, src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      style={{ width: "100%", height: "auto" }}
      controls={false}
    />
  );
}
