"use client"

import Link from "next/link";
import { navigationItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Cake, Info, Phone, Mail, ClipboardList } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  
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
    <header 
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Logo size="md" className="py-1" />
          <nav className="hidden md:flex gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0 bg-background border-l">
              <div className="p-6 border-b flex justify-between items-center bg-primary/5">
                <Logo size="md" />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col p-4 space-y-1">
                {navigationItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center py-3 px-4 rounded-md text-base font-medium transition-colors hover:bg-primary/5 hover:text-primary text-foreground"
                    >
                      {iconMap[item.href]}
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
                <div className="h-px bg-border my-4"></div>
                <div className="px-4 py-4 bg-muted/30 mx-4 rounded-lg">
                  <p className="text-base font-medium mb-3 text-foreground">Contact Us</p>
                  <p className="text-sm mb-2 flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" /> 
                    <a href="tel:+917979031093" className="hover:text-accent-lavender">+91 7979031093</a>
                  </p>
                  <p className="text-sm flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary" /> 
                    <a href="mailto:sangeetasaraff@gmail.com" className="hover:text-accent-blue">sangeetasaraff@gmail.com</a>
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
