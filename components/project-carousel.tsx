"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Project {
  title: string;
  description: string[];
  image: string;
  githubLink: string;
  webLink: string;
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
    setIsAutoPlaying(false);
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
      {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <Button
        variant="outline"
        size="icon"
        className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 shadow-lg border-2 border-[#15D3E0]/20 hover:border-[#15D3E0]/40 transition-all duration-200 dark:border-gray-700"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5 text-[#15D3E0]" />
        <span className="sr-only">Previous project</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="hidden sm:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 shadow-lg border-2 border-[#15D3E0]/20 hover:border-[#15D3E0]/40 transition-all duration-200 dark:border-gray-700"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5 text-[#15D3E0]" />
        <span className="sr-only">Next project</span>
      </Button>

      {/* Mobile Navigation Arrows - Inside the card */}
      <div className="sm:hidden absolute top-4 right-4 z-20 flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-[#15D3E0]/20 hover:border-[#15D3E0]/40"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4 text-[#15D3E0]" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-[#15D3E0]/20 hover:border-[#15D3E0]/40"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4 text-[#15D3E0]" />
        </Button>
      </div>

      {/* Main carousel container - Optimized margins for mobile */}
      <div className="relative overflow-hidden rounded-xl mx-2 sm:mx-8 lg:mx-12">
        <Card className="border-0 shadow-2xl dark:shadow-2xl">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px]">
              {/* Project Image */}
              <div className="lg:w-2/5 relative overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center min-h-[200px] sm:min-h-[250px]">
                <Image
                  src={currentProject.image || "/placeholder.svg"}
                  alt={currentProject.title}
                  width={600}
                  height={400}
                  className="w-full h-auto max-h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
                  priority={currentIndex === 0}
                />

                {/* Project number indicator */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#15D3E0] text-white dark:text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md">
                  {currentIndex + 1} / {projects.length}
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between bg-white dark:bg-gray-800">
                <div>
                  {/* Header - Mobile optimized */}
                  <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#15D3E0] via-[#398a99] to-[#136066] dark:text-[#15D3E0] mb-2 leading-tight">
                        {currentProject.title}
                      </h3>
                      {currentProject.devpostLink && (
                        <Badge
                          variant="secondary"
                          className="bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-200 font-medium text-xs"
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
                      className="border-[#15D3E0]/30 hover:border-[#15D3E0] hover:bg-[#15D3E0]/10 sm:ml-4 dark:border-gray-700 dark:hover:bg-gray-700 font-medium w-full sm:w-auto"
                    >
                      <a
                        href={currentProject.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1 h-4 w-4" />
                        View Project
                      </a>
                    </Button>
                  </div>

                  {/* Description - Mobile optimized */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {currentProject.description.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#15D3E0] rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm lg:text-base leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies - Mobile optimized */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {currentProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-[#15D3E0]/5 border-[#15D3E0]/20 text-[#15D3E0] hover:bg-[#15D3E0]/10 transition-colors dark:bg-gray-700 dark:border-gray-600 font-medium text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions - Mobile optimized */}
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3">
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="bg-[#15D3E0] hover:bg-[#13c4d1] cursor-pointer text-white dark:text-black font-medium w-full sm:w-auto"
                    >
                      <a
                        href={currentProject.githubLink}
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
                        className="border-orange-300 text-orange-600 hover:bg-orange-50 dark:border-orange-700/50 dark:text-orange-400 dark:hover:bg-orange-900/20 font-medium w-full sm:w-auto"
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

                  {/* Quick navigation - Hidden on mobile */}
                  <div className="hidden sm:flex space-x-1">
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

      {/* Pagination Dots - Mobile optimized */}
      <div className="flex justify-center mt-4 sm:mt-8 space-x-1.5 sm:space-x-2 px-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "w-6 sm:w-8 h-2 sm:h-3 bg-[#15D3E0] rounded-full shadow-lg shadow-[#15D3E0]/30 dark:shadow-[#15D3E0]/10"
                : "w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 dark:bg-gray-600 rounded-full hover:bg-gray-400 dark:hover:bg-gray-500 hover:scale-110"
            }`}
            aria-label={`Go to project ${index + 1}: ${projects[index].title}`}
          />
        ))}
      </div>

      {/* Project Counter and Auto-play indicator - Mobile optimized */}
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center mt-3 sm:mt-4 px-2">
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
          <span className="font-medium">{currentProject.title}</span>
        </div>

        {isAutoPlaying && (
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-[#15D3E0] rounded-full animate-pulse" />
            <span>Auto-playing</span>
          </div>
        )}
      </div>
    </div>
  );
}
