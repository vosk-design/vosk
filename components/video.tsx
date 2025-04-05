"use client";

import { cn } from "@/utils/cn";
import { useState, useRef, useEffect } from "react";

export default function Video({ src }: { src: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 3) {
      setIsLoaded(true);
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      onLoadedData={() => setIsLoaded(true)}
      onCanPlay={() => setIsLoaded(true)}
      onPlay={() => setIsLoaded(true)}
      className={cn(
        "object-cover w-full h-auto rounded-2xl snap-center border border-gray-200 bg-gray-300 max-w-4xl",
        !isLoaded && "animate-pulse"
      )}
    />
  );
}
