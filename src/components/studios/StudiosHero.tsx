import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import Hls from "hls.js";

export const StudiosHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const videoUrl = `https://vz-376993.b-cdn.net/${encodeURIComponent('56c0d74d-b753-4bd7-82cf-e51101163d42')}/playlist.m3u8`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.error('Video element not found');
      return;
    }

    console.log('Initializing video with HLS.js in StudiosHero');

    const initializeVideo = async () => {
      try {
        if (Hls.isSupported()) {
          console.log('HLS.js is supported');
          
          if (hlsRef.current) {
            hlsRef.current.destroy();
          }

          const hls = new Hls({
            enableWorker: true,
            lowLatencyMode: true,
            debug: true,
          });
          
          hlsRef.current = hls;
          
          hls.loadSource(videoUrl);
          hls.attachMedia(video);
          
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log('HLS manifest parsed in StudiosHero, attempting to play');
            video.play().catch(error => {
              console.error('Error playing video:', error);
            });
          });

          hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS error in StudiosHero:', event, data);
            if (data.fatal) {
              setVideoError(true);
            }
          });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          console.log('Using native HLS support');
          video.src = videoUrl;
          video.play().catch(error => {
            console.error('Error playing video:', error);
          });
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

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
      }
    };
  }, [videoUrl]);

  return (
    <section 
      className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Studios hero section"
    >
      {/* Video Background */}
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
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/60 z-[2]"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-[3] container mx-auto px-4 text-center mt-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          Cre8tive AI Studios
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto mb-8 italic [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
          AI won't take over your business, but a business leveraging AI video 
          production will revolutionize the way you create, engage, and dominate 
          your market.
        </p>

        <Button 
          size="lg"
          className="text-lg px-8 py-6 hover-lift hover-glow bg-blue-900 text-white shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.6),0_0_30px_rgba(59,130,246,0.4)] hover:bg-blue-800 transition-all duration-300"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};