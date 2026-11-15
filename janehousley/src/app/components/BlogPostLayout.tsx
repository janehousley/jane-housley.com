import PageShell from "@components/PageShell";
import Link from "next/link";

export default function BlogPostLayout({
  title,
  subtitle,
  date,
  children,
}: {
  title: string;
  subtitle: string;
  date: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell width="max-w-2xl">
      <Link href="/blog" className="rainbow-link text-xs uppercase tracking-[0.15em]">
        ← All posts
      </Link>

      <header className="mt-8 mb-10">
        <p className="text-xs uppercase tracking-[0.15em] text-muted mb-3">{date}</p>
        <h1 className="text-4xl font-light tracking-tight leading-tight mb-3">{title}</h1>
        <p className="text-lg text-muted">{subtitle}</p>
      </header>

      <article className="prose prose-stone lg:prose-lg max-w-none">{children}</article>

      <div className="mt-12 pt-6 border-t border-line">
        <Link href="/blog" className="rainbow-link text-xs uppercase tracking-[0.15em]">
          ← All posts
        </Link>
      </div>
    </PageShell>
  );
}
