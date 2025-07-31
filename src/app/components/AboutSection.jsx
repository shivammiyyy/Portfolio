"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <section className="py-10 px-4">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">Tech Stack</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-white">
    
    {/* Frontend */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Frontend</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>React.js</li>
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Redux Toolkit</li>
        <li>Headless UI</li>
      </ul>
    </div>

    {/* Backend */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Backend</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>REST APIs</li>
        <li>Socket.IO</li>
        <li>WebRTC</li>
        <li>JWT Authentication</li>
      </ul>
    </div>

    {/* DevOps / Tools */}
    <div>
      <h3 className="text-xl font-semibold mb-2">DevOps & Tools</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Docker</li>
        <li>Jenkins</li>
        <li>AWS (EC2, S3)</li>
        <li>Git & GitHub</li>
        <li>Postman</li>
        <li>Vercel & Render</li>
      </ul>
    </div>

    {/* Databases */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Databases</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>PostgreSQL</li>
        <li>SQL</li>
      </ul>
    </div>

    {/* Programming Languages */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Languages</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>C++</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </ul>
    </div>

    {/* Other Skills */}
    <div>
      <h3 className="text-xl font-semibold mb-2">Frameworks</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>openCV</li>
        <li>pyTorch</li>
        <li>numpy</li>
        <li>Scikit-Learn</li>
      </ul>
    </div>

  </div>
</section>


    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Guru Ghasidas Vishwavidyalaya, Bilaspur</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>TCS CodeVita 2025 Rank 964</li>
        <li>Google Cloud SkillBoost</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/image.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
                I’m a passionate Full Stack Developer with a strong focus on building real-time, scalable, and interactive web applications. My expertise lies in JavaScript, React, Node.js, WebRTC, and Socket.IO — enabling peer-to-peer communication, video/audio calling, and live chat systems. I love designing end-to-end architectures, writing clean backend logic, and crafting responsive frontends with Tailwind CSS. Currently exploring system design, cloud infrastructure, and advanced DevOps to level up further.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificats{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;