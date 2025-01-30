import { Quote } from "lucide-react";

interface QuoteCardProps {
  quote: string;
  author: string;
  title: string;
}

export const QuoteCard = ({ quote, author, title }: QuoteCardProps) => {
  return (
    <div className="relative py-16 px-8">
      {/* Quote icon with enhanced glow effect */}
      <div className="absolute -top-4 left-8">
        <div className="relative">
          <div className="absolute inset-0 blur-2xl rounded-full opacity-40">
            <div className="w-8 h-8 bg-[#00ff80]" />
          </div>
          <Quote className="w-8 h-8 text-[#00ff80] relative z-10" />
        </div>
      </div>

      {/* Quote content with enhanced styling */}
      <div className="mt-4 space-y-6 max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-medium italic text-white/95 leading-relaxed text-center">
          "{quote}"
        </p>
        <div className="space-y-1 text-center">
          <p className="text-xl font-semibold text-[#00ff80]">{author}</p>
          <p className="text-base text-white/70">{title}</p>
        </div>
      </div>
    </div>
  );
};