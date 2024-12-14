import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from './pages/Todos';
import Home from './pages/home';
import Coffee from './pages/Coffee';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Projects from './pages/Projects';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/Coffee" element={<Coffee />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main">
          <Sidebar />
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
