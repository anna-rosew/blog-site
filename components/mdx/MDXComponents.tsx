// mdx/MDXComponents.tsx
import React, { DetailedHTMLProps, HTMLAttributes, useMemo } from "react";
import Image from "next/image";
import { MDXComponents } from "mdx/types";

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const generateId = (text: React.ReactNode): string => {
  const stringText = React.Children.toArray(text)
    .map((child) => {
      if (typeof child === "string") return child;
      if (typeof child === "number") return String(child);
      if (child && typeof child === "object" && "props" in child) {
        const props = (child as { props: { children?: unknown } }).props;
        return String(props.children || "");
      }
      return "";
    })
    .join("")
    .trim();

  return stringText
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start
    .replace(/-+$/, ""); // Trim - from end
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return useMemo(
    () => ({
      h1: (props: HeadingProps) => {
        const id = generateId(props.children);
        return (
          <h1
            {...props}
            id={id}
            className="text-3xl font-bold mb-4 scroll-mt-24"
            data-heading="true"
          >
            {props.children}
          </h1>
        );
      },
      h2: (props: HeadingProps) => {
        const id = generateId(props.children);
        console.log("Generated h2 id:", id, "for:", props.children);
        return (
          <h2
            {...props}
            id={id}
            className="text-2xl font-semibold mb-3 scroll-mt-24 text-left"
            data-heading="true"
          >
            {props.children}
          </h2>
        );
      },
      h3: (props: HeadingProps) => {
        const id = generateId(props.children);
        console.log("Generated h3 id:", id, "for:", props.children);
        return (
          <h3
            {...props}
            id={id}
            className="text-xl font-semibold mb-2 scroll-mt-24 text-left"
            data-heading="true"
          >
            {props.children}
          </h3>
        );
      },
      p: ({ children, ...props }) => (
        <p className="mb-6 leading-loose text-lg" {...props}>
          {children}
        </p>
      ),
      ul: ({ children, ...props }) => (
        <ul className="list-disc list-inside mb-4 space-y-2" {...props}>
          {children}
        </ul>
      ),
      ol: ({ children, ...props }) => (
        <ol className="list-decimal list-inside mb-4 space-y-2" {...props}>
          {children}
        </ol>
      ),
      li: ({ children, ...props }) => (
        <li className="ml-4" {...props}>
          {children}
        </li>
      ),
      img: ({ src, alt, ...props }: { src?: string; alt?: string }) => {
        if (!src) return null;

        return (
          <div className="relative w-full h-64 my-4">
            <Image
              src={src}
              alt={alt || ""}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 768px"
              {...props}
            />
          </div>
        );
      },
      ...components,
    }),
    [components]
  );
}
