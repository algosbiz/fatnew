// import { X } from "lucide-react";
// import { cn } from "@/lib/utils";

// export default function WindowPopup({
//   title = "My Window",
//   children,
//   direction = "left-right",
//   position = "left",
//   className,
// }: {
//   title?: string;
//   children: React.ReactNode;
//   onClose: () => void;
//   direction?: "left-right" | "right-left";
//   position?: "left" | "right";
//   className?: string;
// }) {
//   const positionClass = position === "left" ? "left-0" : "right-0";

//   return (
//     <>
//       <div
//         className={cn(`w-[50vw] h-[12rem] max-w-md absolute ${positionClass} bg-no-repeat bg-center bg-contain`, direction === "left-right" ? "animate-slide-left-right" : "animate-slide-right-left", className)}
//         style={{
//           backgroundImage: "url(/framep.png)",
//           backgroundSize: "100% 100%",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Content overlay */}
//         <div className="absolute inset-0 flex flex-col  p-4 pointer-events-none">
//           {/* Header */}
//           <div className="flex items-center justify-between pointer-events-auto">
//             <span className="text-white font-bold">{title}</span>
//           </div>

//           {/* Body */}
//           <div className="mt-2 text-white text-lg pointer-events-auto">{children}</div>
//         </div>
//       </div>
//     </>
//   );
// }

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
          `w-[50vw] neon-box-shadow shadow-xl h-[10rem] max-w-md bg-[#48b5e0] bg-opacity-20 backdrop-blur-md rounded-xl  overflow-hidden border border-gray-300 absolute ${positionClass}`,
          direction === "left-right" ? "animate-slide-left-right" : "animate-slide-right-left",
          className
        )}
        style={{ boxShadow: "20px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-[#48b5e0] text-white px-4 py-2">
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
