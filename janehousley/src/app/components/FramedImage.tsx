"use client";
import { useState } from "react";
import Image from "next/image";

type FramedImageProps = {
  src: string;
  alt: string;
  caption: string;
  bottom?: string;
  left?: string;
  width?: string;
};

export default function FramedImage({
  src,
  alt,
  caption,
  bottom,
  left,
  width = "100px",
}: FramedImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Determine if this is an "absolute" use case (desktop scene)
  const isAbsolute = bottom !== undefined && left !== undefined;

  return (
    <>
      {/* The framed image */}
      <div
        className={`
          cursor-pointer transition-transform duration-300 hover:scale-105
          ${isAbsolute ? "absolute z-40" : "relative"}
        `}
        style={{
          width,
          ...(isAbsolute ? { bottom, left } : {}),
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
            className="bg-[url('/wallpaper2.jpg')] p-4 rounded shadow-lg max-w-md max-h-[85vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center items-center mb-2">
              <Image
                src={src}
                alt={alt}
                width={300}
                height={300}
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <p className="bg-white/80 shadow-lg rounded text-center text-gray-700 p-2">{caption}</p>
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
