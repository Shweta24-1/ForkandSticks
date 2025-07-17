import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Navhero from './Components/navhero';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import Contacts from './Components/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Navhero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;