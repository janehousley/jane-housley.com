import Header from "@components/Header";
import posts from "./posts/posts.json";

import Link from "next/link";

export default function Blog() {
    return (
        <main className="relative min-h-screen w-full bg-[url('/wallpaper2.jpg')] bg-cover bg-center overflow-hidden flex flex-col items-center">
            <Header />

            <div>
                <h1 className="text-4xl font-bold text-gray-800 mt-24 mb-4">Janie's House</h1>
            </div>

            <div className="max-w-4xl bg-white/60 p-3 rounded-lg space-x-6 items-center mb-12">
                <p className="italic text-gray-500 text-sm text-center">
                    I do a lot of thinking, and if I think about something for a long time, and I can bottle it up in a nice way, then I can store it here and make some space in my brain to think about something else. 
                    This is essentially a storage unit for my thoughts.
                </p>
            </div>

            <div className="mb-12">
                <h3> Recent Posts</h3>
            </div>

            <div className="flex flex-col space-y-8 max-w-3xl px-8 mb-32">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/posts/${post.slug}`}
                        className="group flex bg-white/80 p-6 rounded-lg shadow-lg hover:bg-white transition space-x-6 items-center"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                        />

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-red-900">{post.title}</h2>
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                            <p className="text-sm">{post.subtitle}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
