import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showHedwig, setShowHedwig] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setShowHedwig(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLInputElement)?.value;

    const whatsappNumber = "+91-8095523567";
    const whatsappMessage = `Hello, I'm ${name}.\nEmail: ${email}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setSubmitting(false);
      formRef.current?.reset();
      setShowHedwig(false);
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Hedwig is flying your message ✉️",
      });
      window.location.href = whatsappURL;
    }, 3000);
  }

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');

          @font-face {
            font-family: 'HarryP';
            src: url('https://cdn.jsdelivr.net/gh/Geeksltd/HP-Fonts/HarryPotter.ttf') format('truetype');
          }

          .bg-hogwarts {
            background: linear-gradient(135deg, #1a1a1a, #2c2c2c);
          }

          .shadow-magical {
            box-shadow: 0 0 25px 6px rgba(255, 215, 0, 0.25);
          }

          .text-gold {
            color: #FFD700;
          }

          .font-harry {
            font-family: 'HarryP', 'IM Fell English SC', serif;
          }

          .form-input {
            background: #2c2c2c;
            border: 1px solid #FFD70088;
            color: #fdf6e3;
          }

          .form-input::placeholder {
            color: #c5b992;
          }

          .form-input:focus {
            outline: none;
            border-color: #FFD700;
            box-shadow: 0 0 8px #FFD700aa;
          }

          .btn-magical {
            background: #FFD700;
            color: #000;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .btn-magical:hover {
            transform: scale(1.05);
            box-shadow: 0 0 12px #FFD700aa;
          }

          .hedwig {
            position: absolute;
            top: 100%;
            left: -60px;
            width: 60px;
            height: auto;
            animation: fly-across 3s ease-in-out forwards;
            z-index: 50;
            pointer-events: none;
          }

          @keyframes fly-across {
            0% { transform: translate(0, -100px) rotate(0deg); opacity: 0; }
            30% { opacity: 1; }
            50% { transform: translate(50vw, -150px) rotate(15deg); }
            100% { transform: translate(100vw, -200px) rotate(30deg); opacity: 0; }
          }
        `}
      </style>

      <section
        id="contact"
        className="relative w-full max-w-xl mx-auto mt-16 mb-12 p-8 rounded-3xl bg-hogwarts shadow-magical border border-gold animate-fade-in"
      >
        <h2 className="text-3xl font-harry text-gold mb-6 text-center">🦉 Contact Wizard</h2>
        <div className="mb-6 text-base text-parchment text-center">
          Email:{" "}
          <a href="mailto:shoyebrampure@gmail.com" className="text-gold underline">
            shoyebrampure@gmail.com
          </a>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full px-4 py-2 rounded form-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded form-input"
            required
          />
          <textarea
            name="message"
            placeholder="Your enchanted message"
            className="w-full px-4 py-2 rounded form-input min-h-[96px]"
            required
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 btn-magical font-semibold px-4 py-2 rounded-lg"
          >
            <Send size={18} />
            {submitting ? "Sending via Hedwig..." : "Send Enquiry"}
          </button>
        </form>

        {showHedwig && (
          <img
            src="https://i.ibb.co/YBQmT79/hedwig-white.png"
            alt="Hedwig flying"
            className="hedwig"
          />
        )}
      </section>
    </>
  );
}
