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
          <source src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="absolute bottom-8 right-8 flex gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMute}
            className="bg-black/20 border-white/10 hover:bg-white/10"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlay}
            className="bg-black/20 border-white/10 hover:bg-white/10"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-gradient">
          Cre8tive AI
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Cutting Edge AI Solutions For Your Business
        </p>
        <Button
          size="lg"
          className="bg-white/10 hover:bg-white/20 text-white border border-white/10"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};