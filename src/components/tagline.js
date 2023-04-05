import React, { useState } from 'react';
import { StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds';
import { Form } from './Form';

/*
  This tagline will appear in your homepage
*/

let stages = ['Your Organization', 'Maturity Assessment', 'Get Your CyberCare'];

const NUM_PAGES = stages.length;

const schema = {
  type: "object",
  definitions: {
    "cpg": {
      type: "object",
      properties: {
        status: {
          type: "string",
          enum: ["Implemented", "In Progress", "Scoped", "Not Started", "N/A"]
        },
        notes: {
          type: "string"
        }
      }
    }
  },
  properties: {
    type: "object",
    "1": {
      "title": "Identify (1)",
      type: "object",
      properties: {
        "a": {
          title: "Do you maintain a regularly updated inventory of all organizational assets with an IP address, and update this on a recurring basis?",
          "$ref": "#/definitions/cpg",
        },
        "b": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "c": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "d": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "e": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "f": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "g": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "h": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "i": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        }
      }
    },
    "2": {
      "title": "Protect (2)",
      type: "object",
      properties: {
        "a": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "b": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "c": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "d": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "e": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "f": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "g": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "h": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "i": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "j": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "k": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "l": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "m": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "n": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "o": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "p": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "q": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "r": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "s": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "t": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "u": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "v": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "w": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "x": {
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        }
      }
    },
    "3": {
      "title": "Detect (3)",
      type: "object",
      properties: {
        "a": {
          type: "string",
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        }
      }
    },
    "4": {
      "title": "Respond (4)",
      type: "object",
      properties: {
        "a": {
          type: "string",
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "b": {
          type: "string",
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        },
        "c": {
          type: "string",
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        }
      }
    },
    "5": {
      "title": "Recover (5)",
      type: "object",
      properties: {
        "a": {
          type: "string",
          title: "Asset Inventory",
          "$ref": "#/definitions/cpg",
        }
      }
    }
  }
};

let uiSchema = {
  1: {
    classNames: "cpg cpg-1"
  },
  2: {
    classNames: "cpg cpg-2"
  },
  3: {
    classNames: "cpg cpg-3"
  },
  4: {
    classNames: "cpg cpg-4"
  },
  5: {
    classNames: "cpg cpg-5"
  },
};

for (const i in uiSchema) {
  for (const key of Object.keys(schema.properties[i].properties)) {
    uiSchema[i][key] = {
      status: {
        "ui:title": " ",
        "ui:placeholder": "Select a status",
        "ui:widget": "radio"
      },
      notes: {
        "ui:title": " ",
        "ui:placeholder": "Notes"
      }
    };
  }
}

const Tagline = () => {
  const [page, setPage] = useState(1);
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
          size: { type: "string", title: "Organization size", enum: ["-10", "0-100", "00-1000", "000+"] },
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
    PageComponent = () => (<>
      <Form schema={schema}
      className="cpg-form"
      uiSchema={uiSchema}
      >&nbsp;</Form></>);
  } if (page === 2) {
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
