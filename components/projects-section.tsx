"use client"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "shopping_bag",
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
      image: "task_alt",
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      image: "auto_awesome",
      link: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Fitness Tracker",
      description:
        "A mobile-first fitness tracking application that monitors workouts, nutrition, and provides personalized recommendations.",
      technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
      image: "fitness_center",
      link: "#",
    },
    {
      id: 5,
      title: "Real Estate Marketplace",
      description:
        "A platform connecting property buyers, sellers, and agents with virtual tours and mortgage calculators.",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Google Maps API"],
      image: "apartment",
      link: "#",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description:
        "A weather forecasting application with interactive maps, historical data, and severe weather alerts.",
      technologies: ["React", "D3.js", "Weather API", "Leaflet"],
      image: "wb_sunny",
      link: "#",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4 animate-fade-in">
      <div className="border border-white border-thick p-8 bg-dark-accent mb-8">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-300">
          A collection of my recent work spanning web development, mobile applications, and AI solutions. Each project
          represents my commitment to clean code, intuitive design, and solving real-world problems.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="material-icons mr-3">star</span>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="border border-white border-thick bg-dark-accent p-6 hover:bg-darker transition-colors duration-300"
              >
                <div className="w-16 h-16 border border-white border-thick flex items-center justify-center mb-4">
                  <span className="material-icons text-3xl">{project.image}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="border border-white px-2 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center border border-white border-thick px-4 py-2 hover:bg-white hover:text-darker transition-colors duration-300"
                >
                  <span>View Project</span>
                  <span className="material-icons ml-2 text-sm">arrow_forward</span>
                </a>
              </div>
            ))}
        </div>
      </div>

      {/* All Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <span className="material-icons mr-3">work</span>
          All Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((project) => !project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="border border-white border-regular bg-dark-accent p-6 hover:bg-darker transition-colors duration-300 flex"
              >
                <div className="w-12 h-12 border border-white border-regular flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="material-icons">{project.image}</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="border border-white px-2 py-0.5 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-sm hover:underline">
                    <span>View Details</span>
                    <span className="material-icons ml-1 text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="border border-white border-thick p-8 bg-dark-accent mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Interested in working together?</h2>
        <p className="text-gray-300 mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <button
          onClick={() => (window.location.href = "#chat")}
          className="inline-flex items-center border border-white border-thick px-6 py-3 hover:bg-white hover:text-darker transition-colors duration-300"
        >
          <span>Let's Chat</span>
          <span className="material-icons ml-2">chat</span>
        </button>
      </div>
    </div>
  )
}
