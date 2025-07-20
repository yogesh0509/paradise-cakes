"use client"

import { Layout } from "@/components/layout/layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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

export default function AboutPage() {
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
          title="About Paradise Cakes"
          description="Learn more about our journey, passion, and commitment to creating delicious memories"
        >
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="space-y-6"
              variants={fadeInLeft}
            >
              <motion.h3 
                className="text-2xl font-bold text-foreground-strong font-display"
                variants={staggerItem}
              >
                Our Story
              </motion.h3>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                variants={staggerItem}
              >
                Paradise Cakes began as a dream in our family kitchen, where the aroma of freshly baked goods filled our home with warmth and joy. What started as a passion project has blossomed into a beloved local bakery that serves the community with love, dedication, and the finest ingredients.
              </motion.p>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                variants={staggerItem}
              >
                Every cake we create tells a story – your story. Whether it's a child's first birthday, a couple's wedding day, or a simple celebration of life's sweet moments, we understand that our cakes become part of your most cherished memories.
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="text-primary/20 text-8xl sm:text-9xl font-script text-center"
              variants={fadeInRight}
            >
              Since 2020
            </motion.div>
          </motion.div>
        </Section>

        {/* Values Section */}
        <Section 
          title="Our Values"
          description="What drives us to create exceptional experiences"
          className="bg-muted/30"
        >
          <motion.div 
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                title: "Quality First",
                description: "We use only the finest ingredients, sourced locally when possible, to ensure every bite is exceptional.",
                icon: "🏆"
              },
              {
                title: "Made with Love", 
                description: "Every cake is handcrafted with attention to detail and a genuine care for our customers' celebrations.",
                icon: "❤️"
              },
              {
                title: "Community Focused",
                description: "We're proud to be part of our local community, celebrating your special moments together.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 font-display">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Specialties Section */}
        <Section title="What Makes Us Special">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div 
              className="space-y-6"
              variants={fadeInLeft}
            >
              <motion.h3 
                className="text-2xl font-bold text-foreground-strong font-display"
                variants={staggerItem}
              >
                Custom Creations
              </motion.h3>
              <motion.div 
                className="space-y-4"
                variants={staggerItem}
              >
                <div className="flex items-start gap-3">
                  <span className="text-primary">✨</span>
                  <div>
                    <h4 className="font-semibold">Personalized Designs</h4>
                    <p className="text-muted-foreground">Each cake is designed according to your vision and preferences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">🎨</span>
                  <div>
                    <h4 className="font-semibold">Creative Decorations</h4>
                    <p className="text-muted-foreground">From elegant florals to fun themes, we bring your ideas to life.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">🍰</span>
                  <div>
                    <h4 className="font-semibold">Unique Flavors</h4>
                    <p className="text-muted-foreground">Try our signature Indian fusion flavors alongside classic favorites.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="space-y-6"
              variants={fadeInRight}
            >
              <motion.h3 
                className="text-2xl font-bold text-foreground-strong font-display"
                variants={staggerItem}
              >
                Our Promise
              </motion.h3>
              <motion.div 
                className="bg-card border border-border/50 rounded-xl p-6 shadow-sm"
                variants={staggerItem}
              >
                <p className="text-muted-foreground italic leading-relaxed mb-4">
                  "We promise to treat every order with the same care and attention we would give to our own family's celebrations. Your joy is our motivation, and your satisfaction is our success."
                </p>
                <p className="font-semibold text-foreground-strong">- The Paradise Cakes Team</p>
              </motion.div>
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
              Ready to Create Something Special?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              variants={staggerItem}
            >
              Let's discuss your dream cake and make your celebration unforgettable.
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={staggerItem}
            >
              <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                <Button asChild size="lg">
                  <Link href="/products">View Our Cakes</Link>
                </Button>
              </motion.div>
              <motion.div variants={buttonPress} whileHover="hover" whileTap="tap">
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </Section>
      </motion.div>
    </Layout>
  );
}
