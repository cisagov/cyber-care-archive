import React from 'react';
import image from '../images/crossfeed-search-result.png';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero" style={{ backgroundImage: `url(https://www.cisa.gov/sites/default/files/styles/hero_large/public/2022-12/HERO_AbstractCyber10.jpg?h=e0d9a4bb&itok=3FI3tWml)` }}>
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          {/* <span className="usa-hero__heading--alt">Understand your infrastructure.</span> */}
          CyberCare
        </h2>
        <p>
          Get started with CISA services by addressing the cybersecurity needs that are right for you. Fill out a checklist to assess your organization's compliance with the Cybersecurity Performance Goals, and then download a starter bundle of services you can start using today to secure your organization.
        </p>
        <a className="usa-button" href="#highlights">
          Learn more
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
