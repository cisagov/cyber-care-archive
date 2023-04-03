import React from 'react';
import { StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds';

/*
  This tagline will appear in your homepage
*/

let curStage = 0;
let stages = ['Your Organization', 'Maturity Assessment', 'Get Your CyberCare'];

const Tagline = () => (
  <section className="grid-container usa-section usa-prose" id="survey-start">
    <center>
      <StepIndicator counters="default" headingLevel="h4">
        {stages.map((label, i) => (
          <StepIndicatorStep
            label={label}
            status={i == curStage ? 'current' : i < curStage ? 'complete' : ''}
          />
        ))}
      </StepIndicator>
      <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        Get Started with CyberCare
      </h2>
      <p>
        To sign up your organization for CyberCare, fill out basic information
        and complete the CPG self-assessment below to receive your starter
        bundle.
      </p>

      <p>
        <label className="usa-label" for="input-type-text">
          Organization name
        </label>
        <input
          className="usa-input"
          id="input-type-text"
          name="input-type-text"
        />
        <label className="usa-label" for="input-type-text">
          Organization size
        </label>
        <input
          className="usa-input"
          id="input-type-text"
          name="input-type-text"
        />
        <label className="usa-label" for="input-type-text">
          Contact name
        </label>
        <input
          className="usa-input"
          id="input-type-text"
          name="input-type-text"
        />
        <label className="usa-label" for="input-type-text">
          Email
        </label>
        <input
          className="usa-input"
          id="input-type-text"
          name="input-type-text"
        />
      </p>
      <p>
        <a
          className="usa-button"
          onClick={() => {
            const start = document.getElementById('survey-start');
            window.scrollTo({
              top: start.offsetTop,
              behavior: 'smooth',
            });
          }}
        >
          Next
        </a>
      </p>
    </center>
    <p>
      <label className="usa-label" for="input-type-text">
        How many people are part of your full-time IT staff? Do you have one?{' '}
      </label>
      <input
        className="usa-input"
        id="input-type-text"
        name="input-type-text"
      />
      <label className="usa-label" for="input-type-text">
        What cybersecurity services do you currently use?{' '}
      </label>
      <input
        className="usa-input"
        id="input-type-text"
        name="input-type-text"
      />
      <label className="usa-label" for="input-type-text">
        What is your biggest challenge around cybersecurity?{' '}
      </label>
      <input
        className="usa-input"
        id="input-type-text"
        name="input-type-text"
      />
    </p>
    <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
      CPG Assessment
    </h2>
  </section>
);

export default Tagline;
