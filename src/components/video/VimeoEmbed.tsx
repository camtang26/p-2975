import { cn } from "@/lib/utils";
import { VideoErrorBoundary } from "./VideoErrorBoundary";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export interface VimeoEmbedProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  title?: string;
}

export const VimeoEmbed = ({
  videoId,
  autoplay = false,
  loop = false,
  muted = false,
  className,
  title = "Vimeo video player"
}: VimeoEmbedProps) => {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    loop: loop ? "1" : "0",
    muted: muted ? "1" : "0",
    title: "1",
    byline: "0",
    portrait: "0",
    dnt: "1" // Do Not Track
  });

  const embedUrl = `https://player.vimeo.com/video/${videoId}?${params.toString()}`;

  return (
    <VideoErrorBoundary>
      <div className={cn("w-full", className)}>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src={embedUrl}
            className="h-full w-full rounded-lg"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={title}
            loading="lazy"
            style={{
              border: 0
            }}
          />
        </AspectRatio>
      </div>
    </VideoErrorBoundary>
  );
};