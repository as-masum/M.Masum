import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/rest_apis.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB as well as front-end technologies like HTML, CSS, React. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I have worked with a variety of technologies, including JavaScript, Node.js, MySQL, PostgreSQL, React, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const PROJECTS = [
  {
    title: "LearningCraft App",
    image: project1,
    description:
      `Worked as a Backend developer responsible for web application i.e. LearningCraft App. There were around 10 modules in this app. Worked on creating the REST APIs for crud operations of these modules`,
    technologies: ["Nodejs", "Expressjs", "PostgreSQL"],
    link:""
  },
  {
    title: "Simple E-Commerce Website",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Postman"],
    link:"https://github.com/as-masum/simple_ecom_website_using_react_node_mongodb"
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Reactjs", "TailwindCSS"],
    link:"https://github.com/as-masum/as-masum.github.io"
  },
  {
    title: "Node Rest API",
    image: project4,
    description:
      `Built a CRUD Rest APIs to register User details utilizing the NodeJs(Express) and PostgreSQL. Implemented user authentication and authorization for secure APIs.`,
    technologies: ["Nodejs", "Express", "PostgreSQL"],
    link:"https://github.com/as-masum/rest_apis_using_nodejs"
  },
];

export const CONTACT = {
  address: "Jaipur Rajasthan ",
  phoneNo: "+91 7742522395 ",
  email: "mohammedmasum051@gmail.com",
};
