"use client"

import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Clock, MessageCircle, Phone, Calendar, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import { 
  pageTransition, 
  staggerContainer, 
  staggerItem, 
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  buttonPress
} from "@/lib/animations";

export default function OrderingPage() {
  const orderingSteps = [
    {
      step: 1,
      title: "Browse & Choose",
      description: "Explore our product catalog and select your preferred cake or contact us for custom designs.",
      icon: <Utensils className="h-6 w-6" />,
      tips: ["Check our featured products", "Consider dietary requirements", "Think about serving size"]
    },
    {
      step: 2,
      title: "Contact Us",
      description: "Reach out via WhatsApp, phone, or email to discuss details and confirm availability.",
      icon: <MessageCircle className="h-6 w-6" />,
      tips: ["Share your event date", "Describe design preferences", "Mention any allergies"]
    },
    {
      step: 3,
      title: "Confirmation",
      description: "We'll confirm your order details, provide final pricing, and arrange payment.",
      icon: <CheckCircle className="h-6 w-6" />,
      tips: ["50% advance payment required", "Final details confirmation", "Delivery/pickup arrangement"]
    },
    {
      step: 4,
      title: "Delivery/Pickup",
      description: "Your cake will be ready for pickup or delivery on your scheduled date.",
      icon: <Calendar className="h-6 w-6" />,
      tips: ["Pickup available at our location", "Delivery within local area", "Best consumed within 2-3 days"]
    }
  ];

  return (
    <Layout>
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {/* Hero Section */}
        <Section 
          title="How to Order"
          description="Simple steps to get your perfect cake from Paradise Cakes"
        >
          <motion.div 
            className="grid gap-6 md:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {orderingSteps.map((step, index) => (
              <motion.div 
                key={step.step}
                className="grid md:grid-cols-12 gap-6 items-center"
                variants={staggerItem}
                custom={index}
              >
                {/* Step Number & Icon */}
                <motion.div 
                  className="md:col-span-2 flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-2 shadow-lg">
                    {step.step}
                  </div>
                  <div className="text-primary bg-primary/10 p-2 rounded-lg">
                    {step.icon}
                  </div>
                </motion.div>
                
                {/* Content */}
                <motion.div 
                  className="md:col-span-10 space-y-4"
                  variants={fadeInRight}
                >
                  <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-foreground-strong font-display mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-foreground-strong">Tips:</h4>
                      <ul className="space-y-1">
                        {step.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Contact Methods */}
        <Section 
          title="How to Reach Us"
          description="Choose your preferred way to place your order"
          className="bg-muted/30"
        >
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="p-6 rounded-xl bg-[#128C7E]/10 border border-[#128C7E]/20"
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#128C7E] rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground-strong">WhatsApp (Recommended)</h3>
                  <p className="text-sm text-muted-foreground">Quick responses & easy communication</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Send us your order details, see product images, and get instant responses. Perfect for sharing reference photos and getting quick updates.
              </p>
              <motion.a
                href="https://wa.me/917979031093?text=Hello! I would like to place an order for a cake. Please help me with the details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#128C7E] hover:bg-[#075E54] text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 w-full justify-center"
                variants={buttonPress}
                whileHover="hover"
                whileTap="tap"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </motion.a>
            </motion.div>

            <motion.div 
              className="p-6 rounded-xl bg-primary/10 border border-primary/20"
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground-strong">Phone Call</h3>
                  <p className="text-sm text-muted-foreground">Direct conversation & detailed discussion</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Call us for detailed discussions about custom designs, complex orders, or if you prefer speaking directly with our team.
              </p>
              <motion.a
                href="tel:+917979031093"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors duration-300 w-full justify-center"
                variants={buttonPress}
                whileHover="hover"
                whileTap="tap"
              >
                <Phone className="h-4 w-4" />
                Call +91 7979031093
              </motion.a>
            </motion.div>
          </motion.div>
        </Section>

        {/* Call to Action */}
        <Section className="text-center bg-muted/30">
          <motion.div 
            className="max-w-2xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h2 
              className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-display"
              variants={staggerItem}
            >
              Ready to Order Your Perfect Cake?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={staggerItem}
            >
              Browse our products or contact us directly to discuss your custom cake needs.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={staggerItem}
            >
              <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                <Button asChild size="lg">
                  <Link href="/products">Browse Products</Link>
                </Button>
              </motion.div>
              <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>
      </motion.div>
    </Layout>
  );
}
