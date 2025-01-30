import { Quote } from "lucide-react";

interface QuoteCardProps {
  quote: string;
  author: string;
  title: string;
}

export const QuoteCard = ({ quote, author, title }: QuoteCardProps) => {
  return (
    <div className="relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
      {/* Quote icon with glow effect */}
      <div className="absolute -top-4 left-8">
        <div className="relative">
          <div className="absolute inset-0 blur-xl rounded-full opacity-50">
            <div className="w-8 h-8 bg-[#00ff80]" />
          </div>
          <Quote className="w-8 h-8 text-[#00ff80] relative z-10" />
        </div>
      </div>

      {/* Quote content */}
      <div className="mt-4 space-y-4">
        <p className="text-xl md:text-2xl font-medium italic text-white/90 leading-relaxed">
          "{quote}"
        </p>
        <div className="space-y-1">
          <p className="text-lg font-semibold text-[#00ff80]">{author}</p>
          <p className="text-sm text-white/60">{title}</p>
        </div>
      </div>
    </div>
  );
};