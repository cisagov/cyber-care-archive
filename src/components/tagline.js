import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
          Sign up
        </h2>
        <p>To sign up your organization for CyberCare, fill out basic information and complete the CPG self-assessment below to receive your starter bundle.</p>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          <label className="usa-label" for="input-type-text">Organization name</label>
          <input className="usa-input" id="input-type-text" name="input-type-text" />
          <label className="usa-label" for="input-type-text">Organization size</label>
          <input className="usa-input" id="input-type-text" name="input-type-text" />
          <label className="usa-label" for="input-type-text">Contact name</label>
          <input className="usa-input" id="input-type-text" name="input-type-text" />
          <label className="usa-label" for="input-type-text">Email</label>
          <input className="usa-input" id="input-type-text" name="input-type-text" />
          <label className="usa-label" for="input-type-text">How many people are part of your full-time IT staff? Do you have one? </label>
          <input className="usa-input" id="input-type-text" name="input-type-text" />
          <label className="usa-label" for="input-type-text">What cybersecurity services do you currently use? </label>
          <input className="usa-input" id="input-type-text" name="input-type-text" />
          <label className="usa-label" for="input-type-text">What is your biggest challenge around cybersecurity? </label>
          <input className="usa-input" id="input-type-text" name="input-type-text" />
        </p>
      </div>
      <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        CPG Assessment
      </h2>
    </div>
  </section>
);

export default Tagline;
