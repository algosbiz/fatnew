"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import Marquee from "@/components/marquee";
import BottomBar from "@/components/bottomBar";

export default function LandingPage() {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useMobile();
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Function to toggle audio mute state
  const toggleMute = () => {
    const audioElement = document.getElementById("background-audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.muted = !audioElement.muted;
      setIsMuted(!isMuted);
    }
  };

  // Function to start audio (needed for mobile devices)
  const startAudio = () => {
    const audioElement = document.getElementById("background-audio") as HTMLAudioElement;
    if (audioElement) {
      audioElement.play();
      audioElement.muted = false;
      setIsMuted(false);
    }
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Audio */}
      {isClient && (
        <audio id="background-audio" autoPlay loop muted className="hidden">
          <source src="/music.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}

      {/* Video Background - Different for Mobile and Desktop */}
      {isClient && (
        <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 h-full w-full object-cover">
          {isMobile ? (
            <source src="https://res.cloudinary.com/dlaw8kqqo/video/upload/v1745746108/desktop_pvcyev.mp4" type="video/mp4" />
          ) : (
            <source src="https://res.cloudinary.com/dlaw8kqqo/video/upload/v1745746108/desktop_pvcyev.mp4" type="video/mp4" />
          )}
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay to darken the video slightly */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Navbar with improved running text */}
      <header className="absolute top-0 w-full bg-black/30 backdrop-blur-sm border-b border-white/10 z-10">
        <div className="h-16 flex items-center px-6">
          <div className="running-text-container w-full overflow-hidden">
            {/* <div className="running-text-wrapper">
              <div className="running-text-content">
                <span>
                  • Welcome to our innovative platform • Discover amazing features • Join our community today • Limited
                  time offer • Exclusive content available now •
                </span>
              </div>
              <div className="running-text-content" aria-hidden="true">
                <span>
                  • Welcome to our innovative platform • Discover amazing features • Join our community today • Limited
                  time offer • Exclusive content available now •
                </span>
              </div>
            </div> */}
            <Marquee />
          </div>
        </div>
      </header>

      {/* Audio Control Button */}
      <button
        onClick={toggleMute}
        className="absolute top-20 right-6 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-black/40 transition-colors"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      {/* Main Content */}
      <main className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
        <div className="max-w-3xl space-y-6">
          {/* <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Welcome to the Future</h1>
          <p className="text-lg sm:text-xl">Experience innovation like never before with our cutting-edge solutions.</p> */}
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90"
              onClick={handlePlay} // Also start audio when user interacts
            >
              Play
              {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20"
              onClick={startAudio} // Also start audio when user interacts
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </main>
      <BottomBar />
    </div>
  );
}
