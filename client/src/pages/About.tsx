/**
 * Spin & Learn Foundation - About Page
 * Design: Professional, community-focused layout
 * Sections: Organization Story, Founder Bio, Board Members
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" alt="Spin & Learn Foundation" className="h-12" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              About
            </a>
            <a href="/programs" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              Programs
            </a>
            <a href="/blog" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
              Blog
            </a>
            <a href="/support" className="text-foreground hover:border-b-2 hover:border-[#00548a] transition-colors font-medium">
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
              className="text-4xl md:text-5xl font-black text-foreground mb-12"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
              <p>
                The roots of Spin & Learn Foundation go back further than 2025. Our founder Yasiris Ortiz began teaching table tennis to Bronx youth in after school programs in 2016. By 2020, that work grew into Spin & Learn, bringing structured table tennis programs to Bronx schools and expanding across New York City. But as the programs grew, so did the vision.
              </p>
              <p>
                Students were thriving at the table, but when the school day ended there was nowhere for them to go. No club. No training center. No community space dedicated to the sport. And we kept coming back to one striking fact: the Bronx is the only NYC borough without a single table tennis facility.
              </p>
              <p>
                That realization turned a dream into a mission. In November 2025 we officially incorporated Spin & Learn Foundation, Inc. as a 501(c)(3) nonprofit to create a permanent home for table tennis in the Bronx -- a space where youth, adults, and seniors can train, compete, and connect year-round regardless of income or experience level.
              </p>
              <p>
                We are just getting started. But the need is real, the community is ready, and we are committed to building something lasting.
              </p>
              <p>
                Spin & Learn Foundation is led by Yasiris Ortiz, a 4-time Dominican national champion and ITTF Level 3 certified coach who moved to the Bronx in 2016 and saw firsthand what was missing. She founded this organization to give every Bronx resident the same opportunities that table tennis gave her.
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  {/* 2016 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 text-right pr-8">
                        <p className="text-2xl font-bold" style={{ color: '#ffe929' }}>2016</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-muted-foreground">Yasiris begins teaching table tennis to Bronx youth in after school programs.</p>
                      </div>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 text-right pr-8">
                        <p className="text-2xl font-bold" style={{ color: '#ffe929' }}>2020</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-muted-foreground">Spin & Learn launches, bringing structured programs to Bronx schools and expanding across NYC.</p>
                      </div>
                    </div>
                  </div>

                  {/* 2022 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 text-right pr-8">
                        <p className="text-2xl font-bold" style={{ color: '#ffe929' }}>2022</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-muted-foreground">Vision grows beyond schools, dream of a community hub begins.</p>
                      </div>
                    </div>
                  </div>

                  {/* 2025 */}
                  <div className="relative">
                    <div className="flex items-center">
                      <div className="w-1/2 text-right pr-8">
                        <p className="text-2xl font-bold" style={{ color: '#ffe929' }}>2025</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                      <div className="w-1/2 pl-8">
                        <p className="text-muted-foreground">Spin & Learn Foundation Inc. officially incorporated as a 501(c)(3) nonprofit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663065691612/fJYsHeBpEvBRpDiLmUdMYa/YasirisHeadshot_878e50fd.jpg" 
                      alt="Yasiris Ortiz" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Bio and credentials */}
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Yasiris Ortiz</h3>
                  <p className="text-primary font-semibold mb-6">Founder & Executive Director</p>
                  
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
      <section className="py-20 bg-background">
        <div className="container">
          <h2 
            className="text-4xl md:text-5xl font-black text-foreground mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Meet The Board
          </h2>
          
          {/* Donovan Alleyne - Treasurer */}
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663065691612/fJYsHeBpEvBRpDiLmUdMYa/Donovan_54fe5399.jpeg" 
                      alt="Donovan Alleyne" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Donovan Alleyne</h3>
                  <p className="text-primary font-semibold mb-6">Treasurer</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Donovan Alleyne brings extensive financial management and nonprofit leadership experience to Spin & Learn Foundation. With a passion for community development and youth empowerment, Donovan ensures our organization operates with fiscal responsibility and transparency while maximizing our impact in the Bronx.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    As Treasurer, Donovan oversees all financial operations, grant management, and strategic planning to support Spin & Learn's mission of making world-class table tennis accessible to every Bronx resident.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Tim Gamory - Board Member */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <img 
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663065691612/fJYsHeBpEvBRpDiLmUdMYa/Tim_7836ee83.jpeg" 
                      alt="Tim Gamory" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-3xl font-bold text-foreground mb-2">Tim Gamory</h3>
                  <p className="text-primary font-semibold mb-6">Secretary</p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Tim Gamory is a strategic advisor and community advocate committed to building equitable opportunities for underserved communities. With deep roots in the Bronx and a track record of supporting grassroots initiatives, Tim brings invaluable perspective on community engagement and sustainable program development.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Tim's guidance helps Spin & Learn Foundation stay grounded in community needs while scaling our impact across youth, adult, and senior programs throughout the borough.
                  </p>
                </div>
              </div>
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
            <a href="/support">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 group font-semibold">
                Partner With Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/contact">
              <Button size="lg" variant="outline" className="bg-primary/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary/20 text-lg px-8 font-semibold">
                Get In Touch
              </Button>
            </a>
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
