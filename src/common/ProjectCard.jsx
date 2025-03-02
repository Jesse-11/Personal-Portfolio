import React from 'react';

function ProjectCard({ src, link, h3, p }) {
  return (

    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="project-image">
          <img src={src} alt={`${h3} logo`} />
        </div>
        <div className="project-info">
          <h3>{h3}</h3>
          <p className="project-description">{p}</p>
          {technologies && technologies.length > 0 && (
            <div className="project-technologies">
              {technologies.map((tech, index) => (
                <span key={index} className="technology-tag">{tech}</span>
              ))}
            </div>
          )}
        </div>
      </a>
    </div>

    /*
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>

    */
  );
}

export default ProjectCard;