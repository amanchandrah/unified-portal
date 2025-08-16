"use client";
import { useEffect, useRef, useState } from "react";

export default function AccessDenied() {
  const [mounted, setMounted] = useState(false);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);

  useEffect(() => {
    setMounted(true); // prevent SSR render
    if (!mounted) return;

    const type = (el, text, speed = 60) =>
      new Promise((res) => {
        let i = 0;
        const tick = () => {
          el.textContent += text[i++];
          if (i < text.length) setTimeout(tick, speed);
          else res();
        };
        tick();
      });

    const animate = async () => {
      await type(line1Ref.current, "ACCESS DENIED", 60);
      await type(line2Ref.current, "ONLY FOR ORGANISERS", 60);
      await type(line3Ref.current, "User tried to enter Death Valley 👀", 60);
    };

    animate();
  }, [mounted]);

  if (!mounted) return null; // ← stops double render

  return (
    <div className="flex items-center justify-center min-h-screen bg-black font-['creepster']">
      <div className="text-center text-red-600">
        <h1 ref={line1Ref} className="text-7xl md:text-9xl mb-4" />
        <p ref={line2Ref} className="text-3xl md:text-4xl text-red-400 mb-2" />
        <p ref={line3Ref} className="text-xl md:text-2xl text-red-300" />
      </div>
    </div>
  );
}