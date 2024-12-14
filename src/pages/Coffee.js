import React from 'react';
import Slider from 'react-slick';
import { Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import github from '../assets/github.svg';
import '../css/projects.css';
import MotionWrapper from '../components/MotionWrapper';
import coffee_video from '../assets/coffee.mp4';
import coffee_video2 from '../assets/coffee_mobile.mp4';
import coffee from '../assets/coffee1.png';
import coffee2 from '../assets/coffee2.png';
import coffee3 from '../assets/coffee3.png';
import coffee4 from '../assets/coffee4.png';
import coffee5 from '../assets/coffee5.png';

const Coffee = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  const projects = [
    {
      id: 1,
      title: 'coffee',
      imageUrl: coffee,
    },
    {
      id: 2,
      title: 'Project 2',
      imageUrl: coffee2,
    },
    {
      id: 3,
      title: 'coffee',
      imageUrl: coffee3,
    },
    {
      id: 4,
      title: 'coffee',
      imageUrl: coffee4,
    },
    {
      id: 5,
      title: 'coffee',
      imageUrl: coffee5,
    },
  ];
  return (
    <MotionWrapper>
      <div className="projects">
        <div className="slider_section">
          <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.id}>
                <img src={project.imageUrl} alt={project.title} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="video_container">
          <video src={coffee_video} controls autoPlay muted loop>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video_mobile">
          <video src={coffee_video2} controls autoPlay muted loop>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="info">
          <h1>about</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ullam
            ea, tempore labore sapiente nesciunt facere vero eligendi repellat
            molestias aut esse eius quisquam excepturi harum beatae in molestiae
            ut!
          </p>
        </div>
      </div>
      <footer>
        <Container>
          <div className="footer text-center">
            <p>Go to codes</p>
            <a
              href="https://github.com/hosamaboud/coffee"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <img
                src={github}
                alt="GitHub icon"
                className="footer_img"
                style={{ width: '30px', height: '30px', margin: '10px' }}
              />
            </a>
            <p>&copy; 2024 Aboud</p>
          </div>
        </Container>
      </footer>
    </MotionWrapper>
  );
};

export default Coffee;
