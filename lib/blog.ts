import fs from "fs/promises"; 
import path from "path";
import matter from "gray-matter";
import { Post, MDXContent } from "@/types/index";

const postsDirectory = path.join(process.cwd(), "content/blog");

export async function getAllPosts(): Promise<Post[]> {
  // Use async version
  const fileNames = await fs.readdir(postsDirectory);

  const postsPromises = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      // Use async version
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...data,
      } as Post;
    });

  // Wait for all promises to resolve
  const posts = await Promise.all(postsPromises);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<MDXContent | null> {
  try {
    console.log(`Fetching post with slug: ${slug}`);
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    // Use async version
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    console.log(`Successfully read post with slug: ${slug}`);

    return {
      slug,
      content,
      ...data,
    } as MDXContent;
  } catch (error) {
    console.error(`Error reading post with slug ${slug}:`, error);
    return null;
  }
}
