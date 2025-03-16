import { MDXContent } from "@/types/index";
import { Button } from "../../button";
import Link from "next/link";
import { Badge } from "../../badge";
import { ArrowLeft } from "lucide-react";

interface ArticleFooterProps {
  content: MDXContent;
}

export const ArticleFooter = ({ content }: ArticleFooterProps) => {
  return (
    <footer className="pb-2">
      <Link
        href="/blog"
        className="font-bold uppercase list-none flex items-center gap-x-2 text-sm text-black text-left"
      >
        <span className="transform transition-transform duration-300 group-hover:translate-x-2">
          <ArrowLeft />
        </span>
        Back to blog
      </Link>
      <div className="mt-4 pt-6 border-t border-black text-gray-600 text-sm">
        <div className="flex justify-between flex-wrap gap-4">
          {/* Author and Date */}
          <div className="flex justify-between flex-wrap gap-4">
            <Link href="/work">
              <Button variant="secondary">Start Your Journey</Button>
            </Link>
          </div>

          {/* Tags */}
          {content.secondaryTags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {content.secondaryTags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs font-normal text-gray-600 border-gray-400 hover:bg-transparent hover:text-gray-600"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
