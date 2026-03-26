import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Programs } from './pages/Programs';
import { Trainers } from './pages/Trainers';
import { Pricing } from './pages/Pricing';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { ROUTES } from './constants';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.SIGNUP;

  return (
    <>
      <ScrollProgress />
      {!isAuthPage && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.PROGRAMS} element={<Programs />} />
          <Route path={ROUTES.TRAINERS} element={<Trainers />} />
          <Route path={ROUTES.PRICING} element={<Pricing />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<Signup />} />
        </Routes>
      </AnimatePresence>
      {!isAuthPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
