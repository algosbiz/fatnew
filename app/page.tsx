"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Marquee from "@/components/marquee";
import BottomBar from "@/components/bottomBar";
import WindowPopup from "@/components/windowPop";
import CircularText from "@/components/spinningText";
import Image from "next/image";

export default function LandingPage() {
  const [isClient, setIsClient] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showPopups, setShowPopups] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
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
  setIsFadingOut(true); // mulai animasi keluar

  setTimeout(() => {
    setHasStarted(true); // tampilkan konten utama setelah animasi selesai
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
  }, 700);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // sesuaikan breakpoint sesuai kebutuhanmu
    };

    handleResize(); // cek saat mount
    window.addEventListener("resize", handleResize); // update saat resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Landing Intro Screen */}
      {!hasStarted && (
        <div
          className={`landing-screen absolute inset-0 z-50 flex flex-col items-center justify-center text-white text-center px-4 transition-opacity duration-700 ${isFadingOut ? "opacity-0 scale-[0.98]" : "opacity-100"}`}
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            animation: "moveBackground 30s ease-in-out infinite",
          }}
        >
          <div className="w-full flex justify-center lg:mr-[50rem]">
            <Image src="/enter.png" alt="" width={200} height={100} className="w-[40%] lg:mt-[1rem] lg:w-[20%] scale-0 opacity-0 animate-[zoomIn_0.7s_ease-out_forwards] animate-slideInLeft" />
          </div>
          <Image src="/fat.png" alt="" width={200} height={100} className="w-full -mt-[2rem] lg:-mt-[8rem] lg:w-[70%] " />
          <div className="w-full flex justify-center lg:ml-[50rem]">
            <Image src="/season.png" alt="" width={200} height={100} className="w-[40%] -mt-[2rem] lg:-mt-[8rem] lg:w-[20%] scale-0 opacity-0 animate-[zoomIn_0.7s_ease-out_forwards] animate-slideInRight" />
          </div>
          <Button
            onClick={handleStart}
            className="lg:-mt-[7.5rem] bg-gradient-to-r neon-box-shadow from-purple-600 via-blue-500 to-yellow-400 text-white font-bold lg:rounded-2xl rounded-xl px-6 lg:py-11 py-7 text-base shadow-lg border-2 border-purple-400 hover:scale-105 transition-transform animate-blink"
          >
            <Image src="/opening.png" alt="" width={240} height={100} />
          </Button>
        </div>
      )}
      {/* {!hasStarted && (
        <div className={`landing-screen absolute inset-0 z-50 flex flex-col items-center justify-center text-white text-center px-4 transition-opacity duration-700 ${isFadingOut ? "opacity-0 scale-[0.98]" : "opacity-100"}`}>
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-[-1]">
            <source src="https://res.cloudinary.com/dlaw8kqqo/video/upload/v1745746108/desktop_pvcyev.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="w-full flex justify-center lg:mr-[50rem]">
            <Image src="/enter.png" alt="" width={200} height={100} className="w-[40%] lg:mt-[1rem] lg:w-[20%] scale-0 opacity-0 animate-[zoomIn_0.7s_ease-out_forwards] animate-slideInLeft" />
          </div>
          <Image src="/fat.png" alt="" width={200} height={100} className="w-full -mt-[2rem] lg:-mt-[8rem] lg:w-[70%]" />
          <div className="w-full flex justify-center lg:ml-[50rem]">
            <Image src="/season.png" alt="" width={200} height={100} className="w-[40%] -mt-[2rem] lg:-mt-[8rem] lg:w-[20%] scale-0 opacity-0 animate-[zoomIn_0.7s_ease-out_forwards] animate-slideInRight" />
          </div>
          <Button
            onClick={handleStart}
            className="lg:-mt-[7.5rem] bg-gradient-to-r neon-box-shadow from-purple-600 via-blue-500 to-yellow-400 text-white font-bold lg:rounded-2xl rounded-xl px-6 lg:py-11 py-7 text-base shadow-lg border-2 border-purple-400 hover:scale-105 transition-transform animate-blink"
          >
            <Image src="/opening.png" alt="" width={240} height={100} />
          </Button>
        </div>
      )} */}

      {/* Main Experience After Start */}
      {isClient && hasStarted && (
        <>
          <video ref={videoRef} autoPlay loop muted={false} playsInline className="absolute inset-0 h-full w-full object-cover z-0">
            <source
              src={
                isMobile
                  ? "https://res.cloudinary.com/dlaw8kqqo/video/upload/v1745981973/IMG_5321_1_qtfdfb.mp4" // <-- video versi mobile
                  : "https://res.cloudinary.com/dlaw8kqqo/video/upload/v1745746108/desktop_pvcyev.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Dark overlay with lower z-index */}
          <div className="absolute inset-0 bg-black/40 z-10" />

          {/* Header with Marquee */}
          <header className="absolute top-0 w-full bg-black/30 backdrop-blur-sm border-b border-white/10 z-20">
            <div className="h-16 flex items-center ">
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
          <div className="absolute top-20 left-10 gap-5 flex">
            <button className=" z-20 p-1 rounded-lg bg-black/40  backdrop-blur-sm border border-white/10 text-white hover:bg-white/30 transform hover:scale-110 transition-transform duration-300">
              <Image src={"/ig.jpg"} alt="dexscreen" width={40} height={40} />
            </button>
            <button className=" z-20 p-1 rounded-lg bg-black/40  backdrop-blur-sm border border-white/10 text-white hover:bg-white/30 transform hover:scale-110 transition-transform duration-300">
              <Image src={"/dex.png"} alt="instagram" width={40} height={40} />
            </button>
            <button className=" z-20 p-1 rounded-lg bg-black/40  backdrop-blur-sm border border-white/10 text-white hover:bg-white/30 transform hover:scale-110 transition-transform duration-300">
              <Image src={"/link.png"} alt="linktree" width={40} height={40} />
            </button>
          </div>

          {/* Main Content */}
          <main className="absolute inset-0 flex items-center justify-center px-4 text-center text-white z-10">
            <div className="max-w-3xl space-y-6">
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
                {/* <Button size="lg" className="bg-white text-black hover:bg-white/90" onClick={toggleMute}>
                  {isMuted ? "Unmute" : "Mute"}
                </Button> */}
              </div>
            </div>
            <div className=" hidden lg:flex rounded-full neon-box-style justify-center cursor-pointer bg-white/10 border border-white/20  z-30" onMouseEnter={() => setShowPopups(true)}>
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
