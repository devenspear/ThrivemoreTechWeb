"use client"

import { motion } from "framer-motion";
import { clients } from "@/data/content";

export function ClientScrollingBanner() {
  // Duplicate the clients array for seamless scrolling
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex space-x-12 items-center"
        animate={{
          x: [0, -50 * clients.length]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear"
          }
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={index}
            className="text-slate-400 dark:text-slate-500 font-semibold text-lg whitespace-nowrap hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-300"
          >
            {client}
          </div>
        ))}
      </motion.div>
    </div>
  );
}