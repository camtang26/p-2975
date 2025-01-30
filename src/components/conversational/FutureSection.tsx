import { motion } from "framer-motion";

export const FutureSection = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote 
            className="text-3xl md:text-4xl font-bold text-gradient italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            "Don't let your competitors outpace you—AI is the future of marketing, and the future is now."
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};