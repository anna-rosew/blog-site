// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { ArticleTemplate } from "@/components/ui/blog/templates/ArticleTemplate";
import { PodcastTemplate } from "@/components/ui/blog/templates/PodcastTemplate";
import { RecipeTemplate } from "@/components/ui/blog/templates/RecipeTemplate";
import ConstructionLayout from "@/components/layout/ConstructionLayout";

import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { MDXContent, Post, PodcastPost, RecipePost } from "@/types/index";

type BlogParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogParams) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Not Found",
      description: "The page you're looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Static Params
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}

// Helper function to clean MDX content
const cleanMDXContent = (content: string): string => {
  return content
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;")
    .replace(/'/g, "'")
    .replace(/'/g, "'")
    .replace(/"/g, '"')
    .replace(/"/g, '"')
    .trim();
};

// Main Component with ts-expect-error directive

export default async function BlogPost({ params }: BlogParams) {
  // Fetch post data
  const post = await getPostBySlug(params.slug);

  // Handle 404
  if (!post) {
    return notFound();
  }

  let introSection;
  let mainContent = null;

  try {
    if (post.content) {
      const cleanContent = cleanMDXContent(post.content);

      const contentParts = cleanContent.split(/(?=##\s)/);

      if (contentParts.length > 1) {
        const introContent = cleanMDXContent(contentParts[0]);
        const mainContentStr = contentParts.slice(1).join("");

        try {
          introSection = {
            content: introContent,
            mdxContent: introContent ? (
              <MDXRemote source={introContent} />
            ) : null,
          };
        } catch (introError) {
          console.error("Error processing intro MDX:", introError);
          introSection = {
            content: introContent,
            mdxContent: <p>{introContent}</p>,
          };
        }

        try {
          mainContent = mainContentStr ? (
            <MDXRemote source={cleanMDXContent(mainContentStr)} />
          ) : null;
        } catch (mainError) {
          console.error("Error processing main MDX:", mainError);
          mainContent = (
            <div dangerouslySetInnerHTML={{ __html: mainContentStr }} />
          );
        }
      } else {
        try {
          mainContent = <MDXRemote source={cleanContent} />;
        } catch (error) {
          console.error("Error processing single content MDX:", error);
          mainContent = (
            <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
          );
        }
      }
    }
  } catch (error) {
    console.error("Error processing content:", error);
    mainContent = <div>Error processing content. Please try again.</div>;
  }

  const postContent: MDXContent = {
    ...post,
    intro: introSection,
    children: mainContent,
  };

  const renderTemplate = () => {
    switch (postContent.type) {
      case "short-article":
      case "long-article":
        return (
          <ArticleTemplate content={postContent} type={postContent.type} />
        );

      case "podcast":
        return (
          <PodcastTemplate
            content={{
              ...postContent,
              duration: (post as PodcastPost).duration,
              audioUrl: (post as PodcastPost).audioUrl,
              podcastUrl:
                (post as PodcastPost).podcastUrl ||
                (post as PodcastPost).audioUrl,
            }}
          />
        );
      case "recipe":
        return (
          <RecipeTemplate
            content={{
              ...postContent,
              cookingTime: (post as RecipePost).cookingTime,
              ingredients: (post as RecipePost).ingredients,
              instructions: (post as RecipePost).instructions,
            }}
          />
        );

      default:
        return notFound();
    }
  };

  return (
    <ConstructionLayout>
      <main className="container mx-auto px-4 py-8">{renderTemplate()}</main>
    </ConstructionLayout>
  );
}
