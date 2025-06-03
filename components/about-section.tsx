"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe } from "lucide-react";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("overview");

  const programmingLanguages = [
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "TypeScript", level: 85, icon: "🔷" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "HTML/CSS", level: 95, icon: "🌐" },
  ];

  const frameworks = [
    { name: "Next.js", level: 88, icon: "⚫" },
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Tailwind CSS", level: 92, icon: "🎨" },
    { name: "Node.js", level: 75, icon: "🟢" },
  ];

  const tools = [
    { name: "MongoDB", level: 70, icon: "🍃" },
    { name: "PostgreSQL", level: 75, icon: "🐘" },
    { name: "Git", level: 85, icon: "📚" },
    { name: "Figma", level: 80, icon: "🎯" },
  ];

  const SkillCard = ({
    skill,
  }: {
    skill: { name: string; level: number; icon: string };
  }) => (
    <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <span className="text-lg">{skill.icon}</span>
        <span className="font-medium text-gray-900 dark:text-white">
          {skill.name}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-[#15D3E0] dark:bg-[#15D3E0] h-2 rounded-full"
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
    </div>
  );

  const tabs = [
    { id: "overview", label: "About" },
    { id: "skills", label: "Skills" },
  ];

  return (
    <div
      className="eachSection about-container py-16 bg-gray-50 dark:bg-gray-900 transition-colors"
      id="about"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">
            About <span className="text-[#15D3E0] dark:text-[#15D3E0]">Me</span>
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === tab.id
                    ? "bg-[#15D3E0] text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "overview" && (
            <Card className="border-0 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-4 text-gray-700 dark:text-gray-300">
                    <p>
                      Hello 👋! I&apos;m{" "}
                      <strong className="text-[#15D3E0]">Narayan Khanal</strong>
                      , a Computer Science undergraduate at Caldwell University,
                      NJ, originally from Nepal 🇳🇵.
                    </p>
                    <p>
                      As an aspiring <strong>Software Engineer</strong>, I focus
                      on full-stack web development with JavaScript/TypeScript,
                      React, Next.js, and Node.js. I enjoy both frontend design
                      and backend architecture.
                    </p>
                    <p>
                      Beyond coding, I&apos;m active in leadership roles and
                      mentoring fellow students. I&apos;m passionate about
                      creating innovative solutions and making a positive impact
                      through technology.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {[
                        "Web Development",
                        "UI/UX Design",
                        "Problem Solving",
                        "Open Source",
                      ].map((interest) => (
                        <Badge
                          key={interest}
                          className="bg-[#15D3E0]/5 border-[#15D3E0]/20 text-[#15D3E0] dark:bg-gray-700 dark:border-gray-600"
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-[#15D3E0]/5 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xl font-bold text-[#15D3E0]">
                          3+
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Years Coding
                        </div>
                      </div>
                      <div className="bg-[#15D3E0]/5 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xl font-bold text-[#15D3E0]">
                          8+
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Projects
                        </div>
                      </div>
                      <div className="bg-[#15D3E0]/5 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xl font-bold text-[#15D3E0]">
                          4
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Leadership Roles
                        </div>
                      </div>
                      <div className="bg-[#15D3E0]/5 dark:bg-gray-700 p-3 rounded-lg">
                        <div className="text-xl font-bold text-[#15D3E0]">
                          50+
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Students Helped
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                      <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                        Education
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <div className="font-medium">Computer Science</div>
                          <div className="text-gray-600 dark:text-gray-400">
                            Caldwell University, NJ
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-[#15D3E0] hover:bg-[#13c4d1] text-white"
                    >
                      <a href="#contact">Get In Touch</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "skills" && (
            <div className="space-y-8">
              {/* Programming Languages */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-5 w-5 text-[#15D3E0]" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Programming Languages
                  </h2>
                </div>
                <div className="space-y-2">
                  {programmingLanguages.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Globe className="h-5 w-5 text-[#15D3E0]" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Frameworks & Libraries
                  </h2>
                </div>
                <div className="space-y-2">
                  {frameworks.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Database className="h-5 w-5 text-[#15D3E0]" />
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Tools & Databases
                  </h2>
                </div>
                <div className="space-y-2">
                  {tools.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
