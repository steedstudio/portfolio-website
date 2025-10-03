import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from "remark";
import html from "remark-html";
 
const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
  id: string;
  title: string;
  date: string;
  excerpt?: string;
  cover_image?: string;
  content?: string;
};

export function getSortedPostsData(): Post[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
 
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
 
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
 
    // Combine the data with the id
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      cover_image: matterResult.data.cover_image
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get single post by slug
export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id: slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    excerpt: matterResult.data.excerpt,
    cover_image: matterResult.data.cover_image,
    content: contentHtml,
  };
}