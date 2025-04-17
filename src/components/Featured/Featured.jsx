import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import "./featured.css";

const properties = [
  {
    id: 1,
    title: "Oceanview Cliffside Villa",
    price: 8500000,
    location: "Sunyani, Bono",
    beds: 6,
    baths: 7,
    sqft: 12500,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Perched atop dramatic cliffs, this architectural masterpiece offers panoramic ocean views from every room.",
  },
  {
    id: 2,
    title: "Modern Desert Oasis",
    price: 6250000,
    location: "Accra, Greater Accra",
    beds: 5,
    baths: 6,
    sqft: 9300,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "A sleek retreat in the desert with open interiors and stunning mountain views.",
  },
  {
    id: 3,
    title: "Lakeside Mountain Retreat",
    price: 4900000,
    location: "Accra, Greater Accra",
    beds: 4,
    baths: 5,
    sqft: 7800,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Charming lakefront home with wood beam ceilings and a private dock.",
  },
  {
    id: 4,
    title: "Urban Penthouse Paradise",
    price: 10000000,
    location: "Yamfo, Ahafo",
    beds: 3,
    baths: 4,
    sqft: 5200,
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Luxury penthouse with skyline views and a private rooftop terrace.",
  },
  {
    id: 5,
    title: "Historic European Manor",
    price: 12800000,
    location: "Bechem, Ahafo",
    beds: 8,
    baths: 9,
    sqft: 15000,
    image:
      "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Elegant countryside estate with vineyards and timeless architecture.",
  },
  {
    id: 6,
    title: "Tropical Island Bungalow",
    price: 3750000,
    location: "Sunyani, Bono",
    beds: 3,
    baths: 3,
    sqft: 4500,
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Secluded beach bungalow with wraparound decks and ocean breezes.",
  },
];

const Featured = () => {
  const [featuredId, setFeaturedId] = useState(1);
  const [displayedId, setDisplayedId] = useState(1);

  useEffect(() => {
    if (featuredId !== displayedId) {
      const timeout = setTimeout(() => setDisplayedId(featuredId), 300);
      return () => clearTimeout(timeout);
    }
  }, [featuredId, displayedId]);

  const activeProperty = properties.find((p) => p.id === displayedId);

  return (
    <div className="luxury-showcase">
      <header className="featured-section-header">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="header-title"
        >
          Our <span>Luxury</span> Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="header-subtitle"
        >
          Discover exceptional properties curated for the discerning buyer
        </motion.p>
        <motion.div
          className="header-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
        />
      </header>

      <div className="featured-section">
        <div className="image-stack">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProperty?.id}
              src={activeProperty?.image}
              alt={activeProperty?.title}
              className="featured-image"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="luxury-overlay" />
        </div>

        <AnimatePresence mode="wait">
          {activeProperty && (
            <motion.div
              key={activeProperty.id}
              className="featured-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="featured-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2>{activeProperty.title}</h2>
                <div className="price-location">
                  <span className="price">
                    ${activeProperty.price.toLocaleString()}
                  </span>
                  <span className="location">
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {activeProperty.location}
                  </span>
                </div>
                <div className="features">
                  <span>
                    <i className="fas fa-bed"></i> {activeProperty.beds} beds
                  </span>
                  <span>
                    <i className="fas fa-bath"></i> {activeProperty.baths} baths
                  </span>
                  <span>
                    <i className="fas fa-ruler-combined"></i>{" "}
                    {activeProperty.sqft.toLocaleString()} sqft
                  </span>
                </div>
                <p className="description">{activeProperty.description}</p>
                <motion.button
                  className="view-details"

                  whileHover={{
                    backgroundColor: "#221c35",
                    boxShadow: "0 5px 15px rgba(34, 28, 53, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Details
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="thumbnail-track">
        {properties.map((property) => (
          <motion.div
            key={property.id}
            className={`thumbnail-card ${
              featuredId === property.id ? "active" : ""
            }`}
            onClick={() => setFeaturedId(property.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="thumbnail-image">
              <img src={property.image} alt={property.title} />
              {featuredId === property.id && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeThumbnail"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>
            <div className="thumbnail-details">
              <h4>{property.title}</h4>
              <div className="thumbnail-price">
                ${property.price.toLocaleString()}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
