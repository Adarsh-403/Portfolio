import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: "Amal Jyothi College of Engineering (Autonomous)",
      degree: "Master of Computer Applications (Integrated MCA)",
      date: "Aug 2024 – Sep 2029",
      highlights: [
        { label: "Skills", items: ["React.js", "UI/UX Design", "Frontend Development", "Full Stack Development"] }
      ]
    },
    {
      institution: "Maldives National University (MNU)",
      degree: "Software Coding Grade 7",
      date: "Feb 2014 – Jan 2017",
      highlights: [
        { label: "Achievements", items: ["Grade A", "HTML", "CSS", "Software Coding Fundamentals"] }
      ]
    }
  ];

  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="edu-grid">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="edu-card glass-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="edu-icon">
                <GraduationCap size={28} />
              </div>
              
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                
                <div className="edu-date">
                  <Calendar size={14} />
                  <span>{edu.date}</span>
                </div>
                
                <div className="edu-highlights">
                  {edu.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="highlight-group">
                      <span className="highlight-label">
                        <Award size={14} /> {highlight.label}:
                      </span>
                      <div className="highlight-items">
                        {highlight.items.map((item, iIndex) => (
                          <span key={iIndex} className="h-item">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
