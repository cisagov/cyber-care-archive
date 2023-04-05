import React, { useState } from 'react';
import { StepIndicator, StepIndicatorStep } from '@trussworks/react-uswds';
import { Form } from './Form';

/*
  This tagline will appear in your homepage
*/

let stages = ['Your Organization', 'Maturity Assessment', 'Get Your CyberCare'];

const NUM_PAGES = stages.length;

let schema = {
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
          "custom:recommendations": [
            "Crossfeed",
            "CyHy"
          ]
        },
        "b": {
          title: "Is a named role/position/title is identified as responsible and accountable for planning, resourcing, and execution of cybersecurity activities?",
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
        }
      }
    },
    "5": {
      "title": "Recover (5)",
      type: "object",
      properties: {
        "a": {
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
  let j = 0;
  for (const key of Object.keys(schema.properties[i].properties)) {
    j++;
    const titles = ["Do you maintain a regularly updated inventory of all organizational assets with an IP address, and update this on a recurring basis?", "Is a named role/position/title is identified as responsible and accountable for planning, resourcing, and execution of cybersecurity activities?", "Do you keep track of known exploited vulnerabilities (listed in CISA’s KEV Catalog) and ensure they are patched or mitigated in a timely fashion?", "Do you currently have a Vulnerability Disclosure Policy and/or run a bug bounty program?", "Do you regularly run third party tests such as penetration tests, incident simulations, tabletop exercises, etc.?", "Do you have a security.txt file on all public facing domains?","Do you know where you can report incidents to CISA securely?","Do you collect and store logs for use for both detection and incident response activities?","Do you back up all systems necessary for operations at a regular cadence, no less than once per year?","Do you have training for OT cybersecurity?","Do you use phishing-resistant MFA for critical systems?"];
    uiSchema[i][key] = {
      "ui:title": titles[j % titles.length],
      status: {
        "ui:title": " ",
        "ui:placeholder": "Select a status",
        "ui:widget": "radio",
        "classNames": "field-status",
        'ui:options': {
          inline: true,
        },
      },
      notes: {
        "ui:title": " ",
        "ui:placeholder": "Notes",
        "classNames": "field-notes"
      }
    };
  }
}

const Tagline = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    page <= NUM_PAGES && setPage(p => p + 1);
    document.getElementById("survey-start").scrollIntoView();
  };
  const previousPage = () => {
    page >= 0 && setPage(p => p - 1);
    document.getElementById("survey-start").scrollIntoView();
  }
  let PageComponent = () => null;
  if (page === 0) {
    PageComponent = () => (<>
      <Form schema={{
        type: "object",
        properties: {
          name: { type: "string", title: "Organization name" },
          size: { type: "string", title: "Organization size", enum: ["1-10", "0-100", "100-1000", "1000+"] },
          contactName: { type: "string", title: "Contact name" },
          email: { type: "string", title: "Email", format: "email" },
          itStaff: { type: "string", title: "How many people are part of your full-time IT staff? Do you have one?", enum: ["1-10", "0-100", "100-1000", "1000+"] },
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
        and complete the maturity assessment below to receive your starter
        bundle.
      </p>
      <center>
      <StepIndicator counters="default" headingLevel="h4">
        {stages.map((label, i) => (
          <StepIndicatorStep
            label={label}
            status={i == page ? 'current' : i < page ? 'complete' : ''}
          />
        ))}
      </StepIndicator>
      </center>
      <PageComponent />
      <button onClick={() => previousPage()} disabled={page - 1 < 0}>Previous</button>
      <button onClick={() => nextPage()} disabled={page + 1 >= NUM_PAGES}>Next</button>
    </center></section>);
}

export default Tagline;
