/**
 * Spin & Learn Foundation - Blog Page
 * Design: Clean, readable blog layout with article cards
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Calendar, User } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "How Table Tennis Improves Brain Health in Seniors",
      excerpt: "Research shows table tennis can help prevent cognitive decline and support healthy aging. Learn why this sport is perfect for seniors.",
      date: "January 15, 2024",
      author: "Yasiris Ortiz",
      category: "Health & Wellness"
    },
    {
      id: 2,
      title: "Youth Tournament Results: Our Champions Shine",
      excerpt: "Celebrating our young athletes who competed in the regional tournament. See highlights and learn about their achievements.",
      date: "January 10, 2024",
      author: "Spin & Learn Team",
      category: "Programs"
    },
    {
      id: 3,
      title: "Why the Bronx Needs Table Tennis",
      excerpt: "Understanding the recreation gap in our borough and how table tennis can build community across all ages.",
      date: "January 5, 2024",
      author: "Yasiris Ortiz",
      category: "Community"
    },
    {
      id: 4,
      title: "Getting Started: A Beginner's Guide to Table Tennis",
      excerpt: "New to table tennis? Learn the basics, equipment you need, and how to join our beginner programs.",
      date: "December 28, 2023",
      author: "Spin & Learn Team",
      category: "Getting Started"
    },
    {
      id: 5,
      title: "Meet Our Coaches: Stories from the Table",
      excerpt: "Get to know the dedicated coaches who make our programs possible. Hear their journeys and passion for the sport.",
      date: "December 20, 2023",
      author: "Spin & Learn Team",
      category: "Community"
    },
    {
      id: 6,
      title: "ADHD and Table Tennis: A Game-Changer for Kids",
      excerpt: "Discover how table tennis can help children with ADHD develop focus, discipline, and confidence.",
      date: "December 15, 2023",
      author: "Yasiris Ortiz",
      category: "Health & Wellness"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" alt="Spin & Learn Foundation" className="h-12" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              About
            </a>
            <a href="/programs" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              Programs
            </a>
            <a href="/blog" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              Blog
            </a>
            <a href="/support" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              Support Us
            </a>
            <a href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Contact
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container">
          <h1 
            className="text-5xl md:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Spin & Learn Blog
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-2xl">
            Stories, insights, and updates from our community
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground mb-6 border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter to get the latest stories, program updates, and community news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/images/logo-dark.png" alt="Spin & Learn Foundation" className="h-10 mb-4" />
              <p className="text-sm opacity-80">Building the Bronx's table tennis community.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/" className="hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="/about" className="hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="/#programs" className="hover:opacity-100 transition-opacity">Programs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/support" className="hover:opacity-100 transition-opacity">Support Us</a></li>
                <li><a href="/#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
                <li><a href="/blog" className="hover:opacity-100 transition-opacity">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm opacity-80 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@spinandlearn.org
              </p>
              <p className="text-sm opacity-80 mt-2">The Bronx, New York</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2024 Spin & Learn Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
