"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import Marquee from "@/components/marquee";
import BottomBar from "@/components/bottomBar";
import WindowPopup from "@/components/windowPop";
import CircularText from "@/components/spinningText";

export default function LandingPage() {
  const [isClient, setIsClient] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showPopups, setShowPopups] = useState(false);
  const isMobile = useMobile();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  const handleStart = () => {
    setHasStarted(true);

    // Start video playback with sound
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Landing Intro Screen */}
      {!hasStarted && (
        <div
          className="absolute inset-0 z-50 flex flex-col items-center justify-center text-white text-center px-4"
          style={{
            backgroundImage: "url('/bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Welcome</h1>
          <Button onClick={handleStart} size="lg" className="bg-white text-black hover:bg-white/90">
            Start Your Experience
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Main Experience After Start */}
      {isClient && hasStarted && (
        <>
          <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 h-full w-full object-cover z-0">
            <source src="https://res.cloudinary.com/dlaw8kqqo/video/upload/v1745746108/desktop_pvcyev.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay with lower z-index */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Header with Marquee */}
          <header className="absolute top-0 w-full bg-black/30 backdrop-blur-sm border-b border-white/10 z-20">
            <div className="h-16 flex items-center px-6">
              <div className="running-text-container w-full overflow-hidden">
                <Marquee />
              </div>
            </div>
          </header>

          {/* Audio Control */}
          <button
            onClick={toggleMute}
            className="absolute top-20 right-6 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-white hover:bg-black/40 transition-colors"
            aria-label={isMuted ? "Unmute background music" : "Mute background music"}
          >
            {isMuted ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>

          {/* Main Content */}
          <main className="absolute inset-0 flex items-center justify-center px-4 text-center text-white z-10">
            <div className="max-w-3xl space-y-6">
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
                {/* <Button size="lg" className="bg-white text-black hover:bg-white/90" onClick={toggleMute}>
                  {isMuted ? "Unmute" : "Mute"}
                </Button> */}
              </div>
            </div>
            <div className=" hidden lg:flex rounded-full neon-box-style justify-center cursor-pointer bg-white/10 border border-white/20  z-30" onMouseEnter={() => setShowPopups(true)} onMouseLeave={() => setShowPopups(false)}>
              <CircularText text="FAT*CRACKER*" onHover="speedUp" spinDuration={20} className="custom-class" />
            </div>

            {/* Tampilkan kedua window dengan animasi berbeda */}
            {showPopups && (
              <>
                <WindowPopup title="" direction="left-right" position="left" onClose={() => setShowPopups(false)}>
                  <p>The nectar of the gods!</p>
                  <p>
                    The only fuel that powers Cheeto-
                    <br />
                    dusted keyboards
                  </p>
                  <p>Supreme stimulation</p>
                </WindowPopup>

                <WindowPopup title="" direction="right-left" position="right" onClose={() => setShowPopups(false)}>
                  <p>Primary food group for cracka'z</p>
                  <p>Fueling neckbeards since 1948</p>
                  <p>Taste like diabetes</p>
                </WindowPopup>
              </>
            )}
          </main>

          <BottomBar />
        </>
      )}
    </div>
  );
}
