export function HeroSection() {
  return (
    <div
      className="eachSection bg-gray-100 dark:bg-gray-900 text-foreground flex justify-center items-center min-h-screen transition-colors"
      id="home"
    >
      <div className="home-container flex flex-col-reverse my-5 sm:my-0 sm:flex-row sm:justify-evenly sm:items-center py-4 px-2 sm:pb-[4rem]">
        <section className="section1 bg-slate-100 dark:bg-gray-800 text-center sm:bg-card/80 dark:sm:bg-card/50 px-1 sm:text-left sm:w-[55%] sm:rounded-md sm:shadow-md sm:mt-[2rem] sm:px-3 py-4 backdrop-blur-sm transition-colors">
          <div className="header">
            <h1 className="text-xl text-[#15D3E0] md:text-2xl font-bold lg:text-3xl text-custom-teal">
              Narayan Khanal
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl">
              A Student at{" "}
              <a
                href="https://www.caldwell.edu/"
                target="_blank"
                className="hover:underline"
                rel="noreferrer"
              >
                Caldwell University
              </a>{" "}
              | An Aspiring SWE
            </h2>
            <p className="mt-2 text-[1.1rem]">
              A computer science enthusiast wanting to contribute to the tech
              industry with his tech skills/expertise.
            </p>
            <br />

            <div className="media-info space-y-5 text-sm sm:text-base">
              <div className="resume-btn">
                <button className="p-[0.2rem] rounded-sm sm:font-medium text-black bg-[#15D3E0] shadow-sm px-2 font-medium hover:cursor-pointer bg-custom-teal hover:scale-105 transition-transform">
                  <a
                    href="/RESUME_NARAYANKHANAL.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-download mr-[0.3rem]"></i>Resume
                  </a>
                </button>
              </div>

              <div className="social-media">
                <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-1">
                  <div className="flex justify-center items-center gap-2 sm:border-b-2 sm:border-b-[#15D3E0] sm:w-fit sm:mb-2">
                    <span>Connect Me</span>
                    <div>
                      <i className="fa-solid fa-arrow-down animate-bounce"></i>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-3 sm:justify-normal">
                  <div className="icons">
                    <a
                      title="Link to linkedin account"
                      className="social-links"
                      href="https://www.linkedin.com/in/narayan-khanal-15a5b81aa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin text-2xl hover:cursor-pointer hover:rotate-[20deg] hover:text-blue-400 transition duration-150 ease-in"></i>
                    </a>
                  </div>

                  <div className="icons">
                    <a
                      title="Link to github account"
                      className="social-links"
                      href="https://github.com/Nkhanal2002"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github text-2xl hover:cursor-pointer hover:rotate-[20deg] hover:text-blue-400 transition duration-150 ease-in"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="email">
                <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:gap-1">
                  <div className="flex justify-center items-center gap-2 sm:border-b-2 sm:border-b-[#15D3E0] sm:w-fit sm:mb-2">
                    <span>Email Me</span>
                    <div>
                      <i className="fa-solid fa-arrow-down animate-bounce"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <a
                    href="mailto:narayankhanal435@gmail.com"
                    target="_blank"
                    className="hover:cursor-pointer text-base hover:text-custom-teal transition-all duration-150 ease-in"
                    rel="noreferrer"
                  >
                    narayankhanal435@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section2 my-[1rem] h-[14rem]">
          <img
            src="/Images/Avatar.png?height=224&width=224"
            alt="Narayan Khanal's Avatar"
            className="mt-8 myimage mx-auto w-[9rem] sm:-mt-10 sm:w-[14rem] ease-in duration-300"
            title="Narayan Khanal's Avatar"
          />
        </section>
      </div>
    </div>
  );
}
