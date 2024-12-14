import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projectsData';
import MotionWrapper from '../components/MotionWrapper';

const Projects = () => {
  const { id } = useParams();
  const project = projectsData.find((proj) => proj.id === id);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <MotionWrapper>
      <div className="view_project">
        <div className="slider_section">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`Project ${project.title}`} />
          ))}
        </div>
        <div className="info">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <h4>Created by: {project.author}</h4>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Projects;
