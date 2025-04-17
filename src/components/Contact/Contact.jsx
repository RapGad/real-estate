import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const phoneVariants = {
    hidden: { rotate: -10, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity
      }
    }
  };

  const formVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="luxury-contact" ref={ref}>
      <div className="section-header">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In <span>Touch</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our team is ready to assist with your luxury real estate needs
        </motion.p>
      </div>

      <div className="contact-container">
        {/* Animated Phone SVG */}
        <motion.div
          className="phone-graphic"
          initial="hidden"
          animate={controls}
          variants={phoneVariants}
          whileHover="hover"
        >
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            {/* Phone Base */}
            <motion.rect
              x="50"
              y="30"
              width="200"
              height="240"
              rx="30"
              fill="#F8F5F0"
              stroke="#221C35"
              strokeWidth="4"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1 }
              }}
            />
            
            {/* Screen */}
            <motion.rect
              x="70"
              y="50"
              width="160"
              height="180"
              rx="10"
              fill="#221C35"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            
            {/* Camera */}
            <motion.circle
              cx="150"
              cy="70"
              r="5"
              fill="#D7A56E"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
            />
            
            {/* Speaker */}
            <motion.rect
              x="130"
              y="65"
              width="40"
              height="4"
              rx="2"
              fill="#F8F5F0"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.5 }}
            />
            
            {/* Home Button */}
            <motion.circle
              cx="150"
              cy="240"
              r="15"
              fill="none"
              stroke="#D7A56E"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
            />
            
            {/* Call Icon */}
            <motion.path
              d="M150 160L170 140L180 150L160 170L150 160Z"
              fill="#D7A56E"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.7 }}
            />
            <motion.path
              d="M150 160L130 140L120 150L140 170L150 160Z"
              fill="#D7A56E"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8 }}
            />
          </svg>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form"
          initial="hidden"
          animate={controls}
          variants={formVariants}
          transition={{ delay: 0.3 }}
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
              <motion.div 
                className="underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
              />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
              <motion.div 
                className="underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
              />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone" />
              <motion.div 
                className="underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
              />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="4" required></textarea>
              <motion.div 
                className="underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ 
                backgroundColor: "#221c35",
                boxShadow: "0 5px 15px rgba(34, 28, 53, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="contact-info"
          initial="hidden"
          animate={controls}
          variants={formVariants}
          transition={{ delay: 0.5 }}
        >
          <div className="info-item">
            <motion.div 
              className="icon"
              whileHover={{ rotate: 15 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#D7A56E" strokeWidth="2"/>
                <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#D7A56E" strokeWidth="2"/>
              </svg>
            </motion.div>
            <div className="text">
              <h4>Our Office</h4>
              <p>123 Luxury Avenue, Beverly Hills, CA 90210</p>
            </div>
          </div>
          
          <div className="info-item">
            <motion.div 
              className="icon"
              whileHover={{ rotate: 15 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92" stroke="#D7A56E" strokeWidth="2"/>
                <path d="M22 6V8C22 8.53043 21.7893 9.03914 21.4142 9.41421C21.0391 9.78929 20.5304 10 20 10H4C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8V6" stroke="#D7A56E" strokeWidth="2"/>
                <path d="M18 6V3C18 2.46957 17.7893 1.96086 17.4142 1.58579C17.0391 1.21071 16.5304 1 16 1H8C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3V6" stroke="#D7A56E" strokeWidth="2"/>
                <path d="M22 6H2V16H22V6Z" stroke="#D7A56E" strokeWidth="2"/>
              </svg>
            </motion.div>
            <div className="text">
              <h4>Email Us</h4>
              <p>info@luxuryestates.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <motion.div 
              className="icon"
              whileHover={{ rotate: 15 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92" stroke="#D7A56E" strokeWidth="2"/>
                <path d="M22 6V8C22 8.53043 21.7893 9.03914 21.4142 9.41421C21.0391 9.78929 20.5304 10 20 10H4C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8V6" stroke="#D7A56E" strokeWidth="2"/>
                <path d="M18 6V3C18 2.46957 17.7893 1.96086 17.4142 1.58579C17.0391 1.21071 16.5304 1 16 1H8C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3V6" stroke="#D7A56E" strokeWidth="2"/>
                <path d="M22 6H2V16H22V6Z" stroke="#D7A56E" strokeWidth="2"/>
              </svg>
            </motion.div>
            <div className="text">
              <h4>Call Us</h4>
              <p>+1 (310) 555-LUXE</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact