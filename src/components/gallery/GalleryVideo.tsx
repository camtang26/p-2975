import { Play } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";

interface GalleryVideoProps {
  video: {
    thumbnail: string;
    source: string;
    title: string;
  };
  index: number;
  onClick: (video: { thumbnail: string; source: string; title: string }, index: number) => void;
}

export const GalleryVideo = ({ video, index, onClick }: GalleryVideoProps) => {
  return (
    <div
      className="relative break-inside-avoid cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#9b87f5]/10 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onClick(video, index)}
      role="button"
      tabIndex={0}
      aria-label={`Play ${video.title}`}
    >
      <AspectRatio ratio={16 / 9}>
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet={`${video.thumbnail}?w=640&fm=webp&q=80 1x, ${video.thumbnail}?w=1280&fm=webp&q=80 2x`}
            type="image/webp"
          />
          <source
            media="(max-width: 1024px)"
            srcSet={`${video.thumbnail}?w=800&fm=webp&q=80 1x, ${video.thumbnail}?w=1600&fm=webp&q=80 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${video.thumbnail}?w=1024&fm=webp&q=80 1x, ${video.thumbnail}?w=2048&fm=webp&q=80 2x`}
            type="image/webp"
          />
          <img
            src={`${video.thumbnail}?w=1024&q=80`}
            alt={`Video thumbnail for ${video.title}`}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            decoding="async"
            width={1024}
            height={576}
          />
        </picture>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
          <Play className="w-20 h-20 text-white" aria-hidden="true" />
        </div>
      </AspectRatio>
    </div>
  );
};