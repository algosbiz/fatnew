// components/IntroScreen.tsx
"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center text-white text-center px-4"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome</h1>
      <Button onClick={onStart} size="lg" className="bg-white text-black hover:bg-white/90">
        Start Your Experience
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
