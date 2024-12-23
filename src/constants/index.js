import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Colorado School of Mines senior studying Computer Science with a concentration in Data Science. Through software Engineering and Data Science internships at multiple Fortune 500 companies, I have had the opportunity to work on real-world problems and deliver real-world solutions. In these roles, I honed my skills in AWS, Machine Learning, Data Science, Angular and Spring Boot. I aim to apply my skills to the problems that will define my generation, including Critical Minerals in the Energy Transition, Renewable Energy, and the algorithmic pushing of content on Social Media.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_ME = `
<p style="margin-bottom: 1rem; text-indent:">I gained an interest in computers during middle school. Through Youtube videos and using my neighbors old computer parts I was able to scrape together ‘gaming computer’. Freshman year of high school was the first time I coded and I was instantly hooked. I went on to be Co-President of my high school's computer science club and spearheaded our first year of competition in the American Computer Science League. I continued into college pursuing a major in Computer Science with a concentration in Data Science. Here I continued to build my skills, serving as a teaching assistant for Introduction to Python during my second semester Freshman Year. During Freshman year, I also worked on research in critical mineral demand models for the energy transition. Using this newfound knowledge, I completed an internship at Rio Tinto where I applied machine learning techniques and built out data analysis tools. During my junior year of college I picked up a new research project, which I am still working on, which focuses on applying data science techniques and machine learning models to material science problems. This past summer, I wanted to broaden my horizons so I took a Software Engineering Internship at Transamerica, where I built out an AWS Gen-AI pipeline and worked on some internal QA Monitoring tools. Currently, I am serving as the Lead Data Science Teaching assistant for Advanced Data Science and Intro To Data Science and looking to refine my skills in web-development and linear algebra.</p>
<p style="margin-bottom: 1rem;">Outside of classes, I am involved in Mines Without Borders and Undergraduate Student Government (USG). For Mines Without Borders, I manage their social media accounts and run and help plan social events for the club. Specifically for the Solar Team, I serve as the Social Lead which means I am the primary contact for the non-profit organizations and communities that we work for our UV Water Purification project in Guatemala that will serve 900 people. In USG I serve as a senior class representative which entails helping to plan two large scale events with over 400 attendees.</p>
<p>I am an avid skier, runner and hiker and also love to read and play guitar. I hope to document some of my adventures on this website if I have time!</p>
`;

export const EXPERIENCES = [
  {
    year: "Sept 2024 - Present",
    role: "Lead Data Science Teaching Assistant",
    company: "Colorado School of Mines",
    description: `Leading group of 5 teaching assistant for the graduate-level Advanced Data Science course and for the undergraduate-level Intro to Data Science course. Helping students optimize models using traditional data science techniques as well as deep learning and machine learning techniques.`,
    technologies: ["Pandas", "Tensorflow", "Seaborn", "Sci-Kit Learn", "Python"],
  },
  {
    year: "May 2024 - Aug 2024",
    role: "Software Engineer Intern",
    company: "Transamerica",
    description: `Developed an end-to-end Gen-AI tool in AWS leveraging Bedrock’s Claude model, Athena, S3, Lambda, Quicksight, and DynamoDB. Worked across teams to develop a scope document for integration of a third-party tool into the existing front-end framework. Added additional functionality to internal QA monitoring tools using Angular and SpringBoot to organize API
ownership information and boost speed of development.`,
    technologies: ["AWS", "Python", "Javascript", "Angular", "Spring Boot"],
  },
  {
    year: "May 2023 - Aug 2023",
    role: "Data Science Intern",
    company: "Rio Tinto",
    description: `Built 150+ daily operations charts in PI Vision improving operational efficiency and data visualization. Applied a Random Forest Classifier (Sci-Kit Learn) and Neural Network (Tensorflow) to detect incorrect sensor data with 99.5% accuracy over 30 million observations. Cleaned dataset of 30 million observations using Pandas, StandardScaler, SMOTE and One-Hot Encoding.`,
    technologies: ["Pandas", "Tensorflow", "Python", "Sci-Kit Learn", "PI Vision"],
  },
  {
    year: "Jan 2024 - Present",
    role: "Data Science Researcher",
    company: "Mozur Research Group",
    description: `Working across Data Science and Material Engineering departments building models to predict the steps necessary to go from an initial compound to a manganese-based intermetallic. Using Tensorflow and Sci-Kit Learn to build models, Pandas, Numpy and Sci-Kit Learn for data cleaning, and Seaborn and Matplotlib for visualization. Current models achieve 70% accuracy for number of anneals which is in-line with published results`,
    technologies: ["Pandas", "Seaborn", "Sci-Kit Learn", "Python", "Tensorflow"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "914-334-0106 ",
  email: "bwalsh@mines.edu",
};
