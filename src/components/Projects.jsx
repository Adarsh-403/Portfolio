import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "SkillSphere",
      category: "Full Stack Development",
      description: "A real-time, Instagram-like social media platform that supports SkillSwap between users, forming Interest Groups, finding mentors, and more.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Express", "Ajax"]
    },
    {
      title: "Naturals Spa and Saloon",
      category: "Mobile Application",
      description: "A comprehensive and elegant mobile application built specifically for Naturals Spa and Saloon.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Flutter", "Node.js", "Express"]
    },
    {
      title: "Classroom Management System",
      category: "Web Development",
      description: "A robust classroom management solution designed to streamline educational workflows and student interactions.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Firebase", "Express"]
    },
    {
      title: "Study Abroad Consultancy",
      category: "Web Development",
      description: "A professional, informative web platform tailored for a Study Abroad Consultancy to guide prospective students.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Firebase", "Express"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 20 
      } 
    }
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Selected Works</h2>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-card"
              variants={itemVariants}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link-btn" title="View Project">
                      <ExternalLink size={20} />
                    </a>
                    <a href="#" className="project-link-btn" title="View Source">
                      <Code size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="p-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="more-projects">
          <p>Other works include Business Portfolio Websites, Client Freelance Projects, and Landing Pages.</p>
          <a href="#" className="btn btn-secondary">View All Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
