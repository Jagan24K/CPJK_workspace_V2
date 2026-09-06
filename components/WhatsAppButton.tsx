"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/data";

export function WhatsAppButton() {
  const href = `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(
    BRAND.whatsappMessage
  )}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CPJK Workspace on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.4, type: "spring", bounce: 0.4, duration: 0.7 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-[#25D366]/70" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 2.667c-7.363 0-13.333 5.97-13.333 13.333 0 2.353.615 4.56 1.69 6.475L2.667 29.333l6.99-1.833a13.27 13.27 0 0 0 6.347 1.62h.006c7.362 0 13.333-5.97 13.333-13.333 0-3.56-1.387-6.907-3.906-9.427a13.24 13.24 0 0 0-9.433-3.693Zm0 24.14h-.005a11.1 11.1 0 0 1-5.657-1.548l-.406-.242-4.148 1.088 1.107-4.044-.264-.415a11.09 11.09 0 0 1-1.7-5.926c0-6.13 4.99-11.12 11.125-11.12a11.05 11.05 0 0 1 7.868 3.26 11.05 11.05 0 0 1 3.253 7.868c0 6.13-4.99 11.12-11.123 11.12Zm6.098-8.328c-.334-.167-1.98-.978-2.287-1.09-.307-.112-.53-.167-.753.167-.223.334-.865 1.09-1.06 1.314-.195.223-.39.25-.724.084-.334-.167-1.41-.52-2.686-1.657-.993-.886-1.664-1.98-1.86-2.314-.194-.334-.02-.514.147-.68.15-.15.334-.39.5-.585.168-.195.223-.334.335-.557.111-.223.056-.418-.028-.585-.084-.167-.753-1.814-1.032-2.485-.272-.653-.548-.565-.753-.575l-.642-.011c-.223 0-.585.084-.892.418-.307.334-1.17 1.144-1.17 2.79 0 1.646 1.198 3.236 1.365 3.459.167.223 2.357 3.6 5.71 5.05.798.344 1.42.55 1.904.704.8.254 1.528.218 2.104.132.642-.096 1.98-.81 2.259-1.593.279-.782.279-1.452.195-1.593-.083-.14-.306-.223-.64-.39Z" />
      </svg>
    </motion.a>
  );
}
