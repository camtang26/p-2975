import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import VimeoPlayer, { VimeoPlayerHandle } from './VimeoPlayer';

interface VideoModalProps {
  videoId: string;
  onClose: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

const VideoModal = ({ videoId, onClose, isFullscreen, toggleFullscreen }: VideoModalProps) => {
  const modalRoot = document.getElementById('modal-root');
  const playerRef = useRef<VimeoPlayerHandle>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <div 
      className={`fixed inset-0 z-50 bg-black/90 flex items-center justify-center ${
        isFullscreen ? '!fixed !inset-0' : ''
      }`}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl mx-4 aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-8 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close video"
        >
          <X className="w-6 h-6" />
        </button>
        
        <VimeoPlayer
          ref={playerRef}
          videoId={videoId}
          autoplay={true}
          controls={true}
          className="rounded-lg shadow-xl"
          isBackground={false}
          isFullscreen={isFullscreen}
        />

        <button
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default VideoModal;