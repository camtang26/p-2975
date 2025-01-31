import { VideoGallery } from './gallery/VideoGallery';

// Sample video data with valid Vimeo video IDs
const videos = [
  {
    id: "1",
    videoId: "824804225",  // Vimeo demo reel
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Creative Demo Reel"
  },
  {
    id: "2",
    videoId: "783455073",  // Animation sample
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "3D Animation"
  },
  {
    id: "3",
    videoId: "825236139",  // Motion graphics
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Motion Graphics"
  },
  {
    id: "4",
    videoId: "824804286",  // Product showcase
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Product Video"
  },
  {
    id: "5",
    videoId: "824804244",  // Corporate video
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Corporate Overview"
  },
  {
    id: "6",
    videoId: "824804197",  // Brand story
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Brand Story"
  }
];

export const Gallery = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
        }}
      />
      
      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-6 font-geist">
            Our Work
          </h2>
        </div>

        <VideoGallery videos={videos} />
      </div>
    </section>
  );
};