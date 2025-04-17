import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './about.css';

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Luxury Homes Sold" },
    { value: "$4B+", label: "In Transactions" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  const team = [
    {
      name: "Victoria Sterling",
      role: "Founder & CEO",
      bio: "With a vision for redefining luxury real estate, Victoria established the firm in 2008.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "James Montgomery",
      role: "Lead Agent",
      bio: "Specializing in high-net-worth clients and architectural masterpieces.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Sophia Chen",
      role: "Interior Design Director",
      bio: "Transforming properties into bespoke living experiences.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
  ];

  return (
    <section className="luxury-about" ref={ref}>
      {/* Hero Section */}
      <motion.div 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay"></div>
        <motion.div
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1>Redefining <span>Luxury</span> Living</h1>
          <p>Where exceptional service meets unparalleled real estate expertise</p>
        </motion.div>
      </motion.div>

      {/* Our Story */}
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our <span>Story</span></h2>
          <p className="section-subtitle">From vision to industry leader</p>
        </motion.div>

        <div className="story-grid">
          <motion.div
            className="story-content"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Founded in 2008, our boutique firm began with a singular mission: to transform the luxury real estate experience through unparalleled service and market expertise.</p>
            <p>What began as a small team of passionate professionals has grown into an industry-recognized leader, representing the most discerning clients and exceptional properties worldwide.</p>
            <p>Our approach combines traditional values with innovative technology, ensuring every transaction is seamless, secure, and tailored to your unique needs.</p>
          </motion.div>
          <motion.div
            className="story-image"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Our first office" />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-section">
        <div className="section-container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            animate={isInView ? "visible" : {}}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -10 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team */}
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our <span>Team</span></h2>
          <p className="section-subtitle">The minds behind our success</p>
        </motion.div>

        <motion.div
          className="team-grid"
          initial="hidden"
          animate={isInView ? "visible" : {}}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-details">
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
                <div className="social-links">
                  <a href="#"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fas fa-envelope"></i></a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Philosophy */}
      <div className="philosophy-section">
        <div className="section-container">
          <motion.div
            className="philosophy-content"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <h2>Our <span>Philosophy</span></h2>
            <motion.blockquote
              initial={{ scale: 0.9 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              "True luxury is found in the details - the perfect alignment of location, design, and service that creates not just a residence, but a legacy."
            </motion.blockquote>
            <motion.div
              className="signature"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p>Victoria Sterling</p>
              <p>Founder & CEO</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



export default About