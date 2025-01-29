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
          <source src="/placeholder-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/50" />
        
        <div className="absolute bottom-8 right-8 flex gap-4">
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
      
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <h1 className="text-7xl md:text-8xl font-bold text-gradient animate-fade-in">
          Cre8tive AI
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 animate-fade-in delay-200">
          Cutting Edge AI Solutions For Your Business
        </p>
        <Button
          size="lg"
          className="bg-[#9b87f5] hover:bg-[#b5a6f8] text-white border-none transition-all duration-300 transform hover:scale-105 animate-fade-in delay-300"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};