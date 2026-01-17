export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  logo?: string;
  type: 'work' | 'teaching' | 'research';
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'ibm',
    company: 'IBM Canada',
    position: 'Software Developer',
    period: 'Jun 2024 - Present · 7 mos',
    location: 'Calgary, Alberta, Canada',
    description: [
      'Working on enterprise software solutions using modern cloud technologies',
      'Developing scalable applications with focus on performance and reliability',
      'Collaborating with cross-functional teams in agile development environment'
    ],
    skills: ['Java', 'Python', 'Cloud Computing', 'DevOps', 'Agile Methodologies', 'Microservices', 'Docker', 'Kubernetes'],
    type: 'work'
  },
  {
    id: 'red-deer-polytechnic',
    company: 'Red Deer Polytechnic',
    position: 'Teaching Assistant',
    period: 'Sep 2023 - Apr 2024 · 8 mos',
    location: 'Red Deer, Alberta, Canada',
    description: [
      'Assisted in computer science courses and laboratory sessions',
      'Supported students with programming assignments and projects',
      'Helped develop curriculum materials and grading rubrics'
    ],
    skills: ['Java', 'Python', 'Database Management', 'Software Engineering', 'Education', 'Student Support'],
    type: 'teaching'
  },
  {
    id: 'credwise',
    company: 'Credwise',
    position: 'Software Engineer',
    period: 'Mar 2023 - Aug 2023 · 6 mos',
    location: 'Remote',
    description: [
      'Developed financial technology solutions for credit assessment',
      'Implemented machine learning models for risk evaluation',
      'Built RESTful APIs and integrated with third-party services'
    ],
    skills: ['Python', 'Machine Learning', 'REST APIs', 'Data Science', 'Financial Technology', 'AWS', 'Docker'],
    type: 'work'
  },
  {
    id: 'outlier',
    company: 'Outlier',
    position: 'Software Consultant',
    period: 'Jan 2024 - May 2024 · 5 mos',
    location: 'Canada · Remote',
    description: [
      'Specialized in prompt engineering and data analytics, performing data handling, cleaning, EDA, and generating AI prompts to meet specific client requirements using Java, Python, and Javascript.',
      'Conducted comprehensive code reviews for AI-generated solutions, validating full-stack, backend, and frontend tickets locally, and providing detailed feedback using Java, Python, MERN, SQL, Javascript, and Typescript.',
      'Optimized ETL processes and enhanced LLM accuracy through advanced prompt engineering and ML solutions, integrating GCP\'s BigQuery, VertexAI, Python, and SQL to improve AI response and data handling.'
    ],
    skills: ['Python', 'Generative AI', 'Java', 'Prompt Engineering', 'Large Language Models (LLM)'],
    type: 'work'
  },
  {
    id: 'cloudops',
    company: 'CloudOps',
    position: 'Cloud Developer Intern',
    period: 'Aug 2023 - Dec 2023 · 5 mos',
    location: 'Montreal, Quebec, Canada · Remote',
    description: [
      'Streamlined the CloudStack VM creation process by consolidating the creation pathways for bare-metal and standard VMs into a unified interface, enhancing user experience.',
      'Integrated VMware\'s compute sizing policies into VM plugin for accurate delta metric calculations (CPU, RAM, Storage) during VM/Vapp operations.',
      'Executed 100% test coverage in Groovy and Spock and led development in Spring boot and Java.',
      'Redesigned primary and secondary navigations for distinct user roles in Vue.js, resulting in enhanced UX.'
    ],
    skills: ['Coding Standards', 'TypeScript', 'Java', 'React.js', 'Spring Boot', 'Agile Methodologies', 'Vue.js', 'Amazon Web Services (AWS)', 'SQL', 'JavaScript', 'VMware', 'Cloud Computing'],
    type: 'work'
  },
  {
    id: 'dalhousie-ta',
    company: 'Dalhousie University',
    position: 'Undergraduate Teaching Assistant and Marker',
    period: 'Jan 2023 - Dec 2023 · 1 yr',
    location: 'Halifax, Nova Scotia, Canada',
    description: [
      'Conducting lab sessions in Mysql queries, using join statements, and stored procedures, javascript, React, HTML, and CSS.',
      'Answering students\' queries and doubts',
      'Providing career guidance to undergraduate students'
    ],
    skills: ['Java', 'React.js', 'Back-End Web Development', 'SQL', 'JavaScript', 'Git', 'Artificial Intelligence (AI)'],
    type: 'teaching'
  },
  {
    id: 'dalhousie-gta',
    company: 'Dalhousie University',
    position: 'Graduate Teaching Assistant and Marker',
    period: 'Jan 2023 - Aug 2023 · 8 mos',
    location: 'Halifax, Nova Scotia, Canada',
    description: [
      'Conducting lab sessions with CI/CD, Git, Spring boot, TDD, applying SOLID & Design patterns',
      'Collaborating with professors in updating and delivering course content',
      'Guiding students to develop an efficient final full-stack project'
    ],
    skills: ['Java', 'React.js', 'DevOps', 'Agile Methodologies', 'Amazon Web Services (AWS)', 'SQL', 'Git', 'Spring Framework', 'Cloud Computing'],
    type: 'teaching'
  },
  {
    id: 'dalhousie-ra',
    company: 'Dalhousie University',
    position: 'Research Assistant',
    period: 'Nov 2022 - Dec 2022 · 2 mos',
    location: 'Halifax, Nova Scotia, Canada',
    description: [
      'Developed python scripts that scrape data from Twitter based on time, keyword, search criteria, and users.',
      'This data is presented in research into ethics, inclusivity, and racial discrimination in a workplace setting.'
    ],
    skills: ['Twitter API', 'Web Scraping', 'Agile Methodologies', 'Python', 'Data Engineering', 'Data Collection', 'Data Mining', 'Git', 'Artificial Intelligence (AI)'],
    type: 'research'
  },
  {
    id: 'oracle',
    company: 'Oracle Financial Services Software Limited',
    position: 'Associate Consultant',
    period: 'Aug 2021 - Aug 2022 · 1 yr 1 mo',
    location: 'Bengaluru, Karnataka, India',
    description: [
      'Built a microservice that generates excel files from business objects using spring boot, Java 11, and Apache POI libraries.',
      'Responsible for the entire MVC, its JUnit test cases, code coverage on sonar lit, bean validations, and exception handling.',
      'Agile methodology; Redhat Openshift for deployment.'
    ],
    skills: ['Coding Standards', 'Java', 'OpenShift', 'Spring Boot', 'DevOps', 'Agile Methodologies', 'Back-End Web Development', 'SQL', 'Kubernetes', 'MySQL', 'Microservices', 'Git', 'Spring Framework', 'JUnit'],
    type: 'work'
  },
  {
    id: 'quinbay',
    company: 'Quinbay',
    position: 'Java Developer Intern',
    period: 'Jan 2021 - Jun 2021 · 6 mos',
    location: 'Bengaluru, Karnataka, India',
    description: [
      'Training on development of applications on spring boot (core Java) & android app development using Android studio.',
      'Backend API & microservices development, accessing dB, bug fixes, and enhancements using spring boot',
      'Grafana dashboard for data visualization',
      'E-commerce application from scratch (dB design, android app, web-app, and backend APIs)'
    ],
    skills: ['Java', 'React.js', 'Spring Boot', 'DevOps', 'Agile Methodologies', 'Back-End Web Development', 'Grafana', 'SQL', 'Microservices', 'Spring Framework', 'JUnit'],
    type: 'work'
  }
];

export const getExperienceIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'work': return '💼';
    case 'teaching': return '🎓';
    case 'research': return '🔬';
    default: return '💼';
  }
};

export const getExperienceColor = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'work': return 'border-blue-500';
    case 'teaching': return 'border-green-500';
    case 'research': return 'border-purple-500';
    default: return 'border-gray-500';
  }
};