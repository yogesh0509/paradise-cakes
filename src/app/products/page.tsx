"use client"

import { products, categories } from "@/lib/data";
import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";
import { Check, Info } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, mobileStaggerContainer, staggerItem, mobileStaggerItem, fadeInUp, buttonPress, pageTransition } from "@/lib/animations";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: Promise<any>
}) {
  const resolvedSearchParams: { [key: string]: string | string[] | undefined } | undefined = searchParams ? await searchParams : undefined;
  // Filter products by category if provided in the URL
  const categoryFilter = resolvedSearchParams?.category;
  const filteredProducts = (categoryFilter ? products.filter((product) => product.category === categoryFilter) : products).slice().sort((a, b) => a.name.localeCompare(b.name));

  // Find the selected category info
  const selectedCategory = categoryFilter
    ? categories.find((cat) => cat.value === categoryFilter)
    : null;

  // Use mobile-optimized animations on smaller screens
  const isMobile = false; // We'll use CSS media queries for responsive behavior

  return (
    <Layout>
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Section
          title={selectedCategory ? `${selectedCategory.name}` : "Our Products"}
          description={
            selectedCategory
              ? selectedCategory.description
              : "Explore our delicious range of handcrafted cakes and pastries"
          }
        >
          {/* Animated notice */}
          <motion.div 
            className="mb-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="rounded-xl border border-accent-blue bg-accent-blue/10 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-sm">
              <Info className="h-5 w-5 text-accent-blue shrink-0 mt-0.5 sm:mt-0" />
              <span className="text-sm text-foreground-strong font-medium leading-relaxed">
                The product images show cakes with special decorations.<br className="hidden sm:inline" />
                <span className="inline sm:ml-1">Decoration charges are extra—please confirm the cost on call or WhatsApp.</span>
              </span>
            </div>
          </motion.div>

          {/* Enhanced Category filters with animations */}
          <motion.div 
            className="mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.1 }}
          >
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              <motion.a
                href="/products"
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border shadow-sm hover:shadow-md ${
                  !categoryFilter
                    ? "bg-primary text-primary-foreground border-primary scale-105"
                    : "bg-card hover:bg-muted/80 border-border hover:border-primary/30"
                }`}
                variants={buttonPress}
                whileHover="hover"
                whileTap="tap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {!categoryFilter && <Check className="mr-2 h-4 w-4" />}
                All Products
                <motion.span 
                  className="ml-2 bg-primary-foreground/20 text-xs px-2 py-0.5 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: !categoryFilter ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {products.length}
                </motion.span>
              </motion.a>
              
              {categories.map((category, index) => (
                <motion.a
                  key={category.value}
                  href={`/products?category=${category.value}`}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border shadow-sm hover:shadow-md ${
                    categoryFilter === category.value
                      ? "bg-primary text-primary-foreground border-primary scale-105"
                      : "bg-card hover:bg-muted/80 border-border hover:border-primary/30"
                  }`}
                  variants={buttonPress}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (index * 0.05) }}
                >
                  {categoryFilter === category.value && <Check className="mr-2 h-4 w-4" />}
                  {category.name}
                  <motion.span 
                    className="ml-2 bg-primary-foreground/20 text-xs px-2 py-0.5 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: categoryFilter === category.value ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {products.filter(p => p.category === category.value).length}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Products grid with stagger animations */}
          {filteredProducts.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={staggerItem}
                  custom={index}
                  layout
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="text-center py-12"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <div className="max-w-md mx-auto">
                <div className="text-4xl mb-4">🍰</div>
                <p className="text-muted-foreground text-lg">No products found in this category.</p>
                <motion.a
                  href="/products"
                  className="inline-flex items-center mt-4 text-primary font-medium hover:underline"
                  whileHover={{ x: 4 }}
                >
                  View all products →
                </motion.a>
              </div>
            </motion.div>
          )}

          {/* Results count for better UX */}
          {filteredProducts.length > 0 && (
            <motion.div 
              className="mt-8 text-center text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Showing {filteredProducts.length} of {products.length} products
            </motion.div>
          )}
        </Section>
      </motion.div>
    </Layout>
  );
}
