"use client"

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface SectionProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export function Section({ title, description, children, className }: Readonly<SectionProps>) {
  return (
    <motion.section 
      className={cn("py-16 md:py-20 lg:py-24", className)}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        {(title || description) && (
          <motion.div 
            className="text-center mb-12 md:mb-16"
            variants={fadeInUp}
          >
            {title && (
              <motion.h2 
                className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-display text-foreground-strong mb-4"
                variants={staggerItem}
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                variants={staggerItem}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}
        
        <motion.div variants={fadeInUp}>
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}
