import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Skills from './Skills';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Objective from './Objective';
import Portofolio from './portofolio';
import Firstcomp from './Firstcomp';
library.add(fab)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Firstcomp />
      <Objective />
      <Skills />
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
