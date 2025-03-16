"use client";

import { MDXContent } from "@/types/index";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CopyButton } from "@/components/ui/CopyButton";
import { PostTypeIcon } from "../PostTypeIcon";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ArticleHeaderProps {
  content: MDXContent;
  type: "short-article" | "long-article" | "podcast" | "recipe";
}

export const ArticleHeader = ({ content, type }: ArticleHeaderProps) => {
  const pathname = usePathname();
  const [shareUrl, setShareUrl] = useState<string>("");

  useEffect(() => {
    setShareUrl(`${window.location.origin}${pathname}`);
  }, [pathname]);

  return (
    <div className="md:mb-8 mb-2 text-left">
      <div className="flex items-center px-3 py-1 gap-2 bg-white/30 w-fit rounded-sm">
        <PostTypeIcon type={type} className="text-gray-600" size={20} />
        <h3 className="text-sm font-medium text-gray-600 inline-flex m-0 items-center">
          {type}
        </h3>
      </div>
      <Link
        href="/blog"
        className="font-bold uppercase list-none flex items-center gap-x-2 text-sm text-black text-left"
      >
        <span className="transform transition-transform duration-300 group-hover:translate-x-2">
          <ArrowLeft />
        </span>
        Back to blog
      </Link>

      <h1>{content.title}</h1>
      <p className="font-bold text-gray-600 mb-8">{content.excerpt}</p>
      {content.coverImage && (
        <div className="relative w-full h-[400px] md:mb-8 mb-2">
          <Image
            src={content.coverImage}
            alt={content.title}
            loading="eager"
            priority={true}
            sizes="(max-width: 768px) 100vw, 1200px"
            fill
            className="object-cover rounded-lg"
          />
          {/* Overlay container */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white rounded-bl-lg rounded-br-lg">
            <div className="flex justify-between items-center">
              {/* Date and Author */}
              <div className="text-sm">
                <span className="font-medium">{content.date}</span>
                <span className="mx-2 font-medium">|</span>
                <span className="font-medium">{content.author}</span>
              </div>
              {/* Copy Button - hidden on mobile, shown on md and up */}
              <div className="hidden md:block">
                {shareUrl && (
                  <CopyButton
                    textToCopy={shareUrl}
                    className="bg-white/30 hover:bg-gray/30 text-white hover:text-black"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {shareUrl && (
        <CopyButton textToCopy={shareUrl} className="ml-auto md:hidden" />
      )}
    </div>
  );
};

export default ArticleHeader;
