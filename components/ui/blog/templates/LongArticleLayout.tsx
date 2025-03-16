// components/ui/blog/templates/LongArticleLayout.tsx
"use client";
import { MDXContent } from "@/types/index";
import Image from "next/image";
import { ArticleHeader } from "./ArticleHeader";
import { CallToAction } from "./CallToAction";
// import TableOfContents from "../TableOfContents";
import { ArticleFooter } from "./ArticleFooter";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";

interface LongArticleLayoutProps {
  content: MDXContent;
  type: "long-article";
}

export const LongArticleLayout = ({
  content,
  type,
}: LongArticleLayoutProps) => {
  return (
    <article className="prose prose-xl max-w-4xl mx-auto text-left space-y-12 leading-relaxed">
      <ArticleHeader content={content} type={type} />

      {/* Intro section with ToC */}
      {/* <div className="md:grid md:grid-cols-12 gap-8 my-8">
        {content.sections && (
          <div className="col-span-4 sticky top-8 h-fit">
            <TableOfContents sections={content.sections} />
          </div>
        )}
        
      </div> */}
      <div className="col-span-8">{content.intro?.mdxContent}</div>

      {/* Main content */}
      <div className="mt-8">{content.children}</div>

      {content.contentImage && (
        <div className="relative w-full h-[400px] my-8 text-left">
          <Image
            src={content.contentImage}
            alt="Content illustration"
            fill
            className="object-cover rounded-lg"
            placeholder="blur"
            layout="responsive"
          />
        </div>
      )}

      {content.callToAction && <CallToAction text={content.callToAction} />}
      <ArticleFooter content={content} />
    </article>
  );
};

export default LongArticleLayout;
