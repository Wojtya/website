import React from 'react';
import Project from '../components/Project';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <Project
          title="Project 1"
          description="Description of Project 1."
          link="https://github.com/yourusername/project1"
        />
        <Project
          title="Project 2"
          description="Description of Project 2."
          link="https://github.com/yourusername/project2"
        />
        {/* Add more projects as needed */}
      </div>
    </div>
  );
}

export default Projects;
