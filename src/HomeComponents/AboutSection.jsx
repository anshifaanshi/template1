import React from 'react';
import { motion } from 'framer-motion';

// --- CSS-in-JS: Define styles as JavaScript objects ---
const styles = {
  aboutContainer: {
    backgroundColor: '#55c755', // Bright green background
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    padding: '50px 20px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
  },
  aboutMenuIcon: {
    position: 'absolute',
    top: '30px',
    right: '50px',
    width: '30px',
    height: '25px',
    backgroundColor: 'black', // Black background block
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    cursor: 'pointer',
    zIndex: 10,
  },
  aboutMenuBar: {
    display: 'block',
    width: '70%',
    height: '2px',
    backgroundColor: 'white',
    margin: '2px 0',
  },
  aboutContent: {
    width: '100%',
    maxWidth: '900px',
    textAlign: 'center',
    marginTop: '50px',
  },
  helloThere: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: '0.85em',
    letterSpacing: '4px',
    textTransform: 'uppercase',
    fontWeight: '1000',
    marginBottom: '5px',
  },
  weAreGlint: {
    color: 'white',
    fontSize: '4em',
    fontWeight: '900',
    margin: 0,
    paddingBottom: '20px',
  },
  aboutDivider: {
    width: '400px',
    height: '2px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    margin: '15px auto',
  },
  aboutParagraph: {
    color: 'black',
    fontSize: '1.2em',
    lineHeight: '1.7',
    textAlign: 'center',
    margin: '0 auto',
    maxWidth: '80%',
    fontWeight:'900',
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.3, 
      duration: 0.6 
    }
  },
};

const AboutSection = () => {
  return (
    <div style={styles.aboutContainer}>
      {/* WORKAROUND: Including a <style> block for media queries, 
        which cannot be implemented with pure inline styles. 
      */}
      <style>
        {`
          /* Responsive adjustments (cannot be done with pure inline styles) */
          @media (max-width: 768px) {
            .about-menu-icon-responsive {
              right: 15px !important;
              top: 15px !important;
            }
            .we-are-glint-responsive {
              font-size: 3em !important;
            }
            .about-paragraph-responsive {
              font-size: 1em !important;
              max-width: 100% !important;
            }
          }
        `}
      </style>

     

      <div style={styles.aboutContent}>
        
        {/* HELLO THERE text */}
        <motion.p 
          style={styles.helloThere}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          HELLO THERE
        </motion.p>
        
        {/* We Are Glint headline */}
        <motion.h2 
          style={styles.weAreGlint}
          className="we-are-glint-responsive"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          We Are Glint
        </motion.h2>

        {/* Horizontal Line (divider) */}
        <div style={styles.aboutDivider}></div>

        {/* Paragraph text */}
        <motion.p 
          style={styles.aboutParagraph}
          className="about-paragraph-responsive"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutSection;