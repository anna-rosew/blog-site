import { MDXContent } from "@/types/index";
import Image from "next/image";

interface ArticleContentProps {
  content: MDXContent;
}

export const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <div>
      {content.children}
      {content.contentImage && (
        <div className="relative w-full h-[400px] my-8 text-left">
          <Image
            src={content.contentImage}
            alt="Content illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
