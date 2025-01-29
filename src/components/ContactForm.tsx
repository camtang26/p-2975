import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { FormField } from "./contact/FormField";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const sanitizedData = {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        message: data.message.trim()
      };

      console.log("Sanitized form data:", sanitizedData);
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
      autoComplete="off"
    >
      <FormField
        name="name"
        label="Your name"
        placeholder="Your Name"
        register={register}
        rules={{
          required: "Name is required",
          minLength: { value: 2, message: "Name must be at least 2 characters" },
          maxLength: { value: 50, message: "Name must not exceed 50 characters" },
          pattern: {
            value: /^[a-zA-Z\s]*$/,
            message: "Name can only contain letters and spaces"
          }
        }}
        error={errors.name}
      />

      <FormField
        name="email"
        label="Your email"
        type="email"
        placeholder="Your Email"
        register={register}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"
          },
          maxLength: { value: 100, message: "Email must not exceed 100 characters" }
        }}
        error={errors.email}
      />

      <FormField
        name="message"
        label="Your message"
        placeholder="Your Message"
        register={register}
        rules={{
          required: "Message is required",
          minLength: { value: 10, message: "Message must be at least 10 characters" },
          maxLength: { value: 1000, message: "Message must not exceed 1000 characters" }
        }}
        error={errors.message}
        isTextarea
      />

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