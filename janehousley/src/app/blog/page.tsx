"use client";
import PageShell from "@components/PageShell";
import posts from "./posts/posts.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <PageShell>
      <h1 className="text-3xl font-light tracking-tight mb-3">Janie&apos;s House</h1>
      <p className="text-muted leading-relaxed mb-8 max-w-2xl">
        I do a lot of thinking, and if I think about something for a long time, and I can bottle it up in a nice way,
        then I can store it here and make some space in my brain to think about something else. This is essentially a
        storage unit for my thoughts.
      </p>

      <input
        type="text"
        placeholder="Search posts…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-sm mb-10 px-4 py-2 rounded-full border border-line bg-paper text-sm placeholder:text-muted/70 focus:outline-none focus:border-ink/40"
      />

      <ul className="divide-y divide-line border-t border-line">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/posts/${post.slug}`} className="group flex gap-5 sm:gap-6 py-6 items-center">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-sm overflow-hidden">
                  <Image src={post.image} alt="" fill className="object-cover" sizes="96px" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.15em] text-muted mb-1">{post.date}</p>
                  <h2 className="text-lg sm:text-xl font-medium mb-1">
                    <span className="rainbow-link text-ink">{post.title}</span>
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">{post.subtitle}</p>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <li className="py-6 text-muted">No posts found.</li>
        )}
      </ul>
    </PageShell>
  );
}
