import { MDXContent } from "@/types";
import Image from "next/image";

interface RecipeTemplateProps {
  content: MDXContent & {
    cookingTime: number;
    ingredients: string[];
    instructions: string[];
  };
}

export function RecipeTemplate({ content }: RecipeTemplateProps) {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <div className="mb-8">
        <h1>{content.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <span>Cooking Time: {content.cookingTime} minutes</span>
        </div>
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={content.coverImage}
            alt={content.title}
            fill
            className="object-cover rounded-lg"
            placeholder="blur"
            layout="responsive"
          />
        </div>
      </div>

      <section className="mb-8">
        <h2>Ingredients</h2>
        <ul>
          {content.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Instructions</h2>
        <ol>
          {content.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </section>

      <div className="mt-8">{content.children}</div>
    </article>
  );
}
