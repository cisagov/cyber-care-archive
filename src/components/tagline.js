import React, { useState } from 'react';
import {
  StepIndicator,
  StepIndicatorStep,
  ProcessList,
  ProcessListItem,
  ProcessListHeading,
} from '@trussworks/react-uswds';
import { Form } from './Form';

/*
  This tagline will appear in your homepage
*/

let stages = ['Your Organization', 'Maturity Assessment', 'Get Your CyberCare'];

const NUM_PAGES = stages.length;

let schema = {
  type: 'object',
  definitions: {
    cpg: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          enum: ['Implemented', 'In Progress', 'Scoped', 'Not Started', 'N/A'],
        },
        notes: {
          type: 'string',
        },
      },
    },
  },
  properties: {
    type: 'object',
    1: {
      title: 'Identify (1)',
      type: 'object',
      properties: {
        a: {
          title:
            'Do you maintain a regularly updated inventory of all organizational assets with an IP address, and update this on a recurring basis?',
          $ref: '#/definitions/cpg',
        },
        b: {
          title:
            'Is a named role/position/title is identified as responsible and accountable for planning, resourcing, and execution of cybersecurity activities?',
          $ref: '#/definitions/cpg',
        },
        c: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        d: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        e: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        f: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        g: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        h: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        i: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
      },
    },
    2: {
      title: 'Protect (2)',
      type: 'object',
      properties: {
        a: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        b: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        c: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        d: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        e: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        f: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        g: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        h: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        i: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        j: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        k: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        l: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        m: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        n: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        o: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        p: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        q: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        r: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        s: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        t: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        u: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        v: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        w: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        x: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
      },
    },
    3: {
      title: 'Detect (3)',
      type: 'object',
      properties: {
        a: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
      },
    },
    4: {
      title: 'Respond (4)',
      type: 'object',
      properties: {
        a: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        b: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
        c: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
      },
    },
    5: {
      title: 'Recover (5)',
      type: 'object',
      properties: {
        a: {
          title: 'Asset Inventory',
          $ref: '#/definitions/cpg',
        },
      },
    },
  },
};

let uiSchema = {
  1: {
    classNames: 'cpg cpg-1',
  },
  2: {
    classNames: 'cpg cpg-2',
  },
  3: {
    classNames: 'cpg cpg-3',
  },
  4: {
    classNames: 'cpg cpg-4',
  },
  5: {
    classNames: 'cpg cpg-5',
  },
};

for (const i in uiSchema) {
  let j = 0;
  for (const key of Object.keys(schema.properties[i].properties)) {
    j++;
    const titles = [
      'Do you maintain a regularly updated inventory of all organizational assets with an IP address, and update this on a recurring basis?',
      'Is a named role/position/title is identified as responsible and accountable for planning, resourcing, and execution of cybersecurity activities?',
      'Do you keep track of known exploited vulnerabilities (listed in CISA’s KEV Catalog) and ensure they are patched or mitigated in a timely fashion?',
      'Do you currently have a Vulnerability Disclosure Policy and/or run a bug bounty program?',
      'Do you regularly run third party tests such as penetration tests, incident simulations, tabletop exercises, etc.?',
      'Do you have a security.txt file on all public facing domains?',
      'Do you know where you can report incidents to CISA securely?',
      'Do you collect and store logs for use for both detection and incident response activities?',
      'Do you back up all systems necessary for operations at a regular cadence, no less than once per year?',
      'Do you have training for OT cybersecurity?',
      'Do you use phishing-resistant MFA for critical systems?',
    ];
    uiSchema[i][key] = {
      'ui:title': titles[j % titles.length],
      status: {
        'ui:title': ' ',
        'ui:placeholder': 'Select a status',
        'ui:widget': 'radio',
        classNames: 'field-status',
        'ui:options': {
          inline: true,
        },
      },
      notes: {
        'ui:title': ' ',
        'ui:placeholder': 'Notes',
        classNames: 'field-notes',
      },
    };
  }
}

const Tagline = () => {
  const [page, setPage] = useState(0);
  const nextPage = () => {
    page <= NUM_PAGES && setPage((p) => p + 1);
    document
      .getElementById('survey-start')
      .scrollIntoView({ behavior: 'smooth' });
  };
  const previousPage = () => {
    page >= 0 && setPage((p) => p - 1);
    document
      .getElementById('survey-start')
      .scrollIntoView({ behavior: 'smooth' });
  };
  const submitRegistration = () => {};
  let PageComponent = () => null;
  if (page === 0) {
    PageComponent = () => (
      <center>
        <Form
          schema={{
            type: 'object',
            properties: {
              name: { type: 'string', title: 'Organization name' },
              size: {
                type: 'string',
                title: 'Organization size',
                enum: ['-10', '0-100', '00-1000', '000+'],
              },
              contactName: { type: 'string', title: 'Contact name' },
              email: { type: 'string', title: 'Email', format: 'email' },
              itStaff: {
                type: 'number',
                title: 'How many people are part of your full-time IT staff?',
              },
              // servicesInUse: {
              //   type: 'string',
              //   title: 'What cybersecurity services do you currently use?',
              //   enum: ['Cyber Hygiene', 'Vulnerability scanning'],
              //   // type: "array", title: "What cybersecurity services do you currently use?", items: {
              //   //   type: "string",
              //   //   enum: ["Cyber Hygiene", "Vulnerability scanning"]
              //   // }, uniqueItems: true
              // },
              // biggestProblem: {
              //   type: 'string',
              //   title: 'What is your biggest challenge around cybersecurity?',
              //   enum: ['Challenge 1', 'Challenge 2', 'Challenge 3'],
              // },
            },
          }}
          uiSchema={{
            servicesInUse: {
              // "ui:widget": "checkboxes"
            },
          }}
        >
          &nbsp;
        </Form>
      </center>
    );
  }
  if (page === 1) {
    PageComponent = () => (
      <center>
        <Form schema={schema} className="cpg-form" uiSchema={uiSchema}>
          &nbsp;
        </Form>
      </center>
    );
  }
  if (page === 2) {
    PageComponent = () => (
      <ProcessList style={{ 'margin-left': '200px' }}>
        <ProcessListItem>
          <ProcessListHeading type="h4">
            Start with Attack Surface Management
          </ProcessListHeading>
          <p className="margin-top-05">
            Register for CISA's Attack Surface Management platform, Crossfeed,
            to receive an outside-in view of your organization's attack surface.
          </p>
          <button>Enroll me in Crossfeed</button>
        </ProcessListItem>
        <ProcessListItem>
          <ProcessListHeading type="h4">
            Download Logging Made Easy
          </ProcessListHeading>
          <p>
            Logging Made Easy is an open source project maintained by CISA that
            makes it easy to bootstrap your organization's basic logging of
            enrolled Windows devices. To help you get started, we've created a
            guide to setting up Logging Made Easy.
          </p>
          <button>Show me how to use Logging Made Easy</button>
        </ProcessListItem>
        <ProcessListItem>
          <ProcessListHeading type="h4">
            Talk with your CISA Cybersecurity Advisor
          </ProcessListHeading>
          <p>
            If you have questions or want more custom-tailored CISA services,
            feel free to get in touch with your CISA Cybersecurity Advisor. CISA
            has Cybersecurity Advisors in regions across the country to help
            critical infrastructure organizations.
          </p>
          <button>Email my Cybersecurity Advisor</button>
        </ProcessListItem>
      </ProcessList>
    );
  }

  return (
    <section className="grid-container usa-section usa-prose" id="survey-start">
      <StepIndicator counters="default" headingLevel="h4">
        {stages.map((label, i) =>
          i < page ? (
            <StepIndicatorStep
              label={label}
              onClick={() => setPage(i)}
              style={{ cursor: 'pointer' }}
              status={i == page ? 'current' : i < page ? 'complete' : ''}
            />
          ) : (
            <StepIndicatorStep
              label={label}
              status={i == page ? 'current' : i < page ? 'complete' : ''}
            />
          )
        )}
      </StepIndicator>
      <center>
        {page < 2 ? (
          <>
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
              Get Started with CyberCare
            </h2>
            <p>
              {page == 0
                ? "To start out with CyberCare, we'll need some basic information about your organization."
                : 'Next, answer the following questions about your organization to receive your CyberCare bundle.'}
            </p>
          </>
        ) : (
          <>
            <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
              You're all set!
            </h2>
            <p>
              You're enrolled in CyberCare. Check out your custom CyberCare
              package below. You will receive an email with this same
              information, and you can log into CyberCare in the future to learn
              about new services.
            </p>
            <button>Download your bundle as a PDF</button>
            <br></br>
            <br></br>
          </>
        )}
      </center>
      <PageComponent />
      <center>
        {page + 1 < NUM_PAGES ? (
          <button onClick={() => previousPage()} disabled={page - 1 < 0}>
            Previous
          </button>
        ) : (
          <></>
        )}
        {page + 2 < NUM_PAGES ? (
          <button onClick={() => nextPage()} disabled={page + 1 >= NUM_PAGES}>
            Next
          </button>
        ) : page + 1 < NUM_PAGES ? (
          <button onClick={() => nextPage()}>Submit</button>
        ) : (
          <></>
        )}
      </center>
    </section>
  );
};

export default Tagline;
