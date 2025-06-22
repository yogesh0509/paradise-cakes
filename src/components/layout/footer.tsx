import Link from "next/link";
import { navigationItems } from "@/lib/data";
import { Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo size="md" />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Handcrafted cakes and pastries made with love. Perfect for any occasion.
            </p>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h3 className="text-base font-medium mb-4">Contact Us</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>5A, jamuna tower, tungri</p>
              <p>Chaibasa, 833201</p>
              <p className="mt-2">Phone: +91 7979031093</p>
              <p>Email: sangeetasaraff@gmail.com</p>
            </address>
            <div className="mt-4 flex gap-4">
              <a href="https://www.facebook.com/share/1HrCWLiPTH/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/paradise_cakes24?utm_source=qr&igsh=MWtpZ3RpZWVqdG96ZQ==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="tel:+917979031093" className="text-muted-foreground hover:text-accent-lavender">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Call us</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Paradise Cakes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
