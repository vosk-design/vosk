"use client";
import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";

export default function Video({
  src,
  isArticle,
}: {
  src: string;
  isArticle: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "100px 0px" }
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
      controls={false}
      className={cn(
        "object-cover w-full rounded-2xl snap-center border border-gray-200 max-w-4xl z-10 peer-hover:opacity-25 transition-all duration-300 peer-hover:blur-sm",
        isArticle ? "w-full h-full" : "h-[250px]"
      )}
    />
  );
}
