import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-primary p-6 rounded-lg shadow-xl"
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
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
  );
};

export default ProjectCard;