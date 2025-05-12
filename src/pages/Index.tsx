import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main content */}
      <main className="relative">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="#hero" className="flex items-center">
                <img 
                  src="/webflow-assets/images/logo_catalyst-mark.svg" 
                  loading="lazy" 
                  width="99" 
                  height="237" 
                  alt="Catalyst Logo" 
                  className="h-12 w-auto"
                />
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                <a href="#speakers" className="text-foreground hover:text-primary transition-colors">Speakers</a>
                <a href="#overview" className="text-foreground hover:text-primary transition-colors">Overview</a>
                <a href="#participants" className="text-foreground hover:text-primary transition-colors">Participants</a>
                <a href="#toolkit" className="text-foreground hover:text-primary transition-colors">Resources</a>
                <a href="#essentials" className="text-foreground hover:text-primary transition-colors">Essentials</a>
                <a 
                  href="/agenda" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  AGENDA
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <img 
                  src="/webflow-assets/images/catalyst_primarylogo.svg" 
                  loading="lazy" 
                  width="430" 
                  alt="The primary logo of Catalyst" 
                  className="mx-auto h-24 md:h-32 w-auto"
                />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                A Journey of Change in India
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Catalyst is a journey to India to learn from bold, innovative businesses. We'll explore how they serve a massive middle class with quality and affordability. The goal: bring fresh ideas to lead and create impact where we operate.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/agenda" 
                  className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <span>explore the agenda</span>
                  <svg 
                    className="ml-2 w-5 h-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a 
                  href="#about" 
                  className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  <span>LEARN MORE</span>
                  <svg 
                    className="ml-2 w-5 h-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  WHERE CHANGE BEGINS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Transformational experience for future-ready leaders
                </h2>
              </div>
              <p className="text-lg text-muted-foreground text-center">
                Welcome to a unique journey designed to shake our thinking, spark inspiration, and strengthen the bonds within our Intercorp community. In India, we'll immerse ourselves in bold ideas, innovative business models, and real-world learning—fueling our culture of continuous growth. Together, we'll return ready to lead change and drive impact back home.
              </p>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                SPEAKERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Setting the Stage
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet the expert voices that will ground us in India's economic, cultural, and business landscape—preparing us to engage deeply and lead with purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Journey Ahead
              </h2>
              <p className="text-lg text-muted-foreground">
                A comprehensive exploration of India's business landscape, designed to inspire and transform our approach to leadership and innovation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
