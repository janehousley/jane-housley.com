"use client";

import sheetMusicData from "./sheetMusicData.json";
import SheetMusicCard from "@components/SheetMusicCard";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function SheetMusicStore() {
  return (

    <main className="min-h-screen bg-gray-100 py-10 px-6">
        <Header/>
      <h1 className="text-4xl font-bold mt-12 mb-6 text-center">Piano Sheet Music</h1>
      <p>
        While taking piano lessons growing up, I fell in love with composing. As a member of the Church of Jesus Christ of Latter-Day Saints, this manifested itself in hymnal arrangements. I have three published pieces availbe for purchase here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sheetMusicData.map((item) => (
          <SheetMusicCard key={item.id} item={item} />
        ))}
      </div>
      <Footer/>
    </main>
  );
}
