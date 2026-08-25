import { MotionProvider } from '@/lib/motion';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import WhyLHome from '@/components/WhyLHome';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import MotionToggle from '@/components/MotionToggle';

function App() {
  return (
    <MotionProvider>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <WhyLHome />
        <Services />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
      <FloatingActions />
      <MotionToggle />
    </MotionProvider>
  );
}

export default App;
