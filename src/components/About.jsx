import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Server, Lightbulb, Target } from 'lucide-react';
import './About.css';

const About = () => {
  const focusAreas = [
    { icon: <Layout size={24} />, title: "Frontend Engineering" },
    { icon: <Server size={24} />, title: "Backend Development" },
    { icon: <Target size={24} />, title: "UI/UX Design" },
    { icon: <Smartphone size={24} />, title: "Mobile Application Dev" },
    { icon: <Lightbulb size={24} />, title: "Problem Solving" },
    { icon: <Code size={24} />, title: "Real-world Product Dev" }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Discover</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <motion.div 
            className="about-text glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="lead-text">
              <span className="text-gradient font-heading">Integrated MCA Student</span> at Amal Jyothi College of Engineering (Autonomous) with hands-on industry experience.
            </p>
            <p>
              I specialize in web development, UI/UX design, Flutter app development, and building robust full stack solutions. 
              My journey has been driven by a relentless curiosity for how technology can solve real-world problems elegantly.
            </p>
            <p>
              Highly passionate about creating modern digital products with excellent user experience and scalable backend systems. 
              I bridge the gap between design and engineering, ensuring every product I build not only looks award-winning but functions flawlessly under the hood.
            </p>
            
            <div className="stats-row">
              <div className="stat-item">
                <h3>3+</h3>
                <p>Years Coding</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3>4</h3>
                <p>Internships</p>
              </div>
            </div>
          </motion.div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="focus-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="focus-icon">{area.icon}</div>
                <h4>{area.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
