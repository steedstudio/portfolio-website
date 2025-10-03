import { getSortedPostsData, getPostData, Post } from "../../../../lib/posts";

type Props = { params: { slug: string } };

// Pre-render all posts at build time
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// Dynamic page component
export default async function PostPage({ params }: Props) {
    const {slug} = await params;
    const post: Post = await getPostData(slug);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div
        className="prose max-w-2xl"
        dangerouslySetInnerHTML={{ __html: post.content || "" }}
      />
    </main>
  );
}
