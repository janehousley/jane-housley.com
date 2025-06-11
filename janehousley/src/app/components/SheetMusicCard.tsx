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
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
        <div className="relative w-full h-48 mb-4">
                <Image
                    src={item.cover}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 400px"
                />
            </div>
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-600 mb-2 text-center">{item.description}</p>
        <audio controls className="my-3">
            <source src={item.audio} type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
        <p className="text-lg font-bold mb-2">${item.price.toFixed(2)}</p>
        <a
        href={item.buyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-100 hover:text-gray-800"
      >
        Buy on LatterDayArrangements.com
      </a>

        </div>
    );
}
  