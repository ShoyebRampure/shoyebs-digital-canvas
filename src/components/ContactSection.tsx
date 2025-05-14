
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);

  // This is a stubbed handler (no backend/email service integration)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      formRef.current?.reset();
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. Shoyeb will reply soon.",
      });
    }, 900);
  }

  return (
    <section
      id="contact"
      className="w-full max-w-lg mx-auto mt-16 mb-12 p-8 rounded-2xl bg-card shadow-glass animate-fade-in"
    >
      <h2 className="text-2xl font-bold text-primary mb-3">Contact</h2>
      <div className="mb-6 text-base text-muted">
        Email: <a href="mailto:shoyebrampure@gmail.com" className="text-accent underline">shoyebrampure@gmail.com</a>
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
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
