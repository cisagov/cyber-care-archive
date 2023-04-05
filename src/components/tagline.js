import React, { useState } from 'react';
import { StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds';
import { Form } from './Form';

/*
  This tagline will appear in your homepage
*/

let stages = ['Your Organization', 'Maturity Assessment', 'Get Your CyberCare'];

const NUM_PAGES = stages.length;

const Tagline = () => {
  const [page, setPage] = useState(0);
  const nextPage = () => {
    page <= NUM_PAGES && setPage(p => p + 1);
  };
  const previousPage = () => {
    page >= 0 && setPage(p => p - 1);
  }
  let PageComponent = () => null;
  if (page === 0) {
    PageComponent = () => (<>
      <Form schema={{
        type: "object",
        properties: {
          name: { type: "string", title: "Organization name" },
          size: { type: "string", title: "Organization size" },
          contactName: { type: "string", title: "Contact name" },
          email: { type: "string", title: "Email", format: "email" },
          itStaff: { type: "number", title: "How many people are part of your full-time IT staff? Do you have one?" },
          servicesInUse: {
            type: "string",
            title: "What cybersecurity services do you currently use?",
            enum: ["Cyber Hygiene", "Vulnerability scanning"]
            // type: "array", title: "What cybersecurity services do you currently use?", items: {
            //   type: "string",
            //   enum: ["Cyber Hygiene", "Vulnerability scanning"]
            // }, uniqueItems: true
          },
          biggestProblem: { type: "string", title: "What is your biggest challenge around cybersecurity?", enum: ["Challenge 1", "Challenge 2", "Challenge 3"] }
        }
      }}
        uiSchema={{
          servicesInUse: {
            // "ui:widget": "checkboxes"
          }
        }}
      >&nbsp;</Form></>);
  } if (page === 1) {
    PageComponent = () => (
      <div>test</div>
    );
  } if (page === 3) {
    PageComponent = () => (
      <p>You're done!</p>
    )
  }

  return (<section className="grid-container usa-section usa-prose" id="survey-start">
    <center>
      <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        Get Started with CyberCare
      </h2>
      <p>
        To sign up your organization for CyberCare, fill out basic information
        and complete the CPG self-assessment below to receive your starter
        bundle.
      </p>
      <StepIndicator counters="default" headingLevel="h4">
        {stages.map((label, i) => (
          <StepIndicatorStep
            label={label}
            status={i == page ? 'current' : i < page ? 'complete' : ''}
          />
        ))}
      </StepIndicator>
      <PageComponent />
      <button onClick={() => previousPage()} disabled={page - 1 < 0}>Previous</button>
      <button onClick={() => nextPage()} disabled={page + 1 >= NUM_PAGES}>Next</button>
    </center></section>);
}

export default Tagline;
