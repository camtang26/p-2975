import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

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
const WP_API_URL = import.meta.env.VITE_WP_API_URL || "https://cre8tive.ai/wp-json/wp/v2";

// Helper function to check if response is valid
const isValidResponse = (data: any): boolean => {
  return Array.isArray(data) || (typeof data === 'object' && data !== null);
};

// API Functions with better error handling
export const fetchPosts = async (): Promise<WordPressPost[]> => {
  try {
    const response = await fetch(`${WP_API_URL}/posts?_embed`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch posts');
    }
    
    if (!isValidResponse(data)) {
      throw new Error('Invalid response format from WordPress API');
    }
    
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    toast.error("Failed to load posts. Please try again later.");
    return [];
  }
};

export const fetchPages = async (): Promise<WordPressPage[]> => {
  try {
    const response = await fetch(`${WP_API_URL}/pages?_embed`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch pages');
    }
    
    if (!isValidResponse(data)) {
      throw new Error('Invalid response format from WordPress API');
    }
    
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    toast.error("Failed to load pages. Please try again later.");
    return [];
  }
};

export const fetchMedia = async (): Promise<WordPressMedia[]> => {
  try {
    const response = await fetch(`${WP_API_URL}/media`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch media');
    }
    
    if (!isValidResponse(data)) {
      throw new Error('Invalid response format from WordPress API');
    }
    
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching media:', error);
    toast.error("Failed to load media. Please try again later.");
    return [];
  }
};

// React Query Hooks with better error handling
export const useWordPressPosts = () => {
  return useQuery({
    queryKey: ["wp-posts"],
    queryFn: fetchPosts,
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useWordPressPages = () => {
  return useQuery({
    queryKey: ["wp-pages"],
    queryFn: fetchPages,
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useWordPressMedia = () => {
  return useQuery({
    queryKey: ["wp-media"],
    queryFn: fetchMedia,
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
};