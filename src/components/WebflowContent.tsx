import React from 'react';

const WebflowContent: React.FC = () => {
  return (
    <div className="page-wrapper">
      {/* Global styles */}
      <div className="global-styles">
        <style>
          {`
            /* Make text look crisper and more legible in all browsers */
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              font-smoothing: antialiased;
              text-rendering: optimizeLegibility;
            }
            
            /* Focus state style for keyboard navigation */
            *[tabindex]:focus-visible,
            input[type="file"]:focus-visible {
              outline: 0.125rem solid #4d65ff;
              outline-offset: 0.125rem;
            }
            
            /* Set color style to inherit */
            .inherit-color * {
              color: inherit;
            }
            
            /* Container alignment */
            .container-medium,
            .container-small,
            .container-large {
              margin-right: auto !important;
              margin-left: auto !important;
            }

            /* Import Webflow styles */
            @import url('/webflow-assets/css/normalize.css');
            @import url('/webflow-assets/css/webflow.css');
            @import url('/webflow-assets/css/catalyststaging.webflow.css');
          `}
        </style>
      </div>
      
      {/* Main content */}
      <main className="main-wrapper">
        <div data-animation="default" className="nav_component w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-duration="400" id="navbar">
          <div className="padding-global">
            <div className="nav_container">
              <a href="#hero" className="nav_brand w-nav-brand">
                <img src="/webflow-assets/images/logo_catalyst-mark.svg" loading="lazy" width="99" height="237" alt="" className="catalyst_logomark" />
              </a>
              <nav role="navigation" className="nav_menu w-nav-menu">
                <a href="#about" className="nav_menu_link w-nav-link">About</a>
                <a href="#speakers" className="nav_menu_link w-nav-link">Speakers</a>
                <a href="#overview" className="nav_menu_link w-nav-link">overview</a>
                <a href="#participants" className="nav_menu_link w-nav-link">Participants</a>
                <a href="#toolkit" className="nav_menu_link w-nav-link">RESOURCES</a>
                <a href="#essentials" className="nav_menu_link w-nav-link">essentials</a>
                <a href="/agenda" className="nav_menu-cta w-inline-block">
                  <div className="nav_menu-cta-text">AGENDA</div>
                </a>
              </nav>
            </div>
          </div>
        </div>

        <section id="hero" className="section_hero">
          <div className="padding-global padding-section-small is-hero">
            <div className="container-large">
              <div className="hero_content">
                <div className="hero_logo-wrapper">
                  <img src="/webflow-assets/images/catalyst_primarylogo.svg" loading="lazy" width="430" alt="The primary logo of Catalyst" className="catalyst_primary-logo" />
                </div>
                <div className="hero_text">
                  <h1 className="heading-style-h1 text-color-primary">A Journey of Change in India</h1>
                  <p className="text-size-medium text-color-primary text-weight-medium">
                    Catalyst is a journey to India to learn from bold, innovative businesses. We'll explore how they serve a massive middle class with quality and affordability. The goal: bring fresh ideas to lead and create impact where we operate.
                  </p>
                </div>
                <div className="hero_cta-wrapper">
                  <a href="/agenda" className="hero_cta-button w-inline-block">
                    <div className="button-primary">
                      <div className="button_title">explore the agenda</div>
                      <div className="button_icon-wrapper">
                        <div className="button_icon-go">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="#about" className="hero_secondary-button-link w-inline-block">
                    <div className="button-secondary">
                      <div className="button_title">LEARN MORE</div>
                      <div className="button_icon-wrapper">
                        <div className="button_icon-down">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section_about is-sand">
          <div className="padding-global padding-section-medium">
            <div className="container-medium">
              <div className="about_content">
                <div className="section_title-wapper">
                  <div className="text-size-tag">WHERE CHANGE BEGINS</div>
                  <h2 className="heading-style-h2 is-color-alternate">a Transformational experience for future-ready leaders</h2>
                </div>
                <p className="text-size-regular text-color-alternate">
                  Welcome to a unique journey designed to shake our thinking, spark inspiration, and strengthen the bonds within our Intercorp community. In India, we'll immerse ourselves in bold ideas, innovative business models, and real-world learning—fueling our culture of continuous growth. Together, we'll return ready to lead change and drive impact back home.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WebflowContent; 