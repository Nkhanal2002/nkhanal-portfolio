"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string[];
  image: string;
  link: string;
  technologies: string[];
  devpostLink?: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ProjectCarousel({
  projects,
  autoPlay = true,
  autoPlayInterval = 5000,
}: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setIsAutoPlaying(false);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      {/* Navigation Arrows - Positioned outside the card */}
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 shadow-lg border-2 border-[#15D3E0]/20 hover:border-[#15D3E0]/40 transition-all duration-200 dark:border-gray-700"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5 text-[#15D3E0]" />
        <span className="sr-only">Previous project</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 shadow-lg border-2 border-[#15D3E0]/20 hover:border-[#15D3E0]/40 transition-all duration-200 dark:border-gray-700"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5 text-[#15D3E0]" />
        <span className="sr-only">Next project</span>
      </Button>

      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-xl mx-8 sm:mx-12">
        <Card className="border-0 shadow-2xl dark:shadow-2xl">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Project Image */}
              <div className="lg:w-2/5 relative overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <img
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  className="w-full h-auto max-h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                />

                {/* Project number indicator with improved visibility */}
                <div className="absolute top-4 left-4 bg-[#15D3E0] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                  {currentIndex + 1} / {projects.length}
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between bg-white dark:bg-gray-800">
                <div>
                  {/* Header with improved contrast */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-[#15D3E0] mb-2">
                        {currentProject.title}
                      </h3>
                      {currentProject.devpostLink && (
                        <Badge
                          variant="secondary"
                          className="bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 font-medium"
                        >
                          <Award className="w-3 h-3 mr-1" />
                          Hackathon Project
                        </Badge>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-[#15D3E0]/30 hover:border-[#15D3E0] hover:bg-[#15D3E0]/10 ml-4 dark:border-gray-700 dark:hover:bg-gray-700 font-medium"
                    >
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  </div>

                  {/* Description with bullet points - improved readability */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {currentProject.description.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-[#15D3E0] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm lg:text-base leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies with improved visibility */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-[#15D3E0]/5 border-[#15D3E0]/20 text-[#15D3E0] hover:bg-[#15D3E0]/10 transition-colors dark:bg-gray-700 dark:border-gray-600 font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions with improved contrast */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="bg-[#15D3E0] hover:bg-[#13c4d1] text-white font-medium"
                    >
                      <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>

                    {currentProject.devpostLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-orange-300 text-orange-600 hover:bg-orange-50 dark:border-orange-700/50 dark:text-orange-400 dark:hover:bg-orange-900/20 font-medium"
                      >
                        <a
                          href={currentProject.devpostLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Award className="mr-1 h-4 w-4" />
                          Devpost
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Quick navigation with improved visibility */}
                  <div className="flex space-x-1">
                    {projects
                      .slice(Math.max(0, currentIndex - 1), currentIndex + 2)
                      .map((_, idx) => {
                        const actualIndex = Math.max(0, currentIndex - 1) + idx;
                        return (
                          <button
                            key={actualIndex}
                            onClick={() => goToSlide(actualIndex)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              actualIndex === currentIndex
                                ? "bg-[#15D3E0] scale-125"
                                : "bg-gray-300 dark:bg-gray-600"
                            }`}
                          />
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pagination Dots with improved visibility */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-3 bg-[#15D3E0] rounded-full shadow-lg shadow-[#15D3E0]/30 dark:shadow-[#15D3E0]/10"
                : "w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110"
            }`}
            aria-label={`Go to project ${index + 1}: ${projects[index].title}`}
          />
        ))}
      </div>

      {/* Project Counter and Auto-play indicator with improved visibility */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="font-medium">{currentProject.title}</span>
        </div>

        {isAutoPlaying && (
          <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-[#15D3E0] rounded-full animate-pulse" />
            <span>Auto-playing</span>
          </div>
        )}
      </div>
    </div>
  );
}
