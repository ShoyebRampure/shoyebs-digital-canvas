import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function ResumeDownload() {
  return (
    <div className="font-body flex justify-center py-8">
      <motion.a
        href="/resume.pdf"
        target="_blank"
        download="Shoyeb Rampure-Resume.pdf"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="flex h-12 items-center gap-2 rounded-full bg-violet-600 px-7 text-base font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
      >
        <Download className="h-5 w-5" strokeWidth={1.75} />
        Resume
      </motion.a>
    </div>
  );
}