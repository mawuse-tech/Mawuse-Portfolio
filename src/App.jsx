import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Aboutme from './components/Aboutme';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><Projects /><Aboutme /><Expertise /><Contact /></main><Footer /></>;
}
