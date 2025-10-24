import React from 'react';
import './LogoCarousel.css'

// SVG Icons (simulated from a library or inline SVG for simplicity)
const LogoApple = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M303.1 7.1C250.6-20.5 194.2 12.3 162.2 46c-31.9 33.7-50.6 77.1-47.3 124.7 3.3 47.7 27.6 100.2 60.5 140.2 32.8 40.1 73.1 82.5 119.7 94.6 46.5 12.1 96-7.8 128.7-41.5 32.7-33.8 46.1-77.2 42.8-124.9-3.3-47.7-27.6-100.2-60.5-140.2-32.8-40.1-73.1-82.5-119.7-94.6zM327.9 397.6c-4.4 2.7-8.8 5.4-13.3 7.8-19.1 10.3-39.7 15.6-60.4 15.6-20.8 0-41.4-5.3-60.5-15.6-4.4-2.4-8.8-5.1-13.3-7.8-50.5-31.4-78.5-98.3-78.5-168.1 0-70.1 27.8-137.2 78.5-168.6 4.4-2.7 8.8-5.4 13.3-7.8 19.1-10.3 39.7-15.6 60.4-15.6 20.8 0 41.4 5.3 60.5 15.6 4.4 2.4 8.8 5.1 13.3 7.8 50.5 31.4 78.5 98.3 78.5 168.1 0 70.1-27.8 137.2-78.5 168.6z"/></svg>
);

const LogoAtom = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="32"/><path d="M375.3 105.7c-50.1-24.1-108.6-22.1-158.7 4-50.1 26.1-80.1 76.1-80.1 133.3 0 57.2 30 107.2 80.1 133.3 50.1 26.1 108.6 28.1 158.7 4 38.6-18.6 70.6-48.4 92.5-84.5l-44.1-27.3c-16.7 27.1-39 50.4-65.7 69.8-30.8 22.2-65.4 33.7-101.5 33.7-36.1 0-70.7-11.5-101.5-33.7-26.7-19.4-49-42.7-65.7-69.8-16.7-27.1-25.5-57.7-25.5-89.8 0-32.1 8.8-62.7 25.5-89.8 16.7-27.1 39-50.4 65.7-69.8 30.8-22.2 65.4-33.7 101.5-33.7 36.1 0 70.7 11.5 101.5 33.7 26.7 19.4 49 42.7 65.7 69.8l44.1-27.3c-21.9-36.1-53.9-65.9-92.5-84.5zM372 256c0-63.5-51.5-115-115-115s-115 51.5-115 115 51.5 115 115 115 115-51.5 115-115zm-221.7-89.8c16.7-27.1 39-50.4 65.7-69.8 30.8-22.2 65.4-33.7 101.5-33.7 36.1 0 70.7 11.5 101.5 33.7 26.7 19.4 49 42.7 65.7 69.8l44.1-27.3c-21.9-36.1-53.9-65.9-92.5-84.5-50.1-26.1-108.6-28.1-158.7-4-50.1 24.1-80.1 74.1-80.1 133.3 0 57.2 30 107.2 80.1 133.3 50.1 26.1 108.6 28.1 158.7 4 38.6-18.6 70.6-48.4 92.5-84.5l-44.1-27.3c-16.7 27.1-39 50.4-65.7 69.8-30.8 22.2-65.4 33.7-101.5 33.7-36.1 0-70.7-11.5-101.5-33.7-26.7-19.4-49-42.7-65.7-69.8-16.7-27.1-25.5-57.7-25.5-89.8 0-32.1 8.8-62.7 25.5-89.8z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
);

const LogoBlackBerry = () => (
  // Using a simplified pattern that resembles the BlackBerry icon array
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <g transform="scale(0.8) translate(50, 50)">
      {[...Array(6)].map((_, i) => (
        <circle key={i} cx={150 + (i % 3) * 100} cy={150 + Math.floor(i / 3) * 100} r="30" />
      ))}
      <rect x="150" y="350" width="200" height="50" rx="10" />
    </g>
  </svg>
);

const LogoDropbox = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 160l-128 80L256 320l128-80-128-80zM384 256l-128 80v112l128-80V256zM128 256l128 80v112L128 336V256zM256 80L128 160l128 80 128-80L256 80z"/></svg>
);

const LogoGenericOval = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <ellipse cx="256" cy="256" rx="130" ry="180"/>
    </svg>
);

const LogoFirefox = () => (
    // This is a placeholder for the distinct Firefox icon shape
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zM256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448zM384 192c0 70.7-57.3 128-128 128S128 262.7 128 192s57.3-128 128-128 128 57.3 128 128zM256 352a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"/></svg>
);


const LogoCarosel = () => {
  const logos = [
    { component: LogoApple, alt: 'Apple Logo' },
    { component: LogoAtom, alt: 'Atomic Symbol Logo' },
    { component: LogoBlackBerry, alt: 'BlackBerry Logo' },
    { component: LogoDropbox, alt: 'Dropbox Logo' },
    { component: LogoGenericOval, alt: 'Generic Oval Logo' },
    { component: LogoFirefox, alt: 'Firefox Logo' },
  ];

  return (
    <section className="client-logos-section">
      <div className="client-logos-content">
        <p className="clients-heading-small">OUR CLIENTS</p>
        <h2 className="clients-heading-large">
          Glint has been honored to partner up with these clients
        </h2>

        <div className="logos-container">
          {logos.map((logo, index) => (
            <div key={index} className="client-logo-wrapper" title={logo.alt}>
              <logo.component />
            </div>
          ))}
        </div>

        {/* Navigation Dots (Pagination) */}
        <div className="pagination-dots">
          <span className="dot active-dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;