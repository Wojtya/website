import React from 'react';

import './Project.css'; // Assuming you'll create a CSS file for styling

function Project({ title, description, link }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>View on GitHub</a>
    </div>
  );
}

export default Project;
