import { useWordPressPosts, useWordPressPages } from "@/services/wordpress";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export const WordPressContent = () => {
  const { 
    data: posts, 
    isLoading: postsLoading, 
    error: postsError 
  } = useWordPressPosts();
  
  const { 
    data: pages, 
    isLoading: pagesLoading, 
    error: pagesError 
  } = useWordPressPages();

  if (postsError || pagesError) {
    toast.error("Failed to load WordPress content");
    return (
      <div className="text-center text-red-500">
        Error loading content. Please try again later.
      </div>
    );
  }

  if (postsLoading || pagesLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Pages Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold font-geist text-gradient">Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pages?.map((page) => (
            <div 
              key={page.id}
              className="glass-morphism p-6 rounded-lg space-y-4"
            >
              <h3 
                className="text-xl font-bold font-geist"
                dangerouslySetInnerHTML={{ __html: page.title.rendered }}
              />
              <div 
                className="prose prose-invert"
                dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Posts Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold font-geist text-gradient">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <div 
              key={post.id}
              className="glass-morphism p-6 rounded-lg space-y-4"
            >
              {post._embedded?.["wp:featuredmedia"]?.[0] && (
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post._embedded["wp:featuredmedia"][0].alt_text}
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
              )}
              <h3 
                className="text-xl font-bold font-geist"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div 
                className="prose prose-invert"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              <div className="text-sm text-white/60">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};