import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  
} from "../assets";

import wandalust from "../assets/projects/wandalust.png"
import zomato from "../assets/projects/zomato.png"
import faced from "../assets/projects/faced.png"



const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  // {
  //   title: "Software Engineer",
  //   company_name: "Nickelfox Technologies",
  //   company_website: "https://www.nickelfox.com/",
  //   icon: nickelfox,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2022 - Present",
  //   points: [
  //     "Developing and maintaining web and mobile applications using React.js, React-native and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Software Developer",
  //   company_name: "Newgen Software",
  //   company_website: "https://newgensoft.com/home-india/",
  //   icon: newgen,
  //   iconBg: "#E6DEDD",
  //   date: "Mar 2021 - Dec 2021",
  //   points: [
  //     "Developed a groundbreaking banking product for a Singapore-based firm, improved transaction management.",
  //     "Developed a dynamic dashboard for efficient transaction management, resulting in a 30% increase in productivity.",
  //     "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
  //     "Created a transaction report generator, reducing report generation time by 50% and enhancing data analysis.",
  //   ],
  // },
  // {
  //   title: "Software Engineer Intern",
  //   company_name: "Skillrisers",
  //   company_website: "https://www.skillrisers.com/",
  //   icon: skillrisers,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2020 - Jul 2020",
  //   points: [
  //     "Contributed to the development of a Test Engine Application, empowering users to create and conduct tests seamlessly.",
  //     "Built three essential modules: Teacher, Student, and Admin, ensuring comprehensive functionality for all user roles.",
  //     "Collaborated effectively with the development team, actively participating in code reviews and resolving technical challenges.",
  //     "Demonstrated strong problem-solving skills, consistently delivering high-quality code and meeting project deadlines.",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Self-employed",
  //   company_website: "https://proximus.surge.sh/index.html",
  //   icon: proximus,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2018 - Jan 2021",
  //   points: [
  //     "Spearheaded the development of a fully responsive website for the college coding society.",
  //     "Led coding sessions, actively sharing knowledge and insights to enrich members' programming skills and understanding.",
  //     "Organized informative sessions on cutting-edge technologies, including JavaScript and ReactJs.",
  //     "Curated and designed challenging coding problems for college competitions.",
  //   ],
  // },
];

const projects = [
    {
      name:"wandalust web",
      description:"Developed Wandalust, a web platform that allows travelers to rent unique properties,ranging from apartments and homes to villas and cabins. Users can browse property listings, view details via Mapbox, and leave reviews. Hosts can add, edit, and delete their listings. The app follows the MVC architecture for scalable and maintainable code and uses middleware for validation and error handling. User authentication is managed by Passport.js, supporting username/password, OAuth, and OpenID strategies for secure access.",
      tags: [
            {
              name: "ejs",
              color: "blue-text-gradient",
            },
            {
              name: "css",
              color: "green-text-gradient",
            },
            {
              name: "nodejs",
              color: "pink-text-gradient",
            },
            {
                    name: "mongo db",
                    color: "green-text-gradient",
                  },
          ],
          image: wandalust,
          hosted_link: "https://wandalust-ai6f.onrender.com/listings"
    },

    {
      name:"zomato clone",
      description:"Implemented routing to ensure efficient navigation and connection between different parts of the application. Utilized React hooks for state management and handling side effects, enhancing application performance Integrated payment gateways for seamless transaction processes.Implemented authentication mechanisms to ensure user security.",
      tags: [
            {
              name: "react.js",
              color: "blue-text-gradient",
            },
            {
              name: "css",
              color: "green-text-gradient",
            },
            {
              name: "nodejs",
              color: "pink-text-gradient",
            },
            {
                    name: "mongo db",
                    color: "green-text-gradient",
                  },
          ],
          image: zomato,
          hosted_link: ""
    },
    {
      name:"AI Object & Face Detection",
      description:"Implemented a comprehensive AI-driven object and face detection system using AWS APIs and technologies. Leveraged advanced computer vision algorithms to detect and identify objects and faces in images.",
      tags: [
            {
              name: "react.js",
              color: "blue-text-gradient",
            },
            {
              name: "css",
              color: "green-text-gradient",
            },
            {
              name: "AWS API",
              color: "pink-text-gradient",
            },
           
          ],
          image:faced,
          hosted_link: "https://dhakadaifacedetection.netlify.app/"
    },
  // {
  //   name: "Aptihealth Web",
  //   description:
  //     "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "redux",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "nodejs",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: aptihealthWeb,
  //   hosted_link: "https://www.aptihealth.com/",
  // },
  // {
  //   name: "Aptihealth App",
  //   description:
  //     "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
  //   tags: [
  //     {
  //       name: "react-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sendbird",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "twilio",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: aptihealthApp,
  //   hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  // },
  // {
  //   name: "Zeal Web",
  //   description:
  //     "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: zealWeb,
  //   hosted_link: "https://getzeal.co/",
  // },
  // {
  //   name: "Zeal App",
  //   description:
  //     "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
  //   tags: [
  //     {
  //       name: "react-native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sendgrid",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: zealApp,
  //   hosted_link:
  //     "https://apps.apple.com/us/app/zeal-activities-with-friends/id6446917140",
  // },
  // {
  //   name: "Roll Web",
  //   description:
  //     "The Roll website is the gateway to the future of decentralized communities and digital assets. It allows users to seamlessly earn, redeem, send, and trade social tokens.",
  //   tags: [
  //     {
  //       name: "reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "formik",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollWeb,
  //   hosted_link: "https://app.tryroll.com/",
  // },
  // {
  //   name: "Roll App",
  //   description:
  //     "Join the future of decentralized communities and digital assets with Roll. Earn, redeem, send, and trade social tokens on this innovative platform. Experience transparent transactions and captivating UI design.",
  //   tags: [
  //     {
  //       name: "react-native-web",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "storybook",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: rollApp,
  //   hosted_link:
  //     "https://play.google.com/store/apps/details?id=com.roll&hl=en_GB",
  // },
];

const personalInfo = {
  name: "Ashish",
  fullName: "Ashish Dhakad",
  email: "ashishdhakad685@gmail.com",
  role: "Software Developer",
  about: `Dedicated software developer seeking a challenging role with a progressive organization to leverage my
knowledge and technical skills in contributing to the organization's growth. Committed to continuous learning
and adapting to new technologies. `,
  // and experience through
  // real-world examples of my work. Each project is briefly described with
  // live demos. It reflects my ability to solve complex problems, work
  // with different technologies, and manage projects effectively.,
};

const publicUrls = {
  resume:"",
    // "https://drive.google.com/file/d/1qvFNTJSS6joxG-065UkljuPpYJgGcQXt/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/ashish-dhakad-513706283/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/AshishDhakad",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
