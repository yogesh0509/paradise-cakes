"use client"

import Link from "next/link";
import { navigationItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Cake, Info, Phone, Mail, ClipboardList } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";
import { headerScroll, fadeInDown, staggerContainer, staggerItem, buttonPress } from "@/lib/animations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const iconMap: Record<string, React.ReactNode> = {
    "/": <Home className="h-5 w-5 mr-3" />,
    "/products": <Cake className="h-5 w-5 mr-3" />,
    "/about": <Info className="h-5 w-5 mr-3" />,
    "/contact": <Phone className="h-5 w-5 mr-3" />,
    "/ordering": <ClipboardList className="h-5 w-5 mr-3" />,
  };
  
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      variants={headerScroll}
      animate={isScrolled ? "scrolled" : "top"}
    >
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <motion.div 
          className="flex items-center gap-6 md:gap-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo size="md" className="py-1" />
          <motion.nav 
            className="hidden md:flex gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.href}
                variants={fadeInDown}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    layoutId="navbar-indicator"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </motion.div>
        
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                <Button variant="outline" size="icon" className="md:hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key="menu"
                      initial={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  </AnimatePresence>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0 bg-background border-l">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-6 border-b flex justify-between items-center bg-primary/5">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Logo size="md" />
                  </motion.div>
                  <SheetClose asChild>
                    <motion.div
                      variants={buttonPress} 
                      whileHover="hover" 
                      whileTap="tap"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </motion.div>
                  </SheetClose>
                </div>
                <motion.nav 
                  className="flex flex-col p-4 space-y-1"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  {navigationItems.map((item) => (
                    <motion.div key={item.href} variants={staggerItem}>
                      <SheetClose asChild>
                        <motion.div
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-center py-3 px-4 rounded-md text-base font-medium transition-colors hover:bg-primary/5 hover:text-primary text-foreground"
                          >
                            {iconMap[item.href]}
                            {item.name}
                          </Link>
                        </motion.div>
                      </SheetClose>
                    </motion.div>
                  ))}
                  <div className="h-px bg-border my-4"></div>
                  <motion.div 
                    className="px-4 py-4 bg-muted/30 mx-4 rounded-lg"
                    variants={staggerItem}
                  >
                    <p className="text-base font-medium mb-3 text-foreground">Contact Us</p>
                    <motion.p 
                      className="text-sm mb-2 flex items-center"
                      whileHover={{ x: 2 }}
                    >
                      <Phone className="h-4 w-4 mr-2 text-primary" /> 
                      <a href="tel:+917979031093" className="hover:text-accent-lavender">+91 7979031093</a>
                    </motion.p>
                    <motion.p 
                      className="text-sm flex items-center"
                      whileHover={{ x: 2 }}
                    >
                      <Mail className="h-4 w-4 mr-2 text-primary" /> 
                      <a href="mailto:sangeetasaraff@gmail.com" className="hover:text-accent-blue">sangeetasaraff@gmail.com</a>
                    </motion.p>
                  </motion.div>
                </motion.nav>
              </motion.div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.header>
  );
}
