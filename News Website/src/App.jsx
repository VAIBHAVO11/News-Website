import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorynav from './categorynav';
import Footer from './footer';
import Navbar from './navbar';
import Page from './page';
import All from './components/allnews';
import Automobile from './components/automobilenews';
import Business from './components/businessnews';
import Entertainment from './components/entertainmentnews';
import National from './components/nationalnews';
import Politics from './components/politicsnews';
import Science from './components/sciencenews';
import Sports from './components/sportsnews';
import Startup from './components/startupnews';
import Technology from './components/technologynews';
import World from './components/worldnews';
import './style.css';

function App() {
  return (
    <>

      <Navbar />
      <Page />

      <BrowserRouter>

        <Categorynav />

        <Routes>

          <Route path='/' element={<All />} />
          <Route path='/Automobile' element={<Automobile />} />
          <Route path='/Business' element={<Business />} />
          <Route path='/Entertainment' element={<Entertainment />} />
          <Route path='/National' element={<National />} />
          <Route path='/Politics' element={<Politics />} />
          <Route path='/Science' element={<Science />} />
          <Route path='/Sports' element={<Sports />} />
          <Route path='/Startup' element={<Startup />} />
          <Route path='/Technology' element={<Technology />} />
          <Route path='/World' element={<World />} />

        </Routes>

        <Footer />

      </BrowserRouter>

      

    </>
  );
}

export default App;