import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // SVG path animation variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  // Element animation variants
  const elementVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.8
      }
    })
  };

  return (
    <section className="luxury-contact" ref={ref}>
      <div className="section-header">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact <span>Us</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reach out to our luxury property specialists
        </motion.p>
      </div>

      <div className="contact-container">
        {/* Animated Phone SVG */}
        <motion.div 
          className="phone-animation"
          initial="hidden"
          animate={controls}
        >
          <svg width="300" height="500" viewBox="0 0 300 500" fill="none">
            {/* Phone Outline - Draws itself */}
            <motion.path
              d="M80 50H220C235 50 247 62 247 77V423C247 438 235 450 220 450H80C65 450 53 438 53 423V77C53 62 65 50 80 50Z"
              stroke="#221C35"
              strokeWidth="6"
              strokeLinecap="round"
              variants={pathVariants}
            />
            
            {/* Screen - Fades in */}
            <motion.rect
              x="70"
              y="70"
              width="160"
              height="280"
              rx="5"
              fill="#221C35"
              custom={1}
              variants={elementVariants}
            />
            
            {/* Camera - Pops in */}
            <motion.circle
              cx="150"
              cy="90"
              r="6"
              fill="#D7A56E"
              custom={2}
              variants={elementVariants}
            />
            
            {/* Speaker - Draws horizontally */}
            <motion.path
              d="M120 85H180"
              stroke="#F8F5F0"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={controls}
              transition={{ delay: 0.9, duration: 0.5 }}
            />
            
            {/* Home Button - Draws circle */}
            <motion.path
              d="M150 420C158 420 165 413 165 405C165 397 158 390 150 390C142 390 135 397 135 405C135 413 142 420 150 420Z"
              stroke="#D7A56E"
              strokeWidth="3"
              fill="none"
              variants={pathVariants}
            />
            
            {/* Call Icon - Draws itself */}
            <motion.path
              d="M150 250L180 220L190 230L160 260L150 250Z"
              fill="#D7A56E"
              custom={3}
              variants={elementVariants}
            />
            <motion.path
              d="M150 250L120 220L110 230L140 260L150 250Z"
              fill="#D7A56E"
              custom={3.3}
              variants={elementVariants}
            />
            
            {/* Signal Bars - Sequential animation */}
            <motion.rect
              x="200"
              y="100"
              width="8"
              height="15"
              fill="#D7A56E"
              custom={4}
              variants={elementVariants}
            />
            <motion.rect
              x="213"
              y="95"
              width="8"
              height="20"
              fill="#D7A56E"
              custom={4.3}
              variants={elementVariants}
            />
            <motion.rect
              x="226"
              y="90"
              width="8"
              height="25"
              fill="#D7A56E"
              custom={4.6}
              variants={elementVariants}
            />
          </svg>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="contact-form"
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <form>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
              <motion.div 
                className="underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0, originX: 0 }}
              />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
              <motion.div 
                className="underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0, originX: 0 }}
              />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
              <motion.div 
                className="underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0, originX: 0 }}
              />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <motion.div 
                className="underline"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0, originX: 0 }}
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
      </div>
    </section>
  );
};



export default Contact