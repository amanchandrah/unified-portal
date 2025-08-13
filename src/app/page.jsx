"use client";
import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
});

export default function LoginPage() {
  const [typewriterText, setTypewriterText] = useState("");
  const [showElements, setShowElements] = useState({
    logo: false,
    unified: false,
    portal: false,
    department: false,
    paradox: false,
    button: false,
    restricted: false,
  });

  // Typewriter effect
  useEffect(() => {
    if (!showElements.department) return;
    const text = "Department of Outreach & Hospitality";
    let idx = 0;
    const timer = setInterval(() => {
      setTypewriterText(text.slice(0, idx));
      idx++;
      if (idx > text.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, [showElements.department]);

  // Staggered reveal timers
  useEffect(() => {
    const t = [];
    t.push(setTimeout(() => setShowElements((p) => ({ ...p, logo: true })), 500));
    t.push(setTimeout(() => setShowElements((p) => ({ ...p, unified: true })), 1000));
    t.push(setTimeout(() => setShowElements((p) => ({ ...p, portal: true })), 1500));
    t.push(setTimeout(() => setShowElements((p) => ({ ...p, department: true })), 2000));
    t.push(setTimeout(() => setShowElements((p) => ({ ...p, paradox: true })), 2500));
    t.push(setTimeout(() => setShowElements((p) => ({ ...p, button: true })), 3000));
    t.push(setTimeout(() => setShowElements((p) => ({ ...p, restricted: true })), 3500));
    return () => t.forEach(clearTimeout);
  }, []);

  // Binary rain
  useEffect(() => {
    const canvas = document.getElementById("rain-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let cols, drops, frameId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cols = Math.ceil(canvas.width / 20);   // ← ONLY this line changed
      drops = Array(cols).fill(0);
    };
    
    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "15px monospace";
      ctx.textAlign = "center";
      for (let i = 0; i < cols; i++) {
        const x = i * 20;
        const y = drops[i] * 20;
        ctx.fillStyle = "#00ffc3";
        ctx.fillText(Math.random() > 0.5 ? "0" : "1", x, y);
        if (y > canvas.height) drops[i] = 0;
        drops[i] += 0.3;
      }
      frameId = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", resize);
    resize();
    draw();
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const handleGoogleLogin = () => signIn("google", { callbackUrl: "/home", redirect: true });

  return (
    <div className={`min-h-screen bg-black flex flex-col relative overflow-hidden ${audiowide.className}`}>
      <canvas
        id="rain-canvas"
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8 space-y-6 md:space-y-8 relative z-10">
        {/* Logo */}
        <div
          className={`w-16 h-16 md:w-20 md:h-20 bg-black rounded-xl flex items-center justify-center border-2 border-[#00ffc3] shadow-[0_0_20px_rgba(0,255,195,0.3)] transition-all duration-1000 transform ${
            showElements.logo ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-180"
          }`}
        >
          <div className="text-2xl md:text-3xl font-bold text-[#00ffc3]">U</div>
        </div>

        {/* UNIFIED */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#00ffc3] tracking-wider border-2 border-[#00ffc3] px-4 py-2 rounded-lg shadow-[0_0_20px_rgba(0,255,195,0.3)] transition-all duration-1000 ${
            showElements.unified ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          UNIFIED
        </h1>

        {/* Central Portal */}
        <p
          className={`text-lg md:text-xl text-[#00ffc3] tracking-wide transition-all duration-1000 ${
            showElements.portal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Central Portal
        </p>

        {/* Department typewriter */}
        <div
          className={`w-full px-2 transition-all duration-1000 ${
            showElements.department ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#a9adc1] font-bold leading-tight tracking-wide drop-shadow-[0_0_15px_rgba(169,173,193,0.3)] whitespace-nowrap overflow-hidden">
            {typewriterText}
            <span className="animate-pulse text-[#a9adc1]">|</span>
          </p>
        </div>

        {/* IITM PARADOX */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl text-[#ff0000] font-bold tracking-wider drop-shadow-[0_0_15px_rgba(255,0,0,0.5)] transition-all duration-1000 ${
            showElements.paradox ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          IITM PARADOX
        </p>

        {/* Google login button */}
        <button
          onClick={handleGoogleLogin}
          className={`bg-[#00ffc3] hover:bg-[#00d4a3] text-black font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all duration-500 flex items-center justify-center space-x-3 transform hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,195,0.6)] text-sm md:text-base ${
            showElements.button ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <i className="fab fa-google text-lg md:text-xl" />
          <span>Continue with Google</span>
        </button>

        {/* Restricted Access */}
        <div
          className={`max-w-xs px-2 transition-all duration-1000 ${
            showElements.restricted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="bg-black border border-[#ff0000] rounded-lg p-2 text-center shadow-[0_0_15px_rgba(255,0,0,0.2)]">
            <p className="text-[#ff0000] font-bold text-xs mb-1">Restricted Access</p>
            <p className="text-[#a9adc1] text-xs">IITM email addresses only</p>
          </div>
        </div>
      </div>

      {/* Tailwind JIT needs these colours once */}
      <div className="hidden bg-[#00ffc3] bg-[#ff0000] bg-[#a9adc1]" />
    </div>
  );
}