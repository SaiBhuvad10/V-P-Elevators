import Navbar from "./components/Navbar";
import FloatingContact from "./components/FloatingContact";
import Home from "./pages/Home";
import Carousel from "./components/Carousel";
import QuickStats from "./components/QuickStats";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css';


function App() {
  return (
    <div>
      {<Navbar />}
      {<Home />}
      {<Carousel />}
      {<QuickStats />}
      {<Contact />}
      {<Footer />}
      {<FloatingContact />}
    </div>
  );
}


export default App;
