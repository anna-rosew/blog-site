import { PenTool, Mic, UtensilsCrossed, FileText } from "lucide-react";
import { PostType } from "@/types";

// Modified to include a default fallback icon
const postTypeIcons = {
  "short-article": PenTool,
  "long-article": PenTool,
  podcast: Mic,
  recipe: UtensilsCrossed,
  // Add a default icon for fallback
  default: FileText,
};

interface PostTypeIconProps {
  type: PostType;
  size?: number;
  className?: string;
}

export function PostTypeIcon({
  type,
  size = 24,
  className = "",
}: PostTypeIconProps) {
  // Handle cases where type might be undefined or not in our mapping
  const Icon =
    type && postTypeIcons[type] ? postTypeIcons[type] : postTypeIcons.default;

  // Safe check to ensure we always have a valid component
  if (!Icon) {
    console.warn(`No icon found for post type: ${type}`);
    return null;
  }

  return <Icon size={size} className={className} />;
}
