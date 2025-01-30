import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Hls from "hls.js";

interface VideoBackgroundProps {
  isMuted: boolean;
  isPlaying: boolean;
  onToggleMute: () => void;
  onTogglePlay: () => void;
  priority?: boolean;
}

export const VideoBackground = ({
  isMuted,
  isPlaying,
  onToggleMute,
  onTogglePlay,
  priority = false
}: VideoBackgroundProps) => {
  const isMobile = useIsMobile();
  const [videoError, setVideoError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  const videoUrl = `https://vz-376993.b-cdn.net/${encodeURIComponent('56c0d74d-b753-4bd7-82cf-e51101163d42')}/playlist.m3u8`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.error('Video element not found');
      return;
    }

    console.log('Initializing video with HLS.js');

    const initializeVideo = async () => {
      try {
        if (Hls.isSupported()) {
          console.log('HLS.js is supported');
          
          // Cleanup existing HLS instance if any
          if (hlsRef.current) {
            hlsRef.current.destroy();
          }

          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
            debug: true, // Enable debug logs
          });
          
          hlsRef.current = hls;
          
          hls.loadSource(videoUrl);
          hls.attachMedia(video);
          
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log('HLS manifest parsed, attempting to play');
            video.play().catch(error => {
              console.error('Error playing video:', error);
            });
          });

          hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS error:', event, data);
            if (data.fatal) {
              setVideoError(true);
            }
          });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          console.log('Using native HLS support');
          video.src = videoUrl;
          if (isPlaying) {
            try {
              await video.play();
            } catch (error) {
              console.error('Error playing video:', error);
            }
          }
        } else {
          console.error('HLS is not supported in this browser');
          setVideoError(true);
        }
      } catch (error) {
        console.error('Error initializing video:', error);
        setVideoError(true);
      }
    };

    initializeVideo();

    const handleError = (error: Event) => {
      console.error('Video error:', error);
      setVideoError(true);
    };

    const handleLoaded = () => {
      console.log('Video loaded successfully');
      setIsLoaded(true);
    };

    video.addEventListener('error', handleError);
    video.addEventListener('loadeddata', handleLoaded);

    return () => {
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadeddata', handleLoaded);
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [videoUrl]);

  // Handle play/pause state changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(error => {
        console.error('Error playing video:', error);
      });
    } else {
      video.pause();
    }
  }, [isPlaying]);

  if (videoError) {
    console.error('Video error state activated');
    return (
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"
        role="img"
        aria-label="Fallback background gradient"
      />
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
        aria-label="Background video showcasing Cre8tive AI capabilities"
        poster="/placeholder.svg"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
        preload={priority ? "auto" : "metadata"}
      >
        Your browser does not support the video tag.
      </video>
      
      <div 
        className="absolute inset-0 bg-black/50 z-[1]" 
        aria-hidden="true" 
      />
      
      {!isMobile && (
        <div className="absolute bottom-8 right-8 flex gap-4 z-[2]">
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleMute}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
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
            onClick={onTogglePlay}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? 
              <Pause className="h-4 w-4" aria-hidden="true" /> : 
              <Play className="h-4 w-4" aria-hidden="true" />
            }
          </Button>
        </div>
      )}
    </div>
  );
};