import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-container glass-card">
          <div className="contact-content">
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              <h2 className="contact-title">Let's build something <span className="text-gradient">exceptional</span> together.</h2>
              <p className="contact-desc">
                Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="contact-info">
                <div className="info-item">
                  <div className="info-icon"><Mail size={20} /></div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:adarshvarghese10@gmail.com">adarshvarghese10@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><Phone size={20} /></div>
                  <div>
                    <h4>Phone & WhatsApp</h4>
                    <p><a href="https://wa.me/918590781335" target="_blank" rel="noopener noreferrer">+91 8590781335</a></p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon"><MapPin size={20} /></div>
                  <div>
                    <h4>Location</h4>
                    <p>Kerala, India</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-actions">
                <a href="mailto:adarshvarghese10@gmail.com" className="btn btn-primary">
                  <Send size={18} /> Say Hello
                </a>
                <a href="/resume.pdf" className="btn btn-secondary">
                  <Download size={18} /> Download Resume
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.2 }}
          >
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" className="form-control" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" className="form-control" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can I help you?" className="form-control"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
