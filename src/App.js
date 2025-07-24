import Navbar from "./components/Navbar";
import FloatingContact from "./components/FloatingContact";
import Home from "./components/Home";
import Carousel from "./components/Carousel";
import QuickStats from "./components/QuickStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LottieAnimation from './components/LottieAnimation';
import './App.css';


function App() {
  return (
    <div>
      {<Navbar />}
      {<Home />}
      {<Carousel />}
      {<QuickStats />}
      <LottieAnimation />
      {<Contact />}
      {<Footer />}
      {<FloatingContact />}
    </div>
  );
}


export default App;
