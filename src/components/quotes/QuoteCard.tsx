import { Quote } from "lucide-react";

interface QuoteCardProps {
  quote: string;
  author: string;
  title: string;
}

export const QuoteCard = ({ quote, author, title }: QuoteCardProps) => {
  return (
    <div className="relative py-12">
      {/* Quote icon with subtle glow effect */}
      <div className="absolute -top-4 left-4">
        <div className="relative">
          <div className="absolute inset-0 blur-lg rounded-full opacity-30">
            <div className="w-8 h-8 bg-[#00ff80]" />
          </div>
          <Quote className="w-8 h-8 text-[#00ff80] relative z-10" />
        </div>
      </div>

      {/* Quote content */}
      <div className="mt-4 space-y-4 max-w-4xl mx-auto">
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