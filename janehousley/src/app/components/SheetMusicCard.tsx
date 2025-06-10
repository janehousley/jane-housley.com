type SheetMusicItem = {
    id: string;
    title: string;
    description: string;
    price: number;
    cover: string;
    audio: string;
    paypalButtonId: string;
  };
  
export default function SheetMusicCard({ item }: { item: SheetMusicItem }) {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
        <img src={item.cover} alt={item.title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
        <p className="text-gray-600 mb-2 text-center">{item.description}</p>
        <audio controls className="my-3">
            <source src={item.audio} type="audio/mp3" />
            Your browser does not support the audio element.
        </audio>
        <p className="text-lg font-bold mb-2">${item.price.toFixed(2)}</p>
        <div dangerouslySetInnerHTML={{
            __html: `
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="${item.paypalButtonId}" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
            </form>
            `
        }} />

        </div>
    );
}
  