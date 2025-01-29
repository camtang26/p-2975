import { useState } from "react";
import { Button } from "./ui/button";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import "@fontsource/geist-sans";

/**
 * Hero Component
 * 
 * A full-screen hero section featuring a background video with playback controls.
 * The component includes mute/unmute and play/pause functionality, with an overlay
 * containing the main heading and call-to-action button.
 * 
 * @component
 */
export const Hero = () => {
  // State for video controls
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  // Handler functions for video controls
  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          aria-label="Background video showcasing Cre8tive AI capabilities"
          ref={(el) => {
            if (el) {
              isPlaying ? el.play() : el.pause();
            }
          }}
        >
          <source 
            src="/hero-video.mp4" 
            type="video/mp4" 
            // Security: Only allow video content from our domain
            crossOrigin="anonymous"
          />
          <track 
            kind="captions" 
            src="/captions.vtt" 
            label="English captions" 
            // Accessibility: Default to showing captions
            default 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 z-[1]" 
          aria-hidden="true" 
        />
        
        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 flex gap-4 z-[2]">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMute}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? 
              <VolumeX className="h-4 w-4" aria-hidden="true" /> : 
              <Volume2 className="h-4 w-4" aria-hidden="true" />
            }
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlay}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? 
              <Pause className="h-4 w-4" aria-hidden="true" /> : 
              <Play className="h-4 w-4" aria-hidden="true" />
            }
          </Button>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-[2] text-center space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="font-geist text-7xl md:text-8xl font-bold tracking-tight text-gradient animate-fade-in">
          Cre8tive AI
        </h1>
        <p className="font-geist text-2xl md:text-3xl font-medium text-white/90 animate-fade-in [animation-delay:200ms]">
          Cutting Edge AI Solutions For Your Business
        </p>
        <Button
          size="lg"
          className="font-geist text-lg font-semibold bg-[#4A90E2] hover:bg-[#357ABD] text-white px-10 py-7 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in [animation-delay:300ms]"
          aria-label="Get a free consultation"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};