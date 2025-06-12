"use client";

import { ProjectCarousel } from "@/components/project-carousel";

export function ProjectsSection() {
  const allProjects = [
    {
      title: "ShareSphere Web App",
      description: [
        "Collaborated with a friend to build a full-stack platform for student resource sharing",
        "Built with React, Express.js, and PostgreSQL for scalable performance",
        "Features secure authentication and real-time collaboration",
        "Integrated Cloudinary for cloud storage and RESTful APIs",
        "Sustainable solution helping students save money while reducing waste",
      ],
      image: "/Images/ShareSphereHomePage.png",
      githubLink: "https://github.com/EDe-Graft/ShareSphere",
      webLink: "https://github.com/EDe-Graft/ShareSphere",
      technologies: [
        "React",
        "Express.js",
        "PostgreSQL",
        "Cloudinary",
        "Tailwind CSS",
      ],
    },
    {
      title: "Product Store Web App",
      description: [
        "Full-stack product management system with complete CRUD functionality",
        "Clean, responsive design using React and TailwindCSS",
        "State management simplified with Zustand for efficient API calls",
        "Backend powered by Node.js, Express, and MongoDB",
        "Demonstrates end-to-end web development skills",
      ],
      image: "/Images/ProductStoreHomeImg.png",
      githubLink: "https://github.com/Nkhanal2002/mern-product-store",
      webLink: "https://mern-product-store-1-t6dx.onrender.com/",
      technologies: ["React", "Node.js", "MongoDB", "Zustand", "Tailwind CSS"],
    },
    {
      title: "WeFitWell App",
      description: [
        "Fitness web application developed during MLH hackathon at Rutgers University",
        "Built in 48 hours with a team of 3 developers",
        "Auth0 integration for secure user authentication and authorization",
        "Personalized fitness tracking with task scheduling features",
        "Dynamic emoji system that updates based on task completion",
      ],
      image: "/Images/wefitwellSS.png?height=400&width=600",
      githubLink: "https://github.com/dibasdauliya/ru-hackathon",
      webLink: "https://ru-hackathon-six.vercel.app/",
      technologies: ["React", "Auth0", "Tailwind CSS"],
      devpostLink: "https://devpost.com/software/wefit-nc6k1r",
    },
    {
      title: "Password Manager Web App",
      description: [
        "Secure password management system built with Next.js 15 and TypeScript",
        "Clerk authentication for robust user security",
        "Modern UI with shadcn/ui components and light/dark mode support",
        "Real-time toast notifications for better user experience",
        "⚠️ Demo purposes only - not for storing real sensitive data",
      ],
      image: "/Images/PasswordManagerHomePage.png?height=400&width=600",
      githubLink: "https://github.com/Nkhanal2002/password-manager",
      webLink: "https://v0-password-manager-nextjs.vercel.app",
      technologies: ["Next.js", "TypeScript", "Clerk", "shadcn/ui"],
    },
    {
      title: "Task Management Web App",
      description: [
        "Full-stack task management system for Spring 2024 final project",
        "Complete user authentication with sign-up and login functionality",
        "Full CRUD operations for creating, editing, and deleting tasks",
        "Frontend built with HTML, Tailwind CSS, and JavaScript",
        "Backend using Node.js, Express, and NeDB for data persistence",
      ],
      image: "/Images/TaskManagementWebApp.png?height=400&width=600",
      githubLink:
        "https://github.com/Nkhanal2002/full-stack-web-final-project ",
      webLink: "https://github.com/Nkhanal2002/full-stack-web-final-project ",
      technologies: ["HTML", "JavaScript", "Node.js", "NeDB", "Tailwind CSS"],
    },
    {
      title: "Weather App",
      description: [
        "Real-time weather application using OpenWeather API",
        "Displays comprehensive weather data with emoji indicators",
        "Shows temperature highs/lows, humidity, and wind speed",
        "Clean, responsive design built with React and TailwindCSS",
        "Provides accurate weather updates for any specified city",
      ],
      image: "/Images/WeatherAppImg.png?height=400&width=600",
      githubLink: "https://github.com/Nkhanal2002/weather-web-app",
      webLink: "https://weather-web-app-mauve.vercel.app/",
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    },
    {
      title: "Personal Portfolio",
      description: [
        "Fully responsive and interactive portfolio website",
        "Modern design showcasing web development proficiency",
        "Built with Next.js, TypeScript, and Tailwind CSS",
        "Features dark/light mode toggle and smooth animations",
        "Demonstrates modern web development best practices",
      ],
      image: "/Images/PortfolioSS.png?height=400&width=600",
      githubLink: "https://github.com/Nkhanal2002/nkhanal-portfolio",
      webLink: "https://narayankhanal.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
    {
      title: "BMI Calculator App",
      description: [
        "Desktop BMI calculator built for Computer Programming II final project",
        "User-friendly interface developed with Python's Kivy library",
        "Calculates BMI based on user height and weight input",
        "JSON file storage for persistent data management",
        "Search functionality to generate BMI reports by name",
      ],
      image: "/Images/BMIAppSS.png?height=400&width=600",
      githubLink: "https://github.com/Nkhanal2002/BMICalculatorApp",
      webLink: "https://github.com/Nkhanal2002/BMICalculatorApp",
      technologies: ["Python", "Kivy", "JSON"],
    },
  ];

  return (
    <div
      className="eachSection techProjects bg-gray-50 dark:bg-gray-900 dark:text-white py-12 transition-colors"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15D3E0] via-[#398a99] to-[#136066] dark:text-[#15D3E0]">
              Projects
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of web applications, full-stack projects, and
            innovative solutions that showcase my technical skills and
            problem-solving abilities.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="mb-8">
          <ProjectCarousel
            projects={allProjects}
            autoPlay={true}
            autoPlayInterval={8000}
          />
        </div>
      </div>
    </div>
  );
}
