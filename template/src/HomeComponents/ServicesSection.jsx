import React from 'react';
import styled from 'styled-components';
// Note: For the actual icons, you would typically use an icon library 
// like 'react-icons' or an SVG, but for this example, we'll use simple 
// styled divs as placeholders.

// --- Styled Components for Styling ---

// Colors/Fonts (to mimic the image)
const colors = {
  primaryGreen: '#55c755', // A common shade of green, adjust if needed
  darkText: '#222',
  lightText: '#666',
  background: '#fff',
  fontweight:'bold',

};

const fontSizes = {
  heading: '2rem',
  subHeading: '1rem',
  itemTitle: '1.5rem',
  itemText: '1rem',
};

// Main container for the entire section
const SectionContainer = styled.section`
  padding: 4rem 1rem;
  background-color: ${colors.background};
  font-family: Arial, sans-serif; /* Use a similar clean font */
  max-width: 1200px;
  margin: 0 auto;
`;

// Section Header/Title Area
const HeaderArea = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PreTitle = styled.p`
  color: ${colors.primaryGreen};
  font-size: ${fontSizes.subHeading};
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const MainTitle = styled.h1`
  color: ${colors.darkText};
  font-size: ${fontSizes.heading};
  font-weight: 700;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 2rem;

  // Thin line below the title
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 1px;
    background-color: #ddd;
    margin: 1.5rem auto 0;
  }
`;

// Container for the two service items
const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem; /* Spacing between the items */
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }
`;

// Individual service item card
const ServiceItem = styled.div`
  flex: 0 1 450px; /* Allows item to grow/shrink, max-width 450px */
  text-align: left;
`;

// Icon and Title wrapper for alignment
const IconTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

// Placeholder for the green icons
const IconPlaceholder = styled.div`
  width: 28px;
  height: 28px;
  border: 3px solid ${colors.primaryGreen};
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  // Custom shapes to mimic the icons in the image
  ${props => props.type === 'brand' && `
    // Mimic the Brand Identity icon (simple structure)
    &:after {
      content: '';
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: ${colors.primaryGreen};
      clip-path: polygon(0 0, 100% 0, 50% 100%); /* Simple triangle, adjust for accuracy */
      opacity: 0.8;
    }
  `}

  ${props => props.type === 'illustration' && `
    // Mimic the Illustration icon (bounding box with corners)
    border: none;
    &::before, &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border-color: ${colors.primaryGreen};
      border-style: solid;
    }
    // Top-left corner
    &::before {
      border-width: 3px 0 0 3px;
      top: 0;
      left: 0;
    }
    // Bottom-right corner
    &::after {
      border-width: 0 3px 3px 0;
      bottom: 0;
      right: 0;
    }
  `}
`;

const ItemTitle = styled.h2`
  color: ${colors.darkText};
  font-size: ${fontSizes.itemTitle};
  font-weight: 600;
  margin: 0;
`;

const ItemDescription = styled.p`
  color: ${colors.lightText};
  font-size: ${fontSizes.itemText};
  line-height: 1.6;
  margin-top: 0.5rem;
`;


// --- The React Component ---

const ServicesSection = () => {
  return (
    <SectionContainer>
      <HeaderArea>
        <PreTitle>WHAT WE DO</PreTitle>
        <MainTitle>
          We've got everything you need to launch and grow your business
        </MainTitle>
      </HeaderArea>
      
      <ServicesGrid>
        {/* Service Item 1: Brand Identity */}
        <ServiceItem>
          <IconTitleWrapper>
            <IconPlaceholder type="brand" /> 
            <ItemTitle>Brand Identity</ItemTitle>
          </IconTitleWrapper>
          <ItemDescription>
            Nemo cupiditate ad quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
            voluptas ipsa in tempora esse soluta sint.
          </ItemDescription>
        </ServiceItem>

        {/* Service Item 2: Illustration */}
        <ServiceItem>
          <IconTitleWrapper>
            <IconPlaceholder type="illustration" />
            <ItemTitle>Illustration</ItemTitle>
          </IconTitleWrapper>
          <ItemDescription>
            Nemo cupiditate ad quibusdam quaerat impedit magni. Earum suscipit
            ipsum laudantium. Quo delectus est. Maiores voluptas ab sit natus
            veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit
            voluptas ipsa in tempora esse soluta sint.
          </ItemDescription>
        </ServiceItem>
      </ServicesGrid>
    </SectionContainer>
  );
};

export default ServicesSection;