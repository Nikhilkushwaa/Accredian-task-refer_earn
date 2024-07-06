// // src/components/HeroSection.jsx
// import React from 'react';
// import ReferNowButton from './ReferNowButton';
// import './HeroSection.css';

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <h1>Welcome to Our Refer & Earn Program</h1>
//       <ReferNowButton />
//     </section>
//   );
// };

// export default HeroSection;



import React from 'react';
import ReferNowButton from './ReferNowButton';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-section_main'>
    <div className="hero-section">
      
      <div className="hero-content">
        <h1>Let's Learn & Earn</h1>
        <p>Get a chance to win up-to Rs. 15,000</p>
        <ReferNowButton />
      </div>
      <div className="hero-image">
         <img src="/earnlern.png" alt="Hero" /> 
      </div>
      </div>

      
    </div>
  );
};

export default HeroSection;


