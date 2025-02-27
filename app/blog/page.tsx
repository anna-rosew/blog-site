import React from "react";
import ConstructionLayout from "@/components/layout/ConstructionLayout";
import { getAllPosts } from "@/lib/blog";
import { FeaturedPosts } from "@/components/ui/blog/FeaturedPosts";
import { PostGrid } from "@/components/ui/blog/PostGrid";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <ConstructionLayout>
      <div className="container mx-auto px-4 py-8">
        <h1>Blog</h1>
        <p className="font-bold md:text-center">
          Come and explore how your body, mind and breath work together. Open
          yourself to new dimensions of experience and personal growth.
        </p>

        <section className="page-section">
          <FeaturedPosts posts={posts} />
        </section>
        <section className="page-section">
          <PostGrid posts={posts} />
        </section>
      </div>
    </ConstructionLayout>
  );
}
