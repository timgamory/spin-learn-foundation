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
            <Link href="/" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              About
            </Link>
            <Link href="/programs" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              Programs
            </Link>
            <Link href="/blog" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              Blog
            </Link>
            <Link href="/support" className="text-foreground hover:border-b-2 hover:border-[#ffe929] transition-colors font-medium">
              Support Us
            </Link>
            <a href="/#contact">
              <button className="bg-[#ffe929] hover:bg-[#ffe929]/90 text-[#015486] font-semibold px-6 py-2 rounded-md transition-colors">
                Contact
              </button>
            </a>
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663065691612/AJJTidXpDreSKbhy.png" 
                  alt="Youth table tennis training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Youth Development
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  After-school and weekend programs that build skills on and off the table. Young players learn proper technique, develop focus and discipline, and build confidence through friendly competition.
                </p>
                <div className="mb-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-3">Our CHAMPS Framework:</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Character:</strong> Developing respectful, resilient team players</li>
                    <li><strong>Health:</strong> Active bodies lead to sharper minds</li>
                    <li><strong>Achievement:</strong> Setting high standards in sport and school</li>
                    <li><strong>Motivation:</strong> Building confidence to push past limits</li>
                    <li><strong>Perseverance:</strong> Learning that grit wins games and life challenges</li>
                    <li><strong>Support:</strong> Creating a safe, encouraging environment</li>
                  </ul>
                </div>
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
                  Table tennis isn't just for kids. Our adult programs offer a fun, social way to stay active, learn a new skill, or rediscover a sport you played years ago. Whether you're a complete beginner or returning to the table after decades away, our programs meet you where you are.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Open play sessions with players of all levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Structured lessons for skill development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>League play and tournament opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Social events that combine competition with community</span>
                  </li>
                </ul>
                <div className="p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground"><strong>Details:</strong> All skill levels welcome • Flexible scheduling for working adults • Low-impact exercise with high engagement • A genuine community of players</p>
                </div>
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
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663065691612/IOVJNekTOZCzQuYl.png" 
                  alt="Senior wellness program" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  Senior Wellness
                </h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Table tennis is one of the best activities for healthy aging. It's low-impact on joints while improving balance, coordination, and reaction time. Research shows it supports cognitive function and may help prevent dementia. But just as important: it's fun, social, and keeps people connected.
                </p>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Our senior programs create a welcoming environment where older adults can stay physically active, sharpen mental acuity, build friendships, and compete in age-appropriate tournaments and events.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Designed for adults 55+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>All fitness levels welcome</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Social activities alongside skill development</span>
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
                  Great communities need places to gather. Our events bring people together across ages, backgrounds, and skill levels to celebrate the sport and each other.
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
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
                    <span>Exhibition matches featuring skilled players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>Cultural celebrations and special events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                    <span>School assembly demonstrations</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic">Our events rotate across Bronx locations to build awareness and make participation easy, no matter where you live.</p>
              </div>
              <div 
                className="relative h-80 rounded-lg overflow-hidden order-1 md:order-2"
                style={{ clipPath: 'polygon(0 8%, 100% 0, 100% 100%, 0 100%)' }}
              >
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663065691612/CVXwgjKFrWYnxTuf.png" 
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
          <Link href="/#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
