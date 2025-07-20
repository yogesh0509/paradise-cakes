"use client"

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, buttonPress } from "@/lib/animations";

interface HeroProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

export function Hero({
  title,
  description,
  children,
  className,
  imageSrc,
  imageAlt = "Hero image",
  primaryAction,
  secondaryAction,
}: Readonly<HeroProps>) {
  return (
    <motion.section 
      className={cn("relative overflow-hidden", className)}
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div 
            className="flex flex-col justify-center space-y-4"
            variants={fadeInLeft}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-display text-foreground-strong"
              variants={staggerItem}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p 
                className="text-xl text-muted-foreground max-w-[600px]"
                variants={staggerItem}
              >
                {description}
              </motion.p>
            )}
            {(primaryAction || secondaryAction) && (
              <motion.div 
                className="flex flex-wrap gap-4 mt-4"
                variants={staggerItem}
              >
                {primaryAction && (
                  <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                    <Button asChild size="lg">
                      <a href={primaryAction.href}>{primaryAction.text}</a>
                    </Button>
                  </motion.div>
                )}
                {secondaryAction && (
                  <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                    <Button asChild variant="outline" size="lg">
                      <a href={secondaryAction.href}>{secondaryAction.text}</a>
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            )}
            {children && (
              <motion.div variants={staggerItem}>
                {children}
              </motion.div>
            )}
          </motion.div>
          {imageSrc && (
            <motion.div 
              className="relative aspect-square md:aspect-[4/3] lg:aspect-[3/2] rounded-lg overflow-hidden shadow-sm flex items-center justify-center p-4"
              variants={fadeInRight}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.4,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={400}
                  height={400}
                  className="object-contain max-h-full max-w-full"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
