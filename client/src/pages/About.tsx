/**
 * Spin & Learn Foundation - About Page
 * Design: Professional, community-focused layout
 * Sections: Organization Story, Founder Bio, Board Members
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/images/logo.png" alt="Spin & Learn Foundation" className="h-12" />
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about">
              <a className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            </Link>
            <Link href="/#programs">
              <a className="text-foreground hover:text-primary transition-colors font-medium">Programs</a>
            </Link>
            <Link href="/blog">
              <a className="text-foreground hover:text-primary transition-colors font-medium">Blog</a>
            </Link>
            <Link href="/support">
              <a className="text-foreground hover:text-primary transition-colors font-medium">Support Us</a>
            </Link>
            <Link href="/#contact">
              <a>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Contact
                </Button>
              </a>
            </Link>
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
            About Spin & Learn Foundation
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-2xl">
            Building the Bronx's table tennis community from the ground up
          </p>
        </div>
      </section>

      {/* Organization Story Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 
              className="text-4xl md:text-5xl font-black text-foreground mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Spin & Learn Foundation was founded with a simple observation: the Bronx is the only NYC borough without a single table tennis facility. Despite being a borough full of talent, energy, and community spirit, residents of all ages lacked access to a sport that transforms lives.
              </p>
              <p>
                Table tennis is more than a sport. It's affordable (under $20 to start), can be played year-round indoors, and is low-impact but highly engaging. Research shows it improves cognitive function, helps with ADHD symptoms in children, and supports brain health in seniors. Yet the Bronx remained underserved.
              </p>
              <p>
                We founded Spin & Learn to change that. Today, we serve youth, adults, and seniors across 15+ community locations, bringing world-class coaching, competitive opportunities, and genuine community connection to thousands of Bronx residents each year.
              </p>
              <p>
                Our mission is clear: we train youth into confident athletes, support adults in building new skills, and help seniors stay active and connected. Through table tennis, we're building a healthier, more connected Bronx.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Meet Yasiris Ortiz
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                {/* Placeholder for photo */}
                <div className="md:col-span-1">
                  <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Photo Placeholder</span>
                  </div>
                </div>
                
                {/* Bio and credentials */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Yasiris Ortiz</h3>
                  <p className="text-accent font-semibold mb-6">Founder & Executive Director</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Yasiris Ortiz is a 4-time Dominican national table tennis champion, 2018 Caribbean Senior Champion, and Pan American Games competitor who brought her passion for the sport to New York City in 2016.
                  </p>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Growing up in Bayaguana, Dominican Republic, Yasiris discovered table tennis as a young girl and went on to represent her country at the highest levels of international competition. When she moved to the Bronx, she saw an opportunity: a borough full of talent and energy, but without access to the sport that had shaped her life. She founded Spin & Learn to change that.
                  </p>

                  <div className="mb-8">
                    <h4 className="font-bold text-foreground mb-4">Credentials & Achievements</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>4-Time Dominican National Champion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>2018 Caribbean Senior Champion (Women's Singles)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Pan American Games Competitor (Lima 2019)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>ITTF Level 3 Certified Coach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>USATT Club Coach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Goldman Sachs 10,000 Small Businesses Graduate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Nasdaq Milestone Circles Fellow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Community Enterprise Accelerator Fellow</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>Author, "Yasi The Champion"</span>
                      </li>
                    </ul>
                  </div>

                  <blockquote className="border-l-4 border-accent pl-6 py-4 italic text-muted-foreground">
                    "Table tennis has allowed me to experience life in a different way. I've been able to represent my country and travel the world. Now my goal is to give young people in the Bronx those same opportunities."
                  </blockquote>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Board Members
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Board Member 1 */}
            <Card className="p-6 text-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center mb-6">
                <span className="text-muted-foreground text-sm">Photo Placeholder</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Board Member Name</h3>
              <p className="text-accent font-semibold mb-4">Title / Role</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Brief bio describing their background, expertise, and connection to Spin & Learn Foundation's mission.
              </p>
            </Card>

            {/* Board Member 2 */}
            <Card className="p-6 text-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center mb-6">
                <span className="text-muted-foreground text-sm">Photo Placeholder</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Board Member Name</h3>
              <p className="text-accent font-semibold mb-4">Title / Role</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Brief bio describing their background, expertise, and connection to Spin & Learn Foundation's mission.
              </p>
            </Card>

            {/* Board Member 3 */}
            <Card className="p-6 text-center">
              <div className="bg-muted rounded-lg aspect-square flex items-center justify-center mb-6">
                <span className="text-muted-foreground text-sm">Photo Placeholder</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Board Member Name</h3>
              <p className="text-accent font-semibold mb-4">Title / Role</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Brief bio describing their background, expertise, and connection to Spin & Learn Foundation's mission.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 
            className="text-4xl md:text-5xl font-black mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Join Our Community
          </h2>
          <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto">
            Whether you're interested in playing, volunteering, or supporting our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support">
              <a>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 group font-semibold">
                  Partner With Us
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </Link>
            <Link href="/#contact">
              <a>
                <Button size="lg" variant="outline" className="bg-primary/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary/20 text-lg px-8 font-semibold">
                  Get In Touch
                </Button>
              </a>
            </Link>
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
                <li><Link href="/"><a className="hover:opacity-100 transition-opacity">Home</a></Link></li>
                <li><Link href="/about"><a className="hover:opacity-100 transition-opacity">About</a></Link></li>
                <li><Link href="/#programs"><a className="hover:opacity-100 transition-opacity">Programs</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/support"><a className="hover:opacity-100 transition-opacity">Support Us</a></Link></li>
                <li><Link href="/#contact"><a className="hover:opacity-100 transition-opacity">Contact</a></Link></li>
                <li><Link href="/blog"><a className="hover:opacity-100 transition-opacity">Blog</a></Link></li>
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
