import { useState } from "react";
import { Button } from "./ui/button";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
          ref={(el) => {
            if (el) {
              isPlaying ? el.play() : el.pause();
            }
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        
        <div className="absolute bottom-8 right-8 flex gap-4 z-[2]">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMute}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlay}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <div className="relative z-[2] text-center space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="font-inter text-7xl md:text-8xl font-bold tracking-tight text-gradient animate-fade-in">
          Cre8tive AI
        </h1>
        <p className="font-inter text-2xl md:text-3xl font-medium text-white/90 animate-fade-in [animation-delay:200ms]">
          Cutting Edge AI Solutions For Your Business
        </p>
        <Button
          size="lg"
          className="font-inter text-base font-semibold bg-primary hover:bg-primary/90 text-white px-8 py-6 h-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 animate-fade-in [animation-delay:300ms]"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};