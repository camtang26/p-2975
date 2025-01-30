import { Quote } from "lucide-react";

interface QuoteCardProps {
  quote: string;
  author: string;
  title: string;
}

export const QuoteCard = ({ quote, author, title }: QuoteCardProps) => {
  return (
    <div className="relative p-6 transition-all duration-300">
      {/* Quote icon with glow effect */}
      <div className="absolute -top-3 left-6">
        <div className="relative">
          <div className="absolute inset-0 blur-xl rounded-full opacity-30">
            <div className="w-6 h-6 bg-[#00ff80]" />
          </div>
          <Quote className="w-6 h-6 text-[#00ff80] relative z-10" />
        </div>
      </div>

      {/* Quote content */}
      <div className="mt-3 space-y-3">
        <p className="text-lg md:text-xl font-medium italic text-white/90 leading-relaxed">
          "{quote}"
        </p>
        <div className="space-y-1">
          <p className="text-base font-semibold text-[#00ff80]">{author}</p>
          <p className="text-sm text-white/60">{title}</p>
        </div>
      </div>
    </div>
  );
};