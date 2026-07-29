import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, Loader2, Linkedin, Github } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setSubmitting(true);
    setShowAnimation(true);

    const whatsappNumber = '918095523567';
    const whatsappMessage = `Hello, I'm ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      setSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setShowAnimation(false);
      window.open(whatsappURL, '_blank');
    }, 2000);
  };

  return (
  <section id="contact" className="font-body w-full bg-transparent">
      {/* Chapter banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-violet-500 to-fuchsia-500 py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-4 text-center sm:flex-row sm:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              y: { duration: 4, repeat: Infinity },
              default: { duration: 0.6 },
            }}
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm"
          >
            <MessageCircle className="h-9 w-9 text-white" strokeWidth={1.5} />
          </motion.div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-violet-100">
              Let's Connect
            </span>
            <h2 className="font-display mt-1 text-4xl font-extrabold text-white sm:text-5xl">
              Get In Touch
            </h2>
            <p className="mt-1 text-violet-100">
              Have a project idea or just want to say hello?
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
          className="mx-auto grid max-w-[1400px] gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2"
      >
        {/* Contact info */}
        <motion.div
          variants={item}
          className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm sm:p-8"
        >
          <h3 className="font-display text-lg font-bold text-slate-900">
            Contact Information
          </h3>

          <a
            href="mailto:shoyebrampure@gmail.com"
            className="mt-5 flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-violet-600"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-50">
              <Mail className="h-4 w-4 text-violet-600" strokeWidth={1.75} />
            </span>
            shoyebrampure@gmail.com
          </a>

          <div className="my-6 h-px bg-violet-100" />

          <p className="mb-3 text-sm font-semibold text-slate-700">
            Connect with me
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/shoyeb-rampure-584958250/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-100 bg-violet-50/50 text-violet-600 transition-colors hover:border-violet-300 hover:bg-white"
            >
              <Linkedin className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://github.com/ShoyebRampure"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-100 bg-violet-50/50 text-violet-600 transition-colors hover:border-violet-300 hover:bg-white"
            >
              <Github className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href="https://wa.me/918095523567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-100 bg-violet-50/50 text-violet-600 transition-colors hover:border-violet-300 hover:bg-white"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>

          <div className="mt-8 rounded-xl border border-violet-100 bg-violet-50/50 p-4 text-sm italic text-slate-500">
            "I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision."
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-violet-100 bg-white p-6 shadow-sm sm:p-8"
        >
          <h3 className="font-display mb-5 text-lg font-bold text-slate-900">
            Send a Message
          </h3>

          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full rounded-xl border border-violet-100 bg-violet-50/30 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full rounded-xl border border-violet-100 bg-violet-50/30 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-600">
                Your Message
              </label>
              <textarea
                name="message"
                placeholder="Hello, I'd like to discuss a project…"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-violet-100 bg-violet-50/30 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-colors focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
              />
            </div>

            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: submitting ? 1 : 1.01 }}
              whileTap={{ scale: submitting ? 1 : 0.98 }}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-violet-600 text-sm font-semibold text-white transition-colors hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {submitting ? 'Sending message…' : 'Send Message'}
            </motion.button>
          </div>

          <AnimatePresence>
            {showAnimation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl border border-violet-100 bg-white/95 backdrop-blur-sm"
              >
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-50"
                >
                  <MessageCircle className="h-6 w-6 text-violet-600" strokeWidth={1.75} />
                </motion.span>
                <p className="text-sm font-medium text-slate-600">
                  Redirecting to WhatsApp…
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </section>
  );
}