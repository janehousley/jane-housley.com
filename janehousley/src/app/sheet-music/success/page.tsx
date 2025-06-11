"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const sheetMusicMap: Record<string, { title: string; pdfPath: string }> = {
  "be-still-my-soul": {
    title: "Be Still My Soul",
    pdfPath: "Be-Still-My-Soul_Till-We-Meet-Again.pdf",
  },
  "come-thou-fount": {
    title: "Come Thou Fount",
    pdfPath: "Come-Thou-Fount_New-World-Symphony.pdf",
  },
  "i-know-that-my-redeemer-lives": {
    title: "I Know That My Redeemer Lives",
    pdfPath: "I-Know-That-My-Redeemer-Lives_If-You-Could-Hie-to-Kolob.pdf",
  },
};

function SuccessContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const item = id ? sheetMusicMap[id] : null;

  // For demo: normally token would be generated server-side and passed securely
  const token = "demo-valid-token"; // Replace this later with real token system!

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      {item ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
          <p className="mb-6 text-center">
            You purchased <strong>{item.title}</strong>.
          </p>
          <a
            href={`/api/download?pdf=${encodeURIComponent(item.pdfPath)}&token=${token}`}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Download PDF
          </a>
        </>
      ) : (
        <p>Missing or invalid item. Please contact us if you have any issues.</p>
      )}
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
