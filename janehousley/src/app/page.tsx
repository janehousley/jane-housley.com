"use client";

import Image from "next/image";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FramedImage from "@components/FramedImage";
import { useState } from "react";
import booksData from "./currently_reading.json";

type Book = {
  title: string;
  author: string;
  cover: string;
};
const books = booksData as Book[];

export default function Home() {
  const [lampOn, setLampOn] = useState(false);
  const [showReadingWindow, setShowReadingWindow] = useState(false);

  return (
    <main className="absolute min-h-screen w-full bg-[url('/wallpaper2.jpg')] bg-cover bg-center text-gray-900 overflow-x-auto">
      <Header />

      {/* Desktop scene */}
      <div className="hidden md:block">
        {/* Floor */}
        <div className="absolute bottom-0 w-full h-48">
          <Image
            src="/floor.png"
            alt="Wooden Floor"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
          
        {/* Lamp */}
        <div
          className="absolute left-25 bottom-30 z-30 cursor-pointer"
          onClick={() => setLampOn(!lampOn)}
        >
          <Image src="/lamp.png" alt="Lamp" width={200} height={200} />
        </div>

        {/* Lamp Glow */}
        {lampOn && (
          <div className="absolute bottom-75 z-10 w-120 h-120 rounded-full bg-yellow-200 opacity-60 blur-2xl"></div>
        )}

        {/* Couch */}
        <div className="absolute bottom-15 left-75 z-30">
          <Image src="/pink-couch.png" alt="Couch" width={600} height={600} />
        </div>


        {/* Side Table */}
        <div
          className="absolute bottom-25 left-200 z-30 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setShowReadingWindow(!showReadingWindow)}
        >
          <Image src="/sidetable.png" alt="Side Table" width={250} height={250} />
        </div>

        {/* Mirror */}
        <div className="absolute bottom-20 right-15">
          <Image src="/mirror.png" alt="Mirror" width={400} height={400} />
        </div>

        {/* Plant */}
        <div className="absolute bottom-15 right-5 z-20">
          <Image src="/plant1.png" alt="Plant" width={350} height={350} />
        </div>

        {/* Framed Images */}
        <FramedImage
          src="/framedimages/friends.png"
          alt="Friends"
          caption="A group of my friends and I during a Friendsgiving dinner last November. 
          As my 5 years in Provo comes to an end, I'm able to look back and reflect on all the friends I've made and the love I've felt. 
          I've been blessed with great friendships during my time at BYU."
          bottom="550px"
          left="700px"
          width="125px"
        />
        <FramedImage
          src="/framedimages/siblings.png"
          alt="Siblings"
          caption="My four siblings and I in Disneyland last October.
          We've always been very close, enjoying every minute we get to spend together. 
          Now, my family spans the entire United States, with sisters in both Oregon and Washington, D.C.. 
          Times we get to be all together are rare and cherished. From left to right: Claire, Rachel, Grant, Jane, Kate."
          bottom="425px"
          left="500px"
          width="200px"
        />
        <FramedImage
          src="/framedimages/honey.png"
          alt="Honey"
          caption="My dog, Honey. We drove from Arizona to Utah for a family ski trip one winter, and drove home with a little puppy. 
          There was a lot of debate on what we should name her, but we settled on Honey. The runner-up was Chewy."
          bottom="500px"
          left="390px"
          width="100px"
        />
        <FramedImage
          src="/framedimages/parents.png"
          alt="Parents"
          caption="I graduated in April 2025 with a masters degree in Math from BYU. 
          My parents both studied math at BYU, so it was a special experience to have both of them at my graduation ceremony."
          bottom="390px"
          left="700px"
          width="125px"
        />
        <FramedImage
          src="/framedimages/ski.png"
          alt="Ski"
          caption="Enjoying the outdoors has always been a big emphasis in my family. Between skiing, boating, backpacking, river rafting, and much more, 
          I've come to appreciate the beauty and fun that this earth has to offer. 
          Some of my favorite places are Park City Ski Resort, Yosemite, the Grand Canyon, and Myrtle Beach."
          bottom="590px"
          left="525px"
          width="150px"
        />
        <FramedImage
          src="/framedimages/thekisspng.png"
          alt="The Kiss"
          caption="My favorite painting of all time is The Kiss by Gustav Klimt. I studied Art and Architecture abroad in Vienna in 2022 and learned a lot about Klimt and other Austrian and German artists. 
          It was a life-changing experience."
          bottom="410px"
          left="400px"
          width="90px"
        />
      </div>


      {/* Mobile scene */}
      <div className="block md:hidden">
          {/* Floor */}
          <div className="absolute bottom-0 w-full h-48">
          <Image
            src="/floor.png"
            alt="Wooden Floor"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

          {/* Lamp */}
          <div
          className="absolute left-10 bottom-30 z-30 cursor-pointer"
          onClick={() => setLampOn(!lampOn)}
        >
          <Image src="/lamp.png" alt="Lamp" width={100} height={100} />
        </div>

        {/* Lamp Glow */}
        {lampOn && (
          <div className="absolute bottom-60 z-10 w-55 h-55 rounded-full bg-yellow-200 opacity-60 blur-2xl"></div>
        )}




        {/* Couch */}
        <div className="absolute bottom-25 left-30 z-30">
          <Image src="/pink-couch.png" alt="Couch" width={300} height={300} />
        </div>

        {/* Side Table */}
        <div
          className="absolute bottom-30 left-95 z-30 cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => setShowReadingWindow(!showReadingWindow)}
        >
          <Image src="/sidetable.png" alt="Side Table" width={125} height={125} />
        </div>

        {/* Framed Images */}
        <FramedImage
          src="/framedimages/friends.png"
          alt="Friends"
          caption="A group of my friends and I during a Friendsgiving dinner last November. 
          As my 5 years in Provo comes to an end, I'm able to look back and reflect on all the friends I've made and the love I've felt. 
          I've been blessed with great friendships during my time at BYU."
          bottom="390px"
          left="325px"
          width="55px"
        />
        <FramedImage
          src="/framedimages/siblings.png"
          alt="Siblings"
          caption="My four siblings and I in Disneyland last October.
          We've always been very close, enjoying every minute we get to spend together. 
          Now, my family spans the entire United States, with sisters in both Oregon and Washington, D.C.. 
          Times we get to be all together are rare and cherished. From left to right: Claire, Rachel, Grant, Jane, Kate."
          bottom="300px"
          left="215px"
          width="100px"
        />
        <FramedImage
          src="/framedimages/honey.png"
          alt="Honey"
          caption="My dog, Honey. We drove from Arizona to Utah for a family ski trip one winter, and drove home with a little puppy. 
          There was a lot of debate on what we should name her, but we settled on Honey. The runner-up was Chewy."
          bottom="360px"
          left="150px"
          width="50px"
        />
        <FramedImage
          src="/framedimages/parents.png"
          alt="Parents"
          caption="I graduated in April 2025 with a masters degree in Math from BYU. 
          My parents both studied math at BYU, so it was a special experience to have both of them at my graduation ceremony."
          bottom="295px"
          left="325px"
          width="60px"
        />
        <FramedImage
          src="/framedimages/ski.png"
          alt="Ski"
          caption="Enjoying the outdoors has always been a big emphasis in my family. Between skiing, boating, backpacking, river rafting, and much more, 
          I've come to appreciate the beauty and fun that this earth has to offer. 
          Some of my favorite places are Park City Ski Resort, Yosemite, the Grand Canyon, and Myrtle Beach."
          bottom="390px"
          left="225px"
          width="75px"
        />
        <FramedImage
          src="/framedimages/thekisspng.png"
          alt="The Kiss"
          caption="My favorite painting of all time is The Kiss by Gustav Klimt. I studied Art and Architecture abroad in Vienna in 2022 and learned a lot about Klimt and other Austrian and German artists. 
          It was a life-changing experience."
          bottom="300px"
          left="150px"
          width="50px"
        />
      </div>



      {/* Reading Window (shared) */}
      {showReadingWindow && (
        <div
          className="fixed inset-0 flex items-center text-gray-900 justify-center z-50"
          onClick={() => setShowReadingWindow(false)}
        >
          <div
            className="bg-[url('/wallpaper2.jpg')] p-6 rounded shadow-lg w-[90vw] max-w-lg md:max-w-4xl relative overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">Currently Reading</h3>

            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowReadingWindow(false)}
            >
              ✕
            </button>

            <div className="grid grid-cols-2 gap-6">
              {books.map((book, index) => (
                <div
                  key={index}
                  className="bg-white/80 p-4 rounded shadow flex flex-col items-center text-center"
                >
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={120}
                    height={180}
                    className="mb-4 object-cover"
                  />
                  <h4 className="text-lg font-semibold">{book.title}</h4>
                  <p className="text-gray-600 italic">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
