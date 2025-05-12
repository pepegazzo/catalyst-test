import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Main content */}
      <main className="relative">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f3df] border-b border-border">
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
                <a href="#about" className="text-foreground hover:text-primary transition-colors font-bold">About</a>
                <a href="#speakers" className="text-foreground hover:text-primary transition-colors font-bold">Speakers</a>
                <a href="#overview" className="text-foreground hover:text-primary transition-colors font-bold">Overview</a>
                <a href="#participants" className="text-foreground hover:text-primary transition-colors font-bold">Participants</a>
                <a href="#toolkit" className="text-foreground hover:text-primary transition-colors font-bold">Resources</a>
                <a href="#essentials" className="text-foreground hover:text-primary transition-colors font-bold">Essentials</a>
                <a 
                  href="/agenda" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#e0b354] to-[#32674d] text-white rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-lg font-bold shadow-lg border-2 border-black hover:from-[#e0b354]/90 hover:to-[#32674d]/80 transition-all duration-300 relative -mr-2"
                  style={{ boxShadow: '4px 4px 0 #000' }}
                >
                  AGENDA
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          {/* Background grain + gradient */}
          <div className="absolute inset-0 w-full h-full z-0" style={{
            backgroundImage: `linear-gradient(120deg, #b98a3e 0%, #32674d 100%), url('/webflow-assets/images/bg_grain.png')`,
            backgroundBlendMode: 'overlay',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            opacity: 1
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <img 
                  src="/webflow-assets/images/catalyst_primarylogo.svg" 
                  loading="lazy" 
                  width="430" 
                  alt="The primary logo of Catalyst" 
                  className="mx-auto h-32 md:h-40 w-auto drop-shadow-xl"
                />
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-wide uppercase">
                A Journey of Change in India
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium drop-shadow">
                Catalyst is a journey to India to learn from bold, innovative businesses. We'll explore how they serve a massive middle class with quality and affordability. The goal: bring fresh ideas to lead and create impact where we operate.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="/agenda" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#e0b354] to-[#32674d] text-white rounded-lg font-bold shadow-lg border-2 border-black hover:from-[#e0b354]/90 hover:to-[#32674d]/80 transition-all duration-300"
                  style={{ boxShadow: '4px 4px 0 #000' }}
                >
                  <span>EXPLORE THE AGENDA</span>
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
                  className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg font-bold shadow-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300"
                  style={{ boxShadow: '4px 4px 0 #000' }}
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
        <section id="about" className="py-16 md:py-24 bg-[#FCF4DB]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  WHERE CHANGE BEGINS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#32674D] mb-6">
                  A Transformational experience for future-ready leaders
                </h2>
              </div>
              <p className="text-lg text-[#32674D] text-center">
                Welcome to a unique journey designed to shake our thinking, spark inspiration, and strengthen the bonds within our Intercorp community. In India, we'll immerse ourselves in bold ideas, innovative business models, and real-world learning—fueling our culture of continuous growth. Together, we'll return ready to lead change and drive impact back home.
              </p>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="py-16 md:py-24 bg-gradient-to-b from-[#32674D] to-[#32674D]/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                SPEAKERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Setting the Stage
              </h2>
              <p className="text-lg text-white/90">
                Meet the expert voices that will ground us in India's economic, cultural, and business landscape—preparing us to engage deeply and lead with purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 md:py-24 bg-gradient-to-b from-background to-[#FCF4DB]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                OVERVIEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#32674D] mb-6">
                The Journey Ahead
              </h2>
              <p className="text-lg text-[#32674D]">
                A comprehensive exploration of India's business landscape, designed to inspire and transform our approach to leadership and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Participants Section */}
        <section id="participants" className="py-16 md:py-24 bg-gradient-to-b from-[#32674D] to-[#194234] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                PARTICIPANTS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                EXECUTIVES ON A MISSION
              </h2>
              <p className="text-lg text-white/90">
                A diverse group of visionary leaders from across all Intercorp platforms—men and women, seasoned voices and fresh perspectives—coming together to explore, learn, and lead transformation.
              </p>
            </div>
            {/* Example participant card grid placeholder */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg">
                <img src="/webflow-assets/images/image.svg" alt="Participant" className="w-24 h-24 rounded-full mb-4 bg-white/20" />
                <div className="font-bold text-lg">Participant Name</div>
                <div className="text-sm text-white/80">Company</div>
                <div className="text-xs text-white/60">Job Title</div>
              </div>
              {/* Add more participant cards as needed */}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="toolkit" className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-1 bg-orange-400/10 text-orange-400 rounded-full text-sm font-medium mb-4">
                RESOURCES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                your ultimate toolkit on one drive
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Everything you need—at your fingertips. Find all key documents, guides, and materials neatly organized by stage (before, during, and after the journey) in our already-shared OneDrive folder.
              </p>
              <a href="https://interbankpe.sharepoint.com/:f:/s/TeamTalent/EtWn6-38lVFEmhx7-qd7bXABUyrtXdj3LzCTUs92vAXh8Q" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-400 to-yellow-500 text-black font-bold rounded-lg shadow-lg border-2 border-black hover:from-orange-500 hover:to-yellow-400 transition-all duration-300">
                OPEN resources
                <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"/></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Essentials Section */}
        <section id="essentials" className="py-16 md:py-24 bg-[#FCF4DB]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                ESSENTIALS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#32674D] mb-4">
                TRAVEL MUST-KNOWS
              </h2>
              <p className="text-lg text-[#32674D] mb-2">
                From where you're staying to who to call—this section has all the essentials for a smooth and safe journey.
              </p>
              <p className="text-lg text-[#32674D] font-bold">
                Keep it handy or screenshot it to your phone—you'll want this info close at all times.
              </p>
            </div>
            {/* Example hotel card */}
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 gap-6">
              <img src="/webflow-assets/images/To-ShortPixel_0000_Bangalore-02.jpg" alt="Hotel" className="w-40 h-28 object-cover rounded-lg" />
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-[#32674D] mb-2">Hotel Name</h3>
                <div className="text-[#32674D]">Address or details go here</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
