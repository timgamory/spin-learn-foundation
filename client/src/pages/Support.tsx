/**
 * Spin & Learn Foundation - Support & Partner Page
 * Design: Dual-track layout for location/program partners and individual/institutional donors
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Building2, Heart } from "lucide-react";

export default function Support() {
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
            Partner With Us
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-2xl">
            Join us in bringing world-class table tennis to the Bronx
          </p>
        </div>
      </section>

      {/* Dual Track Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Track 1: Location & Program Partners */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <h2 
                  className="text-3xl md:text-4xl font-black text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Location & Program Partners
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Are you a school, community center, or organization looking to bring table tennis to your members? We partner with institutions across the Bronx to deliver world-class programs in your space.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold text-foreground mb-2">What We Offer</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Professional coaching from ITTF Level 3 certified instructors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Customized programs for youth, adults, and seniors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Equipment and table provision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Tournament and competitive opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Community events and celebrations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Ideal Partners Include</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>NYC Public Schools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Community centers and recreation facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Senior centers and aging services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Youth organizations and after-school programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Corporate wellness programs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 group">
                Become a Location Partner
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Track 2: Individual & Institutional Donors */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h2 
                  className="text-3xl md:text-4xl font-black text-foreground"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Support Our Mission
                </h2>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your donation directly supports our programs and helps us serve more youth, adults, and seniors across the Bronx. Every contribution makes a difference.
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold text-foreground mb-2">How Your Donation Helps</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>$50 provides equipment for a youth participant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>$150 sponsors a senior for 3 months of classes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>$500 funds a community tournament event</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>$1,000 trains a new coach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>$5,000+ creates a scholarship fund for underserved youth</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-2">Donor Levels</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Friend:</strong> $1-$99</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Champion:</strong> $100-$499</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Founder's Circle:</strong> $500-$2,499</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span><strong>Platinum Partner:</strong> $2,500+</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 group">
                Make a Donation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Funders Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-4 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            For Institutional Funders
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
            Foundations, city agencies, and institutional partners: we welcome your support and partnership
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Measurable Impact</h3>
              <p className="text-muted-foreground mb-6">
                We track outcomes across all programs: youth academic performance, senior health metrics, community reach, and program retention rates.
              </p>
              <Button variant="outline" className="w-full">
                View Impact Report
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Strategic Alignment</h3>
              <p className="text-muted-foreground mb-6">
                Our programs address city priorities: youth development, senior wellness, recreation equity, and community building.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Grant Opportunities</h3>
              <p className="text-muted-foreground mb-6">
                We actively pursue funding from foundations and government agencies aligned with our mission and community impact.
              </p>
              <Button variant="outline" className="w-full">
                Request Information
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to partner with us or support our mission? We'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 text-center">
                <div className="p-4 bg-accent/10 rounded-lg inline-block mb-4">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Location Partners</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in hosting Spin & Learn programs at your facility?
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Contact Us
                </Button>
              </Card>

              <Card className="p-8 text-center">
                <div className="p-4 bg-accent/10 rounded-lg inline-block mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Donors & Funders</h3>
                <p className="text-muted-foreground mb-6">
                  Want to support our mission through a donation or grant?
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Contact Us
                </Button>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <strong>Email:</strong> info@spinandlearn.org
              </p>
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
                <li><a href="/programs" className="hover:opacity-100 transition-opacity">Programs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="/support" className="hover:opacity-100 transition-opacity">Support Us</a></li>
                <li><a href="/contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
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
