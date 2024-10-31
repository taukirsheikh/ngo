import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import News from '@/pages/News';
import Donate from '@/pages/Donate';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="nrgf-theme">
        <Router>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;