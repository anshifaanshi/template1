import React from 'react';
import './AboutUsSection.css'; // Import the CSS file

// Assuming you have SVG icons for the services, or you can use FontAwesome/React Icons
// For this example, I'll use simple placeholder SVG paths or text
const IconConstruction = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488 400H24c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24zM96 248c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24H96zm160 0c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-64zm160 0c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-64zM480 32H32C14.3 32 0 46.3 0 64v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-32 80c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32zm-96 0c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32zm-96 0c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32zm-96 0c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32zM32 192c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24H32zm448 0c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32z"/></svg>
);

const IconArchitecture = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c-8.1 0-16.2-3.1-22.3-9.2L352 110.1V24c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24v86.1L30.3 246.8c-12.4 12.4-12.4 32.4 0 44.8l22.6 22.6c12.4 12.4 32.4 12.4 44.8 0L256 160l158.3 166.2c12.4 12.4 32.4 12.4 44.8 0l22.6-22.6c12.4-12.4 12.4-32.4 0-44.8L278.3 110.1c-1.9-1.9-4.2-3.3-6.6-4.3l-24.9-10.7c-5.5-2.4-11.7-2.4-17.2 0L256 0c0-13.3-10.7-24-24-24h-8c-13.3 0-24 10.7-24 24v86.1L128 32C128 14.3 142.3 0 160 0h192c17.7 0 32 14.3 32 32v128c0 17.7-14.3 32-32 32h-64c-13.3 0-24-10.7-24-24V64h-32v96h-64v-96h-32v96c0 13.3-10.7 24-24 24h-64c-17.7 0-32-14.3-32-32V32c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v160c0 13.3 10.7 24 24 24h8c13.3 0 24-10.7 24-24V32c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32v160c0 13.3 10.7 24 24 24h8c13.3 0 24-10.7 24-24V32h32v96h32v-96h32v96h32v-96h32v96h32v-96h32v96h32V32h32zM256 480c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-48zM352 480c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-48zM160 480c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-48zM448 480c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-48zM64 480c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24H64zM256 256c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-48z"/></svg>
);

const IconConsulting = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 256c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-64zM96 256c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h64c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24H96zM416 32H96C42.9 32 0 74.9 0 128v256c0 53.1 42.9 96 96 96h320c53.1 0 96-42.9 96-96V128c0-53.1-42.9-96-96-96zm-16 352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32h240c17.7 0 32 14.3 32 32v256z"/></svg>
);

const IconMechanical = () => (
  <svg className="service-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 32H32C14.3 32 0 46.3 0 64v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm-32 80c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32zM320 256c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32zM160 256c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32zM480 400H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zm-32 80c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24h-32zM32 256c-13.3 0-24 10.7-24 24v8c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-8c0-13.3-10.7-24-24-24H32z"/></svg>
);


const AboutUsSection = () => {
  const serviceCards = [
    {
      icon: <IconConstruction />,
      title: 'Construction',
      description: 'Far far away, behind the word mountains.'
    },
    {
      icon: <IconArchitecture />,
      title: 'Architecture',
      description: 'Far far away, behind the word mountains.'
    },
    {
      icon: <IconConsulting />,
      title: 'Consulting',
      description: 'Far far away, behind the word mountains.'
    },
    {
      icon: <IconMechanical />,
      title: 'Mechanical',
      description: 'Far far away, behind the word mountains.'
    },
  ];

  const backgroundImage = 'https://i.postimg.cc/ZRQpbvGT/top-view-environmental-leafs-with-copy-space.jpg';

  return (
    <section className="about-us-section">
      <div className="about-us-left">
        <div className="about-us-image-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
          {/* Overlay for the green tint */}
          <div className="image-overlay"></div>
          {/* "38 years of experience" box */}
          <div className="experience-box">
            <span className="experience-years">38</span>
            <span className="experience-text">years of experience</span>
          </div>
        </div>
      </div>

      <div className="about-us-right">
        <div className="right-content-wrapper">
          <p className="subtitle">Welcome to Buildream</p>
          <h1 className="title">Quality and Affordable <span className="highlight-green">Constructor</span></h1>
          <p className="description">
            Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
            right at the coast of the Semantics, a large language ocean.
          </p>
          <p className="call-to-action">We Can Help You</p>

          <div className="service-cards-container">
            {serviceCards.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;