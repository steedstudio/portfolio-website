import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
    const posts = getSortedPostsData();

    return (
        <main>
            <h1 className="text-3xl">Blog</h1>
            {posts.map((post) => (
                <Link 
                key={post.id} 
                href={`/blog/${post.id}`} 
                className="flex flex-row overflow-auto mt-4 rounded-lg w-3/4 p-4 bg-white shadow-lg border-[#ccc] border-1">
                    <article key={post.id} className="mb-4">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.date}</p>
                        <p className="text-gray-600">{post.excerpt}</p>
                    </article>

                    <Image
                        className="rounded-full h-[120px] hidden sm:block"
                        src="/images/headshot.jpg"
                        alt="My Headshot"
                        width={115.417}
                        height={120}
                    />
                </Link>
      ))}
        </main>
    )
}