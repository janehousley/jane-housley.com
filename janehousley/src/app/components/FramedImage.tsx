"use client";
import { useState } from "react";

type FramedImageProps = {
  src: string;
  alt: string;
  caption: string;
  top?: string;
  left?: string;
  width? : string;
};

export default function FramedImage({ src, alt, caption, top = "200px", left = "300px" , width="100px"}: FramedImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The framed image on the wall */}
      <img
        src={src}
        alt={alt}
        className="cursor-pointer z-40 transition-transform duration-300 hover:scale-105"
        style={{
          width: width,
          position: "absolute",
          top,
          left,
        }}
        onClick={() => setIsOpen(true)}
      />

      {/* The modal */}
      {isOpen && (
        <div
          className="fixed inset-0  flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[url('/wallpaper2.jpg')] p-4 rounded shadow-lg max-w-3xl relative"
            onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
          >
            <img src={src} alt={alt} className="max-h-[80vh] max-w-full mb-2" />
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
