import '../css/sidebar.css';
import '../App.css';
import logo from '../assets/logo.svg';
import home from '../assets/home.svg';
import coffee from '../assets/coffee.svg';
import todo from '../assets/todo.svg';
import projectsIcon from '../assets/project-manager-svgrepo-com.svg';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);
  const [profileClick, setProfileClick] = useState(false);
  const handelProfileClick = () => setProfileClick(!profileClick);

  return (
    <div className="sidebar_container">
      <button
        className={`btn-toggle ${click ? 'clicked' : ''}`}
        onClick={() => handelClick()}
      >
        -
      </button>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`slickBar ${click ? 'clicked' : ''}`}>
          <NavLink
            onClick={() => setClick(false)}
            to="/"
            className={({ isActive }) =>
              `item ${isActive ? 'active' : ''} ${click ? 'clicked' : ''}`
            }
          >
            <img src={home} alt="home" />
            <span className={`text ${click ? 'clicked' : ''}`}>Home</span>
          </NavLink>
          <NavLink
            onClick={() => setClick(false)}
            className={({ isActive }) =>
              `item ${isActive ? 'active' : ''} ${click ? 'clicked' : ''}`
            }
            to="/todos"
          >
            <img src={todo} alt="ToDo" />
            <span className={`text ${click ? 'clicked' : ''}`}>ToDo</span>
          </NavLink>
          <NavLink
            onClick={() => setClick(false)}
            className={({ isActive }) =>
              `item ${isActive ? 'active' : ''} ${click ? 'clicked' : ''}`
            }
            to="/coffee"
          >
            <img src={coffee} alt="coffee" />
            <span className={`text ${click ? 'clicked' : ''}`}>Coffee</span>
          </NavLink>
          <NavLink
            onClick={() => setClick(false)}
            className={({ isActive }) =>
              `item ${isActive ? 'active' : ''} ${click ? 'clicked' : ''}`
            }
            to="/projects"
          >
            <img src={projectsIcon} alt="Projects" />
            <span className={`text ${click ? 'clicked' : ''}`}>Projects</span>
          </NavLink>
        </ul>
        <div className={`profile ${profileClick ? 'clicked' : ''}`}>
          <img
            className={`profile_img ${profileClick ? 'clicked' : ''}`}
            onClick={() => handelProfileClick()}
            src="https://picsum.photos/200"
            alt="profile"
          />
          <div className={`profile_details ${profileClick ? 'clicked' : ''}`}>
            <div className="name">
              <p>Hossam</p>
              <a href="/#">view profile</a>
            </div>
            {/* <button className="logout">
              <img src={powerOff} alt="Log out button" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
