import projects1 from "../assets/projects1.webp";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.webp";
import project4 from "../assets/project4.webp"

export const LINKS = [
  { href: "#technologies", label: "Technology" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
 
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Abhishek , a creative MERN Stack developer, Crafting web magic, immersive and smart.",
  description:
    "I’m learning and creating projects to bring visions to life with interactive digital solutions",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Coursity",
    description: "The Backend of a course Creation and selling Application for Creators",
    image: projects1,
    link: "https://github.com/misanthropic-codes/Coursity",
  },
 {
    name: "Campus Connect",
    description: "A Collaborative Full Stack App letting Users Connect and perform task",
    image: project4,
    link: "https://github.com/misanthropic-codes/Campus-Connect",
  },
  
  {
    name: "Authenticator",
    description: "Authentication Web Application built using Node.js Express.js and JWT",
    image: projects2,
    link: "https://github.com/misanthropic-codes/Authentication",
  },
  {
    name: "Amazon Clone",
    description: "Amazon clone website using HTML and CSS.",
    image: projects3,
    link: "https://github.com/misanthropic-codes/Amazon-clone",
  },
  
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a full stack developer with hands-on experience in technologies like Node.js, MongoDB, Express.js, and React.js, as well as familiarity with the MERN stack. I’ve built dynamic and scalable web applications, focusing on both the frontend and backend to deliver seamless, high-performance solutions",
    "I enjoy working on end-to-end projects, from designing user-friendly interfaces to implementing efficient server-side logic. My goal is to write clean, maintainable code while continuously learning and leveraging modern technologies to build impactful applications.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "October 2023 - Now",
    title: "Frontend Developer at CrackIIT:JEE Smashers.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 100% performance boost.",
      "Tailored SEO for better Search Visibility.",
    ],
  },

  {
    yearRange: "April - October 2024",
    title: "Scalar School of Technology",
    location: "Remote",
    description: [
      "Developed of the frontend for a chatbot integrated into the Scalar School of Technology webpage.",
    
      "Collaborated with team members to enhance the user experience and streamline interactions on the website.",
    ],
  },
  
  
];



export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "misanthropic.codes@outlook.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/@misanthropic_12",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/misanthropic-codes",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-codes/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Misanthropic._.guy. All rights reserved.`,
};
