/*
 * Spin & Learn Foundation - Home Page
 * Design: Community Kinetic - Dynamic movement, diagonal cuts, bold typography
 * Color: Official brand colors - Deep blue (#015486), bright yellow (#ffe928), red (#ec2024)
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Trophy, Target, Mail, Brain, Zap, MapPin } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import PhotoCarousel from "@/components/PhotoCarousel";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const { data: dbCarouselImages = [] } = trpc.carousel.list.useQuery();
  
  const carouselImages = dbCarouselImages.length > 0
    ? dbCarouselImages.map(img => img.imageUrl)
    : [
        '/images/hero-community.png',
        '/images/adult-programs.jpg',
        '/images/hero-community.png',
        '/images/adult-programs.jpg'
      ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" alt="Spin & Learn Foundation" className="h-12" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-[#ffe929] transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-[#ffe929] transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="text-foreground hover:text-[#ffe929] transition-colors font-medium">
              Programs
            </Link>
            <Link href="/blog" className="text-foreground hover:text-[#ffe929] transition-colors font-medium">
              Blog
            </Link>
            <Link href="/support" className="text-foreground hover:text-[#ffe929] transition-colors font-medium">
              Support Us
            </Link>
            <a href="/#contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                <span>Contact</span>
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diagonal cut with dynamic energy */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Diagonal background with image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-community.png)',
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        <div className="container relative z-10 pt-12">
          <div className="max-w-3xl">
            <h1 
              className="text-5xl md:text-7xl font-black text-primary-foreground mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Bronx Deserves World-Class Table Tennis
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 leading-relaxed">
              The Bronx is the only NYC borough without a single table tennis facility. Spin & Learn Foundation is changing that by creating programs that make world-class table tennis accessible to every Bronx resident, regardless of age or income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/support">
                <Button 
                  size="lg" 
                  className="bg-[#ffe929] hover:bg-[#ffe929]/90 text-[#00548a] text-lg px-8 group font-semibold"
                  asChild
                >
                  <span>
                    Partner With Us
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
              <a href="/support">
                <Button 
                  size="lg" 
                  className="bg-[#ed2025] hover:bg-[#ed2025]/90 text-white text-lg px-8 font-semibold"
                  asChild
                >
                  <span>Make a Donation</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement - Clean section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Spin & Learn Foundation, our mission is to provide programs for economically disadvantaged individuals across diverse communities, ensuring access to enrichment opportunities through table tennis that promote physical and mental wellness, build personal resilience, and develop leadership skills for lifelong success
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section - Why the Bronx Needs Table Tennis */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why the Bronx Needs Table Tennis
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto" style={{fontSize: '20px'}}>
            The Bronx is NYC's poorest borough, yet its residents -- youth, adults, and seniors -- deserve access to structured sports programs, real competition opportunities, and spaces that build community. Table tennis is low-impact, can be played year-round indoors, and has one of the lowest injury rates of any sport. Yet the Bronx remains the only NYC borough without a single table tennis facility.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "For Youth",
                points: [
                  "Less than 34% of low-income youth play sports",
                  "Nearly 28% of Bronx residents live in poverty",
                  "Youth need structured training and competition"
                ]
              },
              {
                title: "For Adults",
                points: [
                  "Few affordable fitness options",
                  "Limited social recreation opportunities",
                  "Need flexible, accessible activities"
                ]
              },
              {
                title: "For Seniors",
                points: [
                  "Isolation is a major health concern",
                  "Need low-impact exercise options",
                  "Intergenerational connection is rare"
                ]
              }
            ].map((group, index) => (
              <Card key={index} className="p-6 bg-card border-2 border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <PhotoCarousel images={carouselImages} autoScrollInterval={4000} />

      {/* Why We Matter Section - Reframed around benefits */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why Your Support Matters
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto" style={{fontSize: '20px'}}>
            Every contribution helps us build something the Bronx has never had. Here is what you are making possible.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
            {[
              {
                icon: MapPin,
                title: "Filling a Gap",
                description: "You are helping bring table tennis to the only NYC borough without a single facility. Your support puts the sport directly into schools and community centers where Bronx residents already gather."
              },
              {
                icon: Zap,
                title: "Affordable Access",
                description: "You are helping remove financial barriers so everyone can play. We are working to make world-class table tennis accessible to every Bronx resident regardless of age or income."
              },
              {
                icon: Brain,
                title: "Health & Brain Benefits",
                description: "You are funding programs backed by science. Table tennis improves cognitive function, supports children with ADHD, protects brain health in seniors, and has one of the lowest injury rates of any sport."
              },
              {
                icon: Users,
                title: "Connecting Ages",
                description: "You are creating one of the few spaces where a 10-year-old and a 70-year-old can compete as equals. Your support builds real relationships across generations."
              },
              {
                icon: Trophy,
                title: "World-Class Coaching",
                description: "You are giving residents access to a coaching team with real competitive experience, led by a Caribbean champion and ITTF Level 3 certified coach."
              },
              {
                icon: Heart,
                title: "Community Hub",
                description: "You are helping build the Bronx's first table tennis hub - a home for leagues, tournaments, and a growing community of players of all ages."
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-primary/30 bg-background rounded-lg"
              >
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a href="/programs" className="inline-block">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                <span style={{fontSize: '18px'}}>
                  Explore Our Programs
                  <ArrowRight className="ml-2" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>


      {/* Impact Stats - Bold numbers with motion */}
      <section id="impact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-black mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Youth Served Annually" },
              { number: "150+", label: "Senior Participants" },
              { number: "15+", label: "Community Locations" },
              { number: "25+", label: "Trained Coaches" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {stat.number}
                </div>
                <div className="text-lg text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section - Reframed as "Join Us" */}
      <section id="support" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Join Us
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Bronx deserves better access to sports, wellness, and community. Your support helps us make that a reality - one rally at a time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 font-semibold"
              >
                Make a Donation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 font-semibold" style={{backgroundColor: '#ffffff'}}
              >
                Partner With Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 font-semibold"
              >
                Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">info@spinandlearn.org</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Location</div>
                      <div className="text-muted-foreground">The Bronx, New York</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">For Grantmakers</h3>
                <p className="text-muted-foreground mb-4">
                  We welcome inquiries from foundations, city agencies, and institutional funders. Our programs are designed to meet community needs while delivering measurable impact.
                </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Request Grant Information
              </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/images/logo-dark.png" alt="Spin & Learn Foundation" className="h-10" />
              <p className="text-primary-foreground/80 mt-4">
                Bringing world-class table tennis to the Bronx since 2020.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a>
                <a href="#programs" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Programs</a>
                <a href="#impact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Impact</a>
                <a href="#support" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">Support Us</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <p className="text-primary-foreground/80">info@spinandlearn.org</p>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2026 Spin & Learn Foundation, Inc. All rights reserved. | 501(c)(3) Nonprofit Organization</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
