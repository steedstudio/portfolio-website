import { getSortedPostsData } from "../../../lib/posts";
import Link from "next/link";

export default function Blog() {
    const posts = getSortedPostsData();

    return (
        <main>
            <h1 className="text-3xl">Blog</h1>
            {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="block">
                    <article key={post.id} className="mb-4">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.date}</p>
                    </article>
                </Link>
      ))}
        </main>
    )
}