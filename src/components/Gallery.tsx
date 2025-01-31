import { VideoGallery } from './gallery/VideoGallery';

// Sample video data - replace with actual video sources
const videos = [
  {
    id: "1",
    videoId: "1234567890",
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Video 1"
  },
  {
    id: "2",
    videoId: "0987654321",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Video 2"
  },
  {
    id: "3",
    videoId: "1357924680",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Video 3"
  },
  {
    id: "4",
    videoId: "2468013579",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Video 4"
  },
  {
    id: "5",
    videoId: "9876543210",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Video 5"
  },
  {
    id: "6",
    videoId: "0123456789",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Video 6"
  }
];

export const Gallery = () => {
  return <VideoGallery videos={videos} />;
};