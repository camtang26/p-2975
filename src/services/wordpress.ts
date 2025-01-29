import { useQuery } from "@tanstack/react-query";

// Types for WordPress API responses
export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  modified: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WordPressPage extends WordPressPost {}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    sizes: {
      [key: string]: {
        source_url: string;
      };
    };
  };
}

// Configuration
const WP_API_URL = import.meta.env.VITE_WP_API_URL || "https://your-wordpress-site.com/wp-json/wp/v2";

// API Functions
export const fetchPosts = async (): Promise<WordPressPost[]> => {
  const response = await fetch(`${WP_API_URL}/posts?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export const fetchPages = async (): Promise<WordPressPage[]> => {
  const response = await fetch(`${WP_API_URL}/pages?_embed`);
  if (!response.ok) {
    throw new Error("Failed to fetch pages");
  }
  return response.json();
};

export const fetchMedia = async (): Promise<WordPressMedia[]> => {
  const response = await fetch(`${WP_API_URL}/media`);
  if (!response.ok) {
    throw new Error("Failed to fetch media");
  }
  return response.json();
};

// React Query Hooks
export const useWordPressPosts = () => {
  return useQuery({
    queryKey: ["wp-posts"],
    queryFn: fetchPosts,
  });
};

export const useWordPressPages = () => {
  return useQuery({
    queryKey: ["wp-pages"],
    queryFn: fetchPages,
  });
};

export const useWordPressMedia = () => {
  return useQuery({
    queryKey: ["wp-media"],
    queryFn: fetchMedia,
  });
};