import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Student - Integrated MCA",
      company: "Amal Jyothi College of Engineering (Autonomous)",
      date: "Sep 2024 – Present",
      location: "On-site",
      type: "Education / 2024-2029",
      description: "Pursuing Integrated MCA focusing on modern software engineering, web technologies, and algorithms.",
      tags: ["Computer Science", "Software Engineering"]
    },
    {
      role: "Flutter Developer Intern",
      company: "AES AJCE Intern",
      date: "Jan 2025 – Apr 2026",
      location: "On-site",
      type: "Internship",
      description: "Worked as Flutter Developer intern focusing on mobile application development and user experience optimization.",
      tags: ["Flutter", "Dart", "Mobile App Dev", "UX Optimization"]
    },
    {
      role: "Application Developer (Freelance)",
      company: "Naturals Salon & Spa",
      date: "Sep 2025 – Mar 2026",
      location: "Hybrid",
      type: "Freelance",
      description: "Developed application solutions using Flutter with strong UX focus and business workflow optimization.",
      tags: ["Flutter", "Business Workflows", "UI/UX"]
    },
    {
      role: "Intern – UI/UX Designer",
      company: "Futura Labs",
      date: "Apr 2025 – Mar 2026",
      location: "Calicut | On-site",
      type: "Internship",
      description: "Designed user interface systems and product experiences.",
      tags: ["UI/UX Design", "Adobe Photoshop", "Product Experience", "Wireframing"]
    },
    {
      role: "Junior Web Developer",
      company: "Brototype",
      date: "Mar 2023 – Aug 2024",
      location: "On-site / Remote",
      type: "Full-time",
      description: "Worked on comprehensive web development, focusing on frontend interfaces and UX design.",
      tags: ["Web Development", "User Experience (UX)", "UI Design", "Frontend Dev"]
    }
  ];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Career Path</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="badge timeline-type">{exp.type}</span>
                </div>
                
                <h4 className="timeline-company">
                  <Briefcase size={16} /> {exp.company}
                </h4>
                
                <div className="timeline-meta">
                  <span className="meta-item">
                    <Calendar size={14} /> {exp.date}
                  </span>
                  <span className="meta-item">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
                
                <p className="timeline-desc">{exp.description}</p>
                
                <div className="timeline-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
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

export default Experience;
