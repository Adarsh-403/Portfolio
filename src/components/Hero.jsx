import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20, 
        mass: 1 
      } 
    }
  };

  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.div variants={itemVariants}>
            <h1 className="hero-main-title">
              ADARSH<br />
              <span className="text-accent-glow">VARGHESE</span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="hero-name-section"
            variants={itemVariants}
          >
            <div className="hero-handwritten">
              Developer.<br />
              Designer.<br />
              Problem Solver.
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-roles"
            variants={itemVariants}
          >
            UI/UX DESIGNER <span className="dot">•</span> FRONTEND DEVELOPER <span className="dot">•</span> BACKEND DEVELOPER
          </motion.div>
          
          <motion.div 
            className="hero-services"
            variants={itemVariants}
          >
            <div className="service-box">
              <div className="service-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <div className="service-text">
                <h4>UI/UX DESIGN</h4>
                <p>Designing intuitive, user-centered experiences that make an impact.</p>
              </div>
            </div>
            
            <div className="service-box">
              <div className="service-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div className="service-text">
                <h4>FRONTEND DEVELOPMENT</h4>
                <p>Building fast, responsive and scalable interfaces with modern technologies.</p>
              </div>
            </div>
            
            <div className="service-box">
              <div className="service-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <div className="service-text">
                <h4>BACKEND DEVELOPMENT</h4>
                <p>Building reliable and performant APIs & systems with Node.js & Express.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-tech-stack"
            variants={itemVariants}
          >
            <div className="stack-title">
              <span></span> TECH STACK <span></span>
            </div>
            
            <div className="stack-logos">
              <div className="stack-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <span>HTML5</span>
              </div>
              <div className="stack-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                <span>CSS3</span>
              </div>
              <div className="stack-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span>JavaScript</span>
              </div>
              <div className="stack-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React.js</span>
              </div>
              <div className="stack-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" />
                <span>Node.js</span>
              </div>
              <div className="stack-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="invert-icon" />
                <span>Express.js</span>
              </div>
              <div className="stack-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span>MongoDB</span>
              </div>
              <div className="stack-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                <span>Flutter</span>
              </div>
            </div>
            
            <div className="flutter-experience">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="flutter-logo-small" />
              <span>EXPERIENCE IN FLUTTER</span>
            </div>
          </motion.div>
          
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Portrait Image */}
          <div className="portrait-container">
            {/* The user can replace this placeholder with their real image path */}
            <div className="portrait-placeholder">
              <img 
                src={profileImg} 
                alt="Adarsh Varghese" 
                className="portrait-img"
              />
            </div>
          </div>
          
          {/* Floating Code Block */}
          <div className="floating-code">
            <pre>
              <code>
                <span className="keyword">const</span> <span className="variable">developer</span> <span className="operator">=</span> {'{\n'}
                {'  '}<span className="property">name</span>: <span className="string">"Adarsh Varghese"</span>,{'\n'}
                {'  '}<span className="property">role</span>: <span className="string">"Full Stack Developer"</span>,{'\n'}
                {'  '}<span className="property">focus</span>: [{'\n'}
                {'    '}<span className="string">"UI/UX Design"</span>,{'\n'}
                {'    '}<span className="string">"Frontend Development"</span>,{'\n'}
                {'    '}<span className="string">"Backend Development"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="property">backend</span>: <span className="string">"Node.js, Express"</span>,{'\n'}
                {'  '}<span className="property">mobile</span>: <span className="string">"Flutter"</span>,{'\n'}
                {'  '}<span className="property">passion</span>: <span className="string">"Building digital\n            experiences that matter."</span>{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
          
          {/* Decorative Wireframe Lines */}
          <div className="wireframe-decoration dec-1">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <rect x="0" y="10" width="40" height="20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <circle cx="20" cy="20" r="5" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </svg>
          </div>
          
          <div className="wireframe-decoration dec-2">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <rect x="0" y="0" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="0" y1="20" x2="80" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="0" y1="40" x2="80" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="20" y1="0" x2="20" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="40" y1="0" x2="40" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </svg>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
