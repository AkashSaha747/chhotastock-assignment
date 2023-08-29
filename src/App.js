import logo from './logo.svg';
import './App.css';
import Topnav from './components/Topnav';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Firstbody from './components/Firstbody';
import Essential from './components/Essential';
import Investing from './components/Investing';
import Partners from './components/Partners';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Allroutes from './routing/Allroutes';

function App() {
  return (
<div className='app'>
<Allroutes/>
</div>
  );
}

export default App;
