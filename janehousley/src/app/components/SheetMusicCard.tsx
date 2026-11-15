import Image from "next/image";

type SheetMusicItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  cover: string;
  audio: string;
  buyLink: string;
};

export default function SheetMusicCard({ item }: { item: SheetMusicItem }) {
  return (
    <div className="bg-paper border border-line rounded-sm p-5 flex flex-col">
      <div className="relative w-full aspect-[4/3] mb-5 rounded-sm overflow-hidden">
        <Image
          src={item.cover}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <h2 className="text-lg font-medium mb-2">{item.title}</h2>
      <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{item.description}</p>
      <audio controls className="w-full mb-5">
        <source src={item.audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="flex items-center justify-between gap-3">
        <span className="text-lg">${item.price.toFixed(2)}</span>
        <a href={item.buyLink} target="_blank" rel="noopener noreferrer" className="soft-button">
          Buy
        </a>
      </div>
    </div>
  );
}
