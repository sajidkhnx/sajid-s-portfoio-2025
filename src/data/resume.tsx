import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sajid Khan",
  initials: "DV",
  url: "https://dillion.io",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "I'm passionate about building innovative solutions with MERN Stack, AI/ML, and data analytics. Currently exploring advanced AI-powered applications and full-stack development.",
  summary:
    "I'm a passionate Tech Explorer specializing in MERN Stack development, Python programming, and AI/ML applications. I love solving complex problems through Data analytics and building innovative solutions that make a real impact. When I'm not coding, you can find me exploring new technologies, working on data visualization projects, or diving deep into machine learning algorithms to uncover insights from data.",
  avatarUrl: "sajidprofilephoto.png",
  skills: [
    "Java",
    "React.js",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "Machine Learning",
    "Artificial Intelligence",
    "Kubernetes",
    "Docker",
    "GitHub",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sajidkhnx.dev07@gmail.com",
    tel: "+91-8318479757",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sajidkhnx",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://linkedin.com/in/sajid-khan-120b26278",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/khansajid_027",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/sajidkhanx/",
        icon: Icons.leetcode,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Marcheworld Life Style Pvt Ltd.",
      href: "https://",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/atomic.png",
      start: "Aug 2024",
      end: "Nov 2024",
      description:
        "Collaborated with cross-functional teams to Develope and maintain responsive e-commerce web Components using React.js and Node.js improving site speed and user experience, which contributed to a 15% increase in average session duration.Managed and integrated APIs using Node.js to ensure seamless data communication between the server and the clientDesigned and implemented custom web tools to enhance site functionality, leading to a 25% improvement in user engagement and streamlined internal workflows for the operations team.",
    },
    {
      company: "Social Summer of Code",
      badges: [],
      href: "https://www.linkedin.com/showcase/socialsummerofcode/about/",
      location: "Remote",
      title: "Contributer",
      logoUrl: "/ssc.jpg",
      start: "June 2024",
      end: "August 2024",
      description:
        "Implemented responsive designs and layouts to ensure compatibility across various devices and screen sizes. Integrated third-party APIs and services to extend the functionality of the web application, enhancing its capabilities. Collaborated with the design team to translate mockups and wireframes into functional HTML, CSS, and JavaScript code.",
    },
    {
      company: "IBM Intern",
      href: "https://nvidia.com/",
      badges: [],
      location: "Remote",
      title: "Cloud Computing and AI Automation",
      logoUrl: "/ibm.png",
      start: "July 2025",
      end: "August 2025",
      description:
        "Completed 4-week Internship, leveraging SkillsBuild & IBM Cloud Platform in Emerging Technologies (AI & Cloud)",
    },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Dr. APJ Abdul Kalam Technical University",
      href: "https://aktu.ac.in/",
      degree: "Bachelor of Technology (Computer Science and Engineering)",
      logoUrl: "/laurier.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "St. John's School BLW (ICSE)",
      href: "https://www.facebook.com/sjdrox/",
      degree: "Senior Secondary Education (10+2)",
      logoUrl: "/ib.png",
      start: "2008",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "LeetHub",
      href: "https://leet-hub-web-app.vercel.app/",
      dates: "Oct 2025 - Sep 2025",
      active: true,
      description:
        "Auto Sync: Each time you submit a solution on LeetCode, it’s instantly pushed to your chosen GitHub repository.",
      technologies: [
        "React.js",
        "Node.js",
        "GitHub Auth",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Live",
          href: "https://leet-hub-web-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sajidkhnx/LeetHub_Extension",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://leet-hub-web-app.vercel.app/LeetHub.mp4",
    },
    {
      title: "DSALysis",
      href: "https://ds-alysis.vercel.app/home",
      dates: "July 2025 - August 2025",
      active: true,
      description:
        "Visualize. Track. Master DSA. Upload your DSA sheet, clean and analyze it using Python, and track your coding journey with powerful visual dashboards.",
      technologies: [
        "React.js",
        "Node.js",
        "JavaScript",
        "MongoDB Atlas",
        "Python",
        "TailwindCSS",
        "GitHub",
        "Vercel",
        "Render",
      ],
      links: [
        {
          type: "Live",
          href: "https://ds-alysis.vercel.app/home",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sajidkhnx/DSAlysis",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/DSAlytics.mp4",
    },
    {
      title: "Gramin AI",
      href: "https://github.com/sajidkhnx/Gramin-Ai",
      dates: "Oct 2024 - September 2024",
      active: true,
      description:
        "Gramin AI is a web application dedicated to health empowerment for rural communities. It leverages the power of artificial intelligence to predict diseases based on symptoms, offers 24x7 consultations with doctors, and educates users about home remedies.Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Python",
        "Machine Learning",
        "AI Chatbot",
        "GitHub",
        "Vercel",
        "Render",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sajidkhnx/Gramin-Ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/GraminHome.png",
      video: "",
    },
    {
      title: "Airbnb Data Analysis",
      href: "https://github.com/sajidkhnx/Airbnb-Data-Analysis-",
      dates: "August 2025",
      active: true,
      description:
        "This project focuses on analyzing Airbnb dataset to uncover insights about pricing, availability, location trends, and customer preferences. By applying data analysis and visualization techniques, we aim to understand patterns in the Airbnb marketplace that can help hosts, travelers, and business stakeholders make informed decisions.",
      technologies: [
        "Pyhton",
        "SQL",
        "Data Cleaning",
        "Data Visualization",
        "Jupyter Notebook",
        "Kaggle",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/sajidkhnx/Airbnb-Data-Analysis-",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/airbnb.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Virtual Vista (IEEE Computer Society)",
      dates: "May 23rd, 2024",
      location: "Hydrabad, India",
      description:
        "",
      image:
        "https://cdn-icons-png.flaticon.com/512/3669/3669940.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Flipkart Grid 5.0",
      dates: "September, 2023",
      location: "India",
      description: "",
      image:
        "data:image/png;base64,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",
      links: [],
    },
    {
      title: "Ashoka SIH Internal Hackathon",
      dates: "June, 2024",
      location: "India",
      description:
        "",
      icon: "public",
      image:
        "https://cdn-icons-png.flaticon.com/512/3669/3669957.png",
      links: [],
    },
    
  ],
} as const;
