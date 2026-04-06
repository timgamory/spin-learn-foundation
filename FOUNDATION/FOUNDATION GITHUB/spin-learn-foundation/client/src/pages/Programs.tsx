import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Programs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/logo.png" alt="Spin & Learn Foundation" className="h-12" />
          </Link>
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
            <Link href="/contact" className="inline-block">
              <button className="bg-[#ffe929] hover:bg-[#ffe929]/90 text-[#015486] font-semibold px-6 py-2 rounded-md transition-colors">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-6xl font-black text-foreground mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Programs
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive table tennis programs designed for every stage of life
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="space-y-20 max-w-6xl mx-auto">
            {/* Youth Development */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div 
                className="relative h-80 rounded-lg overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}
              >
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/7lhsck6zqx6znnxhp0y47/youth_training.JPG?rlkey=a8k2igia1nwtjw2zsweoxv1bl&st=l66he653&dl=1"
                  alt="Youth table tennis training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Youth Development
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Through table tennis, we develop confident, resilient young people. Our program builds physical literacy, social-emotional skills, and leadership capacity while creating pathways for meaningful community engagement.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Ages 6-18, all skill levels welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Professional coaching and mentorship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Tournament preparation and competition opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Academic support integration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Adult Programs */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Adult Programs
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Our goal is to create a space where parents, working adults, and community members can stay active, discover a new skill, or rediscover a sport they loved years ago. We believe every adult in our community deserves access to recreation, wellness, and real community connection.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Open play sessions with players of all levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Structured lessons for skill development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>League play and tournament opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Social events that combine competition with community</span>
                  </li>
                </ul>
              </div>
              <div 
                className="relative h-80 rounded-lg overflow-hidden order-1 md:order-2"
                style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)' }}
              >
                <img 
                  src="/images/adult-programs.jpg" 
                  alt="Adult table tennis program" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Senior Wellness */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div 
                className="relative h-80 rounded-lg overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 0 100%)' }}
              >
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/m053fdzuq90p9o5r0tewi/senior_playing.JPG?rlkey=erx64myn9v1i02udzq3byvb7f&st=8bxymnbt&dl=1"
                  alt="Senior wellness program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Senior Wellness
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Table tennis has no age limit. Research shows it improves cognitive function more than many other forms of exercise, while keeping the body active through low impact movement that is gentle on joints. Our goal is to create senior programs where older adults stay active, build real friendships, and share the table with players of every generation.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Welcoming sessions for all fitness levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Activities that improve balance, coordination and mental acuity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Social events that combat isolation and build friendships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Multigenerational play where all ages compete together</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Community Events */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Community Events
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Our community events are designed to bring people together across ages, backgrounds, and skill levels, creating spaces where anyone can discover the sport, experience its benefits, and feel part of something bigger. Every event we host is a step toward building a healthier, more connected community.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Community tournaments and leagues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Exhibition matches featuring skilled players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Cultural celebrations and special events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffe928] mt-2"></div>
                    <span>Intergenerational play events connecting all ages</span>
                  </li>
                </ul>
              </div>
              <div 
                className="relative h-80 rounded-lg overflow-hidden order-1 md:order-2"
                style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)' }}
              >
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/n63w1h69mewppcotspzmq/community_tournament.JPG?rlkey=3ofeo1czowkf82jlzd6narzx1&st=0smd1k2a&dl=1"
                  alt="Community table tennis event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container text-center">
          <p className="text-lg text-muted-foreground mb-6">Ready to get started?</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
