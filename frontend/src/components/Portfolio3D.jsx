import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import {
  personalInfo,
  about,
  skills,
  experience,
  education,
  certifications,
  achievements
} from '../data/mock';
import '../styles/Portfolio3D.css';

function Portfolio3D() {
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="portfolio-container">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-logo">SM</div>
        <ul className="nav-links">
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Hero Section */}
        <motion.section
          id="home"
          className="hero-section section"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className="hero-title" variants={fadeInUp}>
            {personalInfo.name}
          </motion.h1>
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            {personalInfo.title}
          </motion.p>
          <motion.p className="hero-description" variants={fadeInUp}>
            {personalInfo.tagline}
          </motion.p>
          
          <div className="scroll-indicator">
            <span></span>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-content">
            <div className="about-content">
              <motion.div className="about-text" variants={fadeInUp}>
                <h2>About Me</h2>
                <p>{about.summary}</p>
                <p>{about.passion}</p>
              </motion.div>
              
              <motion.div className="about-stats" variants={fadeInUp}>
                <div className="stat-card">
                  <div className="stat-value">3.5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">100+</div>
                  <div className="stat-label">Engineers Mentored</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Major Projects</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="section skills-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="section-content">
            <motion.h2 className="section-title" variants={fadeInUp}>
              Technical Skills
            </motion.h2>
            
            <motion.div className="skills-grid" variants={staggerContainer}>
              {Object.entries(skills).map(([category, skillList]) => (
                <motion.div key={category} className="skill-category" variants={fadeInUp}>
                  <h3>{category}</h3>
                  {skillList.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="section-content">
            <motion.h2 className="section-title" variants={fadeInUp}>
              Work Experience
            </motion.h2>
            
            <div className="timeline">
              {experience.map((exp) => (
                <motion.div key={exp.id} className="timeline-item" variants={fadeInUp}>
                  <div className="experience-card">
                    <div className="experience-header">
                      <h3 className="experience-role">{exp.role}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                      <div className="experience-meta">
                        <span>{exp.duration}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="experience-description">{exp.description}</p>
                    
                    <div className="projects-list">
                      {exp.projects.map((project, idx) => (
                        <div key={idx} className="project-item">
                          <h4>{project.name}</h4>
                          <p>{project.description}</p>
                          
                          <div className="tech-tags">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                          
                          <ul className="project-highlights">
                            {project.highlights.map((highlight, hIdx) => (
                              <li key={hIdx}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education & Certifications Section */}
        <motion.section
          id="education"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="section-content">
            <motion.h2 className="section-title" variants={fadeInUp}>
              Education & Certifications
            </motion.h2>
            
            <motion.div className="education-grid" variants={staggerContainer}>
              {education.map((edu, idx) => (
                <motion.div key={idx} className="education-card" variants={fadeInUp}>
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <div className="education-meta">
                    <span>{edu.duration}</span>
                    <span className="cgpa">{edu.cgpa}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.h3
              className="section-title"
              style={{ fontSize: '2rem', marginTop: '4rem', marginBottom: '2rem' }}
              variants={fadeInUp}
            >
              Certifications
            </motion.h3>
            
            <motion.div className="certifications-list" variants={staggerContainer}>
              {certifications.map((cert, idx) => (
                <motion.div key={idx} className="cert-card" variants={fadeInUp}>
                  <h4>{cert.name}</h4>
                  <p className="cert-issuer">{cert.issuer} • {cert.year}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.h3
              className="section-title"
              style={{ fontSize: '2rem', marginTop: '4rem', marginBottom: '2rem' }}
              variants={fadeInUp}
            >
              Achievements
            </motion.h3>
            
            <motion.div className="certifications-list" variants={staggerContainer}>
              {achievements.map((achievement, idx) => (
                <motion.div key={idx} className="cert-card" variants={fadeInUp}>
                  <h4>{achievement.title}</h4>
                  <p className="cert-issuer">{achievement.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="section contact-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <div className="section-content">
            <div className="contact-content">
              <motion.h2 className="section-title" variants={fadeInUp}>
                Get In Touch
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '2rem' }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </motion.p>
              
              <motion.div className="contact-links" variants={fadeInUp}>
                <a href={`mailto:${personalInfo.email}`} className="contact-btn">
                  Email Me
                </a>
                <a href="#" className="contact-btn">
                  LinkedIn
                </a>
                <a href="#" className="contact-btn">
                  GitHub
                </a>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Portfolio3D;
