"use client";
import { MDXContent } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ArticleFooter } from "./ArticleFooter";
import { PodcastHeader } from "./PodcastHeader";
import { Clock, Play } from "lucide-react";
import CopyButton from "../../CopyButton";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../../button";

interface PodcastTemplateProps {
  content: MDXContent & {
    duration: number;
    audioUrl: string;
    podcastUrl: string;
    primaryTag: string;
    secondaryTags: string[];
  };
}

export function PodcastTemplate({ content }: PodcastTemplateProps) {
  const pathname = usePathname();

  useEffect(() => {
    setShareUrl(`${window.location.origin}${pathname}`);
  }, [pathname]);
  const [shareUrl, setShareUrl] = useState<string>("");

  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      {/* Podcast Header */}
      <PodcastHeader content={content} type="podcast" />

      <div className="flex flex-col md:flex-row gap-4">
        {/* Image container - full width on mobile, 1/3 on md+ screens */}
        <div className="w-full md:w-1/3">
          {content.contentImage && (
            <div className="relative w-full aspect-square">
              <Image
                src={content.contentImage}
                alt={`Content image for ${content.title}`}
                fill
                className="object-cover rounded-lg"
                priority={false}
              />
            </div>
          )}
        </div>

        <div className="w-full md:w-2/3">
          <div className="flex flex-col gap-4">
            {/* Podcast player/embed would go here */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="font-medium">{content.date}</span>
              <span className="font-medium">•</span>
              <div className="flex items-center gap-1">
                <Clock size={16} className="text-gray-600" />
                <span className="font-medium">{content.duration} minutes</span>
              </div>
              <div className="flex justify-start">
                {shareUrl && (
                  <CopyButton
                    textToCopy={shareUrl}
                    className="hidden md:flex bg-white/30 hover:bg-gray-200/30"
                  />
                )}
              </div>

              {content.author && (
                <>
                  <span className="font-medium">•</span>
                  <span className="font-medium">{content.author}</span>
                </>
              )}
            </div>

            {/* Mobile Share Button */}
            {shareUrl && (
              <CopyButton textToCopy={shareUrl} className="md:hidden mt-4" />
            )}
            <div>{content.children}</div>

            <Button variant="secondary">
              <Play size={16} className="text-gray-600" />
              <span className="font-medium">Listen to Episode</span>
            </Button>

            <Link
              href={content.audioUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center gap-1"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <ArticleFooter content={content} />
    </article>
  );
}

export default PodcastTemplate;
