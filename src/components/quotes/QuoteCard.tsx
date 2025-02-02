import { Quote } from "lucide-react";

interface QuoteCardProps {
  quote: string;
  author: string;
  title: string;
}

export const QuoteCard = ({ quote, author, title }: QuoteCardProps) => {
  return (
    <div className="relative p-6 md:p-12 lg:p-16 transition-all duration-300 max-w-4xl mx-auto">
      {/* Quote icon with glow effect */}
      <div className="absolute top-4 md:top-8 lg:top-12 left-4 md:left-8 lg:left-12">
        <div className="relative">
          <div className="absolute inset-0 blur-xl rounded-full opacity-30">
            <div className="w-6 md:w-8 h-6 md:h-8 bg-[#00ff80]" />
          </div>
          <Quote className="w-6 md:w-8 h-6 md:h-8 text-[#00ff80] relative z-10" />
        </div>
      </div>

      {/* Quote content */}
      <div className="mt-2 md:mt-4 space-y-2 md:space-y-4">
        <p className="text-lg md:text-xl lg:text-3xl font-medium italic text-white/90 leading-relaxed">
          "{quote}"
        </p>
        <div className="space-y-0.5 md:space-y-1">
          <p className="text-base md:text-lg lg:text-xl font-semibold text-[#00ff80]">{author}</p>
          <p className="text-sm md:text-base lg:text-lg text-white/60">{title}</p>
        </div>
      </div>
    </div>
  );
};