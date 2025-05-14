import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLInputElement)?.value;

    const whatsappNumber = "918095523567"; // Updated WhatsApp number
    // Compose the WhatsApp message
    const whatsappMessage = `Hello, I'm ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setSubmitting(false);
      formRef.current?.reset();
      // Show the toast as feedback
      toast({
        title: "Redirecting to WhatsApp...",
        description: "You will be redirected to WhatsApp to complete your enquiry.",
      });
      // Redirect to WhatsApp
      window.location.href = whatsappURL;
    }, 900);
  }

  return (
    <section
      id="contact"
      className="w-full max-w-lg mx-auto mt-16 mb-12 p-8 rounded-2xl bg-card shadow-glass animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-3">Contact</h2>
      <div className="mb-6 text-base text-muted">
        Email:{" "}
        <a href="mailto:shoyebrampure@gmail.com" className="text-accent underline">
          shoyebrampure@gmail.com
        </a>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full px-4 py-2 rounded bg-background border border-border text-white placeholder-muted outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full px-4 py-2 rounded bg-background border border-border text-white placeholder-muted outline-none focus:ring-2 focus:ring-accent"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="w-full px-4 py-2 rounded bg-background border border-border text-white placeholder-muted outline-none min-h-[96px] focus:ring-2 focus:ring-accent"
          required
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-accent text-white font-semibold px-4 py-2 rounded-lg transition hover:scale-105 disabled:opacity-50"
          disabled={submitting}
        >
          <Send size={18} />
          {submitting ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </section>
  );
}
