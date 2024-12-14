import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projectsData';
import MotionWrapper from '../components/MotionWrapper';

const ProjectsList = () => {
  return (
    <MotionWrapper>
      <div className="projects-list">
        <h1>My Projects</h1>
        <ul>
          {projectsData.map((project) => (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </MotionWrapper>
  );
};

export default ProjectsList;
