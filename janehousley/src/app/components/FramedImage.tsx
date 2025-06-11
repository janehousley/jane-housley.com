"use client";
import { useState } from "react";
import Image from "next/image";

type FramedImageProps = {
  src: string;
  alt: string;
  caption: string;
  top?: string;
  left?: string;
  width?: string;
};

export default function FramedImage({
  src,
  alt,
  caption,
  top = "200px",
  left = "300px",
  width = "100px",
}: FramedImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The framed image */}
      <div
        className={`
          cursor-pointer z-40 transition-transform duration-300 hover:scale-105
          relative md:absolute
        `}
        style={{
          width,
          // Only apply top/left in md:absolute mode (harmless on relative mobile because they don't apply)
          top,
          left,
        }}
        onClick={() => setIsOpen(true)}
      >
        <Image src={src} alt={alt} width={500} height={500} />
      </div>

      {/* The modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[url('/wallpaper2.jpg')] p-4 rounded shadow-lg max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh] mb-2">
              <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
            <p className="bg-white/80 shadow-lg rounded text-center text-gray-700">{caption}</p>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
