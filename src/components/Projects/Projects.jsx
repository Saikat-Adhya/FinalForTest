import ProjectCard from './ProjectCard';
import { projects } from '../../constants';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 sm:px-8 bg-tertiary">
      <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;