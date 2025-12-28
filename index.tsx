
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { PORTFOLIO_DATA } from './constants';
import DottedGlowBackground from './components/DottedGlowBackground';
import { 
    CodeIcon, 
    SparklesIcon, 
    ArrowRightIcon, 
} from './components/Icons';

function App() {
  return (
    <div className="portfolio-app">
        <DottedGlowBackground gap={35} radius={1.2} color="rgba(255, 255, 255, 0.05)" glowColor="rgba(255, 140, 66, 0.3)" speedScale={0.15} />
        
        <nav className="top-nav">
            <div className="nav-logo">SCA<span>.</span></div>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact" className="nav-cta">Work With Me</a>
            </div>
        </nav>

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
                            <a href="#projects" className="btn btn-outline">Explore Work</a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="portrait-container">
                            <div className="portrait-glow"></div>
                            <div className="portrait-orbit">
                                <div className="orbit-item badge-1">Full Stack</div>
                                <div className="orbit-item badge-2">Software Engineer</div>
                                <div className="orbit-item badge-3">Clean Code</div>
                            </div>
                            <img 
                                src="https://github.com/asder12346/asder12346.github.io/blob/main/samuel.jpg?raw=true" 
                                alt={PORTFOLIO_DATA.name} 
                                className="portrait-img"
                                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'; }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="section about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-visual">
                            <div className="curved-photo-box">
                                <img src="https://github.com/asder12346/asder12346.github.io/blob/main/samuel.jpg?raw=true" alt="Samaila" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'; }} />
                                <div className="photo-badge">7+ Years Exp</div>
                            </div>
                        </div>
                        <div className="about-text">
                            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                            <p className="large-text">{PORTFOLIO_DATA.aboutMe}</p>
                            <p className="bio-text">{PORTFOLIO_DATA.detailedBio}</p>
                            
                            <h3 className="sub-title">Core Skills</h3>
                            <div className="skills-tags">
                                {PORTFOLIO_DATA.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="section services-section">
                <div className="container">
                    <h2 className="section-title text-center">My <span className="text-gradient">Services</span></h2>
                    <div className="services-grid">
                        {PORTFOLIO_DATA.services.map((service, i) => (
                            <div key={i} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section id="experience" className="section experience-section">
                <div className="container">
                    <div className="timeline-grid">
                        <div className="timeline-col">
                            <h2 className="timeline-title">Academic <span className="text-gradient">Background</span></h2>
                            <div className="timeline-list">
                                {PORTFOLIO_DATA.education.map((edu, i) => (
                                    <div key={i} className="timeline-item">
                                        <div className="timeline-icon">🎓</div>
                                        <div className="timeline-content">
                                            <h3>{edu.degree}</h3>
                                            <p className="timeline-subtitle">{edu.institution} ({edu.period})</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="timeline-col">
                            <h2 className="timeline-title">Work <span className="text-gradient">Experience</span></h2>
                            <div className="timeline-list">
                                {PORTFOLIO_DATA.experience.map((job, i) => (
                                    <div key={i} className="timeline-item">
                                        <div className="timeline-icon">💼</div>
                                        <div className="timeline-content">
                                            <h3>{job.title}</h3>
                                            <p className="timeline-subtitle">{job.company} ({job.period})</p>
                                            <p className="timeline-desc">{job.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="section projects-section">
                <div className="container">
                    <h2 className="section-title text-center">Featured <span className="text-gradient">Projects</span></h2>
                    <div className="projects-grid">
                        {PORTFOLIO_DATA.projects.map((proj, i) => (
                            <a key={i} href={proj.url} target="_blank" className="project-card">
                                <div className="project-preview">
                                    <div className="preview-overlay">
                                        <span>View Case Study</span>
                                        <ArrowRightIcon />
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{proj.name}</h3>
                                    <p>{proj.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="section contact-section">
                <div className="container">
                    <div className="contact-card">
                        <div className="contact-text">
                            <h2 className="section-title">Ready to build something <span className="text-gradient">Impactful?</span></h2>
                            <p>I'm currently available for freelance work and full-time opportunities. If you have a project in mind or just want to chat about web technology, don't hesitate to reach out!</p>
                            <div className="contact-details">
                                <div className="contact-item">
                                    <strong>Email:</strong>
                                    <span>samuelcorneliusabede@gmail.com</span>
                                </div>
                                <div className="contact-item">
                                    <strong>Location:</strong>
                                    <span>Lagos, Nigeria (Remote Friendly)</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-wrapper">
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
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="nav-logo">SCA<span>.</span></div>
                        <p>Building scalable digital solutions with passion and precision.</p>
                    </div>
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Navigation</h4>
                            <a href="#about">About</a>
                            <a href="#services">Services</a>
                            <a href="#projects">Projects</a>
                        </div>
                        <div className="link-group">
                            <h4>Connect</h4>
                            <a href={PORTFOLIO_DATA.links.linkedin} target="_blank">LinkedIn</a>
                            <a href={PORTFOLIO_DATA.links.github} target="_blank">GitHub</a>
                            <a href={PORTFOLIO_DATA.links.email}>Email</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All Rights Reserved.</p>
                    <div className="footer-social-icons">
                         <a href={PORTFOLIO_DATA.links.linkedin} target="_blank">Li</a>
                         <a href={PORTFOLIO_DATA.links.github} target="_blank">Gh</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);
