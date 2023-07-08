import {
    mobile,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    mui,
    styledComponent,
    sass,
    git,
    figma,
    bitbucket,
    ant,
    asnak,
    asnakv2,
    asnakv1,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Scrum Master",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Material UI",
      icon: mui,
    },
    {
      name: "Styled Component",
      icon: styledComponent,
    },
    {
      name: "Ant Design",
      icon: ant,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "bitbucket",
    //   icon: bitbucket,
    // },
  ];
  
  const experiences = [
    {
      title: "Front-end Developer",
      company_name: "Asnak Logistics Technologies",
      icon: asnak,
      iconBg: "#383E56",
      date: "September 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Using React.Js and AntDesign library on Asnak Logistics Platform v1.0",
        "Using React.Js and Node.Js with Material UI on Asnak Logistics Platform v2.0",
        "Redux and Redux Saga connections and Database integrations",
        "Getting specialties in CSS and SASS from Figma",
        "Contributed to projects within Scrum project management environments",
        "Agile Mindset, using JIRA and ClickUp for Project Management and Bug Tracking"
      ],
    }
  ];
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Şikayetvar User Page",
      description:
        "Web-based platform that allows users to login dashboard. Site includes home, course, students, payment, report, settings pages. On students page, users viewed on a table that can be sorted, filtered, searchable, editable and add new users.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "violet-text-gradient",
        },
        {
          name: "STYLED COMPONENTS",
          color: "green-text-gradient",
        },
        {
          name: "NEXT-JS",
          color: "pink-text-gradient",
        },
        {
          name: "MATERIAL REACT TABLE",
          color: "orange-text-gradient",
        },
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjRnb3d6d3doY3J0ejRsbm9nbmZzMTB6dGhlanR2b25qcWYzZWFseiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cKC5cqUBjagZxYfpDt/giphy.gif',
      source_code_link: "https://github.com/omersarisoy/sikayetvar-user-page",
      project_link: "https://sikayetvar-user-page.netlify.app/home",
    },
    {
      name: "Sel Transportation",
      description:
        "Web-based platform that allows users to carry their loads from everywhere whereever they want. Site includes main, institutional, services, contact pages.  Company provides a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "SASS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
        {
          name: "JQUERY",
          color: "orange-text-gradient",
        },
        {
          name: "SWIPERJS",
          color: "violet-text-gradient",
        },
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTI4NjYyMmQ5YTVhNTExMWIxMDkxMmQ4YTk2N2Y2ODNlMTBiNzNkMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/qnZY2qvR6lNa9FUYmu/giphy.gif',
      source_code_link: "https://github.com/omersarisoy/sel-transportation-web-page",
      project_link: "https://sel-transport.netlify.app/",
    },
    {
      name: "Mercedes AMG",
      description:
      "Web application that enables users to search for Mercedes AMG's properties and features. They can view services informations etc. Sites provides high resolutions photos and graphics of corresponded",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "REACT",
          color: "green-text-gradient",
        },
        {
          name: "SASS",
          color: "pink-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "violet-text-gradient",
        },
        {
          name: "SLICK CAROUSEL",
          color: "orange-text-gradient",
        },
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjBhMTYyZjIxMzIwMzM0ZTVkNTQ1OTJkZTUyYzBiYTdmMDUxMWUwOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/SZWvRzYXRP02GOTwRH/giphy.gif',
      source_code_link: "https://github.com/omersarisoy/Mercedes-AMG-Website",
      project_link: "https://mercedes-amg.netlify.app/",
    },
    {
      name: "Arc Development",
      description:
      "Web page about Simple Software Revolutionary Results. Complete digital solutions, from investigation tocelebration. Bringing West Coast Technology to the Midwest. Visionary insights coupled with cutting-edge technology is a recipe for revolution. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "purple-text-gradient",
        },
        {
          name: "REACT",
          color: "green-text-gradient",
        },
        {
          name: "MATERIAL UI",
          color: "pink-text-gradient",
        },
        {
          name: "STYLED COMPONENT",
          color: "orange-text-gradient",
        },
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ1MWRiNDY0NzcyNzFmMGZiMTJmOTdhM2RlZTVhNzE2NDM3MDgzZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/MMwSISP3q9EjgI91X5/giphy.gif',
      source_code_link: "https://github.com/omersarisoy/mui-web-site",
      project_link: "https://arc-development-web.netlify.app",
    },
    {
      name: "Asnak Logistics Platform v1.0",
      description:
      "Asnak Logistics Technologies Inc. is a technology company that offers innovative solutions that will make your life easier for your logistics operations in end-to-end supply chain processes. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "purple-text-gradient",
        },
        {
          name: "REACT",
          color: "green-text-gradient",
        },
        {
          name: "ANT DESIGN",
          color: "pink-text-gradient",
        },
        {
          name: "STYLED COMPONENT",
          color: "orange-text-gradient",
        },
      ],
      image: asnakv1,
      no_repository: true,
      project_link: "https://prod.asnak.com/user/login",
    },
    {
      name: "Asnak Logistics Platform v2.0",
      description:
      "Asnak means expert workforce and technological infrastructure for supply chain logistics processes. It provides significant administrative & financial resource savings by fully undertaking the management of administrative costs.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "purple-text-gradient",
        },
        {
          name: "REACT",
          color: "green-text-gradient",
        },
        {
          name: "MATERIAL UI",
          color: "pink-text-gradient",
        },
        {
          name: "STYLED COMPONENT",
          color: "orange-text-gradient",
        },
      ],
      image: asnakv2,
      no_repository: true,
      project_link: "https://logicure.asnak.com",
    },
    {
      name: "Shaking Tree App",
      description:
      "There is a tree with big, juicy red apples on it. We want to collect those apples because the tree is so high, then they are not reachable. We have to shake the tree to drop apples. After that, we can put the apples in our apple basket.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "SASS",
          color: "purple-text-gradient",
        },
        {
          name: "NextJS",
          color: "green-text-gradient",
        },
        {
          name: "REDUX",
          color: "pink-text-gradient",
        },
      ],
      image: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzUwYTI0NjViZTJiYjRkYzY5NWJhM2Y5NmI0YWZjZWNkYzdmYmUyMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/V7pOvgnm4CoOeDqAwC/giphy.gif',
      source_code_link: "https://github.com/omersarisoy/shaking-apples-tree",
      project_link: "https://shaking-apples-tree.netlify.app",
    },
  ];
  
  export { services, technologies, experiences, projects };