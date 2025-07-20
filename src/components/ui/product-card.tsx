"use client"

import Image from "next/image";
import { Product } from "@/types";
import { Clock, MessageCircle, Star } from "lucide-react";
import { CategoryBadge } from "./category-badge";
import { motion } from "framer-motion";
import { cardHover, buttonPress, fadeIn } from "@/lib/animations";

interface ProductCardProps {
  readonly product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:border-primary/20 will-change-transform"
      variants={cardHover}
      initial="initial"
      animate="animate"
      whileHover="hover"
      layout
    >
      <div className="block overflow-hidden">
        {/* Improved mobile-first image container */}
        <motion.div 
          className="relative overflow-hidden"
          style={{ aspectRatio: "4/3" }} // Better aspect ratio for mobile
        >
          {product.images?.[0] ? (
            <div className="relative h-full w-full">
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full w-full"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={product.featured}
                />
              </motion.div>
              {/* Gradient overlay for better text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-muted-foreground">No image</span>
            </div>
          )}
          
          {/* Improved badge positioning for mobile */}
          <motion.div 
            className="absolute top-2 left-2 z-10"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CategoryBadge category={product.category} />
          </motion.div>
          
          {product.featured && (
            <motion.div 
              className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full shadow-lg backdrop-blur-sm"
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Star className="inline h-3 w-3 mr-1 fill-current" />
              Featured
            </motion.div>
          )}

          {product.seasonal && (
            <motion.div 
              className="absolute bottom-2 left-2 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-lg"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Seasonal
            </motion.div>
          )}
        </motion.div>
        
        {/* Improved content section with better mobile spacing */}
        <motion.div 
          className="p-4 sm:p-5 space-y-3"
          variants={fadeIn}
        >
          <div className="flex justify-between items-start gap-2">
            <motion.h3 
              className="font-medium text-base sm:text-lg leading-tight font-display line-clamp-2 flex-1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {product.name}
            </motion.h3>
            <motion.span 
              className="font-medium text-primary font-display text-base sm:text-lg shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {typeof product.price === 'number' ? `₹${product.price.toFixed(2)}` : product.price}
            </motion.span>
          </div>
          
          <motion.p 
            className="text-sm text-muted-foreground line-clamp-2 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {product.description}
          </motion.p>
          
          <motion.div 
            className="flex items-center text-sm text-foreground-strong font-semibold"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Clock className="h-4 w-4 mr-2 text-primary" />
            {product.quantity}
          </motion.div>
          
          {/* Enhanced customizable badge */}
          {product.customizable && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-xs bg-secondary/30 text-secondary-foreground px-3 py-1.5 rounded-full inline-flex items-center shadow-sm border border-secondary/20">
                ✨ Customizable
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Improved WhatsApp button with better mobile touch target */}
      <motion.div 
        className="px-4 sm:px-5 pb-4 sm:pb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {product.seasonal && (
          <div className="text-xs text-orange-600 font-medium mb-3 text-center bg-orange-50 px-3 py-1 rounded-full">
            Limited time only! 🥭
          </div>
        )}
        
        {/* WhatsApp Order Button - Improved for mobile */}
        <motion.a 
          href={`https://wa.me/917979031093?text=${encodeURIComponent(
            `Hello! I would like to order:\n` +
            `*${product.name}*\n` +
            `Price: ${typeof product.price === 'number' ? `₹${product.price.toFixed(2)}` : product.price}\n` +
            `Quantity: ${product.quantity}\n` +
            `Please confirm availability and decoration options.\n\n` +
            `${product.images?.[0] ? `Product image: https://www.paradisecakes.xyz/${product.images[0]}` : ''}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl"
          variants={buttonPress}
          whileHover="hover"
          whileTap="tap"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm sm:text-base">Order on WhatsApp</span>
        </motion.a>
      </motion.div>
      
      {/* Hover overlay for desktop */}
      <motion.div 
        className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block"
        initial={false}
      />
    </motion.div>
  );
}
