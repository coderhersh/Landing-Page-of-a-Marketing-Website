import Navbar from './components/Navbar';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Advert from "./components/Advert";
import News from "./components/News";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="px-20">
      <Navbar/>
      <Header/>
      <Services/>
      <Testimonials/>
      <News/>
      <Advert/>
      <Footer/>
    </div>
  );
}

export default App;
