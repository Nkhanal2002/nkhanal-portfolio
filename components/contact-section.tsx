import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  GraduationCap,
  Mail,
  Send,
  Linkedin,
  Github,
} from "lucide-react";

export function ContactSection() {
  return (
    <div
      className="eachSection contact-container py-8 sm:py-12 bg-gray-50 dark:bg-gray-900 transition-colors"
      id="contact"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15D3E0] via-[#398a99] to-[#136066] dark:text-[#15D3E0]">
              Touch
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-2">
            Have a project in mind? Let&apos;s start building together! I&apos;m
            always excited to work on new challenges and collaborate on
            innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl dark:shadow-2xl border-0 bg-white dark:bg-gray-800 backdrop-blur-sm">
            <CardHeader className="pb-4 sm:pb-6 px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Send className="h-5 w-5 sm:h-6 sm:w-6 text-[#15D3E0]" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                name="contact-info"
                className="space-y-4 sm:space-y-6"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="ca7a9322-91ed-424c-99de-b06172831b39"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Portfolio"
                />
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="yourFullName"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="userFullName"
                      id="yourFullName"
                      placeholder="Your Full Name"
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-[#15D3E0] focus:ring-[#15D3E0] bg-white dark:bg-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 h-11 sm:h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="userEmail"
                      id="email"
                      autoComplete="off"
                      placeholder="your.email@example.com"
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-[#15D3E0] focus:ring-[#15D3E0] bg-white dark:bg-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 h-11 sm:h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="userTitle"
                      id="title"
                      placeholder="Project Discussion, Collaboration, etc."
                      required
                      className="border-gray-300 dark:border-gray-600 focus:border-[#15D3E0] focus:ring-[#15D3E0] bg-white dark:bg-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 h-11 sm:h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="concern"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      name="userConcern"
                      id="concern"
                      placeholder="Tell me about your project or how we can work together..."
                      required
                      rows={4}
                      className="border-gray-300 dark:border-gray-600 focus:border-[#15D3E0] focus:ring-[#15D3E0] bg-white dark:bg-gray-700 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 resize-none min-h-[100px] sm:min-h-[120px]"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#15D3E0] hover:bg-[#13c4d1] text-white dark:text-black font-medium py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] h-12 sm:h-14"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="shadow-xl dark:shadow-2xl border-0 bg-white dark:bg-gray-800 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#15D3E0]/10 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#15D3E0]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Location
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Caldwell, NJ, 07006
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#15D3E0]/10 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-[#15D3E0]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      University
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      <a
                        href="https://www.caldwell.edu/"
                        target="_blank"
                        className="hover:text-[#15D3E0] transition-colors"
                        rel="noreferrer"
                      >
                        Caldwell University, Caldwell, NJ
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#15D3E0]/10 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#15D3E0]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm break-all sm:break-normal">
                      <a
                        href="mailto:narayankhanal435@gmail.com"
                        target="_blank"
                        className="hover:text-[#15D3E0] transition-colors"
                        rel="noreferrer"
                      >
                        narayankhanal435@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card className="shadow-xl dark:shadow-2xl border-0 bg-white dark:bg-gray-800 backdrop-blur-sm">
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 py-1 border-[#15D3E0]/30 hover:border-[#15D3E0] hover:bg-[#15D3E0]/10 transition-all duration-200 dark:bg-slate-800 dark:border-gray-700 dark:hover:bg-gray-700 h-12 sm:h-auto"
                  >
                    <a
                      href="https://www.linkedin.com/in/narayan-khanal-15a5b81aa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <span className="text-sm sm:text-base">LinkedIn</span>
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 py-1 border-[#15D3E0]/30 hover:border-[#15D3E0] hover:bg-[#15D3E0]/10 transition-all duration-200 dark:bg-slate-800 dark:border-gray-700 dark:hover:bg-gray-700 h-12 sm:h-auto"
                  >
                    <a
                      href="https://github.com/Nkhanal2002"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2"
                    >
                      <Github className="h-4 w-4 sm:h-5 sm:w-5 text-gray-800 dark:text-gray-200" />
                      <span className="text-sm sm:text-base">GitHub</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info Card */}
            <Card className="shadow-xl dark:shadow-2xl border-0 bg-white dark:bg-gray-800">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white mb-2">
                    Let&apos;s Build Something Amazing Together!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                    I&apos;m always open to discussing new opportunities,
                    collaborations, and innovative projects. Whether you have a
                    specific project in mind or just want to connect, I&apos;d
                    love to hear from you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
