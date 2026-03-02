/*
 * Spin & Learn Foundation - Home Page
 * Design: Community Kinetic - Dynamic movement, diagonal cuts, bold typography
 * Color: Official brand colors - Deep blue (#015486), bright yellow (#ffe928), red (#ec2024)
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Trophy, Target, Mail, Brain, Zap, MapPin, Rocket, Repeat, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { CheckCircle } from "lucide-react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const { data: dbCarouselImages = [] } = trpc.carousel.list.useQuery();
  
  const carouselImages = dbCarouselImages.length > 0
    ? dbCarouselImages.map(img => img.imageUrl)
    : [
        '/images/hero-community.png',
        '/images/adult-programs.jpg',
        '/images/hero-community.png',
        '/images/adult-programs.jpg'
      ];

  // Auto-play slider every 5 seconds
  useEffect(() => {
    if (isHovering || carouselImages.length === 0) return;
    
    const interval = setInterval(() => {
      setLightboxIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovering, carouselImages.length]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError('');
    setNewsletterSuccess(false);

    if (!newsletterEmail.trim()) {
      setNewsletterError('Please enter your email address');
      return;
    }

    if (!validateEmail(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address');
      return;
    }

    setNewsletterSubmitting(true);
    
    try {
      // Simulate API call - replace with actual tRPC mutation when backend is ready
      await new Promise(resolve => setTimeout(resolve, 500));
      setNewsletterSuccess(true);
      setNewsletterEmail('');
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setNewsletterSuccess(false);
      }, 5000);
    } catch (err) {
      setNewsletterError('Failed to subscribe. Please try again.');
    } finally {
      setNewsletterSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" alt="Spin & Learn Foundation" className="h-12" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              Programs
            </Link>
            <Link href="/blog" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              Blog
            </Link>
            <Link href="/support" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              Support Us
            </Link>
            <a href="/#contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" asChild>
                <span>Contact</span>
              </Button>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto py-4 space-y-3">
              <Link href="/" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/programs" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Programs
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/support" className="block px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>
                Support Us
              </Link>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Contact
                </Button>
              </a>
            </div>
          </div>
        )}
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
              className="text-6xl md:text-7xl font-black text-primary-foreground mb-6 leading-tight drop-shadow-lg"
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
                  className="bg-[#ffe929] hover:bg-[#ffe929]/90 text-[#00548a] text-lg px-8 font-semibold"
                  asChild
                >
                  <span>Partner With Us</span>
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
      <section className="py-12 md:py-15 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-5xl md:text-6xl font-black text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              At Spin & Learn Foundation, our mission is to provide programs for economically disadvantaged individuals across diverse communities, ensuring access to enrichment opportunities through table tennis that promote physical and mental wellness, build personal resilience, and develop leadership skills for lifelong success
            </p>
            <a href="/about">
              <Button className="bg-[#ffe929] hover:bg-[#ffe929]/90 text-[#00548a] font-semibold px-8">
                Learn Our Story
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section - Why the Bronx Needs Table Tennis */}
      <section className="py-12 md:py-15 bg-background">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why the Bronx Needs Table Tennis
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
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
              <Card key={index} className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
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

      {/* Photo Gallery Slider Section */}
      <section className="py-12 md:py-15 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>
            Our Community in Action
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
              {/* Slider Container */}
              <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
                <img 
                  src={carouselImages[lightboxIndex]} 
                  alt={`Gallery image ${lightboxIndex + 1}`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
              </div>
              
              {/* Left Arrow */}
              <button
                onClick={() => setLightboxIndex((lightboxIndex - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Right Arrow */}
              <button
                onClick={() => setLightboxIndex((lightboxIndex + 1) % carouselImages.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {lightboxIndex + 1} / {carouselImages.length}
              </div>
            </div>
            
            {/* Thumbnail Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === lightboxIndex ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/programs">
              <Button className="bg-[#ffe929] hover:bg-[#ffe929]/90 text-[#00548a] font-semibold px-8">
                View All Programs
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + carouselImages.length) % carouselImages.length)}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <img
            src={carouselImages[lightboxIndex]}
            alt={`Gallery image ${lightboxIndex + 1}`}
            className="max-w-4xl max-h-[90vh] object-contain"
          />
          
          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % carouselImages.length)}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {lightboxIndex + 1} / {carouselImages.length}
          </div>
        </div>
      )}

      {/* Why We Matter Section - Reframed around benefits */}
      <section className="py-12 md:py-15 bg-card">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why Your Support Matters
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Every contribution helps us build something the Bronx has never had. Here is what you are making possible.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-[#e8f4f8] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#7fb3d5]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="mt-12 text-center">
            <a href="/programs" className="inline-block">
              <Button size="lg" className="bg-[#ffe929] hover:bg-[#ffe929]/90 text-[#00548a] font-semibold px-8">
                Explore Our Programs
              </Button>
            </a>
          </div>
        </div>
      </section>


      {/* Our 2026 Goals Section */}
      <section id="goals" className="py-12 md:py-15 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 
              className="text-5xl md:text-6xl font-black mb-6 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our 2026 Goals
            </h2>
            <p className="text-xl text-primary-foreground/95 leading-relaxed">
              We are just getting started. Here is what we are building toward this year.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Launch 5 Community Programs",
                description: "Serve 150+ participants across youth, adult, and senior programs, beginning with our first pilot program by June 2026."
              },
              {
                icon: Trophy,
                title: "First Citywide Tournament",
                description: "Host Spin & Learn Foundation's first citywide table tennis tournament, bringing together players of all ages and skill levels."
              },
              {
                icon: Repeat,
                title: "Weekly Training & League Play",
                description: "Establish consistent weekly training and league play serving 30+ regular participants in the community."
              }
            ].map((goal, index) => (
              <Card key={index} className="p-8 bg-primary/5 border border-primary/20 text-primary-foreground rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#ffe929] flex items-center justify-center mb-6">
                  <goal.icon className="w-6 h-6 text-[#00548a]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
                <p className="text-primary-foreground/90 leading-relaxed">{goal.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section - Reframed as "Join Us" */}
      <section id="support" className="py-12 md:py-15 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-5xl md:text-6xl font-black text-foreground mb-6"
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
                className="bg-[#ffe929] hover:bg-[#ffe929]/90 text-[#00548a] text-lg px-8 font-semibold"
              >
                Partner With Us
              </Button>
              <Button 
                size="lg" 
                className="bg-[#ed2025] hover:bg-[#ed2025]/90 text-white text-lg px-8 font-semibold"
              >
                Make a Donation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-15 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 
              className="text-5xl md:text-6xl font-black text-foreground mb-16 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Information Card */}
              <div className="bg-card rounded-lg p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Email</div>
                      <a href="mailto:info@spinandlearn.org" className="text-primary hover:text-primary/80 transition-colors">info@spinandlearn.org</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">Location</div>
                      <div className="text-muted-foreground">The Bronx, New York</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Newsletter Card */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-3">Stay Connected</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Get updates on programs, events, and ways to get involved
                </p>
                {newsletterSuccess && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-semibold text-sm">Success!</p>
                      <p className="text-green-700 text-sm">Thank you for subscribing. Check your email for updates.</p>
                    </div>
                  </div>
                )}
                <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        setNewsletterError('');
                      }}
                      className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                        newsletterError ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'
                      }`}
                    />
                    {newsletterError && (
                      <p className="text-red-600 text-sm mt-2">{newsletterError}</p>
                    )}
                  </div>
                  <Button 
                    type="submit"
                    disabled={newsletterSubmitting}
                    className="w-full bg-[#00548a] hover:bg-[#00548a]/90 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {newsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
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
                <a href="#goals" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">2026 Goals</a>
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
