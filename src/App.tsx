import  { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Tracker from './components/Tracker';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "KLIMB - Playful Learning for Children";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Tracker />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;