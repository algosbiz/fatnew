"use client";

import React, { useEffect, useRef, useState } from "react";

const Marquee = () => {
  const marqueeRef = useRef<HTMLUListElement>(null);
  const [copied, setCopied] = useState(false);

  const address = "0X888888888888888888888";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const marqueeContent = marqueeRef.current;

    if (!marqueeContent) return;

    root.style.setProperty("--marquee-elements", marqueeContent.children.length.toString());

    const displayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed") || "1", 10);

    for (let i = 0; i < displayed; i++) {
      const clone = marqueeContent.children[i].cloneNode(true);
      marqueeContent.appendChild(clone);
    }
  }, []);

  return (
    <div className="relative overflow-hidden w-full py-4">
      <ul ref={marqueeRef} className="marquee-content flex animate-marquee space-x-8 cursor-pointer" onClick={handleCopy}>
        <li>
          <div className="text-white neon-text-glow text-lg lg:text-2xl font-bold whitespace-nowrap">{address}</div>
        </li>
      </ul>
      {copied && (
        <div
          className="absolute top-4 neon-box-gold left-1/2 transform -translate-x-1/2 bg-[#efd159] bg-opacity-60 backdrop-blur-2xl text-white px-4 py-1 font-bold rounded-sm text-lg shadow"
          style={{
            animation: "fadeInOut 1.5s ease-in-out",
          }}
        >
          Copied!
        </div>
      )}
    </div>
  );
};

export default Marquee;
