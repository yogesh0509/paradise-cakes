import Link from "next/link";
import { products, categories } from "@/lib/data";
import { Layout } from "@/components/layout/layout";
import { Hero } from "@/components/ui/hero";
import { Section } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";
import { CategoryBadge } from "@/components/ui/category-badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);
  
  return (
    <Layout>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </Section>
      
      {/* Categories Section */}
      <Section 
        title="Browse By Category"
        description="Find the perfect cake for your special occasion"
        className="bg-muted/30"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.value} 
              href={`/products?category=${category.value}`}
              className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium">{category.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                <CategoryBadge category={category.value} className="mt-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
      
      {/* About Us Section */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-primary/20 text-9xl font-script">Our Story</div>
          <div>
            <p className="mt-4 text-muted-foreground">
              Paradise Cakes started as a small family business with a passion for creating delicious and beautiful cakes. 
              What began in our home kitchen has grown into a beloved local bakery, but we still make every cake with the 
              same love and attention to detail as we did on day one.
            </p>
            <p className="mt-4 text-muted-foreground">
              We use only the finest ingredients and never compromise on quality. Each cake is handcrafted to perfection, 
              ensuring that your special moments are celebrated with something truly extraordinary.
            </p>
            <Button asChild className="mt-6">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </Section>
      
      {/* Testimonials Section */}
      {/* <Section 
        title="What Our Customers Say"
        className="bg-muted/30"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            [
              {
                id: "testimonial-1",
                name: "Priya Sharma",
                text: "The birthday cake was absolutely stunning and tasted even better! Everyone at the party was impressed.",
              },
              {
                id: "testimonial-2",
                name: "Rahul Patel",
                text: "Our wedding cake was perfect. Paradise Cakes team was so helpful throughout the design process and delivered exactly what we wanted.",
              },
              {
                id: "testimonial-3",
                name: "Ananya Singh",
                text: "The custom cake for my daughter's graduation exceeded all expectations. Not only was it beautiful, but it was also delicious!",
              },
            ].map((testimonial) => (
              <div key={testimonial.id} className="rounded-lg border bg-card p-6">
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((starNumber) => (
                    <svg 
                      key={`${testimonial.id}-star-${starNumber}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="text-primary"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <p className="font-medium">{testimonial.name}</p>
              </div>
            ))
          }
        </div>
      </Section> */}
      
      {/* Call to Action */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Order Your Dream Cake?</h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-[600px] mx-auto">
          Whether it's a birthday, wedding, or special celebration, we're here to make it sweeter.  
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/products">Browse Our Catalog</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Request a Custom Order</Link>
          </Button>
        </div>
      </Section>
    </Layout>
  );
}
