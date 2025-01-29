import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 animate-fade-in"
    >
      <div className="space-y-2">
        <Input
          {...register("name", { required: "Name is required" })}
          placeholder="Your Name"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          aria-label="Your name"
        />
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          type="email"
          placeholder="Your Email"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          aria-label="Your email address"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Your Message"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[150px]"
          aria-label="Your message"
        />
        {errors.message && (
          <p className="text-red-400 text-sm">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full transition-all duration-300 hover:scale-105 disabled:opacity-50"
        aria-label={isSubmitting ? "Sending message..." : "Send message"}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};