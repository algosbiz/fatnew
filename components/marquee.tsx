"use client"

import React, { useEffect, useRef } from "react"

const Marquee = () => {
  const marqueeRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const root = document.documentElement
    const marqueeContent = marqueeRef.current

    if (!marqueeContent) return

    // Set jumlah elemen ke CSS variable
    root.style.setProperty("--marquee-elements", marqueeContent.children.length.toString())

    // Clone children untuk seamless looping
    const displayed = parseInt(
      getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"),
      10
    )

    for (let i = 0; i < displayed; i++) {
      const clone = marqueeContent.children[i].cloneNode(true)
      marqueeContent.appendChild(clone)
    }
  }, [])

  return (
    <div className="marquee">
      <ul ref={marqueeRef} className="marquee-content">
        <li>
          <div className="text-white text-[19px] lg:text-2xl font-extrabold whitespace-nowrap">
            0X888888888888888888888  
          </div>
        </li>
        {/* Tambahkan item lain kalau mau */}
      </ul>
    </div>
  )
}

export default Marquee
