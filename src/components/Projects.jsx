import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1 and its key features.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "A brief description of project 2 and its key features.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "#"
  },
  {
    title: "Project 3",
    description: "A brief description of project 3 and its key features.",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-tertiary">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-primary p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-secondary mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-[#915eff] px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="text-[#915eff] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;