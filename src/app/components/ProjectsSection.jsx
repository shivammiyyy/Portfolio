"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Voxtream",
    description: "Real-Time Communication Application",
    image: "/images/projects/vox.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/shivammiyyy/VOXTREAM",
    previewUrl: "https://voxtream.vercel.app/",
  },
  {
    id: 2,
    title: "LinkerNet",
    description: "Offline Communication application",
    image: "https://github.com/shivammiyyy/LinkerNet/blob/main/resources/web.png",
    tag: ["All","Other"],
    gitUrl: "github.com/shivammiyyy/LinkerNet",
  },
  {
    id: 2,
    title: "E-Commerce Multivendor",
    description: "Spring based E-Commerce Website",
    image: "/images/projects/upload.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/shivammiyyy/Ecommerce-Multivendor",
  },
  
  {
    id: 3,
    title: "Analyzer",
    description: "Analyzing Stock-marker Prices",
    image: "/images/projects/2.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/shivammiyyy/Market-Analytics-Dashboard",
    previewUrl: "https://shimmering-medovik-298ee6.netlify.app/dashboard/IT/MSFT",
  },
  {
    id: 4,
    title: "LoadVerify.AI",
    description: "Predicting Loan Eligible",
    image: "/images/projects/loan.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/shivammiyyy/LoanVerify.AI",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Electronic Shop",
    description: "Ecommerce Website",
    image: "/images/projects/ec.png",
    tag: ["All","Web"],
    gitUrl: "https://github.com/shivammiyyy/Ecommerce",
    previewUrl: "https://ecommerce-zeta-vert.vercel.app/"
  },
  {
    id:7,
    title: "MeetingPad",
    description: "Spring based Real-Time communication application",
    image: "",
    tag: ["All","Web","Other"],
    gitUrl: "https://github.com/shivammiyyy/MeetingPad"
  }
  {
    id: 6,
    title: "Invoice Reader",
    description: "Reading Invoice using LLM",
    image: "/images/projects/inv.png",
    tag: ["All","Other"],
    gitUrl: "https://github.com/shivammiyyy/Invoice-Reader-using-Generative-AI-Gemini-API-",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "DeepFake Detection",
    description: "Machine Learning Project",
    image: "/images/projects/dp.png",
    tag: ["All","Other"],
    gitUrl: "https://github.com/shivammiyyy/DeepFake-AI-Video-Detection",
    previewUrl: "/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "0ther"}
        />
        
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
