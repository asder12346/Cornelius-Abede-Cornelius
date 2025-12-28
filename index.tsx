
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { PORTFOLIO_DATA } from './constants';
import DottedGlowBackground from './components/DottedGlowBackground';
import SideDrawer from './components/SideDrawer';
import { 
    CodeIcon, 
    SparklesIcon, 
    ArrowRightIcon, 
    ArrowUpIcon,
    LinkedInIcon,
    GitHubIcon,
    InstagramIcon,
    XIcon,
    TikTokIcon,
    MenuIcon,
    CloseIcon
} from './components/Icons';

function App() {
  const developerImage = "https://github.com/asder12346/asder12346.github.io/blob/main/samuel.jpg?raw=true";
  const fallbackImage = "https://drive.google.com/file/d/1kO8tflYVuu3jLpCBgdKKptDPZUou9bWw/view?usp=drivesdk";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Intersection Observer for Testimonials Animation
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#projects' },
    { name: 'Timeline', href: '#education' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="portfolio-app">
        <DottedGlowBackground gap={35} radius={1.2} color="rgba(255, 255, 255, 0.05)" glowColor="rgba(59, 130, 246, 0.3)" speedScale={0.1} />
        
        <nav className="top-nav">
            <div className="nav-logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Cornelius<span>.</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-links">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="nav-link-item">{link.name}</a>
                ))}
                <a href="#contact" className="nav-cta">Connect</a>
            </div>

            {/* Mobile Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        <SideDrawer isOpen={isMenuOpen} onClose={closeMenu} title="Menu">
            <div className="mobile-nav-body">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="mobile-nav-link" onClick={closeMenu}>
                        {link.name}
                        <ArrowRightIcon />
                    </a>
                ))}
                <a href="#contact" className="btn btn-primary btn-block mobile-nav-cta" onClick={closeMenu}>
                    Work With Me
                </a>
                <div className="mobile-nav-socials">
                    <a href={PORTFOLIO_DATA.links.linkedin} target="_blank" className="social-btn"><LinkedInIcon /></a>
                    <a href={PORTFOLIO_DATA.links.github} target="_blank" className="social-btn"><GitHubIcon /></a>
                    <a href={PORTFOLIO_DATA.links.instagram} target="_blank" className="social-btn"><InstagramIcon /></a>
                </div>
            </div>
        </SideDrawer>

        <main>
            {/* HERO SECTION */}
            <section className="section hero-section">
                <div className="hero-content">
                    <div className="hero-left">
                        <span className="hero-greeting">Hi, I'm</span>
                        <h1 className="hero-name">/ {PORTFOLIO_DATA.name} /</h1>
                        <span className="hero-tagline">&lt; {PORTFOLIO_DATA.role} &gt;</span>
                        <p className="hero-description">{PORTFOLIO_DATA.heroBio}</p>
                        <div className="hero-actions">
                            <a href="#contact" className="btn btn-primary">Start a Project</a>
                            <a href="#projects" className="btn btn-outline">View My Work</a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="portrait-container">
                            <div className="portrait-glow"></div>
                            <div className="portrait-orbit">
                                <div className="orbit-item badge-1">UI/UX Design</div>
                                <div className="orbit-item badge-2">Clean Code</div>
                                <div className="orbit-item badge-3">AI Integration</div>
                            </div>
                            <div className="portrait-frame">
                                <img 
                                    src={developerImage} 
                                    alt={PORTFOLIO_DATA.name} 
                                    className="portrait-img"
                                    onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT ME SECTION */}
            <section id="about" className="section about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-visual">
                            <div className="curved-photo-box">
                                <div className="photo-inner">
                                    <img src={developerImage} alt="Samaila" onError={(e) => { (e.target as HTMLImageElement).src = fallbackImage; }} />
                                </div>
                                <div className="photo-badge-floating">
                                    <span className="pulse-dot"></span>
                                    Available for Work
                                </div>
                            </div>
                        </div>
                        <div className="about-text">
                            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                            <p className="large-text">{PORTFOLIO_DATA.aboutMe}</p>
                            <p className="bio-paragraph">{PORTFOLIO_DATA.detailedBio}</p>
                            
                            <div className="personal-info-grid">
                                <div className="info-card">
                                    <strong>Email</strong>
                                    <span>{PORTFOLIO_DATA.personalInfo.email}</span>
                                </div>
                                <div className="info-card">
                                    <strong>Phone</strong>
                                    <span>07030175818</span>
                                </div>
                                <div className="info-card">
                                    <strong>Location</strong>
                                    <span>{PORTFOLIO_DATA.personalInfo.location}</span>
                                </div>
                            </div>

                            <h3 className="sub-title">Technical Expertise</h3>
                            <div className="skills-tags">
                                {[...PORTFOLIO_DATA.skills.programming, ...PORTFOLIO_DATA.skills.web].map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="section projects-section">
                <div className="container">
                    <h2 className="section-title text-center">Recent <span className="text-gradient">Works</span></h2>
                    <div className="projects-grid">
                        {PORTFOLIO_DATA.projects.map((proj, i) => (
                            <a key={i} href={proj.url} target="_blank" rel="noopener noreferrer" className="project-card-link">
                                <div className="project-card">
                                    <div className="project-preview">
                                        <div className="preview-overlay">
                                            <span>Visit Website</span>
                                            <ArrowRightIcon />
                                        </div>
                                    </div>
                                    <div className="project-info">
                                        <div className="project-header">
                                            <h3>{proj.name}</h3>
                                            <span className="project-date">{proj.period}</span>
                                        </div>
                                        <p>{proj.desc}</p>
                                        <div className="project-tech-badges">
                                            {proj.tech.split(', ').map((t, idx) => <span key={idx} className="tech-badge">{t}</span>)}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    
                    <div className="projects-cta-wrapper">
                        <div className="projects-cta">
                            <div className="cta-content">
                                <div className="cta-icon-bg">
                                    <SparklesIcon />
                                </div>
                                <div className="cta-text-group">
                                    <h3>Ready to scale your digital presence?</h3>
                                    <p>I build <strong>custom web applications</strong> and high-converting <strong>e-commerce solutions</strong> that deliver real business results.</p>
                                </div>
                                <a href="#contact" className="btn btn-primary cta-button">
                                    Start Your Project Today
                                    <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EDUCATION & CERTS */}
            <section id="education" className="section education-section">
                <div className="container">
                    <div className="timeline-grid">
                        <div className="timeline-col">
                            <h2 className="timeline-title">Academic Journey</h2>
                            <div className="timeline-list">
                                {PORTFOLIO_DATA.education.map((edu, i) => (
                                    <div key={i} className="timeline-item">
                                        <div className="timeline-icon">🎓</div>
                                        <div className="timeline-content">
                                            <h3>{edu.degree}</h3>
                                            <p className="timeline-subtitle">{edu.institution}</p>
                                            <p className="timeline-period">{edu.period}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="timeline-col">
                            <h2 className="timeline-title">Certifications</h2>
                            <div className="certs-grid">
                                {PORTFOLIO_DATA.certifications.map((cert, i) => (
                                    <div key={i} className="cert-card-small">
                                        <div className="cert-badge">🏆</div>
                                        <div className="cert-info">
                                            <h4>{cert.name}</h4>
                                            <p>{cert.issuedBy} • {cert.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section id="testimonials" className="section testimonials-section">
                <div className="container">
                    <h2 className="section-title text-center">Trusted by <span className="text-gradient">Visionaries</span></h2>
                    <div className="testimonials-grid">
                        {PORTFOLIO_DATA.testimonials.map((t, i) => (
                            <div 
                              key={i} 
                              className="testimonial-card animate-on-scroll" 
                              ref={el => testimonialRefs.current[i] = el}
                              style={{ transitionDelay: `${i * 0.2}s` }}
                            >
                                <div className="testimonial-header">
                                    <div className="testimonial-stars">
                                        {[...Array(t.rating)].map((_, idx) => <span key={idx}>★</span>)}
                                    </div>
                                    <div className="quote-icon">"</div>
                                </div>
                                <p className="testimonial-content">{t.content}</p>
                                <div className="testimonial-author">
                                    <img src={t.image} alt={t.name} className="author-image" />
                                    <div className="author-info">
                                        <h4>{t.name}</h4>
                                        <p>{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="section contact-section">
                <div className="container">
                    <div className="contact-card">
                        <div className="contact-text">
                            <h2 className="section-title">Ready to build <span className="text-gradient">Together?</span></h2>
                            <p>I am currently open to new opportunities to collaborate on impactful projects. Whether you need a <strong>custom web application</strong>, a robust <strong>e-commerce solution</strong>, or a <strong>modern business platform</strong> that stands out, I’m here to help you grow. Let's talk about your next big idea!</p>
                            
                            <div className="contact-info-list">
                                <div className="contact-item">
                                    <div className="icon">📧</div>
                                    <div>
                                        <strong>Email</strong>
                                        <span>{PORTFOLIO_DATA.personalInfo.email}</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="icon">📞</div>
                                    <div>
                                        <strong>Phone</strong>
                                        <span>07030175818</span>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="icon">🔗</div>
                                    <div>
                                        <strong>Social Channels</strong>
                                        <div className="social-icon-links">
                                            <a href={PORTFOLIO_DATA.links.linkedin} target="_blank" title="LinkedIn" className="social-btn"><LinkedInIcon /></a>
                                            <a href={PORTFOLIO_DATA.links.github} target="_blank" title="GitHub" className="social-btn"><GitHubIcon /></a>
                                            <a href={PORTFOLIO_DATA.links.instagram} target="_blank" title="Instagram" className="social-btn"><InstagramIcon /></a>
                                            <a href={PORTFOLIO_DATA.links.x} target="_blank" title="X" className="social-btn"><XIcon /></a>
                                            <a href={PORTFOLIO_DATA.links.tiktok} target="_blank" title="TikTok" className="social-btn"><TikTokIcon /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-wrapper">
                            <h3 className="form-title">Send Me a Message</h3>
                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Tell me about your project" rows={4} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="nav-logo">Cornelius<span>.</span></div>
                        <p>Building clean, easy-to-use websites that bring digital ideas to life.</p>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-group">
                            <h4>Pages</h4>
                            {navLinks.map(link => (
                                <a key={link.name} href={link.href}>{link.name}</a>
                            ))}
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="footer-group">
                            <h4>Connect</h4>
                            <div className="footer-social-icons">
                                <a href={PORTFOLIO_DATA.links.linkedin} target="_blank" className="social-btn"><LinkedInIcon /></a>
                                <a href={PORTFOLIO_DATA.links.github} target="_blank" className="social-btn"><GitHubIcon /></a>
                                <a href={PORTFOLIO_DATA.links.instagram} target="_blank" className="social-btn"><InstagramIcon /></a>
                                <a href={PORTFOLIO_DATA.links.x} target="_blank" className="social-btn"><XIcon /></a>
                                <a href={PORTFOLIO_DATA.links.tiktok} target="_blank" className="social-btn"><TikTokIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">© 2025 {PORTFOLIO_DATA.name}. All Rights Reserved.</p>
                    <p className="designed-by">Designed & Built by {PORTFOLIO_DATA.name}</p>
                </div>
            </div>
        </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);
