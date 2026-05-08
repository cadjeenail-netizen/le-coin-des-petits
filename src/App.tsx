import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
}
