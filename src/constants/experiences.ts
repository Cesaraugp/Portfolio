import type { ExperienceItem } from "../types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Fullstack Engineer",
    to: "Actual",
    from: "Aug 2023",
    company: { name: "Keep", link: "https://trykeep.com" },
    featuredResponsabilities: [
      "Led multiple deprecation initiatives, systematically removing legacy code to align with the company's coding standards and improve maintainability.",
      "Successfully migrated over 63 million records using Snowflake Tasks, ensuring data integrity and efficiency.",
      "Worked on a WebSocket integration within an event-driven architecture to deliver real-time notifications using GraphQL Subscriptions.",
      "Developed and deployed two-factor authentication (2FA), significantly improving platform security and user trust.",
      "Created a Credit Report tool that allowed the underwriting team to retrieve and analyze credit score data, enabling more accurate underwriting decisions.",
      "Enhanced bank account connection features, implementing key improvements for reliability and user experience.",
      "Optimized the application process for mobile devices, ensuring a seamless and responsive user experience.",
      "Owned and integrated marketing and analytics tools, including Segment, HubSpot, and ad conversion platforms like Google Ads, Facebook Business, and LinkedIn Ads, to streamline customer acquisition efforts.",
    ],
  },
  {
    title: "Fullstack Engineer",
    from: "Dic 2021",
    to: "Aug 2023",
    featuredResponsabilities: [],
    company: { name: "Sundevs", link: "https://sundevs.com" },
    subRoles: [
      {
        title: "Ssr Advanced Fullstack Engineer",
        featuredResponsabilities: [
          "Integrated a Payment Gateway Provider, cutting chargeback expenses by 99.4% through the implementation of AVS.",
          "Launched a robust back-office platform for Call Center Agents, with monthly sales exceeding $200,000.",
          "Development of a Websockets Integration that reduced the Customer Purchase Cycle Time up to 40%.",
        ],
        from: "Dic 2022",
        to: "Aug 2023",
      },
      {
        title: "Ssr Fullstack Engineer",
        featuredResponsabilities: [
          "Integrated Stripe Payments including Invoices, Payment Links and Payment Intents.",
          "Built a whole in-house invoices system.",
          "Development of a menu abstraction from the client's POS system which reduced the payload size up to 82.86%.",
        ],
        from: "Mar 2022",
        to: "Dic 2022",
      },
      {
        title: "Junior Fullstack Engineer",
        featuredResponsabilities: [
          "Maintenance and enhacements of core microservices, including Payments, Ordering, Loyalty, and Delivery.",
          "Integrated Doordash, allowing the business to open a new ordering channel which represents 10% of sales.",
          "Resolution of important bugs over the Scheduled Payments Ordering for Catering, reducing system errors up to 0%.",
        ],
        from: "Dic 2021",
        to: "Mar 2022",
      },
    ],
  },
  {
    title: "Javascript Developer",
    from: "Jun 2021",
    to: "Dic 2021",
    company: { name: "Assett+", link: "https://www.assett.ca/" },
    featuredResponsabilities: [
      "Development of a stocks options portfolio bot for Telegram, with daily updates, data scrapping and graphs.",
      "Development of a membership management bot for Discord, with email verification and role auto-upgrade based on membership changes.",
      "Certified as Velo Developer, which promoted the company to Legend Partner.",
    ],
  },
  {
    title: "Web Developer",
    from: "Nov 2020",
    to: "Jun 2021",
    company: { name: "Ponceleon Software" },
    featuredResponsabilities: [
      "Development and enhancement of Wordpress sites.",
      "Creation of an internal Time Tracking and Productivity Monitoring tool.",
      "Worked on multiple back-office customization plugins.",
    ],
  },
];
