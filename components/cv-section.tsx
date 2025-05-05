export default function CVSection() {
  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      <div className="border border-white border-thick p-8 bg-dark-accent mb-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 border border-white border-thick flex items-center justify-center">
            <span className="material-icons text-4xl">person</span>
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Kamogelos</h1>
            <p className="text-xl text-gray-400 mb-4">Full Stack Developer</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <span className="material-icons mr-2 text-sm">email</span>
                <span>kamogelos@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2 text-sm">phone</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2 text-sm">location_on</span>
                <span>New York, NY</span>
              </div>
            </div>
            <p className="text-gray-300">
              Passionate full-stack developer with expertise in modern web technologies. Focused on creating
              user-friendly, accessible, and performant applications with clean code and innovative solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {/* Experience */}
          <div className="border border-white border-thick p-6 bg-dark-accent">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="material-icons mr-3">work</span>
              Experience
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Senior Developer</h3>
                  <span className="text-gray-400 text-sm">2020 - Present</span>
                </div>
                <p className="text-gray-400 mb-2">Tech Innovations Inc.</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Led development of company's flagship product</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Full Stack Developer</h3>
                  <span className="text-gray-400 text-sm">2017 - 2020</span>
                </div>
                <p className="text-gray-400 mb-2">Digital Solutions LLC</p>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Developed and maintained multiple client websites and applications</li>
                  <li>Implemented responsive designs and improved site performance</li>
                  <li>Collaborated with design and product teams to deliver high-quality solutions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="border border-white border-thick p-6 bg-dark-accent">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="material-icons mr-3">school</span>
              Education
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Master of Computer Science</h3>
                  <span className="text-gray-400 text-sm">2015 - 2017</span>
                </div>
                <p className="text-gray-400">University of Technology</p>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium">Bachelor of Science in Software Engineering</h3>
                  <span className="text-gray-400 text-sm">2011 - 2015</span>
                </div>
                <p className="text-gray-400">State University</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Skills */}
          <div className="border border-white border-thick p-6 bg-dark-accent">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="material-icons mr-3">code</span>
              Skills
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-white px-3 py-1">JavaScript</span>
                  <span className="border border-white px-3 py-1">TypeScript</span>
                  <span className="border border-white px-3 py-1">Python</span>
                  <span className="border border-white px-3 py-1">PHP</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-white px-3 py-1">React</span>
                  <span className="border border-white px-3 py-1">Next.js</span>
                  <span className="border border-white px-3 py-1">Node.js</span>
                  <span className="border border-white px-3 py-1">Express</span>
                  <span className="border border-white px-3 py-1">Django</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-white px-3 py-1">Git</span>
                  <span className="border border-white px-3 py-1">Docker</span>
                  <span className="border border-white px-3 py-1">AWS</span>
                  <span className="border border-white px-3 py-1">CI/CD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="border border-white border-thick p-6 bg-dark-accent">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="material-icons mr-3">translate</span>
              Languages
            </h2>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>English</span>
                <span>Native</span>
              </div>
              <div className="flex justify-between">
                <span>Spanish</span>
                <span>Fluent</span>
              </div>
              <div className="flex justify-between">
                <span>French</span>
                <span>Intermediate</span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="border border-white border-thick p-6 bg-dark-accent">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="material-icons mr-3">interests</span>
              Interests
            </h2>

            <div className="flex flex-wrap gap-2">
              <span className="border border-white px-3 py-1">Open Source</span>
              <span className="border border-white px-3 py-1">AI & ML</span>
              <span className="border border-white px-3 py-1">Web3</span>
              <span className="border border-white px-3 py-1">UX Design</span>
              <span className="border border-white px-3 py-1">Photography</span>
              <span className="border border-white px-3 py-1">Hiking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
