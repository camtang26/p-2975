import { Brain, Layers, Palette, Send, Video } from "lucide-react";
import { ConceptCard } from "./ConceptCard";

const steps = [
  {
    title: "Defining Your Vision",
    description: "It all starts with your vision. Tell us about your brand, your target audience, and your campaign goals. Our intuitive platform guides you through the process, ensuring we capture every detail of your creative brief.",
    Icon: Brain,
    color: "#60A5FA" // blue-400
  },
  {
    title: "AI-Powered Storyboard Generation",
    description: "Watch your ideas take shape in minutes. Our AI engine analyzes your input and instantly generates a storyboard, complete with suggested scenes, visuals, and even dialogue or narration.",
    Icon: Layers,
    color: "#F87171" // red-400
  },
  {
    title: "Style Selection & Refinement",
    description: "Take control of your creative. Choose from a range of pre-designed visual styles or customize every detail of your storyboard. Tweak scenes, add notes, and collaborate with your team or clients.",
    Icon: Palette,
    color: "#C084FC" // purple-400
  },
  {
    title: "Seamless Handoff to Production",
    description: "From digital blueprint to polished masterpiece. Once you're happy with your storyboard, it's seamlessly handed off to our expert studio team. We'll bring your vision to life with professional video production.",
    Icon: Send,
    color: "#34D399" // emerald-400
  },
  {
    title: "Broadcast-Ready Results",
    description: "Your vision, expertly crafted. The result is a high-quality, professionally produced video ad that's ready to captivate your audience. With Cre8tive AI, you get the speed and efficiency of AI-powered concepting.",
    Icon: Video,
    color: "#4ADE80" // green-400
  }
];

export const ConceptToCreation = () => {
  return (
    <section 
      className="py-32 relative overflow-hidden"
      aria-label="From concept to creation section"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-gradient text-center mb-24 animate-fade-in">
          From Concept to Creation: Crafting Your Perfect Video Ad
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ConceptCard
              key={index}
              {...step}
              className={`animate-fade-in [animation-delay:${index * 200}ms]`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced background texture */}
      <div 
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%),
            linear-gradient(45deg, rgba(96,165,250,0.1) 0%, rgba(248,113,113,0.1) 50%, rgba(192,132,252,0.1) 100%)
          `
        }}
        aria-hidden="true"
      />
    </section>
  );
};