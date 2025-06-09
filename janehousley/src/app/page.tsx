import Image from "next/image";
import Header from "@components/Header";
import FramedImage from "@components/FramedImage";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[url('/wallpaper2.jpg')] bg-cover bg-center overflow-hidden">
      {/* Header Navigation */}
      <Header />
      
      {/* {Floor} */}
      <div className="absolute bottom-0 w-full h-64">
        <Image
          src="/wooden-sidewalk.png"
          alt="Wooden Floor"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      {/* {Couch} */}
      <div className="absolute bottom-20 left-80 z-30">
        <Image
          src="/couch.png"
          alt="Couch"
          width={500} 
          height={400}
        />
      </div>
      {/* {Lamp} */}
      <div className="absolute bottom-25 z-30">
        <Image
          src="/lamp.png"
          alt="Lamp"
          width={500}
          height={300}
        />
      </div>

      {/* Lamp Glow */}
      <div className="absolute bottom- z-10 w-140 h-140 rounded-full bg-yellow-200 opacity-60 blur-2xl"></div>

      <FramedImage
        src="/images/frame1.png"
        alt="A beautiful painting"
        caption="This is a beautiful painting I made."
      />


      {/* Intro Text
      <div className="relative z-40 max-w-md ml-auto mr-20 mt-40 text-right bg-white/75 p-6 rounded-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Hi!</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          My name is Jane Housley. Formally, I'm a recent graduate with a master's
          degree in mathematics from BYU. I studied applied math and computer
          science in my undergrad, and as a result, I love solving problems and
          writing code. 
        </p>
      </div> */}
    </main>

  );
}
