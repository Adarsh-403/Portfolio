import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Palette, Settings, Layout, PenTool, Layers, Smartphone, Lightbulb, Users, Network } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={24} />,
      skills: [
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Ajax", iconFallback: <Network size={20} /> }
      ],
      color: "#3b82f6"
    },
    {
      title: "Backend",
      icon: <Database size={24} />,
      skills: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invertTheme: true },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "REST APIs", iconFallback: <Network size={20} /> }
      ],
      color: "#10b981"
    },
    {
      title: "Design",
      icon: <Palette size={24} />,
      skills: [
        { name: "UI/UX Design", iconFallback: <Layout size={20} /> },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Adobe Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
        { name: "Wireframing", iconFallback: <PenTool size={20} /> },
        { name: "Prototyping", iconFallback: <Layers size={20} /> }
      ],
      color: "#f59e0b"
    },
    {
      title: "Other",
      icon: <Settings size={24} />,
      skills: [
        { name: "Git/GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invertTheme: true },
        { name: "Responsive Design", iconFallback: <Smartphone size={20} /> },
        { name: "Problem Solving", iconFallback: <Lightbulb size={20} /> },
        { name: "Team Collaboration", iconFallback: <Users size={20} /> }
      ],
      color: "#8b5cf6"
    }
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ '--category-color': category.color }}
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <ul className="skill-list">
                {category.skills.map((skill, sIndex) => (
                  <motion.li 
                    key={sIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {skill.logo ? (
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className={`skill-logo ${skill.invertTheme ? 'invert-icon' : ''}`}
                      />
                    ) : (
                      <div className="skill-icon-fallback" style={{ color: category.color }}>
                        {skill.iconFallback}
                      </div>
                    )}
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
