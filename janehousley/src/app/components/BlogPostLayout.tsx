import Header from "@components/Header";
import Link from "next/link";

export default function BlogPostLayout({ title, subtitle, date, children }: { title: string; subtitle: string; date: string; children: React.ReactNode }) {
    return (
        <main className="relative min-h-screen w-full bg-[url('/wallpaper2.jpg')] bg-cover bg-center overflow-hidden flex flex-col items-center">
            <Header />

            <article className="prose lg:prose-xl max-w-3xl bg-white/80 p-8 rounded-lg shadow-lg mt-32 mb-32 w-full">
                {/* Back link */}
                <Link href="/blog" className="text-2xl text-gray-600 hover:text-red-900 mb-4 inline-block">
                    ←
                </Link>

                <h1 className="text-5xl font-bold text-gray-800 mb-2">{title}</h1>
                <h2 className="text-2xl text-gray-600 italic">{subtitle}</h2>
                <p className="text-gray-500 mb-6">{date}</p>

                {children}

                {/* Back link */}
                <Link href="/blog" className="text-2xl text-gray-600 hover:text-red-900 mb-4 inline-block">
                    ←
                </Link>
            </article>
        </main>
    );
}
