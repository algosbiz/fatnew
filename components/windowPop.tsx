import { X } from "lucide-react";
import { cn } from "@/lib/utils"; // opsional, untuk class merging

export default function WindowPopup({
  title = "My Window",
  children,
  onClose,
  direction = "left-right", // arah animasi
  position = "left", // posisi: kiri atau kanan
  className,
}: {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  direction?: "left-right" | "right-left"; // arah animasi
  position?: "left" | "right"; // posisi window: kiri atau kanan
  className?: string;
}) {
  const positionClass = position === "left" ? "left-0" : "right-0";
  return (
    <>
      {/* Overlay */}
      <div className="overlay" />

      {/* Window Popup */}
      <div
        className={cn(
          `w-[50vw] neon-box-shadow h-[10rem] max-w-md bg-purple-700 bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-gray-300 absolute ${positionClass}`,
          direction === "left-right" ? "animate-slide-left-right" : "animate-slide-right-left",
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-amber-700 text-white px-4 py-2">
          <span className="font-bold">{title}</span>
          <button onClick={onClose} className="hover:text-red-300">
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 text-white">{children}</div>
      </div>
    </>
  );
}
