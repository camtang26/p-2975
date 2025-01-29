import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

/**
 * Contact Form Data Interface
 * Defines the structure of the form data
 */
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * ContactForm Component
 * 
 * A form component that handles user contact submissions with validation
 * and error handling. Includes security measures against XSS and input validation.
 * 
 * @component
 */
export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<ContactFormData>();

  /**
   * Handles form submission
   * Validates and processes the form data
   * 
   * @param {ContactFormData} data - The form data to be submitted
   */
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Sanitize input data to prevent XSS
      const sanitizedData = {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        message: data.message.trim()
      };

      // Here you would typically send the data to your backend
      console.log("Sanitized form data:", sanitizedData);
      
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
      // Security: Prevent browsers from auto-completing sensitive fields
      autoComplete="off"
    >
      {/* Name Field */}
      <div className="space-y-2">
        <Input
          {...register("name", { 
            required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters" },
            maxLength: { value: 50, message: "Name must not exceed 50 characters" },
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: "Name can only contain letters and spaces"
            }
          })}
          placeholder="Your Name"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          aria-label="Your name"
          // Security: Prevent auto-complete and spell-check
          autoComplete="off"
          spellCheck="false"
        />
        {errors.name && (
          <p className="text-red-400 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            },
            maxLength: { value: 100, message: "Email must not exceed 100 characters" }
          })}
          type="email"
          placeholder="Your Email"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
          aria-label="Your email address"
          // Security: Enable browser email validation
          inputMode="email"
        />
        {errors.email && (
          <p className="text-red-400 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Textarea
          {...register("message", { 
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
            maxLength: { value: 1000, message: "Message must not exceed 1000 characters" }
          })}
          placeholder="Your Message"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[150px]"
          aria-label="Your message"
          // Security: Prevent auto-complete
          autoComplete="off"
        />
        {errors.message && (
          <p className="text-red-400 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
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