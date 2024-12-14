import '../css/Navbar.css';
import Logo from '../assets/logo.svg';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import fc from '../assets/facebook-svgrepo-com (1).svg';
import linkedIn from '../assets/linkedin-with-circle-svgrepo-com.svg';
import instagram from '../assets/instagram-logo-fill-svgrepo-com.svg';
import search from '../assets/search.svg';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="sm">
      <Container fluid>
        <Navbar.Brand href="/" className="Logo">
          <motion.div>
            <img src={Logo} alt="Logo" />
          </motion.div>
        </Navbar.Brand>

        <Nav id="Nav-link" className="me-auto d-flex justify-content-evenly">
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', duration: 0.3 },
            }}
          >
            <Nav.Link
              as={NavLink}
              to="/"
              className={({ isActive }) =>
                isActive ? 'active navbar-link' : 'navbar-link'
              }
            >
              Home
            </Nav.Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', duration: 0.3 },
            }}
          >
            <Nav.Link
              as={NavLink}
              to="/coffee"
              className={({ isActive }) =>
                isActive ? 'active navbar-link' : 'navbar-link'
              }
            >
              CoFFee
            </Nav.Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', duration: 0.3 },
            }}
          >
            <Nav.Link
              as={NavLink}
              to="/todos"
              className={({ isActive }) =>
                isActive ? 'active navbar-link' : 'navbar-link'
              }
            >
              ToDo
            </Nav.Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', duration: 0.3 },
            }}
          >
            <Nav.Link
              as={NavLink}
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'active navbar-link' : 'navbar-link'
              }
            >
              ProJects
            </Nav.Link>
          </motion.div>
        </Nav>

        {/* Social Media Links */}
        <span>
          <div className="socialMedia">
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { type: 'spring', duration: 0.3 },
              }}
            >
              <a href="https://www.facebook.com/hossam.aboud.75/">
                <img src={fc} alt="facebook logo" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { type: 'spring', duration: 0.3 },
              }}
            >
              <a href="https://www.instagram.com/aboud.hossam/">
                <img src={instagram} alt="instagram logo" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.2,
                transition: { type: 'spring', duration: 0.3 },
              }}
            >
              <a href="https://www.linkedin.com/in/hosam-aboud-904049174">
                <img src={linkedIn} alt="linkedin logo" />
              </a>
            </motion.div>
          </div>
        </span>

        {/* Search Bar */}
        <Form>
          <Form.Control
            type="text"
            className="bg-transparent"
            placeholder="Search..."
          />
          <img src={search} alt="search icon" />
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavBar;
