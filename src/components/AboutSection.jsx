import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend Developer (Web & Mobile)
            </h3>

            <p className="text-muted-foreground">
              I'm a Frontend Developer at IDFC FIRST Bank with 3+ years of
              experience in building responsive web and mobile apps using
              React.js, React Native, JavaScript, Redux, Jest, React Router,
              REST APIs, Tailwind CSS, Git, and styled-components. Here I’ve
              contributed to key banking journeys like Pay Abroad, FCNR FD, and
              Re-KYC, focusing on enhancing user experience and operational
              efficiency.
            </p>

            <p className="text-muted-foreground">
              In addition to frontend and mobile development, I have hands-on
              experience with Node.js, Express.js, MongoDB, Firebase, MySQL, and
              JWT—enabling me to work across the MERN stack and take on
              full-stack development projects. I also bring a strong foundation
              in Data Structures, Algorithms, Object-Oriented Programming, and
              System Design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">App Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive Mobile applications with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack developer
                  </h4>
                  <p className="text-muted-foreground">
                    Full stack developer using MERN stack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
