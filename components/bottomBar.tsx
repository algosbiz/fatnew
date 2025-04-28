"use client"

import { Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Marquee from "@/components/marquee"
import Image from "next/image"

export default function BottomBar() {
  return (
    <div className="absolute bottom-0 w-full flex flex-col gap-10 lg:gap-0 items-center z-30">
      {/* GET YOU SUM BUTTON */}
      <div className="lg:absolute z-40 bottom-10 left-10">
        <Button className="bg-gradient-to-r animated-hr from-purple-600 via-blue-500 to-yellow-400 text-white font-bold rounded-2xl px-6 lg:py-8 text-base shadow-lg border-2 border-purple-400 hover:scale-105 transition-transform animate-blink">
          <span className="text-yellow-300 font-semibold lg:text-4xl">GET YOU SUM</span>
        </Button>
      </div>

      {/* PURPLE BAR */}
      <div className="relative lg:w-[50%] neon-box-shadow bg-[#16d8f9] bg-opacity-20 lg:py-10 flex items-center justify-center px-4 md:px-12 backdrop-blur-md  border-gray-300 border-t-[1px] border-l-[1px] border-r-[1px] rounded-t-[35px]">
        {/* Twitter Button */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-4">
          <div className=" left-10 rounded-full -top-[50px] lg:absolute hover:scale-110 transition-transform">
            <Image src="/twitter.png" alt="" width={100} height={100} />
          </div>
        </a>

        {/* Text Marquee */}
        <div className="lg:absolute lg:-top-[67px] overflow-hidden whitespace-nowrap mx-4">
          <div className="w-full">
            {/* FAT CRACKA <br/>SEASON */}
            <Image src="/text.png" alt="" width={300} height={100} />
          </div>
        </div>

        {/* Telegram Button */}
        <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="mx-4">
          <div className=" right-10 rounded-full -top-[50px] lg:absolute hover:scale-110 transition-transform">
            <Image src="/tele.png" alt="" width={100} height={100} />
          </div>
        </a>
      </div>
    </div>
  );
}
