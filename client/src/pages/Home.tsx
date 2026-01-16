/**
 * Spin & Learn Foundation - Home Page
 * Design: Community Kinetic - Dynamic movement, diagonal cuts, bold typography
 * Color: Forest green primary, coral accent, warm cream background
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Heart, Trophy, Target, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" alt="Spin & Learn Foundation" className="h-12" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#programs" className="text-foreground hover:text-primary transition-colors font-medium">Programs</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors font-medium">Impact</a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors font-medium">Support Us</a>
            <a href="#contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Contact
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
            backgroundImage: 'url(/images/hero-table-tennis.png)',
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
              Building Community Through Table Tennis
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/95 mb-8 leading-relaxed">
              Spin & Learn Foundation expands access to professional table tennis programs across all ages—from youth development to senior wellness—creating a vibrant, intergenerational table tennis community in the Bronx and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 group font-semibold"
              >
                Learn About Our Programs
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary/10 backdrop-blur-sm border-primary text-primary hover:bg-primary/20 text-lg px-8 font-semibold"
              >
                Support Our Mission
              </Button>
            </div>
          </div>
        </div>

        {/* Trajectory line decoration */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-20">
          <img src="/images/abstract-motion.png" alt="" className="w-full h-full object-contain" />
        </div>
      </section>

      {/* Mission Statement - Clean section */}
      <section id="about" className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The mission of the Spin & Learn Foundation, Inc. is to provide programs for economically disadvantaged individuals across diverse communities, ensuring access to enrichment opportunities through table tennis that promote physical and mental wellness, build personal resilience, and develop leadership skills for lifelong success.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Priorities - Grid with diagonal accents */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Why We Matter
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Our foundation addresses critical community needs while positioning the Bronx as a table tennis destination
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Target,
                title: "Grant Eligibility",
                description: "Established nonprofit status with eligibility for restricted funding from DYCD, city agencies, and foundation grantmakers"
              },
              {
                icon: Users,
                title: "Community Expansion",
                description: "Vision extends beyond school contracts to serve all ages—youth, adults, and seniors—across diverse communities"
              },
              {
                icon: Heart,
                title: "Accessibility for All",
                description: "Programs designed to welcome and support participants of all ages, backgrounds, and skill levels"
              },
              {
                icon: MapPin,
                title: "Bronx/NYC Destination",
                description: "Building the Bronx's reputation as a premier table tennis hub, attracting players and events citywide"
              },
              {
                icon: Trophy,
                title: "High-Level Training",
                description: "Consistent, professional coaching and development programs that build competitive skills and confidence"
              },
              {
                icon: Users,
                title: "Intergenerational Impact",
                description: "Creating connections across generations through shared passion for table tennis and community building"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-border bg-card"
                style={{
                  clipPath: index % 2 === 0 
                    ? 'polygon(0 0, 100% 0, 100% 95%, 0 100%)' 
                    : 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)'
                }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Staggered layout */}
      <section id="programs" className="py-20 bg-card">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Programs
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Comprehensive table tennis programs designed for every stage of life
          </p>

          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Youth Development */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div 
                className="relative h-80 rounded-lg overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}
              >
                <img 
                  src="/images/youth-program.png" 
                  alt="Youth table tennis training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Youth Development
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  After-school and weekend programs that build fundamental skills, discipline, and confidence in young players. Our youth programs focus on both athletic development and character building, preparing the next generation of community leaders.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Ages 8-18, all skill levels welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Professional coaching and mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Tournament preparation and competition opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Senior Wellness */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Senior Wellness
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Active aging programs that promote physical health, cognitive function, and social connection through table tennis. Our senior programs create a welcoming space for older adults to stay active and engaged.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Low-impact exercise with significant health benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Social activities and community building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Flexible scheduling for all fitness levels</span>
                  </li>
                </ul>
              </div>
              <div 
                className="relative h-80 rounded-lg overflow-hidden order-1 md:order-2"
                style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)' }}
              >
                <img 
                  src="/images/senior-wellness.png" 
                  alt="Senior wellness program" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Community Events */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div 
                className="relative h-80 rounded-lg overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}
              >
                <img 
                  src="/images/community-event.png" 
                  alt="Community table tennis event" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Community Events
                </h3>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Tournaments, exhibitions, and open play sessions that bring the community together. Our events celebrate local talent, foster neighborhood pride, and make table tennis accessible to everyone.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Monthly community tournaments and leagues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Free open play sessions for all ages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Special events and cultural celebrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats - Bold numbers with motion */}
      <section id="impact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/abstract-motion.png" alt="" className="w-full h-full object-cover" />
        </div>
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
              { number: "12", label: "Community Locations" },
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

      {/* Support Section - CTA with energy */}
      <section id="support" className="py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Support Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Help us expand access to table tennis programs and build stronger communities. Your support makes a direct impact on the lives of youth, seniors, and families across the Bronx.
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
                className="text-lg px-8 font-semibold"
              >
                Partner With Us
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
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      <div className="text-muted-foreground">(718) 555-SPIN</div>
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
                Building community through table tennis since 2020.
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
              <p className="text-primary-foreground/80 mb-2">info@spinandlearn.org</p>
              <p className="text-primary-foreground/80">(718) 555-SPIN</p>
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
