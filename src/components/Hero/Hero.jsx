import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".animated-text",
      { opacity: 1, y: 0 },
      { delay: stagger(0.15, { startDelay: 0.4 }), duration: 0.8 }
    );
    animate(
      ".stat-card",
      { opacity: 1, scale: 1 },
      { delay: stagger(0.2, { startDelay: 1 }), duration: 0.6 }
    );
  }, [animate]);

  return (
    <section className="luxury-hero" ref={scope}>
      {/* Gradient Background Layer */}
      <div className="hero-gradient"></div>
      
      {/* Hero Content */}
      <div className="hero-container">
        <motion.div 
          className="hero-text"
          initial={{ x:-50,opacity: 0 }}
          whileInView={{ x:0,opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 className="animated-text" initial={{ opacity: 0, y: 30 }}>
            Discover <span>Extraordinary</span> Living
          </motion.h1>
          
          <motion.p className="animated-text" initial={{ opacity: 0, y: 30 }}>
            Where elegance meets exceptional service in your home search
          </motion.p>

          <motion.div 
            className="search-bar animated-text"
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ boxShadow: "0 5px 15px rgba(215, 165, 110, 0.4)" }}
          >
            <input type="text" placeholder="Enter location or property ID..." />
            <button>
              <i className="fas fa-search"></i>
              <span>Explore Properties</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Luxury Stats Cards */}
        <div className="stats-grid">
          {[
            { value: "500+", label: "Luxury Homes", icon: "fa-home" },
            { value: "20+", label: "Award Winners", icon: "fa-trophy" },
            { value: "99%", label: "Client Satisfaction", icon: "fa-heart" },
            { value: "24/7", label: "Dedicated Support", icon: "fa-headset" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
              }}
              transition={{ type: "tween", stiffness: 300 }}
            >
              <i className={`fas ${stat.icon}`}></i>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-corner"></div>
      <motion.div 
        className="scroll-hint"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span>Explore</span>
        <i className="fas fa-chevron-down"></i>
      </motion.div>
    </section>
  );
};


export default Hero