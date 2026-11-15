import sheetMusicData from "./sheetMusicData.json";
import SheetMusicCard from "@components/SheetMusicCard";
import PageShell from "@components/PageShell";

export default function SheetMusicStore() {
  return (
    <PageShell width="max-w-5xl">
      <h1 className="text-3xl font-light tracking-tight mb-3">Piano Sheet Music</h1>
      <p className="text-muted leading-relaxed mb-10 max-w-2xl">
        While taking piano lessons growing up, I fell in love with composing. As a member of the Church of Jesus Christ
        of Latter-Day Saints, this manifested itself in hymnal arrangements. I have three published pieces available for
        purchase on LatterDayArrangements.com.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sheetMusicData.map((item) => (
          <SheetMusicCard key={item.id} item={item} />
        ))}
      </div>
    </PageShell>
  );
}
