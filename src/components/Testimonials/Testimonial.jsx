import { motion } from 'framer-motion';
import { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    id: 1,
    name: "Alexander Sterling",
    role: "Tech Entrepreneur",
    quote: "The team found me a property that exceeded all my expectations. Their attention to detail and market knowledge is unparalleled.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 2,
    name: "Sophia Laurent",
    role: "Investment Banker",
    quote: "I've worked with many realtors, but none matched the professionalism and results I got here. My penthouse was worth every penny.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  },
  {
    id: 3,
    name: "Marcus Wellington",
    role: "Celebrity Chef",
    quote: "They understood exactly what I wanted in a vacation home. The entire process was seamless from start to finish.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="luxury-testimonials">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Client <span>Testimonials</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hear what our distinguished clients say about their experience
        </motion.p>
      </div>

      <div className="testimonial-container">
        <motion.div 
          className="testimonial-track"
          animate={{
            x: `calc(-${activeIndex * 100}%)`
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
            >
              <div className="testimonial-content">
                <div className="quote-mark">“</div>
                <p className="quote">{testimonial.quote}</p>
                <div className="client-info">
                  <div className="client-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="client-details">
                    <h4>{testimonial.name}</h4>
                    <p className="role">{testimonial.role}</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="testimonial-nav">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};


export default Testimonials