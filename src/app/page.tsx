"use client"

import Link from "next/link";
import { products, categories } from "@/lib/data";
import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";
import { CategoryBadge } from "@/components/ui/category-badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  staggerContainer, 
  staggerItem, 
  fadeInUp, 
  fadeInLeft, 
  fadeInRight,
  buttonPress,
  pageTransition 
} from "@/lib/animations";

export default function Home() {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  
  return (
    <Layout>
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Hero Section */}
        <Hero
          title="Delicious Cakes Made With Love"
          description="Handcrafted cakes and pastries for every occasion. From birthdays to weddings, we make your celebrations sweeter."
          imageSrc="/images/logo.png"
          imageAlt="Beautiful cake from Paradise Cakes"
          primaryAction={{ text: "View Our Products", href: "/products" }}
          secondaryAction={{ text: "Ordering Guidelines", href: "/ordering" }}
          className="bg-gradient-to-b from-background to-muted/30"
        />
        
        {/* Featured Products Section */}
        <Section 
          title="Our Featured Products"
          description="Discover our most popular and beloved creations"
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {featuredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                variants={staggerItem}
                custom={index}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-10 text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
          >
            <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
              <Button asChild variant="outline" size="lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Section>
        
        {/* Categories Section */}
        <Section 
          title="Browse By Category"
          description="Find the perfect cake for your special occasion"
          className="bg-muted/30"
        >
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.value}
                variants={staggerItem}
                custom={index}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Link 
                  href={`/products?category=${category.value}`}
                  className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-lg hover:border-primary/20 block"
                >
                  <motion.div 
                    className="p-4 sm:p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (index * 0.05) }}
                  >
                    <h3 className="text-base sm:text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                      {category.description}
                    </p>
                    <CategoryBadge category={category.value} className="transform group-hover:scale-105 transition-transform" />
                  </motion.div>
                  
                  {/* Animated background on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Section>
        
        {/* About Us Section */}
        <Section>
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="text-primary/20 text-7xl sm:text-9xl font-script text-center md:text-left order-2 md:order-1"
              variants={fadeInLeft}
            >
              Our Story
            </motion.div>
            <motion.div 
              className="order-1 md:order-2 space-y-4"
              variants={fadeInRight}
            >
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                variants={staggerItem}
              >
                Paradise Cakes started as a small family business with a passion for creating delicious and beautiful cakes. 
                What began in our home kitchen has grown into a beloved local bakery, but we still make every cake with the 
                same love and attention to detail as we did on day one.
              </motion.p>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                variants={staggerItem}
              >
                We use only the finest ingredients and never compromise on quality. Each cake is handcrafted to perfection, 
                ensuring that your special moments are celebrated with something truly extraordinary.
              </motion.p>
              <motion.div variants={staggerItem}>
                <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                  <Button asChild className="mt-6">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>
        
        {/* Call to Action */}
        <Section className="text-center">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2 
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
              variants={staggerItem}
            >
              Ready to Order Your Dream Cake?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-[600px] mx-auto mb-8"
              variants={staggerItem}
            >
              Whether it's a birthday, wedding, or special celebration, we're here to make it sweeter.  
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={staggerItem}
            >
              <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                <Button asChild size="lg">
                  <Link href="/products">Browse Our Catalog</Link>
                </Button>
              </motion.div>
              <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Request a Custom Order</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>
      </motion.div>
    </Layout>
  );
}
