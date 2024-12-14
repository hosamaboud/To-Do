import MotionWrapper from '../components/MotionWrapper';
import coffee from '../assets/coffee.mp4';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <MotionWrapper>
      <div className="projectsList">
        <div className="card">
          <h1>Coffee</h1>
          <div className="project_video">
            <video src={coffee} controls loop muted></video>
          </div>

          <div className="info_card">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              consectetur maiores omnis natus possimus repellat, minima soluta
              dolor nemo neque suscipit doloribus, autem et ab maxime expedita
              quae! Neque, eaque.
            </p>

            <Link to="https://github.com/hosamaboud/coffee">Coffee</Link>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default Projects;
