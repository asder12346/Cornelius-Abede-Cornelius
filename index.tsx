
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
        <DottedGlowBackground gap={40} radius={1} color="rgba(59, 130, 246, 0.1)" glowColor="rgba(59, 130, 246, 0.4)" speedScale={0.2} />
        
        <nav className="top-nav">
            <div className="nav-logo">SC.Abede</div>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href={PORTFOLIO_DATA.links.linkedin} target="_blank">Contact</a>
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
                            <a href="#projects" className="btn btn-primary">View My Work</a>
                            <a href={PORTFOLIO_DATA.links.github} className="btn btn-outline" target="_blank">GitHub Profile</a>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="portrait-container">
                            <div className="portrait-glow"></div>
                            <div className="portrait-orbit">
                                <div className="orbit-item badge-1">Web Design</div>
                                <div className="orbit-item badge-2">UI/UX</div>
                                <div className="orbit-item badge-3">Impactful</div>
                            </div>
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                                alt={PORTFOLIO_DATA.name} 
                                className="portrait-img"
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
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" alt="Samaila" />
                            </div>
                        </div>
                        <div className="about-text">
                            <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
                            <p className="large-text">{PORTFOLIO_DATA.aboutMe}</p>
                            <p className="bio-text">{PORTFOLIO_DATA.detailedBio}</p>
                            
                            <div className="skills-tags">
                                {PORTFOLIO_DATA.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION (Education & Experience) */}
            <section id="experience" className="section experience-section">
                <div className="container">
                    <div className="timeline-grid">
                        {/* Education */}
                        <div className="timeline-col">
                            <h2 className="timeline-title">Academic <span className="text-gradient">Qualification</span></h2>
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

                        {/* Work */}
                        <div className="timeline-col">
                            <h2 className="timeline-title">Job <span className="text-gradient">Experience</span></h2>
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
                    <h2 className="section-title text-center">Selected <span className="text-gradient">Works</span></h2>
                    <div className="projects-grid">
                        {PORTFOLIO_DATA.projects.map((proj, i) => (
                            <a key={i} href={proj.url} target="_blank" className="project-card">
                                <div className="project-preview">
                                    <div className="preview-overlay"><ArrowRightIcon /></div>
                                </div>
                                <div className="project-info">
                                    <h3>{proj.name}</h3>
                                    <p>{proj.desc}</p>
                                    <div className="project-link">View Project</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>

        <footer className="site-footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <h3>Let's build something <span className="text-gradient">impactful</span></h3>
                    <p>Open for collaborations and new opportunities.</p>
                </div>
                <div className="footer-right">
                    <div className="footer-socials">
                        <a href={PORTFOLIO_DATA.links.linkedin} target="_blank">LinkedIn</a>
                        <a href={PORTFOLIO_DATA.links.github} target="_blank">GitHub</a>
                        <a href={PORTFOLIO_DATA.links.portfolio} target="_blank">Legacy Site</a>
                    </div>
                    <p className="copyright">© {new Date().getFullYear()} {PORTFOLIO_DATA.name}</p>
                </div>
            </div>
        </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);
