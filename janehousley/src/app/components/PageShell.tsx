import Header from "@components/Header";
import Footer from "@components/Footer";

/** Shared frame for every page except home: header, centered content, footer. */
export default function PageShell({
  children,
  width = "max-w-3xl",
}: {
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-wall text-ink">
      <Header />
      <main className={`flex-1 w-full ${width} mx-auto px-6 pt-8`}>{children}</main>
      <Footer />
    </div>
  );
}
