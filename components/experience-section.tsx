export function ExperienceSection() {
  const experiences = [
    {
      title: "GDG Marketing and Communications Lead",
      company: "Caldwell University",
      location: "Caldwell, NJ",
      period: "Aug 2024 – Present",
      responsibilities: [
        "Lead the design team, using Figma and Canva to produce 30+ designs, increasing event attendance by 30%",
        "Create 50+ promotional materials, boosting club's online engagement by 25%",
      ],
    },
    {
      title: "Peer Tutor",
      company: "Caldwell University",
      location: "Caldwell, NJ",
      period: "Jan 2024 – Present",
      responsibilities: [
        "Provide one-on-one tutoring sessions, empowering students to learn data structures, Python, and React",
        "Cultivate strong problem-solving and debugging skills through hands-on coding guidance, leading to 20% improvement in students' progress",
      ],
    },
    {
      title: "Caldwell Robotics IT Specialist",
      company: "Caldwell University",
      location: "Caldwell, NJ",
      period: "Jan 2024 – Present",
      responsibilities: [
        "Lead IT support for Caldwell Robotics, successfully managing system operations and security for 50+ devices",
        "Played a pivotal role during the inaugural Robot Soccer competition by resolving 20+ technical issues",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Caldwell University",
      location: "Caldwell, NJ",
      period: "Aug 2023 – Dec 2023",
      responsibilities: [
        "Facilitated 12+ interactive lab sessions, improving students' assessment performance by 25% through hands-on coding exercises and clear technical explanations",
        "Elevated students' scores by 20% by breaking down complex programming concepts into both verbal and code-based demonstrations",
      ],
    },
  ];

  return (
    <div
      className="eachSection experience-container py-8 min-h-[500px] flex flex-col items-center justify-center bg-white dark:bg-gray-900 dark:text-white transition-colors"
      id="experience"
    >
      <h1 className="text-2xl font-bold lg:text-3xl text-center mb-8">
        Work{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15D3E0] to-[#136066]">
          Experience
        </span>
      </h1>

      <div className="experience-timeline md:max-w-[50rem] lg:max-w-[60rem] mx-4">
        <div className="relative border-l-2 border-[#15D3E0] pl-8 ml-4 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-item relative pb-2 transition-all hover:-translate-y-1 duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.35rem] w-5 h-5 bg-[#15D3E0] rounded-full border-4 border-white dark:border-gray-900"></div>

              {/* Experience card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#15D3E0] via-[#398a99] to-[#136066]">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    {exp.period}
                  </span>
                </div>

                <div className="mb-3">
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.company}, {exp.location}
                  </p>
                </div>

                <ul className="list-disc ml-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
