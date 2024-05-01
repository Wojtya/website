import React from 'react';
import Project from '../components/Project';

function Projects() {
  const projects = [
    {
      title: 'About',
      description: 'Description ...',
      link: 'https://github.com/Wojtya/Arduino-projects',
    },
    {
      title: 'About',
      description: 'Description ...',
      link: 'https://github.com/Wojtya/MLG/blob/main/EDA.py',
    },
    /* Add more projects as needed */
  ];

  return (
    <div className="projects">  {/* Container with grid layout */}
      <h2>Projects</h2>  {/* Projects heading */}
      <div className="project-list">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
