"use client"

import { Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Marquee from "@/components/marquee"

export default function BottomBar() {
  return (
    <div className="absolute bottom-0 w-full flex flex-col gap-10 lg:gap-0 items-center z-30">

      {/* GET YOU SUM BUTTON */}
      <div className="lg:absolute z-40 bottom-10 left-10">
        <Button className="bg-gradient-to-r from-purple-600 via-blue-500 to-yellow-400 text-white font-bold rounded-2xl px-6 lg:py-8 text-base shadow-lg border-2 border-purple-400 hover:scale-105 transition-transform animate-blink">
          <span className="text-yellow-300 font-semibold lg:text-4xl">GET YOU SUM</span>
        </Button>
      </div>

      {/* PURPLE BAR */}
      <div className="relative lg:w-[50%] bg-purple-600 bg-opacity-30 lg:py-10 flex items-center justify-center px-4 md:px-12 backdrop-blur-sm border-t border-white/20 border-[0px] rounded-t-[35px]">
        
        {/* Twitter Button */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-4">
          <div className="bg-gradient-to-br left-10 -top-9 lg:absolute from-blue-300 to-blue-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
            <Twitter className="text-white lg:w-14 lg:h-14" />
          </div>
        </a>

        {/* Text Marquee */}
        <div className="lg:absolute lg:-top-10 overflow-hidden whitespace-nowrap mx-4">
          <div className="lg:text-4xl text-lg text-center font-extrabold bg-gradient-to-b from-yellow-300 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)] animate-marquee">
            FAT CRACKA <br/>SEASON
          </div>
        </div>

        {/* Telegram Button */}
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="mx-4">
          <div className="lg:absolute right-10 -top-9 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
            <Send className="text-white lg:w-14 lg:h-14" />
          </div>
        </a>

      </div>
      
    </div>
  )
}
