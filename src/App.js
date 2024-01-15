import './App.css';
import About from './components/About/About';
import Aggregator from './components/Aggregator/Aggregator';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import PlatformSoftware from './components/Platform/PlatformSoftware';
import Roadmap from './components/Roadmap/Roadmap';


function App() {
  return (
    <div className="App bg-gray-100">
      <Navbar/>
      <PlatformSoftware/>
      <About/>
      <Aggregator/>
      <Features/>
      <Roadmap/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
