import { useState, useRef } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
}

export const VideoBackground = ({ videoSrc }: VideoBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="absolute inset-0 z-[1]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
        style={{ 
          objectPosition: "center center",
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
        poster="/placeholder.svg"
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 z-[2]"
        aria-hidden="true"
      />
    </div>
  );
};